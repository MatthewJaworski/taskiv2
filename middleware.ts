import { decodeJWT, getJWTFromCookie } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function disablePathsForAdmin(request: NextRequest) {
  const jwt = getJWTFromCookie();
  const { data } = await decodeJWT(jwt);
  const isAdmin = data.role === 'Admin';

  if (
    isAdmin &&
    (request.nextUrl.pathname.startsWith('/home') ||
      request.nextUrl.pathname.startsWith('/new-project') ||
      request.nextUrl.pathname.startsWith('/tasks'))
  ) {
    return NextResponse.redirect(
      new URL('/overview', process.env.NEXT_PUBLIC_WEBSITE_URL)
    );
  }
  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/sign-in') ||
    request.nextUrl.pathname.startsWith('/sign-up') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }
  const jwt = getJWTFromCookie();

  if (!jwt) {
    return NextResponse.redirect(
      new URL('/sign-in', process.env.NEXT_PUBLIC_WEBSITE_URL)
    );
  }

  const { data, token } = await decodeJWT(jwt);

  if (!data.id && !data.username) {
    return NextResponse.redirect(
      new URL('/sign-in', process.env.NEXT_PUBLIC_UR)
    );
  }

  const response = NextResponse.next();

  response.cookies.set('tokenTaski', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
  const adminResponse = await disablePathsForAdmin(request);

  if (adminResponse.status === 307) {
    return adminResponse;
  }

  return response;
}

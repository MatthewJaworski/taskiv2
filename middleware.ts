import { decodeJWT, getJWTFromCookie } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

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
      new URL('/sign-in', process.env.NEXT_PUBLIC_URL)
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
  return response;
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getJWTFromCookie, decodeJWT } from '@/lib/auth';

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

  const data = await decodeJWT(jwt);

  if (!data.id && !data.username) {
    return NextResponse.redirect(
      new URL('/sign-in', process.env.NEXT_PUBLIC_UR)
    );
  }
  return NextResponse.next();
}

// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   console.log("Request to:", req.nextUrl.pathname);
//   return NextResponse.next();
// }

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // In a real application, you would check for a session or JWT token
  // from a secure cookie. This is a mock check for demonstration.
  const isAuthenticated = request.cookies.get('auth_token');

  const adminPath = '/admin';
  const loginPath = '/auth/signin';

  // If the user is trying to access an admin page without being authenticated,
  // we redirect them to the sign-in page.
  if (request.nextUrl.pathname.startsWith(adminPath)) {
    if (!isAuthenticated) {
      const url = request.nextUrl.clone();
      url.pathname = loginPath;
      return NextResponse.redirect(url);
    }
  }

  // If the user is authenticated, or the route is not an admin route,
  // allow the request to proceed.
  return NextResponse.next();
}

// Specify which paths the middleware should run on.
export const config = {
  matcher: ['/admin/:path*'],
};

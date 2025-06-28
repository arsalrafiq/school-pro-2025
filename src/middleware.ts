import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Fix typo in URL
  if (request.nextUrl.pathname === '/dsahboard') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Handle other dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Add any authentication logic here if needed
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/dsahboard/:path*',
  ],
} 
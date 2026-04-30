import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['he', 'en']
const defaultLocale = 'he'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip api routes, static files
  if (pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }
  
  // Check if locale is already in path
  const hasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  
  if (!hasLocale) {
    // Default to Hebrew, no redirect needed since / is Hebrew
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

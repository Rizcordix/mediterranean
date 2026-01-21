import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // // Redirect "/" → "/home"
  // if (pathname === '/') {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  // Redirect "/landing-page" → "/landing-page/global-premium"
  if (pathname === '/landing-page') {
    return NextResponse.redirect(
      new URL('/landing-page/global-premium', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/landing-page'],
}

// export { default } from 'next-auth/middleware'

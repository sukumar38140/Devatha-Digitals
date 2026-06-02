import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "te", "hi", "ta", "kn", "ml", "mr", "gu", "bn", "pa", "ur"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale prefix (defaulting to English 'en')
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static files, favicon, and root assets)
    "/((?!api|_next/static|_next/image|images|Logo|Shop images|favicon.ico|next.svg|vercel.svg|globe.svg|file.svg|window.svg).*)",
  ],
};

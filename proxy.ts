import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * /Over-ons kan niet via next.config naar /over-ons: die redirect is
 * hoofdletterongevoelig en blijft naar zichzelf wijzen.
 * Deze proxy ziet het oorspronkelijke pad en stuurt alleen de oude schrijfwijze door.
 */
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const raw = new URL(request.url).pathname;
  if (pathname === "/Over-ons" || raw === "/Over-ons") {
    const url = request.nextUrl.clone();
    url.pathname = "/over-ons";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Over-ons", "/over-ons"],
};

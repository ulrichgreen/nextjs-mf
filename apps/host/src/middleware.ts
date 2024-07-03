import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const DOMAINS = "*.example.com *.another.example.com";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Define the security policy map.
  const cspHeader = {
    "default-src": ["'self'"],
    "script-src": ["'self'", "'unsafe-inline'", DOMAINS], // Defines valid sources for JavaScript.
    "style-src": [
      "'self'",
      "'unsafe-inline'", // remove when css-modules supports nonce
      DOMAINS,
    ], // Defines valid sources for stylesheets.
    "img-src": ["'self'", "blob:", "data:", DOMAINS],
    "font-src": ["'self'", "data:", DOMAINS], // Defines valid sources for loading fonts.
    "connect-src": [
      "'self'",
      `'nonce-${nonce}'`,
      "*.cookieinformation.com",
      DOMAINS,
    ],
  };
  /**
   * DEVELOPMENT USE ONLY
   * Add localhost to the script-src policy in development mode.
   * https://policy.app.cookieinformation.com/uc.js is injecting scripts that point to localhost on development.
   */
  const isLocalhost = request.headers.get("host")?.startsWith("localhost");

  if (isLocalhost) {
    cspHeader["script-src"]?.push("http://localhost:*");
    cspHeader["connect-src"]?.push("http://localhost:*");
    cspHeader["connect-src"]?.push("ws://127.0.0.1:*");
    cspHeader["style-src"]?.push("http://localhost:*");
    cspHeader["font-src"]?.push("http://localhost:*");
  }
  // Convert the security policy map to a string.
  const contentSecurityPolicyHeaderValue: string = Object.entries(cspHeader)
    .map(([key, value]) => `${key} ${value.join(" ")};`)
    .join(" ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

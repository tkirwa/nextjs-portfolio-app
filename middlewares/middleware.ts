// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Request to:", req.nextUrl.pathname);
  return NextResponse.next();
}

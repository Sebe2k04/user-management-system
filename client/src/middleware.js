import { NextResponse } from "next/server";
import { auth } from "./middlewares/auth";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/secure")) {
    const userResponse = await auth(req);
    if (userResponse) return adminResponse;
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/secure/:path*"],
};

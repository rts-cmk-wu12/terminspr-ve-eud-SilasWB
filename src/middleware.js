//Taget fra tidligere projekt


import { NextResponse } from "next/server"

export default async function middleware(request) {

     const cookie = request.cookies.get("auth_token", "Du er logget ind")

     if (!cookie) {
        return NextResponse.redirect(new URL("/logind", request.url));  
     }

}

export const config = {
    matcher: ["/kalender/:path*"]
}
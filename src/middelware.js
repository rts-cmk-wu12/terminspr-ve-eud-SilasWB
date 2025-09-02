//Taget fra tidligere projekt

"use server"

import { NextResponse } from "next/server"

export default async function middelware(request) {

     const cookie = request.cookies.get("hallojsovs", "Du er nu logget ind. Tillykke.")

     if (!cookie) {
        return NextResponse.redirect(new URL("/", request.url));
     }

}

export const config = {
    matcher: ["/aktiviteter*"]
}
import axios from 'axios';
import { myCache } from '../news/route';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    const newCache = request.headers.get("cache")
    const savedCache = myCache.get("acessToken")
    console.log(savedCache)
    if (newCache) {

        myCache.set("acessToken", newCache, 3600)
    } else {
        //myCache.set("acessToken", savedCache, 3600)

    }
    return new NextResponse(JSON.stringify(savedCache))
}

export async function POST(request: Request) {
    //@ts-ignore
    const bodyData: user = await request.json()
    const apiURL: string = process.env.GOOGLE_SHEETS_API_URL ?? ""
    try {
        const authorized = await (await axios.post(apiURL, bodyData)).data
        if (authorized) {
            const accessToken = newToken()
            myCache.set("acessToken", accessToken, 3600)
            return new Response(JSON.stringify(accessToken), {
                status: 200
            })
        } else {
            throw "Unauthorized"
        }

    } catch (e) {
        return new Response(JSON.stringify("Unauthorized"), {
            status: 401
        })
    }
}

function newToken(): string {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}
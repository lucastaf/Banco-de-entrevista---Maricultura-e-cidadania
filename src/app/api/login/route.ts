import { nodeCache } from '@/lib/cache';
import axios from 'axios';

type user = {
    user: string,
    password: string
}

export async function POST(request: Request) {
    const bodyData: user = await request.json()
    const apiURL: string = process.env.GOOGLE_SHEETS_API_URL ?? ""

    try {
        const authorized = await (await axios.post(apiURL, bodyData)).data
        if (authorized) {
            const accessToken = newToken()
            nodeCache.set("accessToken", accessToken, 3600)
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
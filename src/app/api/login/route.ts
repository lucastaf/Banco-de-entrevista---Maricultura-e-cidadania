import { setAcessToken } from '@/components/auth/authApi';
import axios from 'axios';

export async function POST(request: Request) {
    const bodyData = await request.json()
    const apiURL: string = process.env.GOOGLE_SHEETS_API_URL ?? ""
    try {
        const authorized = await (await axios.post(apiURL, bodyData)).data
        if (authorized) {
            const accessToken = newToken()
            await setAcessToken(accessToken)
            return new Response(JSON.stringify(accessToken), {
                status: 200
            })
        } else {
            throw "Unauthorized"
        }

    } catch {
        return new Response(JSON.stringify("Unauthorized"), {
            status: 401
        })
    }
}

function newToken(): string {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}
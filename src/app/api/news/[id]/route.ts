import { prisma } from "@/lib/prisma";
import { redisExecute } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const accessToken = request.headers.get("Authorization")
    const savedToken = await redisExecute(["get", "accessToken"])

    if (accessToken != savedToken) {
        return new NextResponse(JSON.stringify("Unauthorized"), {
            status: 401
        })
    }
    const id = params.id
    try {
        if (!id) {
            throw "id é obrigatório"
        }
        await prisma.entrevistas.delete({
            where: {
                id: parseInt(id)
            }
        })
        return new NextResponse(JSON.stringify("ok"))
    } catch (e) {
        return new NextResponse(JSON.stringify(e), {
            status: 400
        })
    }
}
import { prisma } from "@/lib/prisma";
import { redisExecute } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { unlink } from "fs/promises"
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
        const registro = await prisma.entrevistas.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        if (!registro) {
            throw "registro inexistente"
        }
        if (registro.imagem) {
            const path = join(process.cwd(), "public", registro.imagem)
            await unlink(path)

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
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { unlink } from "fs/promises"
import { getAcessToken } from "@/components/auth/authApi";
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const accessToken = request.headers.get("Authorization")
    const savedToken = await getAcessToken()

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
        await prisma.entrevistas.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (registro.imagem) {
            const path = join(process.cwd(), "public", registro.imagem)
            await unlink(path)
        }
        return new NextResponse(JSON.stringify("ok"))
    } catch (e) {
        return new NextResponse(JSON.stringify(e), {
            status: 400
        })
    }
}
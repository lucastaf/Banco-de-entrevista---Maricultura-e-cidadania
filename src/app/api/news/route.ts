import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from 'nanoid'
import { join } from "path";
import { writeFile } from "fs/promises";
import { redisExecute } from "@/lib/redis";

export async function GET() {
    const data = await prisma.entrevistas.findMany()
    return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
    const acessToken = request.headers.get("Authorization")
    const savedToken = await redisExecute(["get", "accessToken"])
    if (acessToken != savedToken) {
        return new NextResponse(JSON.stringify("Unauthorized"), {
            status: 401
        })
    }
    try {

        const data = await request.formData()
        const file: File | null = data.get("imagem") as unknown as File
        const fileName = nanoid() + "." + file.name.split('.')[1]

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = join(process.cwd(), "public", fileName)
        await prisma.entrevistas.create({
            data: {
                data: new Date(data.get("data") as unknown as string),
                descricao: data.get("descricao") as unknown as string,
                link: data.get("link") as unknown as string,
                titulo: data.get("titulo") as unknown as string,
                imagem: fileName
            }
        })
        
        await writeFile(path, buffer)
        return NextResponse.json({ success: true })
    } catch (e) {
        return new NextResponse(JSON.stringify(e), {
            status: 400
        })

    }
}
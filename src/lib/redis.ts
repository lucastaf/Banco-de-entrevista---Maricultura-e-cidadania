import { Client, Entity, Schema } from "redis-om"

export const client = new Client();

export async function redisExecute(command: (string | number | boolean)[]) {
    await client.open(process.env.REDIS_URL)

    const res = await client.execute(command)

    await client.close()

    return res
}

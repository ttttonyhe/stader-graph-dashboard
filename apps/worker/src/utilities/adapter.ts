import type { CloudflareEnv } from "../typings"
import { Context } from "hono"
import { env } from "hono/adapter"

export const d1Client = (c: Context) => {
	const { DB } = env<CloudflareEnv>(c)
	return DB
}

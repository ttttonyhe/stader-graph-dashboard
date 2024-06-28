import { D1Database } from "@cloudflare/workers-types"

export interface CloudflareEnv extends Record<string, unknown> {
	DB: D1Database
}

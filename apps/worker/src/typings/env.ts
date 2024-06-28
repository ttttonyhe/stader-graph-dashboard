import { D1Database } from "@cloudflare/workers-types"

export interface CloudflareEnv extends Record<string, unknown> {
	// D1
	DB: D1Database
	// Environment variables
	SUBGRAPH_API_ENDPOINT: string
}

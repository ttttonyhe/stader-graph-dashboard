import { getDataHandler, postManualSyncHandler } from "./controllers"
import { syncSubgraphData } from "./services/syncSubgraphData"
import { CloudflareEnv } from "./typings"
import { CORS_ALLOWLIST, GET, POST } from "@sgd/shared"
import { GraphQLClient } from "graphql-request"
import { Context, Hono } from "hono"
import { basicAuth } from "hono/basic-auth"
import { cache } from "hono/cache"
import { cors } from "hono/cors"
import { HTTPException } from "hono/http-exception"
import { prettyJSON } from "hono/pretty-json"
import { trimTrailingSlash } from "hono/trailing-slash"

const app = new Hono<{ Bindings: CloudflareEnv }>()

/* Middlewares */
app.use(
	"*",
	cors({
		origin: CORS_ALLOWLIST,
	})
)

app.use(trimTrailingSlash())
app.use(prettyJSON())

// Caching: GET requests are cached for 24 hours
app.get(
	"*",
	cache({
		cacheName: (c: Context<{ Bindings: CloudflareEnv }>) =>
			c.env.DATA_CACHE_NAME,
		cacheControl: "max-age=86400",
		keyGenerator: async (c: Context<{ Bindings: CloudflareEnv }>) => {
			if (c.env.DATA_CACHE_ENABLED) {
				return c.req.url
			}
			// Use a timestamp as the cache key if caching is disabled
			return `${c.req.url}/?cache=${new Date().getTime()}`
		},
	})
)

/* Route Handlers */
// Root
app.get(GET.root, (c) => {
	return c.json({
		message: "Stader Graph Dashboard data powered by The Graph.",
	})
})

// Health check
app.get(GET.ping, (c) => {
	return c.json({ ping: "pong" })
})

app.get(GET.data, getDataHandler)

// Manual database <=> Subgraph syncing: authenticated route
app.get(
	POST.manualSync,
	basicAuth({
		verifyUser: (
			username,
			password,
			c: Context<{ Bindings: CloudflareEnv }>
		) => {
			return (
				username === c.env.ADMIN_USERNAME && password === c.env.ADMIN_PASSWORD
			)
		},
	}),
	postManualSyncHandler
)

/* Error Handlers */
app.onError(async (err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse()
	}
	return c.json({ message: "error", error: "Unknown" })
})

export default {
	// Cron jobs to sync database with subgraph every 24 hours
	scheduled(_event: ScheduledEvent, env: CloudflareEnv, ctx: ExecutionContext) {
		const delayedProcessing = async () => {
			const graphql = new GraphQLClient(env.SUBGRAPH_API_ENDPOINT, {
				fetch,
			})
			const res = await syncSubgraphData(env.DB, graphql)
			console.log("Synced data with subgraph:", res)
		}
		ctx.waitUntil(delayedProcessing())
	},
	// Handle incoming requests
	fetch(request: Request, env: CloudflareEnv, ctx: ExecutionContext) {
		return app.fetch(request, env, ctx)
	},
}

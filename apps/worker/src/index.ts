import { getDataHandler, postManualSyncHandler } from "./controllers"
import { CloudflareEnv } from "./typings"
import { Hono } from "hono"

const app = new Hono<{ Bindings: CloudflareEnv }>()

app.get("/", (c) => {
	return c.text("Stader Graph Dashboard data powered by The Graph.")
})

app.get("/ping", (c) => {
	return c.text("pong")
})

app.get("/data", getDataHandler)

app.get("/manual-sync", postManualSyncHandler)

export default app

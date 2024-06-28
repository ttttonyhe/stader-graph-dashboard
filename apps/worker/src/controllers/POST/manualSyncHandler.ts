import { syncSubgraphData } from "../../services/syncSubgraphData"
import { d1Client, subgraphClient } from "../../utilities"
import { Context } from "hono"

export const postManualSyncHandler = async (c: Context) => {
	const d1 = d1Client(c)
	const graphql = subgraphClient(c)

	const syncResponse = await syncSubgraphData(d1, graphql)

	if (!syncResponse) {
		return c.json({ message: "Sync failed" })
	}

	return c.json({ message: "Sync completed", ...syncResponse })
}

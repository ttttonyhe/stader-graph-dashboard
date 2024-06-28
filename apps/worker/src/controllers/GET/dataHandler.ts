import { loadSubgraphData } from "../../services"
import { d1Client } from "../../utilities"
import { Context } from "hono"

export const getDataHandler = async (c: Context) => {
	const d1 = d1Client(c)
	const data = await loadSubgraphData(d1)
	return c.json(data)
}

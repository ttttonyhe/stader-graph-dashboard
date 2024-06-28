import { GraphQLClient } from "graphql-request"
import { Context } from "hono"

export const d1Client = (c: Context) => {
	return c.env.DB
}

export const subgraphClient = (c: Context) => {
	const { SUBGRAPH_API_ENDPOINT } = c.env
	const client = new GraphQLClient(SUBGRAPH_API_ENDPOINT, {
		fetch, // Only fetch is supported in edge environments
	})
	return client
}

import { GraphQLRequest, GraphQLResponse } from "../typings/graphql"
import { GraphQLClient } from "graphql-request"

const query = async <T extends GraphQLResponse>(
	client: GraphQLClient,
	request: GraphQLRequest
) => {
	return client.request<T>(request.gql, request.variables)
}

export const subgraph = {
	query,
}

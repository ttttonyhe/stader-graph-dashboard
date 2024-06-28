export interface GraphQLRequest {
	gql: string
	variables: Record<string, unknown>
}

export interface FetchDataPointsAfterTimestampGraphQLResponse {
	financialsDailySnapshots: {
		timestamp: string
		dailyProtocolSideRevenueUSD: string
		dailySupplySideRevenueUSD: string
		dailyTotalRevenueUSD: string
		totalValueLockedUSD: string
	}[]
	usageMetricsDailySnapshots: {
		timestamp: string
		dailyActiveUsers: string
		dailyTransactionCount: string
	}[]
}

export interface FetchLatestStatisticsGraphQLResponse {
	protocol: {
		lastUpdateTimestamp: string
		totalValueLockedUSD: string
		cumulativeProtocolSideRevenueUSD: string
		cumulativeSupplySideRevenueUSD: string
		cumulativeTotalRevenueUSD: string
		cumulativeTransactionCount: number
		cumulativeUniqueUsers: number
	}
}

export type GraphQLResponse =
	| FetchDataPointsAfterTimestampGraphQLResponse
	| FetchLatestStatisticsGraphQLResponse

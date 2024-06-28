import { GraphQLRequest } from "../../typings/graphql"
import {
	DATA_POINTS_RESPONSE_LIMIT,
	GENESIS_TIMESTAMP,
	STADER_PROTOCOL_ID,
} from "@sgd/shared"
import { gql } from "graphql-request"

interface FetchDataPointsAfterTimestampParams {
	timestamp: number
}

export const fetchDataPointsAfterTimestamp = (
	params: FetchDataPointsAfterTimestampParams
): GraphQLRequest => {
	const document = gql`
		query getDataPoints(
			$first: Int
			$orderBy: FinancialsDailySnapshot_orderBy
			$orderBy2: UsageMetricsDailySnapshot_orderBy
			$orderDirection: OrderDirection
			$where: FinancialsDailySnapshot_filter
			$where2: UsageMetricsDailySnapshot_filter
		) {
			financialsDailySnapshots(
				first: $first
				orderBy: $orderBy
				orderDirection: $orderDirection
				where: $where
			) {
				timestamp
				dailyProtocolSideRevenueUSD
				dailySupplySideRevenueUSD
				dailyTotalRevenueUSD
				totalValueLockedUSD
			}
			usageMetricsDailySnapshots(
				first: $first
				orderDirection: $orderDirection
				orderBy: $orderBy2
				where: $where2
			) {
				timestamp
				dailyActiveUsers
				dailyTransactionCount
			}
		}
	`
	const variables = {
		first: DATA_POINTS_RESPONSE_LIMIT,
		orderBy: "timestamp",
		orderDirection: "asc",
		where: {
			timestamp_gt: params.timestamp ?? GENESIS_TIMESTAMP,
			protocol_: {
				id: STADER_PROTOCOL_ID,
			},
		},
		where2: {
			timestamp_gt: params.timestamp ?? GENESIS_TIMESTAMP,
			protocol_: {
				id: STADER_PROTOCOL_ID,
			},
		},
	}

	return {
		gql: document,
		variables,
	}
}

export const fetchLatestStatistics = (): GraphQLRequest => {
	const document = gql`
		query getLatestStatistics($protocolId: ID!) {
			protocol(id: $protocolId) {
				lastUpdateTimestamp
				cumulativeProtocolSideRevenueUSD
				cumulativeSupplySideRevenueUSD
				cumulativeTotalRevenueUSD
				cumulativeTransactionCount
				cumulativeUniqueUsers
				totalValueLockedUSD
			}
		}
	`

	const variables = {
		protocolId: STADER_PROTOCOL_ID,
	}

	return {
		gql: document,
		variables,
	}
}

import {
	fetchDataPointsAfterTimestamp,
	fetchLatestStatistics,
} from "../models/graphql"
import {
	dataPoints,
	loadLatestDataPointTimestamp,
	statistics,
} from "../models/sqlite"
import { LoadLatestDataPointTimestampDBResult } from "../typings/database"
import {
	FetchDataPointsAfterTimestampGraphQLResponse,
	FetchLatestStatisticsGraphQLResponse,
} from "../typings/graphql"
import { database, subgraph } from "../utilities"
import { GraphQLClient } from "graphql-request"

export const syncSubgraphData = async (
	d1: D1Database,
	graphql: GraphQLClient
) => {
	/* Statistics */
	// Fetch the latest statistics from the subgraph
	const newSubgraphStatisticsResponse =
		await subgraph.query<FetchLatestStatisticsGraphQLResponse>(
			graphql,
			fetchLatestStatistics()
		)

	if (!newSubgraphStatisticsResponse.protocol) {
		throw new Error("No statistics found")
	}

	// Prepare mutations
	const lastUpdateTimestamp =
		newSubgraphStatisticsResponse.protocol.lastUpdateTimestamp

	const dbStatisticMutations: D1PreparedStatement[] = [
		statistics.updateTVL(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalValueLockedUSD:
				newSubgraphStatisticsResponse.protocol.totalValueLockedUSD,
		}),
		statistics.updateTotalRevenue(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalRevenueUSD:
				newSubgraphStatisticsResponse.protocol.cumulativeTotalRevenueUSD,
		}),
		statistics.updateTotalProtocolSideRevenue(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalProtocolSideRevenueUSD:
				newSubgraphStatisticsResponse.protocol.cumulativeProtocolSideRevenueUSD,
		}),
		statistics.updateTotalSupplySideRevenue(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalSupplySideRevenueUSD:
				newSubgraphStatisticsResponse.protocol.cumulativeSupplySideRevenueUSD,
		}),
		statistics.updateTotalUniqueUsers(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalUniqueUsers:
				newSubgraphStatisticsResponse.protocol.cumulativeUniqueUsers.toString(),
		}),
		statistics.updateTotalTransactions(d1, {
			lastUpdatedAt: lastUpdateTimestamp,
			totalTransactions:
				newSubgraphStatisticsResponse.protocol.cumulativeTransactionCount.toString(),
		}),
	]

	// Update statistics to the latest values from the subgraph
	await database.batchMutate(d1, dbStatisticMutations)

	/* DataPoints */
	// Fetch the latest data point stored in the database
	const latestDBDataPointResponse =
		await database.query<LoadLatestDataPointTimestampDBResult>(
			d1,
			loadLatestDataPointTimestamp
		)

	if (!latestDBDataPointResponse[0])
		throw new Error("No latest data point found")

	const latestDataPointTimestamp = latestDBDataPointResponse[0].CreatedAt

	// Fetch new data points from subgraph
	const newSubgraphDataPointResponse =
		await subgraph.query<FetchDataPointsAfterTimestampGraphQLResponse>(
			graphql,
			fetchDataPointsAfterTimestamp({
				timestamp: latestDataPointTimestamp,
			})
		)

	// Check if database is up-to-date
	if (
		!newSubgraphDataPointResponse.financialsDailySnapshots.length ||
		!newSubgraphDataPointResponse.usageMetricsDailySnapshots.length
	) {
		return {
			timestamp: lastUpdateTimestamp,
			newDataPointCount: 0,
		}
	}

	// Validate new data points
	if (
		newSubgraphDataPointResponse.financialsDailySnapshots.length !==
		newSubgraphDataPointResponse.usageMetricsDailySnapshots.length
	) {
		throw new Error("Mismatched data points")
	}

	const newSubgraphDataPointCount =
		newSubgraphDataPointResponse.financialsDailySnapshots.length

	// Prepare mutations
	const dataPointMutations = [] as D1PreparedStatement[]
	newSubgraphDataPointResponse.financialsDailySnapshots.forEach(
		async (financial, index) => {
			const usage =
				newSubgraphDataPointResponse.usageMetricsDailySnapshots[index]

			if (!usage) throw new Error("Mismatched data points")

			dataPointMutations.push(
				dataPoints.saveDataPoint(d1, {
					createdAt: financial.timestamp,
					dailyTotalValueLockedUSD: financial.totalValueLockedUSD,
					dailyRevenueUSD: financial.dailyTotalRevenueUSD,
					dailyProtocolSideRevenueUSD: financial.dailyProtocolSideRevenueUSD,
					dailySupplySideRevenueUSD: financial.dailySupplySideRevenueUSD,
					dailyActiveUsers: usage.dailyActiveUsers,
					dailyTransactions: usage.dailyTransactionCount,
				})
			)
		}
	)

	// Save new data points
	await database.batchMutate(d1, dataPointMutations)

	return {
		timestamp: lastUpdateTimestamp,
		newDataPointCount: newSubgraphDataPointCount,
	}
}

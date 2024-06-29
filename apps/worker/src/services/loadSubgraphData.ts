import { loadAllDataPoints, loadAllStatistics } from "../models/sqlite"
import {
	LoadAllDataPointsDBResult,
	LoadAllStatisticsDBResult,
	StatisticName,
} from "../typings/database"
import { database } from "../utilities"
import { SubgraphData } from "@sgd/shared"

export const loadSubgraphData = async (d1: D1Database) => {
	const res = {
		statistics: {},
		dataPoints: { collections: {} },
	} as SubgraphData
	const statsResponse = await database.query<LoadAllStatisticsDBResult>(
		d1,
		loadAllStatistics
	)

	statsResponse.forEach((row) => {
		switch (row.Name) {
			case StatisticName.TotalValueLockedUSD:
				res.statistics.TotalValueLockedUSD = row.Value
				break
			case StatisticName.TotalRevenueUSD:
				res.statistics.TotalRevenueUSD = row.Value
				break
			case StatisticName.TotalProtocolSideRevenueUSD:
				res.statistics.TotalProtocolSideRevenueUSD = row.Value
				break
			case StatisticName.TotalSupplySideRevenueUSD:
				res.statistics.TotalSupplySideRevenueUSD = row.Value
				break
			case StatisticName.TotalUniqueUsers:
				res.statistics.TotalUniqueUsers = row.Value
				break
			case StatisticName.TotalTransactions:
				res.statistics.TotalTransactions = row.Value
				break
			default:
				throw new Error(`Unknown metric name: ${row.Name}`)
		}
	})

	const dataPointsResponse = await database.query<LoadAllDataPointsDBResult>(
		d1,
		loadAllDataPoints
	)

	if (!dataPointsResponse[0]) {
		throw new Error("No data points found")
	}

	res.dataPoints.count = parseInt(dataPointsResponse[0].Count)

	res.dataPoints.collections.timestamps =
		dataPointsResponse[0].Timestamps.split(",").map(
			(ts) => new Date(parseInt(ts) * 1000)
		)
	res.dataPoints.collections.totalValueLockedUSDs =
		dataPointsResponse[0].TotalValueLockedUSDs.split(",").map((tv) =>
			parseFloat(tv)
		)
	res.dataPoints.collections.dailyRevenueUSDs =
		dataPointsResponse[0].DailyRevenueUSDs.split(",").map((dr) =>
			parseFloat(dr)
		)
	res.dataPoints.collections.dailyProtocolSideRevenueUSDs =
		dataPointsResponse[0].DailyProtocolSideRevenueUSDs.split(",").map((dpsr) =>
			parseFloat(dpsr)
		)
	res.dataPoints.collections.dailySupplySideRevenueUSDs =
		dataPointsResponse[0].DailySupplySideRevenueUSDs.split(",").map((dssr) =>
			parseFloat(dssr)
		)
	res.dataPoints.collections.dailyActiveUsers =
		dataPointsResponse[0].DailyActiveUsers.split(",").map((dau) =>
			parseInt(dau)
		)
	res.dataPoints.collections.dailyTransactions =
		dataPointsResponse[0].DailyTransactions.split(",").map((dtc) =>
			parseInt(dtc)
		)

	return res
}

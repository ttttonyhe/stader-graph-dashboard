import {
	TRPieChartData,
	TRPieChartDataFields,
	TRPieChartTypes,
} from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalRevenuePie = (
	statistics: SubgraphData["statistics"]
) => {
	const data = [] as TRPieChartData

	const tpr = statistics.TotalProtocolSideRevenueUSD
	const tsr = statistics.TotalSupplySideRevenueUSD

	data.push({
		[TRPieChartDataFields.TYPE]: TRPieChartTypes.PROTOCOL,
		[TRPieChartDataFields.REVENUE]: tpr,
	})
	data.push({
		[TRPieChartDataFields.TYPE]: TRPieChartTypes.SUPPLY_SIDE,
		[TRPieChartDataFields.REVENUE]: tsr,
	})

	return data
}

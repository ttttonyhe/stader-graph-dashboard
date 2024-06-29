import {
	TRSPBarGraphData,
	TRSPBarGraphDataFields,
	TRSPBarGraphDataTypes,
} from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalRevenueSPBar = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as TRSPBarGraphData

	const timestamps = dataPoints.collections.timestamps
	const tsrs = dataPoints.collections.dailySupplySideRevenueUSDs
	const tprs = dataPoints.collections.dailyProtocolSideRevenueUSDs

	timestamps.forEach((timestamp, idx) => {
		const tsr = tsrs[idx]
		const tpr = tprs[idx]

		// Filter out null and zero values
		if (!tsr || !tpr) return

		data.push({
			[TRSPBarGraphDataFields.DATE]: timestamp,
			[TRSPBarGraphDataFields.TYPE]: TRSPBarGraphDataTypes.TPR,
			[TRSPBarGraphDataFields.REVENUE]: tpr,
		})
		data.push({
			[TRSPBarGraphDataFields.DATE]: timestamp,
			[TRSPBarGraphDataFields.TYPE]: TRSPBarGraphDataTypes.TSR,
			[TRSPBarGraphDataFields.REVENUE]: tsr,
		})
	})

	return data
}

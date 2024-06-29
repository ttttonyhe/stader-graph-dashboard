import { TRBarGraphData, TRBarGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalRevenueBar = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as TRBarGraphData

	const timestamps = dataPoints.collections.timestamps
	const trs = dataPoints.collections.dailyRevenueUSDs

	trs.forEach((tr, idx) => {
		const date = timestamps[idx]

		if (date == null) return

		data.push({
			[TRBarGraphDataFields.DATE]: date,
			[TRBarGraphDataFields.REVENUE]: tr,
		})
	})

	return data
}

import { TPRBarGraphData, TPRBarGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalProtocolRevenueBar = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as TPRBarGraphData

	const timestamps = dataPoints.collections.timestamps
	const tprs = dataPoints.collections.dailyProtocolSideRevenueUSDs

	tprs.forEach((tpr, idx) => {
		const date = timestamps[idx]

		if (date == null) return

		data.push({
			[TPRBarGraphDataFields.DATE]: date,
			[TPRBarGraphDataFields.REVENUE]: tpr,
		})
	})

	return data
}

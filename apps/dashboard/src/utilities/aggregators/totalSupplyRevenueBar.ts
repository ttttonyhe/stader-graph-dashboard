import { TSRBarGraphData, TSRBarGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalSupplyRevenueBar = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as TSRBarGraphData

	const timestamps = dataPoints.collections.timestamps
	const tsrs = dataPoints.collections.dailySupplySideRevenueUSDs

	tsrs.forEach((tsr, idx) => {
		const date = timestamps[idx]

		if (date == null) return

		data.push({
			[TSRBarGraphDataFields.DATE]: date,
			[TSRBarGraphDataFields.REVENUE]: tsr,
		})
	})

	return data
}

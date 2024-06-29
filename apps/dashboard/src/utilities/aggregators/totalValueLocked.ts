import { TVLLineGraphData, TVLLineGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateTotalValueLocked = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as TVLLineGraphData

	const timestamps = dataPoints.collections.timestamps
	const tvls = dataPoints.collections.totalValueLockedUSDs

	tvls.forEach((tvl, idx) => {
		const date = timestamps[idx]
		if (date == null) return

		data.push({
			[TVLLineGraphDataFields.DATE]: date,
			[TVLLineGraphDataFields.TVL]: tvl,
		})
	})

	return data
}

import { DAULineGraphData, DAULineGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateDailyActiveUsers = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as DAULineGraphData

	const timestamps = dataPoints.collections.timestamps
	const aus = dataPoints.collections.dailyActiveUsers

	aus.forEach((au, idx) => {
		const date = timestamps[idx]

		if (date == null) return

		data.push({
			[DAULineGraphDataFields.DATE]: date,
			[DAULineGraphDataFields.ACTIVE_USERS]: au,
		})
	})

	return data
}

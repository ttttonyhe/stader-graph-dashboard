import { DTCBarGraphData, DTCBarGraphDataFields } from "../../typings"
import { SubgraphData } from "@sgd/shared"

export const aggregateDailyTransactions = (
	dataPoints: SubgraphData["dataPoints"]
) => {
	const data = [] as DTCBarGraphData

	const timestamps = dataPoints.collections.timestamps
	const tcs = dataPoints.collections.dailyTransactions

	tcs.forEach((tc, idx) => {
		const date = timestamps[idx]

		if (date == null) return

		data.push({
			[DTCBarGraphDataFields.DATE]: date,
			[DTCBarGraphDataFields.TRANSACTION_COUNT]: tc,
		})
	})

	return data
}

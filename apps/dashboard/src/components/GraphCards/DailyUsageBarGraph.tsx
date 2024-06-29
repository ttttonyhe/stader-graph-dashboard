import { BASE_GRAPH_CONFIG } from "../../constants"
import {
	DUBarGraphDataFields,
	DTCBarGraphDataFields,
	DAULineGraphDataFields,
	DUBarGraphDataRow,
} from "../../typings"
import {
	aggregateDailyActiveUsers,
	aggregateDailyTransactions,
} from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const DualAxes = dynamic(
	() => import("@ant-design/plots").then(({ DualAxes }) => DualAxes),
	{
		ssr: false,
	}
)

interface DailyUsageBarGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const DailyUsageBarGraph = ({ dataPoints }: DailyUsageBarGraphProps) => {
	const dtData = aggregateDailyTransactions(dataPoints)
	const dauData = aggregateDailyActiveUsers(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		xField: DUBarGraphDataFields.DATE,
		tooltip: {
			title: (d: DUBarGraphDataRow) =>
				new Date(d[DUBarGraphDataFields.DATE]).toLocaleString(),
		},
		legend: {
			color: {
				itemMarker: (v: string) => {
					if (v === DTCBarGraphDataFields.TRANSACTION_COUNT) return "rect"
					return "smooth"
				},
			},
		},
		scale: { color: { range: ["#4338ca", "#eab308"] } },
		axis: {
			y: { labelFormatter: "~s" },
			x: {
				labelFormatter: (text: string) => new Date(text).toLocaleDateString(),
			},
		},
		children: [
			{
				data: dtData,
				type: "interval",
				yField: DTCBarGraphDataFields.TRANSACTION_COUNT,
			},
			{
				data: dauData,
				type: "line",
				yField: DAULineGraphDataFields.ACTIVE_USERS,
				axis: { y: { position: "right" } },
				style: {
					lineWidth: 2,
				},
			},
		],
	}

	return (
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border p-8 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Daily Usage
			</h2>
			<div className="-ml-3 -mt-3">
				<DualAxes {...config} />
			</div>
		</div>
	)
}

export default DailyUsageBarGraph

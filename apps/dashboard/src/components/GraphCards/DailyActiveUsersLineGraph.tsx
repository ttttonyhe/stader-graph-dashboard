import { BASE_GRAPH_CONFIG } from "../../constants"
import { DAULineGraphDataRow, DAULineGraphDataFields } from "../../typings"
import { aggregateDailyActiveUsers } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Line = dynamic(
	() => import("@ant-design/plots").then(({ Line }) => Line),
	{
		ssr: false,
	}
)

interface DailyActiveUsersLineGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const DailyActiveUsersLineGraph = ({
	dataPoints,
}: DailyActiveUsersLineGraphProps) => {
	const data = aggregateDailyActiveUsers(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: DAULineGraphDataFields.DATE,
		yField: DAULineGraphDataFields.ACTIVE_USERS,
		legend: { size: false },
		tooltip: {
			title: (d: DAULineGraphDataRow) =>
				new Date(d[DAULineGraphDataFields.DATE]).toLocaleString(),
		},
		axis: {
			y: { labelFormatter: "~s" },
			x: {
				labelFormatter: (text: string) => new Date(text).toLocaleDateString(),
			},
		},
		interaction: {
			tooltip: {
				marker: false,
			},
		},
		style: {
			stroke: "#eab308",
			lineWidth: 2,
		},
		slider: {
			x: {
				formatter: (_text: string) => "",
				style: {
					selectionFill: "#f1f2f3",
				},
			},
		},
	}

	return (
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border bg-white p-8 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Daily Active Users
			</h2>
			<div className="-ml-3">
				<Line {...config} />
			</div>
		</div>
	)
}

export default DailyActiveUsersLineGraph

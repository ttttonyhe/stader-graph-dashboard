import { BASE_GRAPH_CONFIG } from "../../constants"
import { TPRBarGraphDataRow, TPRBarGraphDataFields } from "../../typings"
import { aggregateTotalProtocolRevenueBar } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Column = dynamic(
	() => import("@ant-design/plots").then(({ Column }) => Column),
	{
		ssr: false,
	}
)

interface TotalProtocolRevenueLineGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const TotalProtocolRevenueBarGraph = ({
	dataPoints,
}: TotalProtocolRevenueLineGraphProps) => {
	const data = aggregateTotalProtocolRevenueBar(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: TPRBarGraphDataFields.DATE,
		yField: TPRBarGraphDataFields.REVENUE,
		tooltip: {
			title: (d: TPRBarGraphDataRow) =>
				new Date(d[TPRBarGraphDataFields.DATE]).toLocaleString(),
		},
		axis: {
			y: { labelFormatter: "~s" },
			x: {
				labelFormatter: (text: string) => new Date(text).toLocaleDateString(),
			},
		},
		interaction: {
			elementHighlight: true,
		},
	}

	return (
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border p-8 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Daily Protocol Side Revenue
			</h2>
			<div className="-ml-3">
				<Column {...config} />
			</div>
		</div>
	)
}

export default TotalProtocolRevenueBarGraph

import { BASE_GRAPH_CONFIG } from "../../constants"
import { TRBarGraphDataRow, TRBarGraphDataFields } from "../../typings"
import { aggregateTotalRevenueBar } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Column = dynamic(
	() => import("@ant-design/plots").then(({ Column }) => Column),
	{
		ssr: false,
	}
)

interface TotalRevenueBarGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const TotalRevenueBarGraph = ({ dataPoints }: TotalRevenueBarGraphProps) => {
	const data = aggregateTotalRevenueBar(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: TRBarGraphDataFields.DATE,
		yField: TRBarGraphDataFields.REVENUE,
		tooltip: {
			title: (d: TRBarGraphDataRow) =>
				new Date(d[TRBarGraphDataFields.DATE]).toLocaleString(),
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
				Daily Revenue
			</h2>
			<div className="-ml-3">
				<Column {...config} />
			</div>
		</div>
	)
}

export default TotalRevenueBarGraph

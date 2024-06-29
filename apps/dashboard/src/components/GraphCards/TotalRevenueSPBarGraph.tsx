import { BASE_GRAPH_CONFIG } from "../../constants"
import { TRSPBarGraphDataRow, TRSPBarGraphDataFields } from "../../typings"
import { aggregateTotalRevenueSPBar } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Column = dynamic(
	() => import("@ant-design/plots").then(({ Column }) => Column),
	{
		ssr: false,
	}
)

interface TotalRevenueSPBarGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const TotalRevenueSPBarGraph = ({
	dataPoints,
}: TotalRevenueSPBarGraphProps) => {
	const data = aggregateTotalRevenueSPBar(dataPoints)

	console.log(data.length)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: TRSPBarGraphDataFields.DATE,
		yField: TRSPBarGraphDataFields.REVENUE,
		colorField: TRSPBarGraphDataFields.TYPE,
		tooltip: {
			title: (d: TRSPBarGraphDataRow) =>
				new Date(d[TRSPBarGraphDataFields.DATE]).toLocaleString(),
		},
		stack: true,
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
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border p-8 pb-2.5 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Daily Revenue Distribution
			</h2>
			<div className="mb-3 min-h-[300px] rounded-2xl bg-gray-100">
				<Column {...config} className="-ml-3 -mt-3 bg-white" />
			</div>
		</div>
	)
}

export default TotalRevenueSPBarGraph

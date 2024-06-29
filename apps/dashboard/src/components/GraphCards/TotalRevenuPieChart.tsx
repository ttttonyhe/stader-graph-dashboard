import { BASE_GRAPH_CONFIG } from "../../constants"
import { TRPieChartDataFields } from "../../typings"
import { aggregateTotalRevenuePie } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
	ssr: false,
})

interface TotalRevenuePieChartProps {
	statistics: SubgraphData["statistics"]
}

const TotalRevenuePieChart = ({ statistics }: TotalRevenuePieChartProps) => {
	const data = aggregateTotalRevenuePie(statistics)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		angleField: TRPieChartDataFields.REVENUE,
		colorField: TRPieChartDataFields.TYPE,
		label: {
			text: TRPieChartDataFields.TYPE,
			style: {
				fontWeight: "bold",
			},
		},
		tooltip: {
			title: TRPieChartDataFields.TYPE,
		},
		interaction: {
			elementHighlight: true,
		},
	}

	return (
		<div className="flex flex-col justify-center rounded-3xl border p-8 pb-2.5 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Total Revenue Distribution
			</h2>
			<div className="mb-3 mt-3 min-h-[300px] rounded-2xl bg-gray-100">
				<Pie {...config} className="-ml-3 -mt-3 bg-white" />
			</div>
		</div>
	)
}

export default TotalRevenuePieChart

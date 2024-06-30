import { BASE_GRAPH_CONFIG } from "../../constants"
import { DTCBarGraphDataRow, DTCBarGraphDataFields } from "../../typings"
import { aggregateDailyTransactions } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Column = dynamic(
	() => import("@ant-design/plots").then(({ Column }) => Column),
	{
		ssr: false,
	}
)

interface DailyTransactionsBarGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const DailyTransactionsBarGraph = ({
	dataPoints,
}: DailyTransactionsBarGraphProps) => {
	const data = aggregateDailyTransactions(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: DTCBarGraphDataFields.DATE,
		yField: DTCBarGraphDataFields.TRANSACTION_COUNT,
		tooltip: {
			title: (d: DTCBarGraphDataRow) =>
				new Date(d[DTCBarGraphDataFields.DATE]).toLocaleString(),
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
		style: {
			fill: "#4338ca",
		},
		slider: {
			x: {
				formatter: (text: string) => new Date(text).toLocaleDateString(),
				style: {
					selectionFill: "#f1f2f3",
				},
			},
		},
	}

	return (
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border bg-white p-8 shadow-sm">
			<h2 className="flex items-center gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Daily Transactions
			</h2>
			<div className="-ml-3">
				<Column {...config} />
			</div>
		</div>
	)
}

export default DailyTransactionsBarGraph

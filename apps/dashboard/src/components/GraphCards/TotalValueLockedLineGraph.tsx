import { BASE_GRAPH_CONFIG } from "../../constants"
import { TVLLineGraphDataRow, TVLLineGraphDataFields } from "../../typings"
import { aggregateTotalValueLocked } from "../../utilities"
import { SubgraphData } from "@sgd/shared"
import dynamic from "next/dynamic"

const Area = dynamic(
	() => import("@ant-design/plots").then(({ Area }) => Area),
	{
		ssr: false,
	}
)

interface TotalValueLockedLineGraphProps {
	dataPoints: SubgraphData["dataPoints"]
}

const TotalValueLockedLineGraph = ({
	dataPoints,
}: TotalValueLockedLineGraphProps) => {
	const data = aggregateTotalValueLocked(dataPoints)

	const config = {
		...BASE_GRAPH_CONFIG,
		data: data,
		xField: TVLLineGraphDataFields.DATE,
		yField: TVLLineGraphDataFields.TVL,
		tooltip: {
			title: (d: TVLLineGraphDataRow) =>
				new Date(d[TVLLineGraphDataFields.DATE]).toLocaleString(),
		},
		axis: {
			y: { labelFormatter: "~s" },
			x: {
				labelFormatter: (text: string) => new Date(text).toLocaleDateString(),
			},
		},
		line: {
			style: {
				stroke: "darkgreen",
				strokeWidth: 2,
			},
		},
		style: {
			fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
		},
		animate: { enter: { type: "scaleInY" } },
	}

	return (
		<div className="flex flex-col justify-center gap-y-3 rounded-3xl border p-8 pb-2.5 shadow-sm">
			<h2 className="flex items-center justify-between gap-x-2 pl-0.5 text-2xl font-medium text-gray-800">
				Total Value Locked
				<span className="text-base font-normal text-gray-500">over time</span>
			</h2>
			<div className="mb-3 min-h-[400px] rounded-2xl bg-gray-100">
				<Area {...config} className="-ml-3 bg-white" />
			</div>
		</div>
	)
}

export default TotalValueLockedLineGraph

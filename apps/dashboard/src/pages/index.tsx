import AboutCard from "../components/AboutCard"
import ErrorCard from "../components/ErrorCard"
import DailyActiveUsersLineGraph from "../components/GraphCards/DailyActiveUsersLineGraph"
import DailyTransactionsBarGraph from "../components/GraphCards/DailyTransactionsBarGraph"
import DailyUsageBarGraph from "../components/GraphCards/DailyUsageBarGraph"
import TotalProtocolRevenueBarGraph from "../components/GraphCards/TotalProtocolRevenueBarGraph"
import TotalRevenuePieChart from "../components/GraphCards/TotalRevenuPieChart"
import TotalRevenueLineGraph from "../components/GraphCards/TotalRevenueBarGraph"
import TotalRevenueSPBarGraph from "../components/GraphCards/TotalRevenueSPBarGraph"
import TotalSupplyRevenueBarGraph from "../components/GraphCards/TotalSupplyRevenueBarGraph"
import TotalValueLockedLineGraph from "../components/GraphCards/TotalValueLockedLineGraph"
import Loader from "../components/Loader"
import GraphCardSkeleton from "../components/Skeleton/GraphCard"
import StatisticsCardSkeleton from "../components/Skeleton/StatisticsCard"
import StatisticsCard from "../components/StatisticsCard"
import { useData } from "../hooks"

const Dashboard = () => {
	const { data, error, isLoading } = useData()

	if (isLoading)
		return (
			<>
				<div className="hidden flex-col lg:flex">
					<section className="mt-8">
						<StatisticsCardSkeleton />
					</section>
					<section className="mt-12">
						<GraphCardSkeleton />
					</section>
				</div>
				<div className="flex translate-y-8 items-center justify-center lg:hidden">
					<Loader />
				</div>
			</>
		)

	if (!data || error) {
		return (
			<section className="mt-8">
				<ErrorCard message={error?.message || ""} />
			</section>
		)
	}

	return (
		<>
			<section className="mt-8">
				<StatisticsCard statistics={data.statistics} />
			</section>
			<section className="mb-12 mt-12">
				<div className="mb-8">
					<TotalValueLockedLineGraph dataPoints={data.dataPoints} />
				</div>
				<div className="mb-8 flex flex-col gap-8 lg:flex-row">
					<div className="lg:flex-2">
						<TotalRevenuePieChart statistics={data.statistics} />
					</div>
					<div className="lg:flex-1">
						<TotalRevenueSPBarGraph dataPoints={data.dataPoints} />
					</div>
				</div>
				<div className="mb-16">
					<DailyUsageBarGraph dataPoints={data.dataPoints} />
				</div>
				<div className="mb-8 text-center">
					<h1 className="inline-block border-b border-gray-300 pb-2 text-4xl font-medium">
						Revenue
					</h1>
				</div>
				<div className="mb-16 flex flex-col gap-y-8">
					<TotalRevenueLineGraph dataPoints={data.dataPoints} />
					<TotalProtocolRevenueBarGraph dataPoints={data.dataPoints} />
					<TotalSupplyRevenueBarGraph dataPoints={data.dataPoints} />
				</div>
				<div className="mb-8 text-center">
					<h1 className="inline-block border-b border-gray-300 pb-2 text-4xl font-medium">
						Usage
					</h1>
				</div>
				<div className="mb-8 flex flex-col gap-y-8">
					<DailyActiveUsersLineGraph dataPoints={data.dataPoints} />
					<DailyTransactionsBarGraph dataPoints={data.dataPoints} />
				</div>
			</section>
			<section className="mb-16">
				<AboutCard />
			</section>
		</>
	)
}

export default Dashboard

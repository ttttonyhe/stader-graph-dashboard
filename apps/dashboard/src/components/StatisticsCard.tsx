import { ExchangeIcon, UserIcon } from "./Icons"
import { SubgraphData } from "@sgd/shared"

interface StatisticsCardProps {
	statistics: SubgraphData["statistics"]
}

const StatisticsCard = ({ statistics }: StatisticsCardProps) => {
	const tvl = statistics.TotalValueLockedUSD
	const tvlInteger = Math.floor(tvl)
	const tvlDecimal = (tvl - tvlInteger).toString().slice(1)

	const tr = statistics.TotalRevenueUSD
	const tuu = statistics.TotalUniqueUsers
	const ttc = statistics.TotalTransactions
	const tssr = statistics.TotalSupplySideRevenueUSD
	const tpsr = statistics.TotalProtocolSideRevenueUSD

	const number = new Intl.NumberFormat()

	return (
		<div className="statistics-card-background flex flex-col justify-between overflow-hidden rounded-3xl border bg-white pb-12 pl-8 pr-8 pt-10 tracking-wide shadow-sm lg:flex-row lg:pl-12 lg:pr-6">
			<div className="-mb-2 -mt-2 flex flex-col gap-y-8 border-gray-300 py-4 lg:border-r lg:pr-9">
				<div className="flex flex-col gap-y-2">
					<h1 className="flex items-center gap-x-2 pl-0.5 text-lg font-medium text-gray-500 lg:text-xl">
						Total Value Locked{" "}
						<label className="rounded-full bg-blue-500 px-2.5 py-0.5 text-sm text-white">
							USD
						</label>
					</h1>
					<div className="flex flex-col gap-y-1">
						<p className="text-4xl font-bold drop-shadow-sm lg:text-5xl">
							${number.format(tvlInteger)}
						</p>
						<p className="text-xl font-bold drop-shadow-sm lg:text-2xl">
							{tvlDecimal}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<h2 className="flex items-center gap-x-2 text-lg font-medium text-gray-500 lg:text-xl">
						Total Revenue
						<label className="rounded-full bg-blue-500 px-2.5 py-0.5 text-sm text-white">
							USD
						</label>
					</h2>
					<p className="text-3xl font-bold drop-shadow-sm lg:text-4xl">
						${number.format(tr)}
					</p>
				</div>
			</div>
			<div className="mt-8 grid items-center gap-x-6 gap-y-4 lg:mt-0 lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-0">
				<div className="flex flex-col gap-y-1">
					<h2 className="flex items-center gap-x-1 text-base font-medium text-gray-500 lg:text-lg">
						<span className="h-5 w-5">
							<UserIcon />
						</span>
						Total Unique Users
					</h2>
					<p className="text-2xl font-bold drop-shadow-sm lg:text-3xl">{tuu}</p>
				</div>
				<div className="flex flex-col gap-y-1">
					<h2 className="flex items-center gap-x-1 text-base font-medium text-gray-500 lg:text-lg">
						<span className="h-5 w-5">
							<ExchangeIcon />
						</span>
						Total Transactions
					</h2>
					<p className="text-2xl font-bold drop-shadow-sm lg:text-3xl">{ttc}</p>
				</div>
				<div className="flex flex-col gap-y-1">
					<h2 className="flex items-center gap-x-2 text-base font-medium text-gray-500 lg:text-lg">
						Total Supply Side Revenue
					</h2>
					<p className="text-2xl font-bold drop-shadow-sm lg:text-3xl">
						${number.format(tssr)}
					</p>
				</div>
				<div className="flex flex-col gap-y-1">
					<h2 className="flex items-center gap-x-2 text-base font-medium text-gray-500 lg:text-lg">
						Total Protocol Side Revenue
					</h2>
					<p className="text-2xl font-bold drop-shadow-sm lg:text-3xl">
						${number.format(tpsr)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default StatisticsCard

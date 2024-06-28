export interface DataPointRecord {
	ID: number
	CreatedAt: number
	DailyTotalValueLockedUSD: number
	DailyRevenueUSD: number
	DailyProtocolSideRevenueUSD: number
	DailySupplySideRevenueUSD: number
	DailyActiveUsersUSD: number
	DailyTransactionCountUSD: number
}

enum StatisticName {
	TotalValueLocked = "TotalValueLockedUSD",
	TotalRevenue = "TotalRevenueUSD",
	TotalProtocolSideRevenue = "TotalProtocolSideRevenueUSD",
	TotalSupplySideRevenue = "TotalSupplySideRevenueUSD",
	TotalUniqueUsers = "TotalUniqueUsers",
	TotalTransactions = "TotalTransactions",
}

export type StatisticRecord = {
	ID: number
	Name: StatisticName
	LastUpdatedAt: number
	Value: number
}[]

export interface LoadAllDataPointsDBResponse {
	Timestamps: string[]
	TotalValueLockedUSDs: string[]
	DailyRevenueUSDs: string[]
	DailyProtocolSideRevenueUSDs: string[]
	DailySupplySideRevenueUSDs: string[]
	DailyActiveUsers: string[]
	DailyTransactionCounts: string[]
}

export type LoadAllStatisticsDBResponse = {
	ID: number
	Name: StatisticName
	LastUpdatedAt: number
	Value: number
}[]

export type LoadLatestDataPointTimestampDBResponse = [
	{
		CreatedAt: number
	},
]

export type DBResponse =
	| LoadAllDataPointsDBResponse
	| LoadAllStatisticsDBResponse
	| LoadLatestDataPointTimestampDBResponse

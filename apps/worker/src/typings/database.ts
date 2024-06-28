export enum StatisticName {
	TotalValueLockedUSD = "TotalValueLockedUSD",
	TotalRevenueUSD = "TotalRevenueUSD",
	TotalProtocolSideRevenueUSD = "TotalProtocolSideRevenueUSD",
	TotalSupplySideRevenueUSD = "TotalSupplySideRevenueUSD",
	TotalUniqueUsers = "TotalUniqueUsers",
	TotalTransactions = "TotalTransactions",
}

export interface LoadAllDataPointsDBResult {
	Count: string
	Timestamps: string
	TotalValueLockedUSDs: string
	DailyRevenueUSDs: string
	DailyProtocolSideRevenueUSDs: string
	DailySupplySideRevenueUSDs: string
	DailyActiveUsers: string
	DailyTransactions: string
}

export type LoadAllStatisticsDBResult = {
	ID: number
	Name: StatisticName
	LastUpdatedAt: number
	Value: number
}

export type LoadLatestDataPointTimestampDBResult = {
	CreatedAt: number
}

export type DBResult =
	| LoadAllDataPointsDBResult
	| LoadAllStatisticsDBResult
	| LoadLatestDataPointTimestampDBResult

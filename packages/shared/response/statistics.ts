enum StatisticName {
	TotalValueLocked = "TotalValueLockedUSD",
	TotalRevenue = "TotalRevenueUSD",
	TotalProtocolSideRevenue = "TotalProtocolSideRevenueUSD",
	TotalSupplySideRevenue = "TotalSupplySideRevenueUSD",
	TotalUniqueUsers = "TotalUniqueUsers",
	TotalTransactions = "TotalTransactions",
}

export interface Statistic {
	ID: number
	Name: StatisticName
	LastUpdatedAt: number
	Value: number
}

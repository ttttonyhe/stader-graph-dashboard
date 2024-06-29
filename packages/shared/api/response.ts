export interface SubgraphData {
	statistics: {
		TotalValueLockedUSD: number
		TotalRevenueUSD: number
		TotalProtocolSideRevenueUSD: number
		TotalSupplySideRevenueUSD: number
		TotalUniqueUsers: number
		TotalTransactions: number
	}
	dataPoints: {
		count: number
		collections: {
			timestamps: Date[]
			totalValueLockedUSDs: number[]
			dailyRevenueUSDs: number[]
			dailyProtocolSideRevenueUSDs: number[]
			dailySupplySideRevenueUSDs: number[]
			dailyActiveUsers: number[]
			dailyTransactions: number[]
		}
	}
}

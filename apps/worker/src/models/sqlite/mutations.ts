interface SaveDataPointParams {
	createdAt: string
	dailyTotalValueLockedUSD: string
	dailyRevenueUSD: string
	dailyProtocolSideRevenueUSD: string
	dailySupplySideRevenueUSD: string
	dailyActiveUsers: string
	dailyTransactions: string
}

const saveDataPoint = (d1: D1Database, params: SaveDataPointParams) =>
	d1
		.prepare(
			`
			INSERT INTO
			  DataPoints (
			    CreatedAt,
			    DailyTotalValueLockedUSD,
			    DailyRevenueUSD,
			    DailyProtocolSideRevenueUSD,
			    DailySupplySideRevenueUSD,
			    DailyActiveUsers,
			    DailyTransactions
			  )
			VALUES
			  (
			    ?,?,?,?,?,?,?
			  );`
		)
		.bind(
			params.createdAt,
			params.dailyTotalValueLockedUSD,
			params.dailyRevenueUSD,
			params.dailyProtocolSideRevenueUSD,
			params.dailySupplySideRevenueUSD,
			params.dailyActiveUsers,
			params.dailyTransactions
		)

interface UpdateTVLParams {
	lastUpdatedAt: string
	totalValueLockedUSD: string
}

const updateTVL = (d1: D1Database, params: UpdateTVLParams) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalValueLockedUSD';`
		)
		.bind(params.lastUpdatedAt, params.totalValueLockedUSD)

interface UpdateTotalRevenueParams {
	lastUpdatedAt: string
	totalRevenueUSD: string
}

const updateTotalRevenue = (d1: D1Database, params: UpdateTotalRevenueParams) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalRevenueUSD';`
		)
		.bind(params.lastUpdatedAt, params.totalRevenueUSD)

interface UpdateTotalProtocolSideRevenueParams {
	lastUpdatedAt: string
	totalProtocolSideRevenueUSD: string
}
const updateTotalProtocolSideRevenue = (
	d1: D1Database,
	params: UpdateTotalProtocolSideRevenueParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalProtocolSideRevenueUSD';`
		)
		.bind(params.lastUpdatedAt, params.totalProtocolSideRevenueUSD)

interface UpdateTotalSupplySideRevenueParams {
	lastUpdatedAt: string
	totalSupplySideRevenueUSD: string
}

const updateTotalSupplySideRevenue = (
	d1: D1Database,
	params: UpdateTotalSupplySideRevenueParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalSupplySideRevenueUSD';`
		)
		.bind(params.lastUpdatedAt, params.totalSupplySideRevenueUSD)

interface UpdateTotalUniqueUsersParams {
	lastUpdatedAt: string
	totalUniqueUsers: string
}

const updateTotalUniqueUsers = (
	d1: D1Database,
	params: UpdateTotalUniqueUsersParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalUniqueUsers';`
		)
		.bind(params.lastUpdatedAt, params.totalUniqueUsers)

interface UpdateTotalTransactionsParams {
	lastUpdatedAt: string
	totalTransactions: string
}

const updateTotalTransactions = (
	d1: D1Database,
	params: UpdateTotalTransactionsParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  Statistics
			SET
			  LastUpdatedAt = ?,
			  Value = ?
			WHERE
			  Name = 'TotalTransactions';`
		)
		.bind(params.lastUpdatedAt, params.totalTransactions)

export const statistics = {
	updateTVL,
	updateTotalRevenue,
	updateTotalProtocolSideRevenue,
	updateTotalSupplySideRevenue,
	updateTotalUniqueUsers,
	updateTotalTransactions,
}

export const dataPoints = {
	saveDataPoint,
}

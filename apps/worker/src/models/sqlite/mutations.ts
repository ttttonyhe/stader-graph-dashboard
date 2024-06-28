interface SaveDataPointParams {
	createdAt: number
	dailyTotalValueLockedUSD: number
	dailyRevenueUSD: number
	dailyProtocolSideRevenueUSD: number
	dailySupplySideRevenueUSD: number
	dailyActiveUsersUSD: number
	dailyTransactionCountUSD: number
}

const saveDataPoint = (d1: D1Database, params: SaveDataPointParams) =>
	d1
		.prepare(
			`
			INSERT INTO
			  DataPoints (
			    CreatedAt,
			    DailyTotalValueLocked_USD,
			    DailyRevenue_USD,
			    DailyProtocolSideRevenue_USD,
			    DailySupplySideRevenue_USD,
			    DailyActiveUsers_USD,
			    DailyTransactionCount_USD
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
			params.dailyActiveUsersUSD,
			params.dailyTransactionCountUSD
		)

interface UpdateTVLParams {
	lastUpdatedAt: number
	totalValueLockedUSD: number
}

const updateTVL = (d1: D1Database, params: UpdateTVLParams) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalValueLockedUSD = ?
			WHERE
			  Name = 'TotalValueLocked';`
		)
		.bind(params.lastUpdatedAt, params.totalValueLockedUSD)

interface UpdateTotalRevenueParams {
	lastUpdatedAt: number
	totalRevenueUSD: number
}

const updateTotalRevenue = (d1: D1Database, params: UpdateTotalRevenueParams) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalRevenueUSD = ?
			WHERE
			  Name = 'TotalRevenue';`
		)
		.bind(params.lastUpdatedAt, params.totalRevenueUSD)

interface UpdateTotalProtocolSideRevenueParams {
	lastUpdatedAt: number
	totalProtocolSideRevenueUSD: number
}
const updateTotalProtocolSideRevenue = (
	d1: D1Database,
	params: UpdateTotalProtocolSideRevenueParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalProtocolSideRevenueUSD = ?
			WHERE
			  Name = 'TotalProtocolSideRevenue';`
		)
		.bind(params.lastUpdatedAt, params.totalProtocolSideRevenueUSD)

interface UpdateTotalSupplySideRevenueParams {
	lastUpdatedAt: number
	totalSupplySideRevenueUSD: number
}

const updateTotalSupplySideRevenue = (
	d1: D1Database,
	params: UpdateTotalSupplySideRevenueParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalSupplySideRevenueUSD = ?
			WHERE
			  Name = 'TotalSupplySideRevenue';`
		)
		.bind(params.lastUpdatedAt, params.totalSupplySideRevenueUSD)

interface UpdateTotalUniqueUsersParams {
	lastUpdatedAt: number
	totalUniqueUsers: number
}

const updateTotalUniqueUsers = (
	d1: D1Database,
	params: UpdateTotalUniqueUsersParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalUniqueUsers = ?
			WHERE
			  Name = 'TotalUniqueUsers';`
		)
		.bind(params.lastUpdatedAt, params.totalUniqueUsers)

interface UpdateTotalTransactionsParams {
	lastUpdatedAt: number
	totalTransactions: number
}

const updateTotalTransactions = (
	d1: D1Database,
	params: UpdateTotalTransactionsParams
) =>
	d1
		.prepare(
			`
			UPDATE
			  DataPoints
			SET
			  LastUpdatedAt = ?,
			  TotalTransactions = ?
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

export const datapoints = {
	saveDataPoint,
}

export const loadAllStatistics = (d1: D1Database) =>
	d1.prepare(`
  SELECT
    Name, LastUpdatedAt, Value
  FROM
    Statistics;
`)

export const loadAllDataPoints = (d1: D1Database) =>
	d1.prepare(`
  SELECT
    Count(*) AS Count,
    GROUP_CONCAT(CreatedAt) AS Timestamps,
    GROUP_CONCAT(DailyTotalValueLockedUSD) AS TotalValueLockedUSDs,
    GROUP_CONCAT(DailyRevenueUSD) AS DailyRevenueUSDs,
    GROUP_CONCAT(DailyProtocolSideRevenueUSD) AS DailyProtocolSideRevenueUSDs,
    GROUP_CONCAT(DailySupplySideRevenueUSD) AS DailySupplySideRevenueUSDs,
    GROUP_CONCAT(CAST(DailyActiveUsers AS TEXT)) AS DailyActiveUsers,
    GROUP_CONCAT(CAST(DailyTransactions AS TEXT)) AS DailyTransactions
  FROM
    DataPoints
  ORDER BY
    CreatedAt ASC;
`)

export const loadLatestDataPointTimestamp = (d1: D1Database) =>
	d1.prepare(`
  SELECT
    CreatedAt
  FROM
    DataPoints
  ORDER BY
    CreatedAt DESC
  LIMIT 1;
`)

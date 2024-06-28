-- TABLES
-- Statistics (TVL, Total revenue, etc.)
DROP TABLE IF EXISTS Statistics;

CREATE TABLE
  IF NOT EXISTS Statistics (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    LastUpdatedAt INTEGER NOT NULL, -- Unix timestamp
    Value REAL NOT NULL
  );

-- Data Points (Daily cumulative TVL, daily revenue, daily usage, etc.)
DROP TABLE IF EXISTS DataPoints;

CREATE TABLE
  IF NOT EXISTS DataPoints (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    CreatedAt INTEGER NOT NULL, -- Unix timestamp
    -- TVL
    DailyTotalValueLockedUSD REAL NOT NULL,
    -- Revenue
    DailyRevenueUSD REAL NOT NULL,
    DailyProtocolSideRevenueUSD REAL NOT NULL,
    DailySupplySideRevenueUSD REAL NOT NULL,
    -- Usage
    DailyActiveUsers INTEGER NOT NULL,
    DailyTransactionCount INTEGER NOT NULL
  );

-- SEED
-- Statistics Seed
-- Total Value Locked
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  (
    'TotalValueLocked_USD',
    1719533963,
    441926804.2038745587013444587
  );

-- Total Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  (
    'TotalRevenue_USD',
    1719533963,
    1373263.923757473733382617525296
  );

-- Total Protocol Side Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  (
    'TotalProtocolSideRevenue_USD',
    1719533963,
    441926804.2038745587013444587
  );

-- Total Supply Side Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  (
    'TotalSupplySideRevenue_USD',
    1719533963,
    441926804.2038745587013444587
  );

-- Usage
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalUniqueUsers', 1719533963, 25017);

INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalTransactionCount', 1719533963, 31930);

-- Data Points Seed
INSERT INTO
  DataPoints (
    CreatedAt,
    DailyTotalValueLockedUSD,
    DailyRevenueUSD,
    DailyProtocolSideRevenueUSD,
    DailySupplySideRevenueUSD,
    DailyActiveUsers,
    DailyTransactionCount
  )
VALUES
  (
    1719533963,
    441926804.2038745587013444587,
    18.74474872258322504048783,
    0,
    18.74474872258322504048783,
    19,
    29
  );

INSERT INTO
  DataPoints (
    CreatedAt,
    DailyTotalValueLockedUSD,
    DailyRevenueUSD,
    DailyProtocolSideRevenueUSD,
    DailySupplySideRevenueUSD,
    DailyActiveUsers,
    DailyTransactionCount
  )
VALUES
  (
    1719448103,
    440340251.320534530369422114898591,
    4913.16197422067930649669537,
    0,
    4913.16197422067930649669537,
    32,
    42
  );

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_statistics_name ON Statistics (Name);

CREATE INDEX IF NOT EXISTS idx_datapoints_createdat ON DataPoints (CreatedAt);

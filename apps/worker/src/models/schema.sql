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
    DailyTransactions INTEGER NOT NULL
  );

-- SEED
-- Statistics Seed
-- Total Value Locked
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalValueLockedUSD', 1686750599, 0);

-- Total Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalRevenueUSD', 1686750599, 0);

-- Total Protocol Side Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalProtocolSideRevenueUSD', 1686750599, 0);

-- Total Supply Side Revenue
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalSupplySideRevenueUSD', 1686750599, 0);

-- Usage
INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalUniqueUsers', 1686750599, 0);

INSERT INTO
  Statistics (Name, LastUpdatedAt, Value)
VALUES
  ('TotalTransactions', 1686750599, 0);

-- Data Points Seed
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
  (1686750599, 0, 0, 0, 0, 0, 0);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_statistics_name ON Statistics (Name);

CREATE INDEX IF NOT EXISTS idx_datapoints_createdat ON DataPoints (CreatedAt);

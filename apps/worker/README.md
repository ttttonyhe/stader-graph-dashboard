# @sgd/worker

Stader Graph Dashboard Cloudflare Worker backend

<br />

## Environment Variables

- D1 Database
- Basic Authentication (Manual-Sync API endpoint)
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`
- Subgraph GraphQL endpoint (include API credentials)
  - `SUBGRAPH_API_ENDPOINT`
- Hono caching GET request caching
  - DATA_CACHE_ENABLED
  - DATA_CACHE_NAME

<br />

## Deployment

### D1 Database

First, we need to seed our remote D1 database with the database schema defined in `src/models/schema.sql` (skip for local development):

```bash
pnpm run seed:remote
```

For local testing purposes, run:

```bash
pnpm run seed:local
```

The `schema.sql` program will insert a few records that store the genesis state of Stader into the database.

<br />

### Database <=> Subgraph Syncing

This worker backend acts as a lightweight caching layer between the Stader subgraph and Stader Graph Dashboard.

By default, the worker will execute a CRON job every day at 00:01 to sync statistics and data points stored in the D1 database with the latest data indexed by the Subgraph.

We can also manually performing the syncing procedure via HTTP requests (GET) to worker route `/manual-sync`. `/manual-sync` requires Basic Authentication.

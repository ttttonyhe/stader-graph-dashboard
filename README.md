# Stader Graph Dashboard (SGD)

Analytics Dashboard for [_Stader on ETH_](https://www.staderlabs.com) powered by [The Graph](https://thegraph.com).

![SGD screenshot](https://static.ouorz.com/sgd-screenshot.png)

<br />

## Dashboard Live URL

[https://stader-dashboard.ouorz.com →](https://stader-dashboard.ouorz.com)

<br />

## Architecture Overview

To optimize query performance and reduce GraphQL data request overhead, we utilized Cloudflare Workers to implement a lightweight caching layer between the [Stader Subgraph](https://thegraph.com/explorer/subgraphs/2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa) and our data visualization dashboard.

Our architectural design overview is shown below:

![Stader Graph Dashboard](https://static.ouorz.com/stader-graph-dashboard-architecture-overview.jpg)

<br />

## Subgraph

SGD sources blockchain data from Messari's Stader Ethereum subgraph (Subgraph ID: [2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa](https://thegraph.com/explorer/subgraphs/2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa))

- For normal usage, there is no need for a Subgraph API key
- Prior to deploying SGD, you need to generate an API key in [Subgraph Studio](https://thegraph.com/studio) and store the complete subgraph GraphSQL endpoint URL as a Worker environment variable: `SUBGRAPH_API_ENDPOINT`

<br />

## Cloudflare Worker

SGD's worker app utilizes open-source web application framework [Hono](https://hono.dev) to handle, validate and process HTTP requests sent from dashboard users. Leveraging Cloudflare's serverless SQL database [D1](https://www.cloudflare.com/developer-platform/d1), SGD worker backend can effectively cache the GraphQL data returned by the subgraph and serve them to users around the world via a performant edge RESTful API.

To ensure data consistency between our caching DB and the subgraph, SGD implements a worker CRON job that automatically fetch and synchronize the latest data indexed by the subgraph with the D1 database on a daily basis.

Main worker routes:

- GET: `/data`
- GET: `/manual-sync` (Basic Authentication)
- GET: `/ping` (Health check)

Please refer to [README.md](https://github.com/ttttonyhe/stader-graph-dashboard/tree/main/apps/worker) for detailed instructions on building and deploying the SGD worker app.

<br />

## Stader Dashboard

SGD's dashboard is a Single Page App (SPA) powered by the popular React framework [Next.js](https://nextjs.org). Additionally, SGD adopts data visualization library [Ant Design Charts](https://ant-design-charts.antgroup.com) and Atomic CSS styling toolkit [TailwindCSS](https://www.tailwindcss.com) to present the Stader platform's recent and historical metrics.

Please refer to [README.md](https://github.com/ttttonyhe/stader-graph-dashboard/tree/main/apps/dashboard) for detailed instructions on building the dashboard web app.

<br />

## Development

SGD uses [Turborepo](https://turbo.build/repo) for monorepo management, [PNPM](https://pnpm.io) for Node.js package management.

- `@sgd/shared` package contains constants and utilities shared between apps
- `@sgd/eslint-config` package contains ESLint configs for different apps
- `@sgd/typescript-config` package contains TypeScript configs used in different apps

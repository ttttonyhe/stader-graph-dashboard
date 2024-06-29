# Stader Graph Dashboard (SGD)

Analytics Dashboard for [_Stader on ETH_](https://www.staderlabs.com) powered by [The Graph](https://thegraph.com).

<br />

## Analytics Dashboard URL

[https://stader-dashboard.ouorz.com →](https://stader-dashboard.ouorz.com)

<br />

## Architecture Overview

To optimize query performance and reduce GraphQL data request overhead, we utilized Cloudflare Workers to implement a lightweight caching layer between the [Stader Subgraph](https://thegraph.com/explorer/subgraphs/2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa) and our data visualization dashboard.

Our architectural design overview is shown below:

![Stader Graph Dashboard](https://static.ouorz.com/stader-graph-dashboard-architecture-overview.jpg)

<br />

## Subgraph

SGD sources blockchain data from Messari's Stader Ethereum subgraph (Subgraph ID: [2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa](https://thegraph.com/explorer/subgraphs/2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa))

<br />

## Cloudflare Worker

SGD's worker app utilizes open-source web application framework [Hono.js](https://hono.dev) to handle, validate and process HTTP requests sent from dashboard users. Leveraging Cloudflare's serverless SQL database [D1](https://www.cloudflare.com/developer-platform/d1), SGD worker backend can effectively cache and distribute the blockchain data indexed by the subgraph, and serve them to users via an edge API.

To ensure data consistency between our caching DB and the subgraph, SGD implements a worker CRON job that automatically fetch and synchronize the latest data indexed by the subgraph with the D1 database on a daily basis.

<br />

## Dashboard

SGD's dashboard is a Single Page App (SPA) powered by popular React framework [Next.js](https://nextjs.org). Additionally, SGD adopts data visualization library [Ant Design Charts](https://ant-design-charts.antgroup.com) and Atomic CSS styling toolkit [TailwindCSS](https://www.tailwindcss.com) to present the Stader platform's recent and historical metrics.

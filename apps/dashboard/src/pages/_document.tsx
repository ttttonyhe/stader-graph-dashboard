import { WORKER_API_URL } from "@sgd/shared"
import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="en">
			<title>Stader Dashboard | Powered by The Graph</title>
			<meta
				name="description"
				content="Analytics dashboard for Stader on ETH powered by The Graph."
			/>
			<meta
				name="keywords"
				content="Stader, The Graph, Ethereum, Analytics, Dashboard"
			/>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link
				type="image/vnd.microsoft.icon"
				href="/favicon.ico"
				rel="shortcut icon"
			/>
			<meta name="robots" content="index,follow" />
			<meta name="googlebot" content="index,follow" />
			<Head />
			{/* Prefetch data API */}
			<link
				rel="preload"
				href={`${WORKER_API_URL}/data`}
				as="fetch"
				crossOrigin="anonymous"
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document

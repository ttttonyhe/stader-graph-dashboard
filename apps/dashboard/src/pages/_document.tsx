import { WORKER_API_URL } from "@sgd/shared"
import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="en" prefix="og: http://ogp.me/ns#">
			<title>Stader Dashboard | Powered by The Graph</title>
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

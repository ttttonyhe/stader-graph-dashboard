import Layout from "../components/Layout"
import "../styles/global.scss"
import "../styles/tailwind.scss"
import { fetcher } from "../utilities"
import type { AppProps } from "next/app"
import { SWRConfig } from "swr"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<SWRConfig
			value={{
				refreshInterval: 3600 * 1000,
				fetcher,
			}}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}

export default App

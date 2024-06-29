import Footer from "./Footer"
import Header from "./Header"
import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<main className="relative mx-auto my-0 min-w-[525px] max-w-full px-4 lg:max-w-5xl">
			<Header />
			<div className="min-h-[calc(100vh-9.4rem)]">{children}</div>
			<Footer />
		</main>
	)
}

export default Layout

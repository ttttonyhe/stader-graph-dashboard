import staderIcon from "../../public/stader-icon.svg"
import theGraphIcon from "../../public/the-graph-icon.svg"
import LiveLabel from "./LiveLabel"
import Image from "next/image"

const Header = () => {
	return (
		<header className="fixed left-0 top-0 z-50 mt-0 flex w-full flex-col items-center justify-between gap-3 border-b-2 border-gray-200 bg-white px-3 pb-2.5 pt-2.5 lg:relative lg:mt-8 lg:flex-row lg:px-0 lg:pb-3.5 lg:pr-1 lg:pt-0">
			<div className="flex items-center gap-x-2.5">
				<h1 className="flex items-center gap-x-1 lg:text-3xl text-2xl font-medium">
					<Image
						src={staderIcon}
						alt="stader-icon"
						height={28}
						width={28}
						className="mt-0.5"
					/>
					<span>Stader</span>
				</h1>
				<span className="-mt-1 lg:text-3xl text-2xl text-gray-300">/</span>
				<h1 className="lg:text-2xl text-xl text-gray-600">Dashboard</h1>
				<LiveLabel />
			</div>
			<div className="mt-0.5 hidden items-center justify-center gap-x-1 rounded-full border bg-gray-100 px-3 py-1 pr-1.5 text-sm text-gray-500 lg:flex">
				<h2>Powered by</h2>
				<div className="flex items-center justify-center rounded-full bg-[#6F4CFF]/80 py-1 pl-1.5 pr-2 transition-colors hover:bg-[#6F4CFF]/90">
					<a
						href="https://thegraph.com"
						rel="noreferrer noopener"
						target="_blank">
						<h2 className="flex items-center gap-x-px text-xs tracking-tight text-white">
							<Image
								src={theGraphIcon}
								alt="the-graph-icon"
								height={16}
								width={16}
								className="-mt-0.5"
							/>
							<span>The Graph</span>
						</h2>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header

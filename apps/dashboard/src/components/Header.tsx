import staderIcon from "../../public/stader-icon.svg"
import theGraphIcon from "../../public/the-graph-icon.svg"
import Image from "next/image"

const Header = () => {
	return (
		<header className="mt-8 flex items-center justify-between gap-x-3 border-b-2 border-gray-200 pb-3.5">
			<div className="flex items-center gap-x-2.5">
				<h1 className="flex items-center gap-x-1 text-3xl font-medium">
					<Image
						src={staderIcon}
						alt="stader-icon"
						height={28}
						width={28}
						className="mt-0.5"
					/>
					<span>Stader</span>
				</h1>
				<span className="-mt-1 text-3xl text-gray-300">/</span>
				<h1 className="text-2xl text-gray-600">Dashboard</h1>
				<div className="group flex cursor-pointer items-center gap-x-1.5 text-sm font-normal text-gray-400">
					<label className="ml-0.5 mt-0.5 h-2.5 w-2.5 cursor-pointer rounded-full bg-green-500 transition-colors hover:bg-green-400" />
					<p className="mt-px h-0 w-0 overflow-hidden opacity-0 transition-opacity group-hover:h-fit group-hover:w-fit group-hover:opacity-100">
						Updates every 24 hours
					</p>
				</div>
			</div>
			<div className="mt-0.5 flex items-center justify-center gap-x-1 rounded-full border bg-gray-100 px-3 py-1 pr-1.5 text-sm text-gray-500">
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

import subgraphLogo from "../../public/subgraph.jpeg"
import LiveLabel from "./LiveLabel"
import Image from "next/image"

const AboutCard = () => {
	return (
		<div className="flex flex-col justify-between gap-3.5 rounded-3xl border p-4 px-6 py-6 shadow-sm lg:flex-row lg:py-4">
			<h2 className="flex items-center justify-between gap-x-3.5 pl-0.5 text-xl font-medium leading-5 text-gray-800">
				<Image
					src={subgraphLogo}
					alt="Subgraph Logo"
					width={40}
					height={40}
					className="rounded-xl border border-gray-200 shadow-sm"
				/>
				Metrics are updated from the subgraph every 24hrs
				<div className="-ml-1.5">
					<LiveLabel withText={false} />
				</div>
			</h2>
			<div className="flex flex-col rounded-xl border bg-gray-100 px-3.5 py-1.5 text-sm transition-colors hover:bg-gray-200">
				<a
					href="https://thegraph.com/explorer/subgraphs/2RLAUqUMvGGFygtuJfmTyeo62zFSJswDZSRMTcu28fSa"
					rel="noreferrer noopener"
					target="_blank">
					<h3 className="text-base font-medium text-gray-600">
						Stader Ethereum
					</h3>
				</a>
				<a
					href="https://thegraph.com/explorer/profile/0x7e8f317a45d67e27e095436d2e0d47171e7c769f"
					rel="noreferrer noopener"
					target="_blank">
					<p className="-mt-1 text-gray-500">subgraphs.messari.eth</p>
				</a>
			</div>
		</div>
	)
}

export default AboutCard

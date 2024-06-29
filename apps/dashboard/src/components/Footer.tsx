const Footer = () => {
	return (
		<footer className="mb-16 flex items-center justify-between border-t-2 border-gray-200 pt-2 text-gray-500">
			<p className="flex items-start gap-x-2">
				<span>&copy;{new Date().getFullYear()} Tony He</span>
				<span>·</span>
				<span>
					Analytics Dashboard for{" "}
					<a
						href="https://www.staderlabs.com"
						rel="noreferrer noopener"
						className="border-b border-gray-300 pb-0.5">
						Stader on ETH
					</a>
				</span>
			</p>
			<p className="flex items-start gap-x-2">
				<a
					href="https://github.com/ttttonyhe/stader-graph-dashboard"
					rel="noreferrer noopener"
					target="_blank">
					Github →
				</a>
			</p>
		</footer>
	)
}

export default Footer
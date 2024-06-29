import ContentLoader from "react-content-loader"

const GraphCarkSkeleton = () => {
	return (
		<ContentLoader
			speed={1}
			width={992}
			height={334}
			viewBox="0 0 992 334"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
			uniqueKey="graph-card-skeleton"
			className="rounded-3xl border shadow-sm">
			<rect x="32" y="32" rx="10" ry="10" width="250" height="30" />
			<rect x="860" y="36" rx="10" ry="10" width="100" height="25" />

			<rect x="32" y="80" rx="10" ry="10" width="928" height="225" />
		</ContentLoader>
	)
}

export default GraphCarkSkeleton

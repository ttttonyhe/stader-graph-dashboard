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
			className="rounded-3xl border shadow-sm">
			<rect x="48" y="40" rx="10" ry="10" width="300" height="30" />
			<rect x="48" y="85" rx="10" ry="10" width="200" height="45" />
			<rect x="48" y="190" rx="10" ry="10" width="250" height="30" />
			<rect x="48" y="235" rx="10" ry="10" width="220" height="45" />

			<rect x="450" y="70" rx="10" ry="10" width="225" height="25" />
			<rect x="450" y="110" rx="10" ry="10" width="190" height="40" />
			<rect x="720" y="70" rx="10" ry="10" width="225" height="25" />
			<rect x="720" y="110" rx="10" ry="10" width="190" height="40" />

			<rect x="450" y="180" rx="10" ry="10" width="225" height="25" />
			<rect x="450" y="220" rx="10" ry="10" width="190" height="40" />
			<rect x="720" y="180" rx="10" ry="10" width="225" height="25" />
			<rect x="720" y="220" rx="10" ry="10" width="190" height="40" />
		</ContentLoader>
	)
}

export default GraphCarkSkeleton

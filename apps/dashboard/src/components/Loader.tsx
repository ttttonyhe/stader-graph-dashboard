import { LoaderIcon } from "./Icons"

const Loader = () => {
	return (
		<div className="flex items-start justify-center">
			<p className="h-10 w-10 animate-spin text-gray-600">
				<LoaderIcon />
			</p>
		</div>
	)
}

export default Loader

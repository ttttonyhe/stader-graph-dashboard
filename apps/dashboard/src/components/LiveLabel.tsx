interface LiveLabelProps {
	withText?: boolean
}

const LiveLabel = ({ withText = true }: LiveLabelProps) => {
	return (
		<div className="group hidden cursor-pointer items-center gap-x-1.5 text-sm font-normal text-gray-400 lg:flex">
			<label className="ml-0.5 mt-0.5 h-2.5 w-2.5 cursor-pointer rounded-full bg-green-500 transition-colors hover:bg-green-400" />
			{withText && (
				<p className="mt-px h-0 w-0 overflow-hidden opacity-0 transition-opacity group-hover:h-fit group-hover:w-fit group-hover:opacity-100">
					Updates every 24 hours
				</p>
			)}
		</div>
	)
}

export default LiveLabel

interface ErrorCardProps {
	message: string
}

const ErrorCard = ({ message }: ErrorCardProps) => {
	return (
		<div className="flex h-[334px] w-full items-center justify-center rounded-3xl border bg-white shadow-sm lg:w-[992px]">
			<div>
				<h1 className="text-3xl font-medium">⛔ Service Unavailable</h1>
				<p>{message ?? "Unknown error"}</p>
			</div>
		</div>
	)
}

export default ErrorCard

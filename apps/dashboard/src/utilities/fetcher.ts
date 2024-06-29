import { WORKER_API_URL, GET } from "@sgd/shared"

type RouteKeys = keyof typeof GET
type RoutePaths = (typeof GET)[RouteKeys]

interface CustomError extends Error {
	info: unknown
	status: number
}

export const fetcher = async (path: RoutePaths) => {
	const res = await fetch(`${WORKER_API_URL}${path}`)

	if (!res.ok) {
		const error = new Error(
			"An error occurred while fetching the data."
		) as CustomError
		error.info = await res.json()
		error.status = res.status
		throw error
	}

	return res.json()
}

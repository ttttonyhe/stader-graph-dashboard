import { GET, SubgraphData } from "@sgd/shared"
import useSWR from "swr"

export const useData = () => {
	const { data, error, isLoading } = useSWR<SubgraphData>(GET.data)

	return {
		data,
		error,
		isLoading,
	}
}

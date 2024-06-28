import { DBResult } from "../typings/database"

const query = async <T extends DBResult>(
	d1: D1Database,
	command: (d1: D1Database) => D1PreparedStatement
) => {
	const { results } = await command(d1).all<T>()
	if (!results.length) throw new Error("No results found")
	return results
}

const mutate = async (statement: D1PreparedStatement) => {
	const { success } = await statement.run()
	if (!success) throw new Error("Mutation failed")
	return success
}

const batchMutate = async (
	d1: D1Database,
	statements: D1PreparedStatement[]
) => {
	const batchResults = await d1.batch(statements)
	const success = batchResults.every((result) => result.success)
	if (!success) throw new Error("Batch mutation failed")
	return success
}

export const database = {
	query,
	mutate,
	batchMutate,
}

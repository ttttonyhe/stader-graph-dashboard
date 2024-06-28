import { DBResponse } from "../typings/database"

const query = async <T extends DBResponse>(
	d1: D1Database,
	command: (d1: D1Database) => D1PreparedStatement
) => {
	const { results } = await command(d1).all<T>()
	return results
}

const mutate = async (
	d1: D1Database,
	command: (d1: D1Database) => D1PreparedStatement
) => {
	return command(d1).run()
}

const batchMutate = async (
	d1: D1Database,
	commands: ((d1: D1Database) => D1PreparedStatement)[]
) => {
	return d1.batch(commands.map((command) => command(d1)))
}

export const database = {
	query,
	mutate,
	batchMutate,
}

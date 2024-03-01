import { getStatus } from '$lib/spacetraders';

/** @type {import("./$types").PageLoad} */
export async function load() {
	const result = await getStatus();

	return { ...result };
}

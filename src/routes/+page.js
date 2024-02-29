import { getStatus } from '$lib/startraders';

/** @type {import("./$types").PageLoad} */
export async function load() {
	const result = await getStatus();

	return { ...result };
}

import * as api from '$lib/spacetraders';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const result = await api.factions.getFactions({ limit: 20 });
	const factions = result.data;
	return { factions };
}

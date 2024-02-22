import * as api from '$lib/spacetraders';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { faction_symbol } = params;
	try {
		const result = await api.factions.getFaction({ faction_symbol });
		const faction = result.data;
		return { faction };
	} catch (err) {
		error(404, `${err}`);
	}
}

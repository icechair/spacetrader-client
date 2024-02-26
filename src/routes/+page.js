import * as api from '$lib/spacetraders.js';
export const ssr = false;

/** @type {import("./$types").PageLoad} */
export async function load({ params }) {
	const status = await api.getStatus();
	console.log('status', status);
	return { status };
}

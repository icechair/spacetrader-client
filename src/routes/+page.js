import * as api from '$lib/spacetraders.js';

/** @type {import("./$types").PageLoad} */
export async function load({ params }) {
	try {
		const status = await api.getStatus();
		console.log('status', status);
		return { status };
	} catch (e) {
		console.error('error', e);
	}
	return {};
}

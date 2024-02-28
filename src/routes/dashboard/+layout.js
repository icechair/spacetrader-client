import { base } from '$app/paths';
import * as api from '$lib/spacetraders.js';
import { redirect } from '@sveltejs/kit';
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
	if (api.accessToken()) {
		try {
			const result = await api.agents.getMyAgent();
			const agent = result.data;
			return { agent };
		} catch (e) {
			console.log('api error: ', e);
		}
	}
	redirect(302, `${base}/register`);
}

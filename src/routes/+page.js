import { base } from '$app/paths';
import * as api from '$lib/spacetraders.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (api.accessToken()) {
		return {};
	}
	redirect(302, `${base}/register`);
}

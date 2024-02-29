/** @typedef {import("$lib/spacetraders").components["schemas"]} Schemas */
/** @typedef {import("$lib/spacetraders").operations} Operations  */

import { browser } from '$app/environment';

const base_url = 'https://api.spacetraders.io/v2';

const token_key = 'spacetraders.bearer-token';

export function get_access_token() {
	if (!browser) return '';
	return localStorage.getItem(token_key) || '';
}

export function set_access_token(token = '') {
	if (!browser) return;
	if (token) localStorage.setItem(token_key, token);
	else localStorage.removeItem(token_key);
}

/**
 * @template T
 * @param {T?} body_params
 * @returns {RequestInit}
 */
function req_params(body_params, method = 'GET') {
	const headers = { 'Content-Type': 'application/json' };
	const token = get_access_token();
	if (token) {
		//@ts-ignore
		headers['Authorization'] = `Bearer ${token}`;
	}
	let body;
	if (method != 'GET') {
		body = body_params ? JSON.stringify(body_params) : '';
	}
	return { headers, body, method };
}

/**
 * @template U
 * @typedef {{error:false, payload: U} | {error:true, payload: string}} ReqResult
 */
/**
 * @template T,U
 * @param {string} url_path
 * @param {T?} body
 * @param {"POST" | "GET" | "PUT" | "DELETE"} method
 * @returns {Promise<ReqResult<U>>}
 */
async function request(url_path, body = null, method = 'GET') {
	const result = await fetch(
		`${base_url}${url_path}`,
		req_params(body, method),
	);
	let error = false;
	if (result.ok) {
		const payload = await result.json();
		return { error, payload };
	}
	error = true;
	const response_text = await result.text();
	const payload = `${result.status}: ${result.statusText}\n${response_text}`;
	return { error, payload };
}

/**
 * @typedef{Operations["get-status"]["responses"]["200"]["content"]["application/json"]} GetStatusResponse
 * @returns {Promise<ReturnType<typeof request<null,GetStatusResponse>>>}
 */
export async function getStatus() {
	return await request('/');
}

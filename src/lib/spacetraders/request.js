import { browser } from '$app/environment';
/** @typedef {import('./types').components["schemas"]} Schemas */
/** @typedef {import("./types").operations} Operations  */

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
 * @template T
 * @param {string} url_path
 * @param {T?} body
 * @param {"POST" | "GET" | "PUT" | "DELETE"} method
 * @returns {import('./scheduler').RequestPrimitive}
 */
export function request(url_path, body = null, method = 'GET') {
	return { url: `${base_url}${url_path}`, params: req_params(body, method) };
}

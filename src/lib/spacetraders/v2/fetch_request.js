import { browser } from '$app/environment';
import { fromFetch } from 'rxjs/fetch';
import { global_rate_limit } from './rate_limit';
import { switchMap } from 'rxjs/operators';

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
 * @param {T} [body_params]
 * @param {string} [method='GET']
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
 * @typedef ErrorResponse
 * @property {true} error
 * @property {string} payload
 */

/**
 * @template T
 * @typedef SuccessResponse
 * @property {false} error
 * @property {T} payload
 */

/**
 * @template T
 * @typedef {ErrorResponse | SuccessResponse<T>} ApiResult
 */

/**
 * @template T
 * @template U
 * @param {string} url_path
 * @param {T} [body]
 * @param {"POST" | "GET" | "PUT" | "DELETE"} method
 * @returns {import("rxjs").Observable<ApiResult<U>>}
 */
export function from_request(url_path, body, method = 'GET') {
	return fromFetch(`${base_url}${url_path}`, req_params(body, method)).pipe(
		global_rate_limit(),
		switchMap(async (response) => {
			let error = !response.ok;
			if (response.ok) {
				const payload = await response.json();
				return { error, payload };
			} else {
				let payload = `${response.status}:${response.statusText}`;
				payload += `\n${await response.text()}`;
				return {
					error,
					payload,
				};
			}
		}),
	);
}

import { writable } from 'svelte/store';

/**
 * @typedef RequestPrimitive
 * @property {string} url
 * @property {RequestInit} params
 */

/** @template T
 * @typedef {ReturnType<typeof writable<T>>}Store
 */

/**
 * @typedef QueueItem
 * @property {RequestPrimitive} req
 * @property {Store<T>} store
 */

export const error = writable('');
/**
 * @template T
 * @type {QueueItem[]}
 */
const request_queue = [];

/**
 * @param {RequestPrimitive} req
 * @param {Store<T>} store
 */
export function schedule(req, store) {
	request_queue.push({ req, store });
}

/**
 * @param {Response} res
 */
function get_rate_limit(res) {
	const h_limit_type = res.headers.get('X-Ratelimit-Type');
	const h_limit_burst = res.headers.get('X-Ratelimit-Limit-Burst');
	const h_limit_second = res.headers.get('X-Ratelimit-Limit-Per-Second');
	const h_limit_reset = res.headers.get('X-Ratelimit-Reset');

	const type = h_limit_type || '';
	const burst = h_limit_burst ? +h_limit_burst : 0;
	const second = h_limit_second ? +h_limit_second : 0;
	const reset = h_limit_reset ? new Date(h_limit_reset).getTime() : Date.now();
	return { type, burst, second, reset };
}

/** @type {ReturnType<typeof setTimeout>} */
let timer;
let backoff = 10;

async function run_request() {
	const item = request_queue.pop();
	if (!item) return start();

	const { url, params } = item.req;
	const result = await fetch(url, params);
	const rate_limit = get_rate_limit(result);
	const time_delta = Date.now() - rate_limit.reset;
	if (result.ok) {
		const payload = await result.json();
		backoff = 10 + backoff / 2;
		error.set('');
		item.store.set(payload);
		return start();
	}
	stop();

	error.set(`${result.status}:${result.statusText}\n${await result.text()}`);

	if (result.status == 429) {
		backoff = 10 + 2 * backoff + time_delta;
		request_queue.unshift(item);
	}
	start();
}

export function start() {
	timer = setTimeout(run_request, backoff);
}
export function stop() {
	clearTimeout(timer);
}

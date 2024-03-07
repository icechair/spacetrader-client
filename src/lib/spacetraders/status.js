import { writable } from 'svelte/store';
import { schedule_request } from './scheduler';
import { request } from './request';

/**
 * @typedef{import('./request').Operations["get-status"]["responses"]["200"]["content"]["application/json"]} GetStatusResponse
 */

/** @type import('./scheduler').Store<GetStatusResponse>} */
export const store = writable();
export function schedule() {
	//@ts-ignore
	return schedule_request(request('/'), store);
}

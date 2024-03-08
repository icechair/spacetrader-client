import { writable } from 'svelte/store';
import { schedule_request } from './scheduler';
import { request } from './request';

/**
 * @typedef{import('./request').Operations["get-my-agent"]["responses"]["200"]["content"]["application/json"]} GetMyAgentResponse
 */

/** @type import('./scheduler').Store<GetMyAgentResponse>} */
export const store = writable();
export function schedule() {
	//@ts-ignore
	return schedule_request(request('/my/agent'), store);
}

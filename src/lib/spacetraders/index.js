import { request } from './request';

/**
 * @typedef{import('./request').Operations["get-status"]["responses"]["200"]["content"]["application/json"]} GetStatusResponse
 * @returns {Promise<ReturnType<typeof request<null,GetStatusResponse>>>}
 */
export async function getStatus() {
	return await request('/');
}

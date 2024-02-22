import {
	Configuration,
	AgentsApi,
	DefaultApi,
	FactionSymbol,
	FactionsApi,
	ContractsApi,
	FleetApi,
	SystemsApi
} from './generated/spacetraders';
import { browser } from '$app/environment';

const bearer_token_key = 'spacetraders.bearer-token';
export function accessToken() {
	if (!browser) return '';
	return localStorage.getItem(bearer_token_key) || '';
}

const config = new Configuration({ accessToken });
const api = new DefaultApi(config);

export const agents = new AgentsApi(config);
export const contacts = new ContractsApi(config);
export const fleet = new FleetApi(config);
export const systems = new SystemsApi(config);
export const factions = new FactionsApi(config);

/**
 * @param {FactionSymbol} faction
 * @param {string} symbol
 */
export async function register(faction, symbol = '') {
	/**@type {import('./generated/spacetraders').RegisterRequest} */
	const register_request = { faction, symbol };
	const result = await api.register({ register_request });
	localStorage.setItem(bearer_token_key, result.data.token);
	return result.data;
}
export const getStatus = api.getStatus;
export const faction_symbols = FactionSymbol;
export { FactionSymbol };

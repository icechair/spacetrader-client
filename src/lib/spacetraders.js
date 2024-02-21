import {
	Configuration,
	AgentsApi,
	DefaultApi,
	FactionSymbol,
	FactionsApi
} from './generated/spacetraders';
import { browser } from '$app/environment';

const bearer_token_key = 'spacetraders.bearer-token';
function accessToken() {
	if (!browser) return '';
	return localStorage.getItem(bearer_token_key) || '';
}

const config = new Configuration({ accessToken });
const api = new DefaultApi(config);
const agents = new AgentsApi(config);
const factions = new FactionsApi(config);

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

export async function get_factions() {
	const result = await factions.getFactions({ limit: 20 });
	return result.data;
}

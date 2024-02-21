import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const token_key = 'spacetrader.bearer-token';
export const bearer_token = writable(browser ? localStorage.getItem(token_key) : '');
bearer_token.subscribe((token) => {
	if (!browser) return;
	if (token) {
		localStorage.setItem(token_key, token);
	} else {
		localStorage.removeItem(token_key);
	}
});

export const base_url = 'https://api.spacetraders.io/v2';

import { writable } from "svelte/store";

const token_key = "spacetrader.bearer-token";
export const bearer_token = writable(localStorage.getItem(token_key));
bearer_token.subscribe(token => token ? localStorage.setItem(token_key, token) : localStorage.removeItem(token_key));

export const base_url = "https://api.spacetraders.io/v2";
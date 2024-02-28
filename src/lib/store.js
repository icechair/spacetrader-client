import { writable } from 'svelte/store';
/**
 * @template T
 * @typedef {import('svelte/store').Writable<T>} Writable<T>
 */
/**
 * @typedef {import('./generated/spacetraders').Agent} Agent
 * @typedef {import('./generated/spacetraders').Ship} Ship
 */

/** @type {Writable<Agent>} */
export const my_agent = writable();

/** @type {Writable<Map<string, Ship>>} */
export const my_ships = writable(new Map());

<script>
	import * as api from '$lib/spacetraders.js';
	import { onMount } from 'svelte';
	import Canvas from './Canvas.svelte';
	import Waypoint from './Waypoint.svelte';

	export let symbol = '';
	/** @type{import("$lib/generated/spacetraders").SystemWaypoint[]} */
	let waypoints = [];
	async function fetch_waypoints() {
		const system_symbol = symbol;
		const result = await api.systems.getSystem({ system_symbol });
		result.data.waypoints[0];
        waypoints = result.data.waypoints;
	}
    onMount(fetch_waypoints);
</script>

<div class="system-canvas flex flex-col flex-wrap">
	<h2 class="dark:text-white">System {symbol}</h2>
	<Canvas class="flex flex-auto">
        {#each waypoints as waypoint }

		<Waypoint wp={waypoint} />
        {/each}
	</Canvas>
</div>

<style>
	.system-canvas {
		height: 80vh;
	}
</style>

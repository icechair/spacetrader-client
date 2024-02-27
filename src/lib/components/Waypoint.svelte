<script>
	import { Button, Popover } from 'flowbite-svelte';
	import { onMount } from 'svelte';
    import * as api from "$lib/spacetraders.js";

	/** @type {import("$lib/generated/spacetraders").Waypoint} */
    let wp;
	export let waypoint_symbol = "";
	export let label = 'Waypoint';
    onMount(async ()=>{
        const system_symbol = api.getWaypointSystem(waypoint_symbol);
       const result = await api.systems.getWaypoint({waypoint_symbol, system_symbol});
        wp = result.data;
    });
</script>

{#if wp}
<Button class="popover-{wp.symbol}">{label}</Button>
<Popover triggeredBy=".popover-{wp.symbol}">
	<h2 class="dark:text-white text-lg mb-1">{wp.symbol}</h2>
	<p class="dark:text-white mb-1">type: {wp.type}</p>
	<p class="dark:text-white mb-1">systemSymbol: {wp.systemSymbol}</p>
	<p class="dark:text-white mb-1">x: {wp.x}, y: {wp.y}</p>
	{#if wp.orbitals.length}
		<p class="dark:text-white mb-1">orbitals: {wp.orbitals.length}</p>
	{/if}
	{#if wp.orbits}
		<p class="dark:text-white mb-1">parent: {wp.orbits}</p>
	{/if}
	{#if wp.faction}
		<p class="dark:text-white mb-1">parent: {wp.faction.symbol}</p>
	{/if}
	<h3 class="dark:text-white mb-1">traits:</h3>
	{#each wp.traits as trait}
		<p class="dark:text-white px-4 mb-1">{trait.name}</p>
		<p class="dark:text-white px-4 mb-1">{trait.description}</p>
	{/each}
	{#if wp.modifiers && wp.modifiers.length}
		<h3 class="dark:text-white mb-1">modifiers:</h3>
		{#each wp.modifiers as mod}
			<p class="dark:text-white px-4 mb-1">{mod.name}</p>
			<p class="dark:text-white px-4 mb-1">{mod.description}</p>
		{/each}
	{/if}
</Popover>
{/if}

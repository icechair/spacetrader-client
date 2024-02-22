<script>
	import { onMount } from 'svelte';
	import * as api from '$lib/spacetraders.js';
	import { Spinner } from 'flowbite-svelte';
</script>

{#await api.agents.getMyAgent()}
	<Spinner />
{:then { data }}
	<h2 class="dark:text-white mb-6 text-xl">Agent: {data.symbol}</h2>
	<p class="dark:text-white mb-3 text-lg">AccountID: {data.accountId}</p>
	<p class="dark:text-white mb-3 text-lg">credits: {data.credits}$</p>
	<p class="dark:text-white mb-3 text-lg">headquarters: {data.headquarters}</p>
	<p class="dark:text-white mb-3 text-lg">Ship Count: {data.shipCount}</p>
	<p class="dark:text-white mb-3 text-lg">Faction: {data.startingFaction}</p>
{/await}

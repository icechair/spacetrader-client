<script>
	import { base } from '$app/paths';
	import { navigating } from '$app/stores';
	import { Button, Spinner } from 'flowbite-svelte';

	/**@type{import('./$types').PageData}*/
	export let data;
</script>

{#if $navigating}
	<Spinner />
{:else}
	<h2 class="dark:text-white mb-6 text-xl">Agent: {data.agent.symbol}</h2>
	<p class="dark:text-white mb-3 text-lg">AccountID: {data.agent.accountId}</p>
	<p class="dark:text-white mb-3 text-lg">credits: {data.agent.credits}$</p>
	<p class="dark:text-white mb-3 text-lg">headquarters: {data.agent.headquarters}</p>
	<p class="dark:text-white mb-3 text-lg">Ship Count: {data.agent.shipCount}</p>
	<p class="dark:text-white mb-3 text-lg">Faction: {data.agent.startingFaction}</p>
	<Button href="{base}/ships">ships</Button>
{/if}

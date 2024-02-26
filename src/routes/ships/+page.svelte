<script>
	import { navigating } from '$app/stores';
	import ShipOverview from '$lib/components/ship_overview.svelte';
	import { Spinner } from 'flowbite-svelte';

	/**@type{import('./$types').PageData}*/
	export let data;
</script>

{#if $navigating}
	<Spinner />
{:else}
	{#each data.ships as ship}
		<ShipOverview {ship} />
	{/each}
{/if}

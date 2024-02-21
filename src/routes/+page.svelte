<script>
	import { get_factions } from '$lib/spacetrader/index.js';
	import { Accordion, AccordionItem, Button, Card } from 'flowbite-svelte';
	/** @typedef {import("$lib/spacetrader/spacetraders-sdk/models/GetFactions200Response").GetFactions200Response} FactionResponse */

	/**@type {FactionResponse["data"]}*/
	let factions = [];
	async function fetch_factions() {
		const res = await get_factions();
		factions = res.data;
	}
</script>

<div class="container p-4 mx-auto">
	<Button outline on:click={fetch_factions}>get factions</Button>
	<div class="pt-2 grid grid-cols-3 gap-1">
		{#each factions as faction}
			<Card class="max-w-max container size-full">
				<h4 class="dark:text-white text-2xl">{faction.name} ({faction.symbol})</h4>
				<p class="dark:text-gray-400 text-gray-700 font-normal">{faction.description}</p>
				<h5 class="p1 text-xl font-medium">Traits:</h5>
				<Accordion class="container">
					{#each faction.traits as trait}
						<AccordionItem>
							<span slot="header">{trait.name} ({trait.symbol})</span>
							<p class="mb-2 text-gray-500 dark:text-gray-400">{trait.description}</p>
						</AccordionItem>
					{/each}
				</Accordion>
			</Card>
		{/each}
	</div>
</div>

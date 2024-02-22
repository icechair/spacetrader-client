<script>
	import { base } from '$app/paths';
	import Icon from '$lib/components/basic/Icon.svelte';
	import { Accordion, AccordionItem, Button, Card, Checkbox } from 'flowbite-svelte';

	/**@type {import('./$types').PageData}*/
	export let data;
</script>

<div class="pt-2 grid grid-cols-3 gap-1 sm:grid-cols-2">
	{#each data.factions as faction}
		<Card class="max-w-max container size-full">
			<h4 class="dark:text-white text-2xl">{faction.name} ({faction.symbol})</h4>
			<h5 class="p1 text-xl font-medium">Headquarters: {faction.headquarters}</h5>
			<p class="dark:text-gray-400 text-gray-700 font-normal">{faction.description}</p>
			<Button class="mt-2 w-fit" href={`${base}/factions/${faction.symbol}`}>
				Details <Icon class="w-5 h-5 ms text-white" icon="arrow_forward" />
			</Button>
		</Card>
	{/each}
</div>

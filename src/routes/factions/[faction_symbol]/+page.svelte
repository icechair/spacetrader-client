<script>
	import { base } from '$app/paths';
	import { Accordion, AccordionItem, Button, Checkbox } from 'flowbite-svelte';
	/**@type {import('./$types').PageData}*/
	export let data;
	const { faction } = data;
</script>

<h4 class="dark:text-white text-2xl">{faction.name} ({faction.symbol})</h4>
<h5 class="dark:text-white p1 text-xl font-medium">Headquarters: {faction.headquarters}</h5>
<p class="dark:text-gray-400 text-gray-700 font-normal mt-4">{faction.description}</p>
<Checkbox checked={faction.isRecruiting}>is recruiting?</Checkbox>
<h6 class="dark:text-white p1 text-lg font-medium mt-4">Traits:</h6>
<Accordion class="container">
	{#each faction.traits as trait}
		<AccordionItem>
			<span slot="header">{trait.name} ({trait.symbol})</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">{trait.description}</p>
		</AccordionItem>
	{/each}
</Accordion>
<Button class="mt-4" href="{base}/factions">Back</Button>

<script>
	import { Accordion, AccordionItem, Card, Checkbox } from 'flowbite-svelte';
	/** @typedef {import("$lib/generated/spacetraders/models/GetFactions200Response").GetFactions200Response} FactionResponse */

	/**@type {FactionResponse["data"]}*/
	let factions = [];
</script>

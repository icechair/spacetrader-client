<script>
	import { Button, Input, Label, Select, Alert } from 'flowbite-svelte';
	import {
		faction_symbols,
		FactionSymbol,
		register
	} from '$lib/spacetraders.js';
	import { redirect } from '@sveltejs/kit';
	import { base } from '$app/paths';

	/** @type {FactionSymbol}*/
	let selected_faction;

	let agent_symbol = '';
	let error = '';

	const faction_items = Object.entries(faction_symbols).map(
		([name, value]) => ({ value, name })
	);
	async function handle_register() {
		try {
			const result = await register(selected_faction, agent_symbol);
			return redirect(302, `${base}/dashboard`);
		} catch (e) {
			error = `${e}`;
		}
	}
</script>

{#if error}
	<Alert border color="red" class="mb-6">
		register failed: "{error}"
	</Alert>
{/if}
<div class="mb-6">
	<Label for="agent_symbol" class="block mb-2">Agent Symbol</Label>
	<Input
		id="agent_symbol"
		placeholder="choose a name"
		bind:value={agent_symbol}
	/>
</div>
<div class="mb-6">
	<Label class="block mb-2">
		Faction
		<Select class="mt-2" items={faction_items} bind:value={selected_faction} />
	</Label>
</div>
<Button on:click={handle_register}>Register</Button>

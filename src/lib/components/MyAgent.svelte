<script>
	import { Button, Popover } from "flowbite-svelte";

/** @type {import("$lib/generated/spacetraders").Agent} */
export let agent;

    let placement;
</script>

<Button class="my-agent">My Agent</Button>
<Popover triggeredBy=".my-agent">
	<h2 class="dark:text-white mb-1 text-lg">Agent: {agent.symbol}</h2>
	<p class="dark:text-white mb-1">AccountID: {agent.accountId}</p>
	<p class="dark:text-white mb-1">credits: {agent.credits}$</p>
	<p class="dark:text-white mb-1">headquarters: {agent.headquarters}</p>
	<p class="dark:text-white mb-1">Ship Count: {agent.shipCount}</p>
	<p class="dark:text-white mb-1">Faction: {agent.startingFaction}</p>
</Popover>

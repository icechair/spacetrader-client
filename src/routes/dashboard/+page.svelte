<script>
	import MyAgent from '$lib/components/MyAgent.svelte';
	import Waypoint from '$lib/components/Waypoint.svelte';
	import { getContext } from 'svelte';

	/** @type {import('svelte/store').Writable<import('$lib/generated/spacetraders').Agent>} */
	const agent = getContext('agent');
</script>

<MyAgent agent={$agent} />
<Waypoint label="Headquarters" waypoint_symbol={$agent.headquarters} />

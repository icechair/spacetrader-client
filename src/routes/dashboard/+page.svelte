<script>
	import MyAgent from '$lib/components/MyAgent.svelte';
	import Waypoint from '$lib/components/Waypoint.svelte';
	import { my_agent } from '$lib/store';
</script>

<MyAgent agent={$my_agent} />
<Waypoint label="Headquarters" waypoint_symbol={$my_agent.headquarters} />

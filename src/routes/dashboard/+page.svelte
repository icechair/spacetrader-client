<script>
	import MyAgent from '$lib/components/MyAgent.svelte';
	import SystemCanvas from '$lib/components/SystemCanvas.svelte';
	import Waypoint from '$lib/components/Waypoint.svelte';
	import { getWaypointSystem } from '$lib/spacetraders';
	import { my_agent } from '$lib/store';
</script>

<MyAgent agent={$my_agent} />
<SystemCanvas symbol={getWaypointSystem($my_agent.headquarters)} />

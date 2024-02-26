<script>
	import { Tooltip } from 'flowbite-svelte';

	/** @type {import("$lib/generated/spacetraders").ShipNavRouteWaypoint} */
	export let waypoint;
</script>

<span class="dark:text-white inline">{waypoint.symbol}</span>
<Tooltip>
	<p class="dark:text-white">type: {waypoint.type}</p>
	<p class="dark:text-white">system: {waypoint.systemSymbol}</p>
	<p class="dark:text-white">position: (x: {waypoint.x}, y: {waypoint.y} )</p>
</Tooltip>

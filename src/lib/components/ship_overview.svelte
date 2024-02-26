<script>
	import RouteWaypoint from './route_waypoint.svelte';
	import ShipModule from './ship_module.svelte';

	/** @type{import('$lib/generated/spacetraders/models/Ship').Ship}*/
	export let ship;
</script>

<h3 class="dark:text-white text-2xl mb-1">Ship ({ship.symbol})</h3>
<p class="dark:text-white mb-1">
	Registration: {ship.registration.name} - {ship.registration.factionSymbol} - {ship.registration
		.role}
</p>
<div class="grid grid-cols-2 gap-1">
	<div>
		<h4 class="dark:text-white text-xl mb-1">Navigation:</h4>
		<p class="px-2 dark:text-white">Status: {ship.nav.status}</p>
		<p class="px-2 dark:text-white">flightMode: {ship.nav.flightMode}</p>
		<p class="px-2 dark:text-white">
			Route:
			<RouteWaypoint waypoint={ship.nav.route.origin} />
			->
			<RouteWaypoint waypoint={ship.nav.route.destination} />
		</p>
	</div>
	<div>
		<h4 class="dark:text-white text-xl mb-1">Crew:</h4>
		<p class="px-2 dark:text-white">Wages: {ship.crew.wages}</p>
		<p class="px-2 dark:text-white">Morale: {ship.crew.morale}</p>
		<p class="px-2 dark:text-white">Current: {ship.crew.current}</p>
		<p class="px-2 dark:text-white">Capacity: {ship.crew.capacity}</p>
		<p class="px-2 dark:text-white">Required: {ship.crew.required}</p>
		<p class="px-2 dark:text-white">Rotation: {ship.crew.rotation}</p>
	</div>
	<div>
		<h4 class="dark:text-white text-xl mb-1">Cooldown:</h4>
		<p class="dark:text-white">symbol: {ship.cooldown.shipSymbol}</p>
		<p class="dark:text-white">total: {ship.cooldown.totalSeconds}</p>
		<p class="dark:text-white">remaining: {ship.cooldown.remainingSeconds}</p>
		{#if ship.cooldown.expiration}
			<p class="dark:text-white">expires: {ship.cooldown.expiration}</p>
		{/if}
	</div>
	<div>
		<h4 class="dark:text-white text-xl mb-1">Frame:</h4>
		<ShipModule module={ship.frame} />
	</div>
	<div>
		<h4 class="dark:text-white text-xl mb-1">Reactor:</h4>
		<ShipModule module={ship.reactor} />
	</div>
	<div>
		<h4 class="dark:text-white text-xl mb-1">Engine:</h4>
		<ShipModule module={ship.engine} />
	</div>
</div>
{#if ship.modules.length}
	<h4 class="dark:text-white text-xl mb-1">Modules:</h4>

	<div class="grid grid-cols-2 gap-1">
		{#each ship.modules as module}
			<div>
				<ShipModule {module} />
			</div>
		{/each}
	</div>
{/if}

<script>
	/**
	 * @typedef {import("$lib/generated/spacetraders").ShipModule} Module
	 * @typedef {import("$lib/generated/spacetraders").ShipEngine} Engine
	 * @typedef {import("$lib/generated/spacetraders").ShipFrame} Frame
	 * @typedef {import("$lib/generated/spacetraders").ShipReactor} Reactor
	 */
	/** @type {Partial<Module | Frame |  Engine | Reactor | *>} */
	export let module;
</script>

<p class="px-2 dark:text-white">symbol: {module.symbol}</p>
<p class="px-2 dark:text-white">name: {module.name}</p>
<p class="px-2 dark:text-white">description:<br />{module.description}</p>
{#if module.condition}
	<p class="px-2 dark:text-white">condition: {module.condition}</p>
{/if}
{#if module.capacity}
	<p class="px-2 dark:text-white">capacity: {module.capacity}</p>
{/if}
{#if module.range}
	<p class="px-2 dark:text-white">range: {module.range}</p>
{/if}
{#if module.moduleSlots}
	<p class="px-2 dark:text-white">moduleSlots: {module.moduleSlots}</p>
{/if}
{#if module.mountingPoints}
	<p class="px-2 dark:text-white">mountingPoints: {module.mountingPoints}</p>
{/if}
{#if module.fuelCapacity}
	<p class="px-2 dark:text-white">fuelCapacity: {module.fuelCapacity}</p>
{/if}
{#if module.powerOutput}
	<p class="px-2 dark:text-white">powerOutput: {module.powerOutput}</p>
{/if}
{#if module.speed}
	<p class="px-2 dark:text-white">speed: {module.speed}</p>
{/if}
{#if module.requirements}
	<h5 class="px-2 dark:text-white text-lg mb-1">Requirements:</h5>

	{#if module.requirements.power}
		<p class="px-4 dark:text-white mb-1">Power: {module.requirements.power}</p>
	{/if}
	{#if module.requirements.crew}
		<p class="px-4 dark:text-white mb-1">crew: {module.requirements.crew}</p>
	{/if}
	{#if module.requirements.slots}
		<p class="px-4 dark:text-white mb-1">slots: {module.requirements.slots}</p>
	{/if}
{/if}

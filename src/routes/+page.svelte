<script>
	import { navigating } from '$app/stores';
	import { Accordion, AccordionItem, Spinner } from 'flowbite-svelte';

	/** @type{import("./$types").PageData} */
	export let data;
	const { status } = data;
</script>

{#if $navigating}
	<Spinner />
{:else if status}
	<h2 class="dark:text-white text-2xl mb-1">Spacetraders API</h2>
	<p class="dark:text-white mb-1">{status.version}</p>
	<p class="dark:text-white mb-1">resetDate: {status.resetDate}</p>
	<p class="dark:text-white mb-1">{status.description}</p>
	<p class="dark:text-white mb-1">{status.status}</p>

	<h3 class="dark:text-white text-xl mb-1">Stats:</h3>
	<p class="px-4 dark:text-white mb-1">agents: {status.stats.agents}</p>
	<p class="px-4 dark:text-white mb-1">ships: {status.stats.ships}</p>
	<p class="px-4 dark:text-white mb-1">systems: {status.stats.systems}</p>
	<p class="px-4 dark:text-white mb-1">waypoints: {status.stats.waypoints}</p>

	<h3 class="dark:text-white text-xl mb-1">serverResets:</h3>
	<p class="px-4 dark:text-white mb-1">next: {status.serverResets.next}</p>
	<p class="px-4 dark:text-white mb-1">frequency: {status.serverResets.frequency}</p>

	<h3 class="dark:text-white text-xl mb-1">Announcements:</h3>
	<Accordion>
		{#each status.announcements as announcement}
			<AccordionItem dense>
				<span slot="header">{announcement.title}</span>
				<p class="dark:text-gray-500">{announcement.body}</p>
			</AccordionItem>
		{/each}
	</Accordion>
	<h3 class="dark:text-white text-xl mb-1">leaderboards:</h3>
	<div class="grid grid-cols-2 gap-1">
		<div>
			<h4 class="dark:text-white text-lg mb-1">mostCredits:</h4>
			{#each status.leaderboards.mostCredits.entries() as [key, item]}
				<p class="dark:text-gray-400">{key + 1}: {item.agentSymbol} - {item.credits}</p>
			{/each}
		</div>
		<div>
			<h4 class="dark:text-white text-lg mb-1">mostSubmittedCharts:</h4>
			{#each status.leaderboards.mostSubmittedCharts.entries() as [key, item]}
				<p class="dark:text-gray-400">{key + 1}: {item.agentSymbol} - {item.chartCount}</p>
			{/each}
		</div>
	</div>
{/if}

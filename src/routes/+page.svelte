<script>
	import { status } from '$lib/spacetraders';
	import { date_format } from '$lib';
	import { onMount } from 'svelte';

	const text = 'page';
	const status_store = status.store;

	onMount(() => {
		status.schedule();
	});
</script>

<h1>Hello {text}!</h1>
{#if $status_store}
	<h2>{$status_store.status}</h2>
    <h3>Reset Info</h3>
	<table>
		<tr>
			<td class="label">last reset:</td>
			<td class="value">{date_format($status_store.resetDate)}</td>
		</tr>
		<tr>
			<td class="label">next reset:</td>
			<td class="value">{date_format($status_store.serverResets.next)}</td>
		</tr>
	</table>
    <h3>Stats:</h3>
	<table>
		<tr>
			<td class="label">Agents:</td>
			<td class="value">{$status_store.stats.agents}</td>
		</tr>
		<tr>
			<td class="label">ships:</td>
			<td class="value">{$status_store.stats.ships}</td>
		</tr>
		<tr>
			<td class="label">systems:</td>
			<td class="value">{$status_store.stats.systems}</td>
		</tr>
		<tr>
			<td class="label">waypoints:</td>
			<td class="value">{$status_store.stats.waypoints}</td>
		</tr>
	</table>
{:else}
	<h2>we have an error</h2>
{/if}

<style>
	.label {
		padding-right: 1vw;
	}
</style>

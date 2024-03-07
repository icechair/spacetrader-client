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
	<p>
		<span class="label">last reset:</span>
		<span class="value">{date_format($status_store.resetDate)}</span><br />
		<span class="label">next reset:</span>
		<span class="value">{date_format($status_store.serverResets.next)}</span>
	</p>
{:else}
	<h2>we have an error</h2>
{/if}

<style>
</style>

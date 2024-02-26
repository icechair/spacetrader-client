<script>
	import { navigating } from '$app/stores';
	import { Spinner } from 'flowbite-svelte';

	/** @type{import("./$types").PageData} */
	export let data;
</script>

{#if $navigating}
	<Spinner />
{:else}
	<p class="dark:text-white mb-1">{data.status}</p>
{/if}

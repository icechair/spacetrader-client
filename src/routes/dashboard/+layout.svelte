<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { my_agent } from '$lib/store';

	/**@type {import('./$types').PageData}*/
	export let data;
	$my_agent = data.agent;
</script>

<slot />

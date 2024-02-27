<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	/**@type {import('./$types').PageData}*/
	export let data;
	/** @type {import('svelte/store').Writable<typeof data["agent"]>} */
	const agent = writable();
	$: agent.set(data.agent);

	setContext('agent', agent);
</script>

<slot />

<script>
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '../app.css';
	import { base } from '$app/paths';
	import Icon from '$lib/components/basic/Icon.svelte';
</script>

<nav>
	<Icon icon="rocket_launch" />
	<span> SpacetradersAPI Client </span>
</nav>

<div class="container">
	<slot />
</div>

<style>
</style>

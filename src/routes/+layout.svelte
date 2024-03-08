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
	<ul>
		<li><a href="{base}/dashboard">dashboard</a></li>
	</ul>
</nav>

<div class="container">
	<slot />
</div>

<style>
	:global(h1, h2, h3, h4, h5, h6) {
		margin-bottom: 0;
	}
	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	nav ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-basis: content;
		flex-grow: 1;
		justify-content: flex-end;
	}

	nav a {
		text-decoration: none;
		color: blue;
	}

	nav a:hover {
		text-decoration: underline;
		color: green;
	}
</style>

<script>
	import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav>
<slot />

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	nav a {
		color: #acb3be;
		text-decoration: none;
		font-weight: bold;
	}
</style>

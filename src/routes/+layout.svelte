<script>
	import { base } from '$app/paths';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
</script>

<nav>
	<span class="material-icons">face</span>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav>
<slot />

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
		font-family: 'Roboto', sans-serif;
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
	:global(.material-icons) {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 24px; /* Preferred icon size */
		display: inline-block;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		/* Support for all WebKit browsers. */
		-webkit-font-smoothing: antialiased;
		/* Support for Safari and Chrome. */
		text-rendering: optimizeLegibility;

		/* Support for Firefox. */
		-moz-osx-font-smoothing: grayscale;

		/* Support for IE. */
		font-feature-settings: 'liga';
	}
</style>

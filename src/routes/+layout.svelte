<script>
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '../app.css';
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import * as api from '$lib/spacetraders.js';
	import Icon from '$lib/components/basic/Icon.svelte';
</script>

<Navbar>
	<NavBrand href="{base}/">
		<Icon icon="rocket_launch" class="me-3 h-9 sm:h-9  text-4xl" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			SpacetradersAPI Client
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="{base}/">Home</NavLi>
		{#if api.accessToken()}{/if}
		<NavLi href="{base}/factions">Factions</NavLi>
	</NavUl>
</Navbar>

<div class="container p-4 mx-auto">
	<slot />
</div>

<style lang="postcss">
</style>

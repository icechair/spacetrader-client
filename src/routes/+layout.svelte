<script>
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '../app.css';
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="{base}/">
		<span class="me-3 h-6 sm:h-9 material-icons text-4xl">rocket_launch</span>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			SpacetradersAPI Client
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="{base}/">Home</NavLi>
	</NavUl>
</Navbar>

<slot />

<style lang="postcss">
</style>

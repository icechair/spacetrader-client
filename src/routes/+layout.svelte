<script>
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '../app.css';
	import { base } from '$app/paths';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger
	} from 'flowbite-svelte';
	import * as api from '$lib/spacetraders.js';
	import Icon from '$lib/components/basic/Icon.svelte';
	import { my_agent } from '$lib/store';
</script>

<Navbar>
	<NavBrand href="{base}/">
		<Icon icon="rocket_launch" class="me-3 h-9 sm:h-9  text-4xl" />
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white mr-4"
		>
			SpacetradersAPI Client
		</span>
		{#if $my_agent}
			<span class="self-center mr-4">{$my_agent.symbol}</span>
			<span class="self-center mr-4">Balance: {$my_agent.credits}$</span>
			<span class="self-center mr-4">Ships: {$my_agent.shipCount}</span>
		{/if}
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="{base}/dashboard">dashboard</NavLi>
	</NavUl>
</Navbar>

<div class="container p-4 mx-auto">
	<slot />
</div>

<style lang="postcss">
</style>

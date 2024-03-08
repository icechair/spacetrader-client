<script>
	import Icon from '$lib/components/basic/Icon.svelte';
	import { my_agent } from '$lib/spacetraders';
	import { onMount } from 'svelte';

	const agent_store = my_agent.store;
	onMount(() => {
		my_agent.schedule();
	});
</script>

{#if $agent_store}
	<div class="info-bar">
		<div class="info-bar-item">
			<span class="label">Agent:</span>
			<span class="value">{$agent_store.data.symbol}</span>
		</div>
		<div class="info-bar-item">
			<span class="value">{$agent_store.data.credits} Credits</span>
		</div>
		<div class="info-bar-item">
			<span class="label">
				<Icon icon="rocket_launch" />
			</span>
			<span class="value">{$agent_store.data.shipCount}</span>
		</div>
		<div class="info-bar-item">
			<span class="label">HQ:</span>
			<span class="value">{$agent_store.data.headquarters}</span>
		</div>
		<div class="info-bar-item">
			<span class="label">Faction:</span>
			<span class="value">{$agent_store.data.startingFaction}</span>
		</div>
	</div>
{/if}
<slot />

<style>
	.info-bar {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-items: center;
	}
	.info-bar-item {
		align-items: center;
		display: flex;
	}
	.label {
		padding-right: 1vw;
		align-items: center;
		display: flex;
	}
</style>

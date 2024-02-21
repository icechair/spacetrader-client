<script>
	import { get_factions } from '$lib/spacetrader/index.js';
	/** @typedef {import("$lib/spacetrader/spacetraders-sdk/models/GetFactions200Response").GetFactions200Response} FactionResponse */
	/**@type {FactionResponse["data"]}*/
	let factions = [];
	async function fetch_factions() {
		const res = await get_factions();
		factions = res.data;
	}
</script>

<h1>Spacetrader API Client</h1>
<button on:click={fetch_factions}>get factions</button>
{#if factions.length > 0}
	<ul>
		{#each factions as faction}
			<li>
				<div>Faction Name: {faction.name} ({faction.symbol})</div>
				<div>{faction.description}</div>
				<div>Headquarters: {faction.headquarters}</div>
				<div>Is Recruiting: {faction.isRecruiting ? 'yes' : 'no'}</div>
				<div>
					Traits:
					<ul>
						{#each faction.traits as trait}
							<li>
								<div>Name: {trait.name} ({trait.symbol})</div>
								<div>{trait.description}</div>
							</li>
						{/each}
					</ul>
				</div>
			</li>
		{/each}
	</ul>
{/if}

<script>
	import { WaypointType } from '$lib/generated/spacetraders';
	import { getContext } from 'svelte';

	/** @type{import('$lib/generated/spacetraders').SystemWaypoint} */
	export let wp;
	const fill = '#ffaabb';
	const stroke = '#bbaacc';
	wp.type;

	if (wp.type === WaypointType.Planet) {
	}
	/*
    Planet = 'PLANET',
    GasGiant = 'GAS_GIANT',
    Moon = 'MOON',
    OrbitalStation = 'ORBITAL_STATION',
    JumpGate = 'JUMP_GATE',
    AsteroidField = 'ASTEROID_FIELD',
    Asteroid = 'ASTEROID',
    EngineeredAsteroid = 'ENGINEERED_ASTEROID',
    AsteroidBase = 'ASTEROID_BASE',
    Nebula = 'NEBULA',
    DebrisField = 'DEBRIS_FIELD',
    GravityWell = 'GRAVITY_WELL',
    ArtificialGravityWell = 'ARTIFICIAL_GRAVITY_WELL',
    FuelStation = 'FUEL_STATION'
    */
	const drawers = {
		[WaypointType.Planet]: "public",
		[WaypointType.Asteroid]: "cookie",
		[WaypointType.FuelStation]: "local_gas_station",
		[WaypointType.JumpGate]: "outbound",
		[WaypointType.GasGiant]: "cloud_circle",
	};

	getContext('canvas').addItem(draw);
	/** @param {CanvasRenderingContext2D} ctx */
	function draw(ctx) {
		if ([WaypointType.Moon].includes(wp.type)) return;
        if(wp.orbits) return;
		ctx.save();
		ctx.translate(wp.x, wp.y);
		//label
		ctx.fillText(wp.symbol, 12, 10);
		ctx.fillText(wp.type, 12, 20);

		ctx.fillStyle = '#ff3300';
		ctx.strokeStyle = '#aa0033';
		ctx.font = "bold 24px 'Material Icons'";
        //@ts-ignore
		ctx.strokeText(drawers[wp.type] || 'close', -12, 12);

		ctx.restore();
	}
</script>

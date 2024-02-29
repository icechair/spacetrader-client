<script>
	import Canvas from './Canvas.svelte';
	import Waypoint from './Waypoint.svelte';

	export let symbol = '';
</script>

<div class="system-canvas flex flex-col flex-wrap">
	<h2 class="dark:text-white">System {symbol}</h2>
	<Canvas class="flex flex-auto">
        <Waypoint x={10} y={10} radius={5} stroke="#ff0000" fill="#00ff00" />
    </Canvas>
</div>

<style>
.system-canvas{
    height: 80vh;
}
</style>

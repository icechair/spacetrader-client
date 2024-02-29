<script>
	import { getContext } from 'svelte';

	export let x = 0;
	export let y = 0;
	export let radius = 10;
	export let stroke = '';
	export let fill = '';

	getContext('canvas').addItem(draw);
	/** @param {CanvasRenderingContext2D} ctx */
	function draw(ctx) {
		ctx.save();
		ctx.translate(x, y);
		if (fill) ctx.fillStyle = fill;
		if (stroke) ctx.strokeStyle = stroke;
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        if(fill) ctx.fill();
        if(stroke) ctx.stroke();
        ctx.restore();
	}
</script>

<script>
	import { afterUpdate, onMount, setContext, tick } from 'svelte';

	export let background = '#decade';
	let class_name = '';
	export { class_name as class };

	/**
	 * @callback CanvasDrawFn
	 * @param {CanvasRenderingContext2D} ctx
	 * @returns {void}
	 */

	/** @type {HTMLCanvasElement} */
	let canvas;

	/** @type {CanvasRenderingContext2D} */
	let ctx;

	/** @type {Set<CanvasDrawFn>} */
	let items = new Set();
	let scheduled = false;

	const viewport_transform = {
		x: 0,
		y: 0,
		scale: 1
	};

	let prev_mouse = { x: 0, y: 0 };
	let dragging = false;

	onMount(() => {
		let x = canvas.getContext('2d');
		if (x) ctx = x;
		resize();
		draw();
	});

	setContext('canvas', { addItem });

	/**
	 * @param {CanvasDrawFn} fn
	 */
	function addItem(fn) {
		onMount(() => {
			items.add(fn);
			return () => items.delete(fn);
		});

		afterUpdate(async () => {
			if (scheduled) return;
			scheduled = true;
			await tick();
			scheduled = false;
			draw();
		});
	}

	function resize() {
		const needs_resize =
			canvas.width !== canvas.clientWidth ||
			canvas.height !== canvas.clientHeight;
		if (needs_resize) {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			console.log('resize', canvas.width, canvas.height);
		}
	}

	function draw() {
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.restore();
		ctx.save();
		//dragging
		ctx.setTransform(
			viewport_transform.scale,
			0,
			0,
			viewport_transform.scale,
			viewport_transform.x + canvas.width / 2,
			viewport_transform.y + canvas.height / 2
		);

		for (const fn of items) {
			fn(ctx);
		}
		ctx.restore();
	}

	/** @param {MouseEvent} event */
	function handle_movement(event) {
		const { x, y } = event;
		const rect = canvas.getBoundingClientRect();
		const local_x = x - rect.x;
		const local_y = y - rect.y;

		if (dragging) {
			viewport_transform.x += local_x - prev_mouse.x; // * 0.01;
			viewport_transform.y += local_y - prev_mouse.y; // * 0.01;
			draw();
		}
		prev_mouse.x = local_x;
		prev_mouse.y = local_y;
	}

	/** @param {MouseEvent} event */
	function handle_mouse_down(event) {
		if (!dragging) {
			dragging = true;
			const { x, y } = event;
			const rect = canvas.getBoundingClientRect();
			const local_x = x - rect.x;
			const local_y = y - rect.y;
			prev_mouse.x = local_x;
			prev_mouse.y = local_y;
		}
	}

	/** @param {MouseEvent} event */
	function handle_mouse_up(event) {
		if (dragging) dragging = false;
	}

	/** @param {WheelEvent} event */
	function handle_wheel(event) {
		event.preventDefault();
		const { x, y } = event;
		const prev_x = viewport_transform.x;
		const prev_y = viewport_transform.y;
		const prev_scale = viewport_transform.scale;
		const rect = canvas.getBoundingClientRect();
		const local_x = x - rect.x - rect.width / 2;
		const local_y = y - rect.y - rect.height / 2;
		viewport_transform.scale += event.deltaY * -0.001;

		const new_scale = viewport_transform.scale;
		const new_x = local_x - (local_x - prev_x) * (new_scale / prev_scale);
		const new_y = local_y - (local_y - prev_y) * (new_scale / prev_scale);

		viewport_transform.x = new_x;
		viewport_transform.y = new_y;
		viewport_transform.scale = new_scale;
		draw();

		return false;
	}
</script>

<canvas
	bind:this={canvas}
	class={class_name}
	on:mousemove={handle_movement}
	on:mousedown={handle_mouse_down}
	on:mouseup={handle_mouse_up}
	on:wheel={handle_wheel}
>
	<slot />
</canvas>

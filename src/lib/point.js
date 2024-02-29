export class Point {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	/** @param {Point} o*/
	add(o) {
		return new Point(this.x + o.x, this.y + o.y);
	}

	/** @param {Point} o*/
	sub(o) {
		return new Point(this.x - o.x, this.y - o.y);
	}
}

import { Vector2 } from './Vector2.js';

export class BoundingBox2D {
  constructor(min = new Vector2(Infinity, Infinity), max = new Vector2(-Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
  }

  set(minX, minY, maxX, maxY) {
    this.min.set(minX, minY);
    this.max.set(maxX, maxY);
    return this;
  }

  setFromCenterAndSize(center, size) {
    const halfW = size.x / 2;
    const halfH = size.y / 2;
    this.min.set(center.x - halfW, center.y - halfH);
    this.max.set(center.x + halfW, center.y + halfH);
    return this;
  }

  setFromPoints(points) {
    this.min.set(Infinity, Infinity);
    this.max.set(-Infinity, -Infinity);
    for (let i = 0; i < points.length; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }

  expandByPoint(p) {
    this.min.x = Math.min(this.min.x, p.x);
    this.min.y = Math.min(this.min.y, p.y);
    this.max.x = Math.max(this.max.x, p.x);
    this.max.y = Math.max(this.max.y, p.y);
    return this;
  }

  expandByScalar(s) {
    this.min.x -= s;
    this.min.y -= s;
    this.max.x += s;
    this.max.y += s;
    return this;
  }

  containsPoint(p) {
    return p.x >= this.min.x && p.x <= this.max.x &&
           p.y >= this.min.y && p.y <= this.max.y;
  }

  intersectsBox(box) {
    return !(box.max.x < this.min.x || box.min.x > this.max.x ||
             box.max.y < this.min.y || box.min.y > this.max.y);
  }

  getCenter(out = new Vector2()) {
    out.x = (this.min.x + this.max.x) * 0.5;
    out.y = (this.min.y + this.max.y) * 0.5;
    return out;
  }

  getSize(out = new Vector2()) {
    out.x = this.max.x - this.min.x;
    out.y = this.max.y - this.min.y;
    return out;
  }

  clone() {
    return new BoundingBox2D(this.min.clone(), this.max.clone());
  }
}

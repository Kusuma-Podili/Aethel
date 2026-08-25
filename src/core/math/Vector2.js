/**
 * @file Vector2.js
 * @description High-performance 2D Vector mathematics for game engine physics, movement, and geometry.
 */

export class Vector2 {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  divideScalar(s) {
    if (s !== 0) {
      this.x /= s;
      this.y /= s;
    } else {
      this.x = 0;
      this.y = 0;
    }
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.hypot(this.x, this.y);
  }

  normalize() {
    const len = this.length();
    if (len > 1e-6) {
      this.x /= len;
      this.y /= len;
    } else {
      this.x = 0;
      this.y = 0;
    }
    return this;
  }

  distanceTo(v) {
    return Math.hypot(this.x - v.x, this.y - v.y);
  }

  distanceToSq(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return dx * dx + dy * dy;
  }

  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  angleTo(v) {
    const dot = this.dot(v);
    const len = this.length() * v.length();
    if (len === 0) return 0;
    return Math.acos(Math.max(-1, Math.min(1, dot / len)));
  }

  rotate(radians) {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const rx = this.x * cos - this.y * sin;
    const ry = this.x * sin + this.y * cos;
    this.x = rx;
    this.y = ry;
    return this;
  }

  rotateAround(center, radians) {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const cx = this.x - center.x;
    const cy = this.y - center.y;
    this.x = cx * cos - cy * sin + center.x;
    this.y = cx * sin + cy * cos + center.y;
    return this;
  }

  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }

  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }

  clampLength(min, max) {
    const len = this.length();
    if (len === 0) return this;
    const clampedLen = Math.max(min, Math.min(max, len));
    return this.scale(clampedLen / len);
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  perpendicular() {
    const temp = this.x;
    this.x = -this.y;
    this.y = temp;
    return this;
  }

  reflect(normal) {
    const dot2 = 2 * this.dot(normal);
    this.x -= dot2 * normal.x;
    this.y -= dot2 * normal.y;
    return this;
  }

  project(normal) {
    const n = normal.clone().normalize();
    const d = this.dot(n);
    this.x = n.x * d;
    this.y = n.y * d;
    return this;
  }

  equals(v, epsilon = 1e-6) {
    return Math.abs(this.x - v.x) <= epsilon && Math.abs(this.y - v.y) <= epsilon;
  }

  toArray() {
    return [this.x, this.y];
  }

  fromArray(arr, offset = 0) {
    this.x = arr[offset];
    this.y = arr[offset + 1];
    return this;
  }

  static zero() {
    return new Vector2(0, 0);
  }

  static one() {
    return new Vector2(1, 1);
  }

  static up() {
    return new Vector2(0, -1);
  }

  static down() {
    return new Vector2(0, 1);
  }

  static left() {
    return new Vector2(-1, 0);
  }

  static right() {
    return new Vector2(1, 0);
  }

  static fromAngle(radians, length = 1) {
    return new Vector2(Math.cos(radians) * length, Math.sin(radians) * length);
  }

  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}

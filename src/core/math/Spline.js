import { Vector2 } from './Vector2.js';

export class CatmullRomSpline2D {
  constructor(points = [], closed = false) {
    this.points = points;
    this.closed = closed;
  }

  addPoint(p) {
    this.points.push(p);
  }

  getPoint(t, out = new Vector2()) {
    const pts = this.points;
    const len = pts.length;
    if (len < 2) return out.copy(pts[0] || Vector2.zero());

    const p = (len - (this.closed ? 0 : 1)) * t;
    let intPoint = Math.floor(p);
    let weight = p - intPoint;

    if (this.closed) {
      intPoint += intPoint > 0 ? 0 : (Math.floor(Math.abs(intPoint) / len) + 1) * len;
    } else if (weight === 0 && intPoint === len - 1) {
      intPoint = len - 2;
      weight = 1;
    }

    let p0, p1, p2, p3;
    if (this.closed || intPoint > 0) {
      p0 = pts[(intPoint - 1) % len];
    } else {
      p0 = pts[0].clone().sub(pts[1]).add(pts[0]);
    }

    p1 = pts[intPoint % len];
    p2 = pts[(intPoint + 1) % len];

    if (this.closed || intPoint + 2 < len) {
      p3 = pts[(intPoint + 2) % len];
    } else {
      p3 = pts[len - 1].clone().sub(pts[len - 2]).add(pts[len - 1]);
    }

    const t2 = weight * weight;
    const t3 = weight * t2;

    out.x = 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * weight + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
    out.y = 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * weight + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);

    return out;
  }
}

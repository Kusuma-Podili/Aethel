import { Vector2 } from '../core/math/Vector2.js';

export class Ray2D {
  constructor(origin = new Vector2(), direction = new Vector2(1, 0), maxDistance = Infinity) {
    this.origin = origin;
    this.direction = direction.clone().normalize();
    this.maxDistance = maxDistance;
  }
}

export class RaycastHit2D {
  constructor() {
    this.hit = false;
    this.point = new Vector2();
    this.normal = new Vector2();
    this.fraction = 1.0;
    this.distance = Infinity;
    this.collider = null;
  }

  reset() {
    this.hit = false;
    this.point.set(0, 0);
    this.normal.set(0, 0);
    this.fraction = 1.0;
    this.distance = Infinity;
    this.collider = null;
  }
}

export class Raycast2D {
  static intersectCircle(ray, center, radius, outHit) {
    outHit.reset();
    const d = ray.origin.clone().sub(center);
    const b = d.dot(ray.direction);
    const c = d.dot(d) - radius * radius;

    if (c > 0 && b > 0) return false;

    const discr = b * b - c;
    if (discr < 0) return false;

    let t = -b - Math.sqrt(discr);
    if (t < 0) t = 0;

    if (t <= ray.maxDistance) {
      outHit.hit = true;
      outHit.distance = t;
      outHit.fraction = t / ray.maxDistance;
      outHit.point.copy(ray.origin).add(ray.direction.clone().scale(t));
      outHit.normal.copy(outHit.point).sub(center).normalize();
      return true;
    }

    return false;
  }

  static intersectSegment(p1, p2, p3, p4, outIntersection) {
    const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y;
    const x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;

    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (Math.abs(denom) < 1e-6) return false;

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
      outIntersection.x = x1 + ua * (x2 - x1);
      outIntersection.y = y1 + ua * (y2 - y1);
      return true;
    }
    return false;
  }
}

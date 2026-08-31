import { Vector2 } from '../core/math/Vector2.js';
import { ColliderShape } from './Collider2D.js';

export class ContactManifold {
  constructor() {
    this.collided = false;
    this.normal = new Vector2(); // Normal pointing from collider A to B
    this.depth = 0;              // Penetration depth
    this.contactPoints = [];     // Array of Vector2
    this.colliderA = null;
    this.colliderB = null;
  }

  reset() {
    this.collided = false;
    this.normal.set(0, 0);
    this.depth = 0;
    this.contactPoints.length = 0;
    this.colliderA = null;
    this.colliderB = null;
  }
}

export class SATCollision {
  static testCollision(colA, colB, manifold) {
    manifold.reset();
    manifold.colliderA = colA;
    manifold.colliderB = colB;

    if (colA.shapeType === ColliderShape.CIRCLE && colB.shapeType === ColliderShape.CIRCLE) {
      return this._circleCircle(colA, colB, manifold);
    } else if (colA.shapeType === ColliderShape.POLYGON && colB.shapeType === ColliderShape.POLYGON) {
      return this._polygonPolygon(colA, colB, manifold);
    } else if (colA.shapeType === ColliderShape.CIRCLE && colB.shapeType === ColliderShape.POLYGON) {
      const hit = this._polygonCircle(colB, colA, manifold);
      if (hit) manifold.normal.negate();
      return hit;
    } else if (colA.shapeType === ColliderShape.POLYGON && colB.shapeType === ColliderShape.CIRCLE) {
      return this._polygonCircle(colA, colB, manifold);
    }
    return false;
  }

  static _circleCircle(cA, cB, manifold) {
    const d = cB.worldCenter.clone().sub(cA.worldCenter);
    const distSq = d.lengthSq();
    const rSum = cA.radius + cB.radius;

    if (distSq >= rSum * rSum) {
      return false;
    }

    const dist = Math.sqrt(distSq);
    manifold.collided = true;
    manifold.depth = rSum - dist;

    if (dist > 1e-6) {
      manifold.normal.copy(d).scale(1 / dist);
    } else {
      manifold.normal.set(1, 0);
    }

    const contact = cA.worldCenter.clone().add(manifold.normal.clone().scale(cA.radius));
    manifold.contactPoints.push(contact);

    return true;
  }

  static _polygonPolygon(pA, pB, manifold) {
    let minOverlap = Infinity;
    let smallestAxis = new Vector2();

    const vertsA = pA.worldVertices;
    const vertsB = pB.worldVertices;

    // Test axes of polygon A
    for (let i = 0; i < vertsA.length; i++) {
      const p1 = vertsA[i];
      const p2 = vertsA[(i + 1) % vertsA.length];
      const edge = p2.clone().sub(p1);
      const axis = new Vector2(-edge.y, edge.x).normalize();

      const projA = this._projectVertices(vertsA, axis);
      const projB = this._projectVertices(vertsB, axis);

      const overlap = Math.min(projA.max, projB.max) - Math.max(projA.min, projB.min);
      if (overlap <= 0) return false;

      if (overlap < minOverlap) {
        minOverlap = overlap;
        smallestAxis.copy(axis);
      }
    }

    // Test axes of polygon B
    for (let i = 0; i < vertsB.length; i++) {
      const p1 = vertsB[i];
      const p2 = vertsB[(i + 1) % vertsB.length];
      const edge = p2.clone().sub(p1);
      const axis = new Vector2(-edge.y, edge.x).normalize();

      const projA = this._projectVertices(vertsA, axis);
      const projB = this._projectVertices(vertsB, axis);

      const overlap = Math.min(projA.max, projB.max) - Math.max(projA.min, projB.min);
      if (overlap <= 0) return false;

      if (overlap < minOverlap) {
        minOverlap = overlap;
        smallestAxis.copy(axis);
      }
    }

    // Ensure normal points from A to B
    const centerA = pA.bounds.getCenter();
    const centerB = pB.bounds.getCenter();
    if (centerB.sub(centerA).dot(smallestAxis) < 0) {
      smallestAxis.negate();
    }

    manifold.collided = true;
    manifold.normal.copy(smallestAxis);
    manifold.depth = minOverlap;

    return true;
  }

  static _polygonCircle(poly, circle, manifold) {
    let minOverlap = Infinity;
    let smallestAxis = new Vector2();
    const verts = poly.worldVertices;

    // Polygon edge normals
    for (let i = 0; i < verts.length; i++) {
      const p1 = verts[i];
      const p2 = verts[(i + 1) % verts.length];
      const edge = p2.clone().sub(p1);
      const axis = new Vector2(-edge.y, edge.x).normalize();

      const projP = this._projectVertices(verts, axis);
      const projC = this._projectCircle(circle.worldCenter, circle.radius, axis);

      const overlap = Math.min(projP.max, projC.max) - Math.max(projP.min, projC.min);
      if (overlap <= 0) return false;

      if (overlap < minOverlap) {
        minOverlap = overlap;
        smallestAxis.copy(axis);
      }
    }

    // Closest vertex to circle center
    let closestVert = verts[0];
    let minDistSq = circle.worldCenter.distanceToSq(closestVert);
    for (let i = 1; i < verts.length; i++) {
      const distSq = circle.worldCenter.distanceToSq(verts[i]);
      if (distSq < minDistSq) {
        minDistSq = distSq;
        closestVert = verts[i];
      }
    }

    const circleAxis = circle.worldCenter.clone().sub(closestVert).normalize();
    if (circleAxis.lengthSq() > 1e-6) {
      const projP = this._projectVertices(verts, circleAxis);
      const projC = this._projectCircle(circle.worldCenter, circle.radius, circleAxis);

      const overlap = Math.min(projP.max, projC.max) - Math.max(projP.min, projC.min);
      if (overlap <= 0) return false;

      if (overlap < minOverlap) {
        minOverlap = overlap;
        smallestAxis.copy(circleAxis);
      }
    }

    const centerP = poly.bounds.getCenter();
    if (circle.worldCenter.clone().sub(centerP).dot(smallestAxis) < 0) {
      smallestAxis.negate();
    }

    manifold.collided = true;
    manifold.normal.copy(smallestAxis);
    manifold.depth = minOverlap;

    return true;
  }

  static _projectVertices(vertices, axis) {
    let min = vertices[0].dot(axis);
    let max = min;
    for (let i = 1; i < vertices.length; i++) {
      const p = vertices[i].dot(axis);
      if (p < min) min = p;
      if (p > max) max = p;
    }
    return { min, max };
  }

  static _projectCircle(center, radius, axis) {
    const centerProj = center.dot(axis);
    return {
      min: centerProj - radius,
      max: centerProj + radius
    };
  }
}

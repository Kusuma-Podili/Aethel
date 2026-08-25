import { Vector2 } from '../core/math/Vector2.js';
import { BoundingBox2D } from '../core/math/BoundingBox2D.js';

export const ColliderShape = {
  CIRCLE: 0,
  BOX: 1,
  POLYGON: 2
};

export class Collider2D {
  constructor(shapeType) {
    this.shapeType = shapeType;
    this.offset = new Vector2();
    this.bounds = new BoundingBox2D();
    this.isTrigger = false;
    this.categoryBits = 0x0001;
    this.maskBits = 0xFFFF;
    this.body = null;
  }

  updateBounds(worldPos, worldRot) {
    // Override in derived classes
  }
}

export class CircleCollider extends Collider2D {
  constructor(radius = 16) {
    super(ColliderShape.CIRCLE);
    this.radius = radius;
    this.worldCenter = new Vector2();
  }

  updateBounds(worldPos, worldRot) {
    this.worldCenter.copy(this.offset).rotate(worldRot).add(worldPos);
    this.bounds.set(
      this.worldCenter.x - this.radius,
      this.worldCenter.y - this.radius,
      this.worldCenter.x + this.radius,
      this.worldCenter.y + this.radius
    );
  }
}

export class PolygonCollider extends Collider2D {
  constructor(vertices = []) {
    super(ColliderShape.POLYGON);
    this.localVertices = vertices; // Array of Vector2 in counter-clockwise order
    this.worldVertices = vertices.map(v => v.clone());
    this.normals = [];
    this._computeNormals();
  }

  static createBox(width, height) {
    const hw = width / 2;
    const hh = height / 2;
    return new PolygonCollider([
      new Vector2(-hw, -hh),
      new Vector2(hw, -hh),
      new Vector2(hw, hh),
      new Vector2(-hw, hh)
    ]);
  }

  _computeNormals() {
    this.normals = [];
    const len = this.localVertices.length;
    for (let i = 0; i < len; i++) {
      const p1 = this.localVertices[i];
      const p2 = this.localVertices[(i + 1) % len];
      const edge = p2.clone().sub(p1);
      const normal = new Vector2(-edge.y, edge.x).normalize();
      this.normals.push(normal);
    }
  }

  updateBounds(worldPos, worldRot) {
    this.bounds.set(Infinity, Infinity, -Infinity, -Infinity);
    const len = this.localVertices.length;

    for (let i = 0; i < len; i++) {
      const v = this.worldVertices[i];
      v.copy(this.localVertices[i]).rotate(worldRot).add(this.offset).add(worldPos);
      this.bounds.expandByPoint(v);
    }
  }
}

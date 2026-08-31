import { BoundingBox2D } from '../math/BoundingBox2D.js';
import { Vector2 } from '../math/Vector2.js';

export class BVHNode {
  constructor() {
    this.box = new BoundingBox2D();
    this.left = null;
    this.right = null;
    this.item = null;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }
}

export class BVH {
  constructor() {
    this.root = null;
  }

  build(items) {
    if (!items || items.length === 0) {
      this.root = null;
      return;
    }
    this.root = this._buildRecursive(items);
  }

  _buildRecursive(items) {
    const node = new BVHNode();

    if (items.length === 1) {
      node.item = items[0];
      node.box = items[0].box.clone();
      return node;
    }

    // Compute enclosing bounding box
    node.box.setFromPoints([]);
    for (let i = 0; i < items.length; i++) {
      node.box.expandByPoint(items[i].box.min);
      node.box.expandByPoint(items[i].box.max);
    }

    // Split along largest axis
    const size = node.box.getSize();
    const axis = size.x > size.y ? 'x' : 'y';

    items.sort((a, b) => {
      const cA = a.box.getCenter();
      const cB = b.box.getCenter();
      return cA[axis] - cB[axis];
    });

    const mid = Math.floor(items.length / 2);
    node.left = this._buildRecursive(items.slice(0, mid));
    node.right = this._buildRecursive(items.slice(mid));

    return node;
  }

  query(targetBox, out = []) {
    if (!this.root) return out;
    this._queryRecursive(this.root, targetBox, out);
    return out;
  }

  _queryRecursive(node, targetBox, out) {
    if (!node.box.intersectsBox(targetBox)) return;

    if (node.isLeaf()) {
      if (node.item) out.push(node.item);
      return;
    }

    if (node.left) this._queryRecursive(node.left, targetBox, out);
    if (node.right) this._queryRecursive(node.right, targetBox, out);
  }
}

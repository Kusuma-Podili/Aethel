import { BoundingBox2D } from '../math/BoundingBox2D.js';
import { Vector2 } from '../math/Vector2.js';

export class QuadTree {
  /**
   * @param {BoundingBox2D} boundary
   * @param {number} capacity
   * @param {number} maxDepth
   * @param {number} depth
   */
  constructor(boundary, capacity = 8, maxDepth = 6, depth = 0) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.maxDepth = maxDepth;
    this.depth = depth;
    this.items = [];
    this.divided = false;

    this.northwest = null;
    this.northeast = null;
    this.southwest = null;
    this.southeast = null;
  }

  subdivide() {
    const min = this.boundary.min;
    const max = this.boundary.max;
    const midX = (min.x + max.x) * 0.5;
    const midY = (min.y + max.y) * 0.5;

    this.northwest = new QuadTree(new BoundingBox2D(new Vector2(min.x, min.y), new Vector2(midX, midY)), this.capacity, this.maxDepth, this.depth + 1);
    this.northeast = new QuadTree(new BoundingBox2D(new Vector2(midX, min.y), new Vector2(max.x, midY)), this.capacity, this.maxDepth, this.depth + 1);
    this.southwest = new QuadTree(new BoundingBox2D(new Vector2(min.x, midY), new Vector2(midX, max.y)), this.capacity, this.maxDepth, this.depth + 1);
    this.southeast = new QuadTree(new BoundingBox2D(new Vector2(midX, midY), new Vector2(max.x, max.y)), this.capacity, this.maxDepth, this.depth + 1);

    this.divided = true;

    // Distribute existing items to children
    const oldItems = this.items;
    this.items = [];
    for (let i = 0; i < oldItems.length; i++) {
      this.insert(oldItems[i]);
    }
  }

  insert(item) {
    const pos = item.position || item;
    if (!this.boundary.containsPoint(pos)) {
      return false;
    }

    if (!this.divided) {
      if (this.items.length < this.capacity || this.depth >= this.maxDepth) {
        this.items.push(item);
        return true;
      }
      this.subdivide();
    }

    return (
      this.northwest.insert(item) ||
      this.northeast.insert(item) ||
      this.southwest.insert(item) ||
      this.southeast.insert(item)
    );
  }

  queryRange(range, found = []) {
    if (!this.boundary.intersectsBox(range)) {
      return found;
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const pos = item.position || item;
      if (range.containsPoint(pos)) {
        found.push(item);
      }
    }

    if (this.divided) {
      this.northwest.queryRange(range, found);
      this.northeast.queryRange(range, found);
      this.southwest.queryRange(range, found);
      this.southeast.queryRange(range, found);
    }

    return found;
  }

  queryRadius(center, radius, found = []) {
    const rSq = radius * radius;
    const box = new BoundingBox2D(
      new Vector2(center.x - radius, center.y - radius),
      new Vector2(center.x + radius, center.y + radius)
    );

    const candidates = this.queryRange(box);
    for (let i = 0; i < candidates.length; i++) {
      const item = candidates[i];
      const pos = item.position || item;
      if (Vector2.distance(center, pos) <= radius) {
        found.push(item);
      }
    }
    return found;
  }

  clear() {
    this.items = [];
    if (this.divided) {
      this.northwest.clear();
      this.northeast.clear();
      this.southwest.clear();
      this.southeast.clear();
      this.northwest = null;
      this.northeast = null;
      this.southwest = null;
      this.southeast = null;
      this.divided = false;
    }
  }

  getAllItems(result = []) {
    for (let i = 0; i < this.items.length; i++) {
      result.push(this.items[i]);
    }
    if (this.divided) {
      this.northwest.getAllItems(result);
      this.northeast.getAllItems(result);
      this.southwest.getAllItems(result);
      this.southeast.getAllItems(result);
    }
    return result;
  }
}

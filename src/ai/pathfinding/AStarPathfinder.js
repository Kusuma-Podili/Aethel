import { Vector2 } from '../../core/math/Vector2.js';

class PriorityQueue {
  constructor() {
    this.elements = [];
  }
  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.elements.shift()?.element;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}

export class AStarPathfinder {
  /**
   * @param {number} width Grid width
   * @param {number} height Grid height
   * @param {Function} isWalkableFn (x, y) => boolean
   */
  constructor(width, height, isWalkableFn) {
    this.width = width;
    this.height = height;
    this.isWalkable = isWalkableFn;
  }

  findPath(startX, startY, goalX, goalY) {
    if (!this.isWalkable(goalX, goalY)) {
      // Find closest walkable neighbor to goal
      const neighbors = this._getNeighbors(goalX, goalY);
      if (neighbors.length > 0) {
        goalX = neighbors[0].x;
        goalY = neighbors[0].y;
      } else {
        return [];
      }
    }

    const startKey = `${startX}:${startY}`;
    const goalKey = `${goalX}:${goalY}`;

    const frontier = new PriorityQueue();
    frontier.enqueue({ x: startX, y: startY }, 0);

    const cameFrom = new Map();
    const costSoFar = new Map();

    cameFrom.set(startKey, null);
    costSoFar.set(startKey, 0);

    while (!frontier.isEmpty()) {
      const current = frontier.dequeue();
      const currentKey = `${current.x}:${current.y}`;

      if (current.x === goalX && current.y === goalY) {
        break;
      }

      const neighbors = this._getNeighbors(current.x, current.y);
      for (let i = 0; i < neighbors.length; i++) {
        const next = neighbors[i];
        const nextKey = `${next.x}:${next.y}`;
        const moveCost = (next.x !== current.x && next.y !== current.y) ? 1.414 : 1.0;
        const newCost = costSoFar.get(currentKey) + moveCost;

        if (!costSoFar.has(nextKey) || newCost < costSoFar.get(nextKey)) {
          costSoFar.set(nextKey, newCost);
          const priority = newCost + this._heuristic(next.x, next.y, goalX, goalY);
          frontier.enqueue(next, priority);
          cameFrom.set(nextKey, current);
        }
      }
    }

    // Reconstruct path
    const path = [];
    let curr = { x: goalX, y: goalY };
    let currKey = `${curr.x}:${curr.y}`;

    if (!cameFrom.has(currKey)) return []; // No path found

    while (curr) {
      path.push(new Vector2(curr.x, curr.y));
      curr = cameFrom.get(currKey);
      if (curr) currKey = `${curr.x}:${curr.y}`;
    }

    path.reverse();
    return path;
  }

  _heuristic(x1, y1, x2, y2) {
    const dx = Math.abs(x1 - x2);
    const dy = Math.abs(y1 - y2);
    return (dx + dy) + (1.414 - 2) * Math.min(dx, dy); // Octile distance
  }

  _getNeighbors(cx, cy) {
    const res = [];
    const dirs = [
      { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 },
      { x: 1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }
    ];

    for (let i = 0; i < dirs.length; i++) {
      const nx = cx + dirs[i].x;
      const ny = cy + dirs[i].y;
      if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height && this.isWalkable(nx, ny)) {
        // Prevent diagonal corner cutting
        if (i >= 4) {
          const adj1 = this.isWalkable(cx + dirs[i].x, cy);
          const adj2 = this.isWalkable(cx, cy + dirs[i].y);
          if (!adj1 || !adj2) continue;
        }
        res.push({ x: nx, y: ny });
      }
    }
    return res;
  }
}

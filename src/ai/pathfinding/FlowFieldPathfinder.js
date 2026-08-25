import { Vector2 } from '../../core/math/Vector2.js';

export class FlowFieldPathfinder {
  constructor(width, height, isWalkableFn) {
    this.width = width;
    this.height = height;
    this.isWalkable = isWalkableFn;

    this.integrationField = new Float32Array(width * height);
    this.flowVectors = Array.from({ length: width * height }, () => new Vector2());
  }

  generate(targetX, targetY) {
    this.integrationField.fill(65535);

    const targetIdx = targetY * this.width + targetX;
    this.integrationField[targetIdx] = 0;

    const queue = [{ x: targetX, y: targetY }];
    const dirs = [
      { x: 0, y: -1, cost: 1.0 },
      { x: 1, y: 0, cost: 1.0 },
      { x: 0, y: 1, cost: 1.0 },
      { x: -1, y: 0, cost: 1.0 },
      { x: 1, y: -1, cost: 1.414 },
      { x: 1, y: 1, cost: 1.414 },
      { x: -1, y: 1, cost: 1.414 },
      { x: -1, y: -1, cost: 1.414 }
    ];

    // 1. Dijkstra wave expansion
    while (queue.length > 0) {
      const curr = queue.shift();
      const currIdx = curr.y * this.width + curr.x;
      const currCost = this.integrationField[currIdx];

      for (let i = 0; i < dirs.length; i++) {
        const nx = curr.x + dirs[i].x;
        const ny = curr.y + dirs[i].y;
        if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) continue;
        if (!this.isWalkable(nx, ny)) continue;

        const nextIdx = ny * this.width + nx;
        const newCost = currCost + dirs[i].cost;

        if (newCost < this.integrationField[nextIdx]) {
          this.integrationField[nextIdx] = newCost;
          queue.push({ x: nx, y: ny });
        }
      }
    }

    // 2. Vector gradient field computation
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = y * this.width + x;
        if (!this.isWalkable(x, y)) {
          this.flowVectors[idx].set(0, 0);
          continue;
        }

        let lowestCost = this.integrationField[idx];
        let bestDir = new Vector2(0, 0);

        for (let i = 0; i < dirs.length; i++) {
          const nx = x + dirs[i].x;
          const ny = y + dirs[i].y;
          if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) continue;
          const nCost = this.integrationField[ny * this.width + nx];
          if (nCost < lowestCost) {
            lowestCost = nCost;
            bestDir.set(dirs[i].x, dirs[i].y).normalize();
          }
        }

        this.flowVectors[idx].copy(bestDir);
      }
    }
  }

  getFlowVector(worldGridX, worldGridY) {
    if (worldGridX < 0 || worldGridX >= this.width || worldGridY < 0 || worldGridY >= this.height) {
      return Vector2.zero();
    }
    return this.flowVectors[worldGridY * this.width + worldGridX];
  }
}

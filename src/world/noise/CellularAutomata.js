export class CellularAutomata {
  static generateCaveMap(width, height, fillProbability = 0.45, iterations = 5) {
    let map = new Uint8Array(width * height);

    // Initial random noise fill (1 = Wall, 0 = Floor)
    for (let i = 0; i < width * height; i++) {
      map[i] = Math.random() < fillProbability ? 1 : 0;
    }

    // Set borders to walls
    for (let x = 0; x < width; x++) {
      map[x] = 1;
      map[(height - 1) * width + x] = 1;
    }
    for (let y = 0; y < height; y++) {
      map[y * width] = 1;
      map[y * width + (width - 1)] = 1;
    }

    // Simulation steps (4-5 rule)
    for (let iter = 0; iter < iterations; iter++) {
      const nextMap = new Uint8Array(width * height);
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const neighbors = this._countWallNeighbors(map, width, height, x, y);
          if (neighbors >= 5) {
            nextMap[y * width + x] = 1;
          } else if (neighbors <= 3) {
            nextMap[y * width + x] = 0;
          } else {
            nextMap[y * width + x] = map[y * width + x];
          }
        }
      }
      map = nextMap;
    }

    return map;
  }

  static _countWallNeighbors(map, width, height, cx, cy) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
          count++;
        } else if (map[ny * width + nx] === 1) {
          count++;
        }
      }
    }
    return count;
  }
}

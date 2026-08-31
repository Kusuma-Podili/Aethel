export class TileRule {
  /**
   * @param {number} id Tile ID
   * @param {number[]} north Allowed neighbor tile IDs on North
   * @param {number[]} east Allowed neighbor tile IDs on East
   * @param {number[]} south Allowed neighbor tile IDs on South
   * @param {number[]} west Allowed neighbor tile IDs on West
   * @param {number} weight Generation weight probability
   */
  constructor(id, north, east, south, west, weight = 1.0) {
    this.id = id;
    this.allowed = {
      0: north, // N
      1: east,  // E
      2: south, // S
      3: west   // W
    };
    this.weight = weight;
  }
}

export class WaveFunctionCollapse {
  constructor(width, height, rules) {
    this.width = width;
    this.height = height;
    this.rules = rules;
    this.ruleMap = new Map();
    for (const r of rules) this.ruleMap.set(r.id, r);

    this.allTileIds = rules.map(r => r.id);
    this.grid = []; // Array of Set<tileId>
    this.collapsed = new Int32Array(width * height).fill(-1);

    this._initGrid();
  }

  _initGrid() {
    this.grid = [];
    for (let i = 0; i < this.width * this.height; i++) {
      this.grid.push(new Set(this.allTileIds));
    }
  }

  collapse() {
    let maxSteps = this.width * this.height * 2;
    while (!this.isFullyCollapsed() && maxSteps-- > 0) {
      const minIndex = this._findLowestEntropyCell();
      if (minIndex === -1) break;

      this._collapseCell(minIndex);
      this._propagate(minIndex);
    }
    return this.collapsed;
  }

  isFullyCollapsed() {
    for (let i = 0; i < this.collapsed.length; i++) {
      if (this.collapsed[i] === -1) return false;
    }
    return true;
  }

  _findLowestEntropyCell() {
    let minEntropy = Infinity;
    let minIdx = -1;

    for (let i = 0; i < this.grid.length; i++) {
      if (this.collapsed[i] !== -1) continue;
      const count = this.grid[i].size;
      if (count === 0) continue; // Contradiction
      if (count < minEntropy) {
        minEntropy = count;
        minIdx = i;
      }
    }
    return minIdx;
  }

  _collapseCell(idx) {
    const possibilities = Array.from(this.grid[idx]);
    if (possibilities.length === 0) {
      this.collapsed[idx] = this.allTileIds[0];
      return;
    }

    // Weighted random selection
    let totalWeight = 0;
    for (const id of possibilities) {
      totalWeight += this.ruleMap.get(id).weight;
    }

    let r = Math.random() * totalWeight;
    let selected = possibilities[0];
    for (const id of possibilities) {
      r -= this.ruleMap.get(id).weight;
      if (r <= 0) {
        selected = id;
        break;
      }
    }

    this.collapsed[idx] = selected;
    this.grid[idx].clear();
    this.grid[idx].add(selected);
  }

  _propagate(startIndex) {
    const queue = [startIndex];
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const oppositeDir = [2, 3, 0, 1];

    while (queue.length > 0) {
      const curr = queue.shift();
      const cx = curr % this.width;
      const cy = Math.floor(curr / this.width);

      for (let dir = 0; dir < 4; dir++) {
        const nx = cx + dx[dir];
        const ny = cy + dy[dir];
        if (nx < 0 || nx >= this.width || ny < 0 || ny >= this.height) continue;

        const neighborIdx = ny * this.width + nx;
        if (this.collapsed[neighborIdx] !== -1) continue;

        // Find all allowed neighbor tiles based on current possibilities
        const allowedNeighbors = new Set();
        for (const possibleTile of this.grid[curr]) {
          const rule = this.ruleMap.get(possibleTile);
          const allowed = rule.allowed[dir];
          for (const a of allowed) allowedNeighbors.add(a);
        }

        // Intersect neighbor's possibilities with allowed
        const neighborSet = this.grid[neighborIdx];
        let changed = false;

        for (const item of neighborSet) {
          if (!allowedNeighbors.has(item)) {
            neighborSet.delete(item);
            changed = true;
          }
        }

        if (changed) {
          if (neighborSet.size === 1) {
            this.collapsed[neighborIdx] = Array.from(neighborSet)[0];
          }
          queue.push(neighborIdx);
        }
      }
    }
  }
}

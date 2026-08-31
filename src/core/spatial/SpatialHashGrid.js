import { Vector2 } from '../math/Vector2.js';

export class SpatialHashGrid {
  /**
   * @param {number} cellSize Size of each hash bucket cell in world units
   */
  constructor(cellSize = 64) {
    this.cellSize = cellSize;
    this.grid = new Map();
    this.entityCells = new Map();
  }

  _hash(cx, cy) {
    return `${cx}:${cy}`;
  }

  _worldToCell(x, y) {
    return {
      cx: Math.floor(x / this.cellSize),
      cy: Math.floor(y / this.cellSize)
    };
  }

  insert(entity, x, y, width = 0, height = 0) {
    this.remove(entity);

    const minCell = this._worldToCell(x - width / 2, y - height / 2);
    const maxCell = this._worldToCell(x + width / 2, y + height / 2);

    const cellsOccupied = [];

    for (let cx = minCell.cx; cx <= maxCell.cx; cx++) {
      for (let cy = minCell.cy; cy <= maxCell.cy; cy++) {
        const key = this._hash(cx, cy);
        if (!this.grid.has(key)) {
          this.grid.set(key, new Set());
        }
        this.grid.get(key).add(entity);
        cellsOccupied.push(key);
      }
    }

    this.entityCells.set(entity, cellsOccupied);
  }

  remove(entity) {
    const keys = this.entityCells.get(entity);
    if (!keys) return;

    for (let i = 0; i < keys.length; i++) {
      const cell = this.grid.get(keys[i]);
      if (cell) {
        cell.delete(entity);
        if (cell.size === 0) {
          this.grid.delete(keys[i]);
        }
      }
    }

    this.entityCells.delete(entity);
  }

  queryNear(x, y, radius = 64) {
    const minCell = this._worldToCell(x - radius, y - radius);
    const maxCell = this._worldToCell(x + radius, y + radius);
    const result = new Set();

    for (let cx = minCell.cx; cx <= maxCell.cx; cx++) {
      for (let cy = minCell.cy; cy <= maxCell.cy; cy++) {
        const key = this._hash(cx, cy);
        const cell = this.grid.get(key);
        if (cell) {
          for (const ent of cell) {
            result.add(ent);
          }
        }
      }
    }

    return Array.from(result);
  }

  clear() {
    this.grid.clear();
    this.entityCells.clear();
  }
}

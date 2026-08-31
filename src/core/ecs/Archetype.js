import { BitSet } from './BitSet.js';

export class Archetype {
  constructor(mask, componentIds = []) {
    this.mask = mask;
    this.componentIds = componentIds.slice().sort((a, b) => a - b);
    this.hashKey = mask.getHashKey();

    this.entities = [];
    this.entityIndexMap = new Map(); // entityId -> row index
    this.columns = new Map(); // componentId -> array of component instances

    for (const id of this.componentIds) {
      this.columns.set(id, []);
    }

    // Graph transitions for adding/removing components
    this.addTransitions = new Map();
    this.removeTransitions = new Map();
  }

  addEntity(entityId, componentMap) {
    const row = this.entities.length;
    this.entities.push(entityId);
    this.entityIndexMap.set(entityId, row);

    for (const id of this.componentIds) {
      const col = this.columns.get(id);
      col.push(componentMap.get(id));
    }
    return row;
  }

  removeEntity(entityId) {
    const row = this.entityIndexMap.get(entityId);
    if (row === undefined) return null;

    const lastIndex = this.entities.length - 1;
    const lastEntityId = this.entities[lastIndex];

    const removedComponents = new Map();

    for (const id of this.componentIds) {
      const col = this.columns.get(id);
      removedComponents.set(id, col[row]);

      // Swap and pop
      if (row < lastIndex) {
        col[row] = col[lastIndex];
      }
      col.pop();
    }

    if (row < lastIndex) {
      this.entities[row] = lastEntityId;
      this.entityIndexMap.set(lastEntityId, row);
    }

    this.entities.pop();
    this.entityIndexMap.delete(entityId);

    return removedComponents;
  }

  getComponent(entityId, componentId) {
    const row = this.entityIndexMap.get(entityId);
    if (row === undefined) return null;
    const col = this.columns.get(componentId);
    return col ? col[row] : null;
  }

  hasEntity(entityId) {
    return this.entityIndexMap.has(entityId);
  }

  get count() {
    return this.entities.length;
  }
}

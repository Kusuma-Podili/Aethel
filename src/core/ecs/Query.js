import { BitSet } from './BitSet.js';

export class Query {
  constructor(allTypes = [], anyTypes = [], noneTypes = []) {
    this.allMask = new BitSet();
    this.anyMask = new BitSet();
    this.noneMask = new BitSet();

    this.allTypes = allTypes;
    this.anyTypes = anyTypes;
    this.noneTypes = noneTypes;

    for (const t of allTypes) this.allMask.set(typeof t === 'number' ? t : t.typeId);
    for (const t of anyTypes) this.anyMask.set(typeof t === 'number' ? t : t.typeId);
    for (const t of noneTypes) this.noneMask.set(typeof t === 'number' ? t : t.typeId);

    this.matchingArchetypes = [];
  }

  matches(archetype) {
    if (!archetype.mask.containsAll(this.allMask)) return false;
    if (this.anyTypes.length > 0 && !archetype.mask.containsAny(this.anyMask)) return false;
    if (this.noneTypes.length > 0 && !archetype.mask.containsNone(this.noneMask)) return false;
    return true;
  }

  registerArchetype(archetype) {
    if (this.matches(archetype) && !this.matchingArchetypes.includes(archetype)) {
      this.matchingArchetypes.push(archetype);
    }
  }

  forEach(callback) {
    for (let a = 0; a < this.matchingArchetypes.length; a++) {
      const arch = this.matchingArchetypes[a];
      const entities = arch.entities;
      for (let i = 0; i < entities.length; i++) {
        callback(entities[i], arch, i);
      }
    }
  }

  getEntities() {
    const list = [];
    for (let a = 0; a < this.matchingArchetypes.length; a++) {
      const arch = this.matchingArchetypes[a];
      for (let i = 0; i < arch.entities.length; i++) {
        list.push(arch.entities[i]);
      }
    }
    return list;
  }
}

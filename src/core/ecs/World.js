import { BitSet } from './BitSet.js';
import { Archetype } from './Archetype.js';
import { Query } from './Query.js';

export class World {
  constructor() {
    this._nextEntityId = 1;
    this._freeEntityIds = [];

    this.entityArchetypeMap = new Map(); // entityId -> Archetype
    this.archetypes = new Map(); // hashKey -> Archetype
    this.queries = [];
    this.systems = [];

    this.emptyArchetype = this._getOrCreateArchetype(new BitSet(), []);
  }

  createEntity() {
    const id = this._freeEntityIds.length > 0 ? this._freeEntityIds.pop() : this._nextEntityId++;
    const emptyMap = new Map();
    this.emptyArchetype.addEntity(id, emptyMap);
    this.entityArchetypeMap.set(id, this.emptyArchetype);
    return id;
  }

  destroyEntity(entityId) {
    const arch = this.entityArchetypeMap.get(entityId);
    if (!arch) return;

    arch.removeEntity(entityId);
    this.entityArchetypeMap.delete(entityId);
    this._freeEntityIds.push(entityId);
  }

  addComponent(entityId, component) {
    const currentArch = this.entityArchetypeMap.get(entityId);
    if (!currentArch) return;

    const compId = component.constructor.typeId;
    if (currentArch.mask.get(compId)) return; // Already has component

    let nextArch = currentArch.addTransitions.get(compId);
    if (!nextArch) {
      const nextMask = currentArch.mask.clone().set(compId);
      const nextCompIds = [...currentArch.componentIds, compId];
      nextArch = this._getOrCreateArchetype(nextMask, nextCompIds);
      currentArch.addTransitions.set(compId, nextArch);
      nextArch.removeTransitions.set(compId, currentArch);
    }

    const currentComps = currentArch.removeEntity(entityId);
    currentComps.set(compId, component);
    nextArch.addEntity(entityId, currentComps);
    this.entityArchetypeMap.set(entityId, nextArch);
  }

  removeComponent(entityId, componentClass) {
    const currentArch = this.entityArchetypeMap.get(entityId);
    if (!currentArch) return;

    const compId = componentClass.typeId;
    if (!currentArch.mask.get(compId)) return; // Does not have component

    let nextArch = currentArch.removeTransitions.get(compId);
    if (!nextArch) {
      const nextMask = currentArch.mask.clone().unset(compId);
      const nextCompIds = currentArch.componentIds.filter(id => id !== compId);
      nextArch = this._getOrCreateArchetype(nextMask, nextCompIds);
      currentArch.removeTransitions.set(compId, nextArch);
      nextArch.addTransitions.set(compId, currentArch);
    }

    const currentComps = currentArch.removeEntity(entityId);
    currentComps.delete(compId);
    nextArch.addEntity(entityId, currentComps);
    this.entityArchetypeMap.set(entityId, nextArch);
  }

  getComponent(entityId, componentClass) {
    const arch = this.entityArchetypeMap.get(entityId);
    if (!arch) return null;
    return arch.getComponent(entityId, componentClass.typeId);
  }

  hasComponent(entityId, componentClass) {
    const arch = this.entityArchetypeMap.get(entityId);
    if (!arch) return false;
    return arch.mask.get(componentClass.typeId);
  }

  createQuery(allTypes = [], anyTypes = [], noneTypes = []) {
    const query = new Query(allTypes, anyTypes, noneTypes);
    for (const arch of this.archetypes.values()) {
      query.registerArchetype(arch);
    }
    this.queries.push(query);
    return query;
  }

  addSystem(system) {
    this.systems.push(system);
    this.systems.sort((a, b) => a.priority - b.priority);
    system.init(this);
    return this;
  }

  update(dt) {
    for (let i = 0; i < this.systems.length; i++) {
      if (this.systems[i].enabled) {
        this.systems[i].update(dt);
      }
    }
  }

  render(dt) {
    for (let i = 0; i < this.systems.length; i++) {
      if (this.systems[i].enabled) {
        this.systems[i].render(dt);
      }
    }
  }

  getEntityCount() {
    return this.entityArchetypeMap.size;
  }

  _getOrCreateArchetype(mask, componentIds) {
    const key = mask.getHashKey();
    if (this.archetypes.has(key)) {
      return this.archetypes.get(key);
    }

    const arch = new Archetype(mask, componentIds);
    this.archetypes.set(key, arch);

    for (const query of this.queries) {
      query.registerArchetype(arch);
    }
    return arch;
  }
}

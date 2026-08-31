import { StatModifier } from '../stats/AttributeMap.js';

export const EffectType = {
  BUFF: 0,
  DEBUFF: 1,
  DOT: 2,
  CROWD_CONTROL: 3
};

export class StatusEffect {
  constructor(id, name, duration = 5.0, type = EffectType.BUFF) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.remaining = duration;
    this.type = type;
    this.tickInterval = 1.0;
    this.timeSinceLastTick = 0;
    this.stacks = 1;
    this.maxStacks = 5;
    this.modifiers = []; // Array of StatModifier
    this.onTick = (target) => {};
    this.onApply = (target) => {};
    this.onExpire = (target) => {};
  }

  addModifier(mod) {
    this.modifiers.push(mod);
    return this;
  }
}

export class StatusEffectContainer {
  constructor(entity) {
    this.entity = entity;
    this.effects = new Map(); // id -> StatusEffect
  }

  apply(effect) {
    if (this.effects.has(effect.id)) {
      const existing = this.effects.get(effect.id);
      existing.remaining = effect.duration; // Refresh duration
      if (existing.stacks < existing.maxStacks) {
        existing.stacks++;
      }
      return;
    }

    this.effects.set(effect.id, effect);
    effect.onApply(this.entity);

    if (this.entity.stats) {
      for (const m of effect.modifiers) {
        this.entity.stats.addModifier(m);
      }
    }
  }

  remove(id) {
    const effect = this.effects.get(id);
    if (!effect) return;

    effect.onExpire(this.entity);
    if (this.entity.stats) {
      this.entity.stats.removeModifiersBySource(effect.id);
    }
    this.effects.delete(id);
  }

  update(dt) {
    const toRemove = [];

    for (const [id, effect] of this.effects) {
      effect.remaining -= dt;
      effect.timeSinceLastTick += dt;

      if (effect.timeSinceLastTick >= effect.tickInterval) {
        effect.timeSinceLastTick -= effect.tickInterval;
        effect.onTick(this.entity);
      }

      if (effect.remaining <= 0) {
        toRemove.push(id);
      }
    }

    for (let i = 0; i < toRemove.length; i++) {
      this.remove(toRemove[i]);
    }
  }
}

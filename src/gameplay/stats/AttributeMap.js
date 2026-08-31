export const StatType = {
  STRENGTH: 'strength',
  AGILITY: 'agility',
  INTELLIGENCE: 'intelligence',
  VITALITY: 'vitality',
  WISDOM: 'wisdom',
  ARMOR: 'armor',
  ATTACK_POWER: 'attackPower',
  SPELL_POWER: 'spellPower',
  CRIT_CHANCE: 'critChance',     // 0.05 = 5%
  CRIT_DAMAGE: 'critDamage',     // 1.5 = 150%
  MOVE_SPEED: 'moveSpeed',       // pixels per second
  FIRE_RESIST: 'fireResist',     // 0.0 to 0.75 (75% cap)
  COLD_RESIST: 'coldResist',
  LIGHTNING_RESIST: 'lightningResist',
  CHAOS_RESIST: 'chaosResist'
};

export const ModifierOp = {
  FLAT: 0,
  PERCENT_ADD: 1,
  PERCENT_MULT: 2
};

export class StatModifier {
  constructor(stat, value, op = ModifierOp.FLAT, source = 'base') {
    this.stat = stat;
    this.value = value;
    this.op = op;
    this.source = source;
  }
}

export class AttributeMap {
  constructor() {
    this.baseValues = new Map();
    this.modifiers = new Map(); // stat -> Array<StatModifier>
    this.dirty = new Set();
    this.cachedValues = new Map();

    this._initDefaults();
  }

  _initDefaults() {
    this.setBase(StatType.STRENGTH, 10);
    this.setBase(StatType.AGILITY, 10);
    this.setBase(StatType.INTELLIGENCE, 10);
    this.setBase(StatType.VITALITY, 10);
    this.setBase(StatType.WISDOM, 10);
    this.setBase(StatType.ARMOR, 0);
    this.setBase(StatType.ATTACK_POWER, 15);
    this.setBase(StatType.SPELL_POWER, 15);
    this.setBase(StatType.CRIT_CHANCE, 0.05);
    this.setBase(StatType.CRIT_DAMAGE, 1.50);
    this.setBase(StatType.MOVE_SPEED, 200);
    this.setBase(StatType.FIRE_RESIST, 0);
    this.setBase(StatType.COLD_RESIST, 0);
    this.setBase(StatType.LIGHTNING_RESIST, 0);
    this.setBase(StatType.CHAOS_RESIST, 0);
  }

  setBase(stat, value) {
    this.baseValues.set(stat, value);
    this.dirty.add(stat);
  }

  getBase(stat) {
    return this.baseValues.get(stat) || 0;
  }

  addModifier(mod) {
    if (!this.modifiers.has(mod.stat)) {
      this.modifiers.set(mod.stat, []);
    }
    this.modifiers.get(mod.stat).push(mod);
    this.dirty.add(mod.stat);
  }

  removeModifiersBySource(source) {
    for (const [stat, mods] of this.modifiers) {
      const initialLen = mods.length;
      const filtered = mods.filter(m => m.source !== source);
      if (filtered.length !== initialLen) {
        this.modifiers.set(stat, filtered);
        this.dirty.add(stat);
      }
    }
  }

  getValue(stat) {
    if (this.dirty.has(stat) || !this.cachedValues.has(stat)) {
      this._recalculate(stat);
    }
    return this.cachedValues.get(stat);
  }

  _recalculate(stat) {
    const base = this.baseValues.get(stat) || 0;
    const mods = this.modifiers.get(stat) || [];

    let flatSum = 0;
    let percentAddSum = 0;
    let multProduct = 1.0;

    for (let i = 0; i < mods.length; i++) {
      const m = mods[i];
      if (m.op === ModifierOp.FLAT) flatSum += m.value;
      else if (m.op === ModifierOp.PERCENT_ADD) percentAddSum += m.value;
      else if (m.op === ModifierOp.PERCENT_MULT) multProduct *= (1.0 + m.value);
    }

    // Final = (Base + Flat) * (1 + PercentAddSum) * MultProduct
    const finalValue = (base + flatSum) * (1.0 + percentAddSum) * multProduct;
    this.cachedValues.set(stat, finalValue);
    this.dirty.delete(stat);
  }

  // Derived RPG Stats
  getMaxHealth() {
    return (this.getValue(StatType.VITALITY) * 20) + (this.getValue(StatType.STRENGTH) * 5);
  }

  getMaxMana() {
    return (this.getValue(StatType.INTELLIGENCE) * 15) + (this.getValue(StatType.WISDOM) * 10);
  }

  getArmorDamageReduction() {
    const armor = this.getValue(StatType.ARMOR);
    return armor / (armor + 500); // 500 armor = 50% physical reduction
  }
}

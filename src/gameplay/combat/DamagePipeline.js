import { StatType } from '../stats/AttributeMap.js';

export const DamageType = {
  PHYSICAL: 0,
  FIRE: 1,
  COLD: 2,
  LIGHTNING: 3,
  CHAOS: 4,
  HOLY: 5,
  TRUE: 6 // Ignores all resistances and armor
};

export class DamageInstance {
  constructor(amount = 0, type = DamageType.PHYSICAL, attacker = null, canCrit = true) {
    this.amount = amount;
    this.type = type;
    this.attacker = attacker;
    this.canCrit = canCrit;
    this.isCrit = false;
  }
}

export class DamagePipeline {
  /**
   * Calculates final damage dealt from attacker to defender through defense matrices.
   */
  static calculate(attackerStats, defenderStats, damage) {
    let finalAmount = damage.amount;

    // 1. Critical Strike Roll
    if (damage.canCrit && attackerStats) {
      const critChance = attackerStats.getValue(StatType.CRIT_CHANCE);
      if (Math.random() < critChance) {
        damage.isCrit = true;
        const critDmg = attackerStats.getValue(StatType.CRIT_DAMAGE);
        finalAmount *= critDmg;
      }
    }

    // 2. Mitigation based on damage type
    if (damage.type === DamageType.TRUE) {
      return { finalAmount: Math.max(1, Math.round(finalAmount)), isCrit: damage.isCrit };
    }

    if (damage.type === DamageType.PHYSICAL) {
      const armorDR = defenderStats.getArmorDamageReduction();
      finalAmount *= (1.0 - armorDR);
    } else {
      let resist = 0;
      if (damage.type === DamageType.FIRE) resist = defenderStats.getValue(StatType.FIRE_RESIST);
      else if (damage.type === DamageType.COLD) resist = defenderStats.getValue(StatType.COLD_RESIST);
      else if (damage.type === DamageType.LIGHTNING) resist = defenderStats.getValue(StatType.LIGHTNING_RESIST);
      else if (damage.type === DamageType.CHAOS) resist = defenderStats.getValue(StatType.CHAOS_RESIST);

      // Clamp resistance between -1.0 (-100%) and 0.75 (75% max cap)
      resist = Math.max(-1.0, Math.min(0.75, resist));
      finalAmount *= (1.0 - resist);
    }

    return {
      finalAmount: Math.max(1, Math.round(finalAmount)),
      isCrit: damage.isCrit
    };
  }
}

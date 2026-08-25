import { DamageType, DamageInstance } from '../combat/DamagePipeline.js';
import { Vector2 } from '../../core/math/Vector2.js';

export const CastType = {
  INSTANT: 0,
  PROJECTILE: 1,
  CHANNELED: 2,
  AREA_OF_EFFECT: 3
};

export class SpellDefinition {
  constructor(options = {}) {
    this.id = options.id || 'spell_fireball';
    this.name = options.name || 'Fireball';
    this.castType = options.castType || CastType.PROJECTILE;
    this.manaCost = options.manaCost || 25;
    this.cooldown = options.cooldown || 1.0;
    this.currentCooldown = 0;
    this.castRange = options.castRange || 400;
    this.damageType = options.damageType || DamageType.FIRE;
    this.baseDamage = options.baseDamage || 45;
    this.spellPowerScaling = options.spellPowerScaling || 1.2;
    this.projectileSpeed = options.projectileSpeed || 450;
    this.radius = options.radius || 30; // AOE radius
    this.icon = options.icon || '🔥';
    this.description = options.description || 'Launches a blazing sphere that explodes upon impact.';
  }

  isReady() {
    return this.currentCooldown <= 0;
  }

  update(dt) {
    if (this.currentCooldown > 0) {
      this.currentCooldown -= dt;
    }
  }

  cast(caster, targetPosition) {
    if (!this.isReady()) return false;
    if (caster.currentMana < this.manaCost) return false;

    caster.currentMana -= this.manaCost;
    this.currentCooldown = this.cooldown;

    return true;
  }
}

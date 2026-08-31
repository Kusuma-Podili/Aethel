import { Vector2 } from '../../core/math/Vector2.js';
import { AttributeMap, StatType } from '../stats/AttributeMap.js';
import { DamagePipeline, DamageType, DamageInstance } from '../combat/DamagePipeline.js';

export const BossPhase = {
  PHASE_1: 1, // Standard combat, melee & periodic flame bursts
  PHASE_2: 2, // 75% HP: Enters Fire Aura, spawns Adds
  PHASE_3: 3, // 50% HP: Bullet Hell spiral projectile pattern
  PHASE_4: 4  // 25% HP: Enrage mode (+50% attack speed, constant meteors)
};

export class BossEntity {
  constructor(name = 'Malakor the Flamebringer', maxHealth = 10000) {
    this.name = name;
    this.position = new Vector2(0, 0);
    this.velocity = new Vector2(0, 0);
    this.radius = 40;

    this.stats = new AttributeMap();
    this.stats.setBase(StatType.VITALITY, 250);
    this.stats.setBase(StatType.ARMOR, 150);
    this.stats.setBase(StatType.MOVE_SPEED, 140);
    this.stats.setBase(StatType.ATTACK_POWER, 80);

    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.currentPhase = BossPhase.PHASE_1;

    this.phaseCooldown = 0;
    this.specialAttackTimer = 3.0;
  }

  takeDamage(damageInstance, attacker) {
    const result = DamagePipeline.calculate(attacker?.stats, this.stats, damageInstance);
    this.currentHealth = Math.max(0, this.currentHealth - result.finalAmount);

    this._checkPhaseTransitions();
    return result;
  }

  _checkPhaseTransitions() {
    const hpPercent = this.currentHealth / this.maxHealth;

    if (hpPercent <= 0.25 && this.currentPhase < BossPhase.PHASE_4) {
      this.currentPhase = BossPhase.PHASE_4;
      this._onEnterPhase4();
    } else if (hpPercent <= 0.50 && this.currentPhase < BossPhase.PHASE_3) {
      this.currentPhase = BossPhase.PHASE_3;
      this._onEnterPhase3();
    } else if (hpPercent <= 0.75 && this.currentPhase < BossPhase.PHASE_2) {
      this.currentPhase = BossPhase.PHASE_2;
      this._onEnterPhase2();
    }
  }

  _onEnterPhase2() {
    this.stats.addModifier({
      stat: StatType.MOVE_SPEED,
      value: 0.2,
      op: 1, // +20% Move Speed
      source: 'phase2_buff'
    });
  }

  _onEnterPhase3() {
    this.stats.addModifier({
      stat: StatType.ATTACK_POWER,
      value: 0.3,
      op: 1, // +30% Attack Power
      source: 'phase3_buff'
    });
  }

  _onEnterPhase4() {
    this.stats.addModifier({
      stat: StatType.ATTACK_POWER,
      value: 0.5,
      op: 1, // +50% Enrage Power
      source: 'phase4_enrage'
    });
  }

  update(dt, player, projectileSystem) {
    if (this.currentHealth <= 0) return;

    this.specialAttackTimer -= dt;

    if (this.specialAttackTimer <= 0) {
      this._executeSpecialAttack(player, projectileSystem);
      this.specialAttackTimer = this.currentPhase === BossPhase.PHASE_4 ? 1.5 : 3.0;
    }

    // Chase player
    if (player) {
      const dir = player.position.clone().sub(this.position).normalize();
      const speed = this.stats.getValue(StatType.MOVE_SPEED);
      this.position.add(dir.scale(speed * dt));
    }
  }

  _executeSpecialAttack(player, projectileSystem) {
    if (!projectileSystem) return;

    if (this.currentPhase === BossPhase.PHASE_1) {
      // 3-way spread shot
      for (let i = -1; i <= 1; i++) {
        const angle = player.position.clone().sub(this.position).angle() + i * 0.2;
        const target = this.position.clone().add(Vector2.fromAngle(angle, 200));
        projectileSystem.spawn(
          this,
          this.position,
          target,
          350,
          new DamageInstance(40, DamageType.FIRE, this),
          '#ff3300'
        );
      }
    } else if (this.currentPhase >= BossPhase.PHASE_2) {
      // 8-directional radial burst
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const target = this.position.clone().add(Vector2.fromAngle(angle, 200));
        projectileSystem.spawn(
          this,
          this.position,
          target,
          300,
          new DamageInstance(50, DamageType.FIRE, this),
          '#ff0055'
        );
      }
    }
  }
}

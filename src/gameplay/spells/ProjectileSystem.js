import { Vector2 } from '../../core/math/Vector2.js';
import { DamagePipeline, DamageInstance } from '../combat/DamagePipeline.js';

export class Projectile {
  constructor() {
    this.position = new Vector2();
    this.velocity = new Vector2();
    this.speed = 400;
    this.radius = 8;
    this.life = 0;
    this.maxLife = 3.0;
    this.damage = null;
    this.caster = null;
    this.pierceCount = 0;
    this.hitEntities = new Set();
    this.active = false;
    this.color = '#ff6600';
    this.onHit = null;
  }

  init(caster, startPos, targetPos, speed, damage, maxLife = 3.0, color = '#ff6600', onHit = null) {
    this.caster = caster;
    this.position.copy(startPos);
    this.velocity.copy(targetPos).sub(startPos).normalize().scale(speed);
    this.speed = speed;
    this.damage = damage;
    this.life = maxLife;
    this.maxLife = maxLife;
    this.color = color;
    this.pierceCount = 0;
    this.hitEntities.clear();
    this.onHit = onHit;
    this.active = true;
  }

  update(dt) {
    if (!this.active) return;
    this.life -= dt;
    if (this.life <= 0) {
      this.active = false;
      return;
    }
    this.position.add(this.velocity.clone().scale(dt));
  }
}

export class ProjectileSystem {
  constructor(maxProjectiles = 512) {
    this.projectiles = Array.from({ length: maxProjectiles }, () => new Projectile());
  }

  spawn(caster, startPos, targetPos, speed, damage, color = '#ff6600', onHit = null) {
    for (let i = 0; i < this.projectiles.length; i++) {
      if (!this.projectiles[i].active) {
        this.projectiles[i].init(caster, startPos, targetPos, speed, damage, 3.0, color, onHit);
        return this.projectiles[i];
      }
    }
    return null;
  }

  update(dt, targets = [], particleEmitter = null) {
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (!p.active) continue;

      p.update(dt);
      if (!p.active) continue;

      // Spawn trail particle
      if (particleEmitter) {
        particleEmitter.burst(p.position.x, p.position.y, 1, {
          startColor: { r: 1, g: 0.5, b: 0, a: 0.8 },
          endColor: { r: 0.5, g: 0, b: 0, a: 0 },
          startSize: 6,
          endSize: 1,
          lifeMin: 0.1,
          lifeMax: 0.2
        });
      }

      // Check collision with targets
      for (let j = 0; j < targets.length; j++) {
        const target = targets[j];
        if (target === p.caster || p.hitEntities.has(target)) continue;

        if (Vector2.distance(p.position, target.position) <= p.radius + (target.radius || 16)) {
          p.hitEntities.add(target);

          if (target.takeDamage) {
            target.takeDamage(p.damage, p.caster);
          }

          if (p.onHit) {
            p.onHit(p, target);
          }

          if (particleEmitter) {
            particleEmitter.burst(p.position.x, p.position.y, 15);
          }

          if (p.pierceCount <= 0) {
            p.active = false;
            break;
          } else {
            p.pierceCount--;
          }
        }
      }
    }
  }

  render(ctx) {
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (p.active) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

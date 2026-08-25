import { Vector2 } from '../../core/math/Vector2.js';

export class Particle {
  constructor() {
    this.position = new Vector2();
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.color = { r: 1, g: 1, b: 1, a: 1 };
    this.startColor = { r: 1, g: 1, b: 1, a: 1 };
    this.endColor = { r: 1, g: 0, b: 0, a: 0 };
    this.size = 8;
    this.startSize = 8;
    this.endSize = 0;
    this.life = 0;
    this.maxLife = 1.0;
    this.rotation = 0;
    this.rotationSpeed = 0;
    this.active = false;
  }

  init(options) {
    this.position.copy(options.position || Vector2.zero());
    this.velocity.copy(options.velocity || Vector2.zero());
    this.acceleration.copy(options.acceleration || Vector2.zero());
    this.startColor = Object.assign({}, options.startColor || { r: 1, g: 1, b: 1, a: 1 });
    this.endColor = Object.assign({}, options.endColor || { r: 1, g: 1, b: 1, a: 0 });
    this.startSize = options.startSize || 8;
    this.endSize = options.endSize !== undefined ? options.endSize : 0;
    this.maxLife = options.maxLife || 1.0;
    this.life = this.maxLife;
    this.rotation = options.rotation || 0;
    this.rotationSpeed = options.rotationSpeed || 0;
    this.active = true;
  }

  update(dt) {
    if (!this.active) return;
    this.life -= dt;
    if (this.life <= 0) {
      this.active = false;
      return;
    }

    const t = 1.0 - (this.life / this.maxLife); // 0 to 1

    this.velocity.add(this.acceleration.clone().scale(dt));
    this.position.add(this.velocity.clone().scale(dt));
    this.rotation += this.rotationSpeed * dt;

    this.size = this.startSize + (this.endSize - this.startSize) * t;

    this.color.r = this.startColor.r + (this.endColor.r - this.startColor.r) * t;
    this.color.g = this.startColor.g + (this.endColor.g - this.startColor.g) * t;
    this.color.b = this.startColor.b + (this.endColor.b - this.startColor.b) * t;
    this.color.a = this.startColor.a + (this.endColor.a - this.startColor.a) * t;
  }
}

export class ParticleEmitter2D {
  constructor(maxParticles = 1024) {
    this.maxParticles = maxParticles;
    this.particles = Array.from({ length: maxParticles }, () => new Particle());
  }

  burst(x, y, count = 20, options = {}) {
    let spawned = 0;
    for (let i = 0; i < this.particles.length && spawned < count; i++) {
      if (!this.particles[i].active) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (options.speedMin || 50) + Math.random() * ((options.speedMax || 150) - (options.speedMin || 50));
        const vel = new Vector2(Math.cos(angle) * speed, Math.sin(angle) * speed);

        this.particles[i].init({
          position: new Vector2(x, y),
          velocity: vel,
          acceleration: options.acceleration || new Vector2(0, 0),
          startColor: options.startColor || { r: 1, g: 0.8, b: 0.2, a: 1 },
          endColor: options.endColor || { r: 1, g: 0.1, b: 0, a: 0 },
          startSize: options.startSize || 10,
          endSize: options.endSize || 0,
          maxLife: (options.lifeMin || 0.4) + Math.random() * ((options.lifeMax || 1.0) - (options.lifeMin || 0.4))
        });
        spawned++;
      }
    }
  }

  update(dt) {
    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].active) {
        this.particles[i].update(dt);
      }
    }
  }

  render(batchRenderer, whiteTexture) {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (p.active) {
        const half = p.size / 2;
        batchRenderer.draw(
          whiteTexture,
          p.position.x - half,
          p.position.y - half,
          p.size,
          p.size,
          0, 0, 1, 1,
          p.color.r, p.color.g, p.color.b, p.color.a
        );
      }
    }
  }
}

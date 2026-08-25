import { Vector2 } from '../core/math/Vector2.js';

export const BodyType = {
  STATIC: 0,
  KINEMATIC: 1,
  DYNAMIC: 2
};

export class RigidBody2D {
  constructor(options = {}) {
    this.type = options.type !== undefined ? options.type : BodyType.DYNAMIC;
    this.position = options.position ? options.position.clone() : new Vector2();
    this.velocity = options.velocity ? options.velocity.clone() : new Vector2();
    this.acceleration = new Vector2();
    this.force = new Vector2();

    this.rotation = options.rotation || 0; // radians
    this.angularVelocity = options.angularVelocity || 0;
    this.torque = 0;

    this.mass = options.mass !== undefined ? options.mass : 1.0;
    this.invMass = this.type === BodyType.DYNAMIC && this.mass > 0 ? 1 / this.mass : 0;

    this.inertia = options.inertia || 1.0;
    this.invInertia = this.type === BodyType.DYNAMIC && this.inertia > 0 ? 1 / this.inertia : 0;

    this.restitution = options.restitution !== undefined ? options.restitution : 0.2; // bounciness
    this.friction = options.friction !== undefined ? options.friction : 0.3;
    this.linearDamping = options.linearDamping !== undefined ? options.linearDamping : 0.05;
    this.angularDamping = options.angularDamping !== undefined ? options.angularDamping : 0.05;
    this.gravityScale = options.gravityScale !== undefined ? options.gravityScale : 0; // 0 for top-down action RPG

    this.isBullet = options.isBullet || false; // CCD flag
    this.isSensor = options.isSensor || false;
    this.entityId = options.entityId || null;
  }

  setMass(mass) {
    this.mass = mass;
    this.invMass = this.type === BodyType.DYNAMIC && mass > 0 ? 1 / mass : 0;
  }

  applyForce(force) {
    if (this.type !== BodyType.DYNAMIC) return;
    this.force.add(force);
  }

  applyForceAtWorldPoint(force, worldPoint) {
    if (this.type !== BodyType.DYNAMIC) return;
    this.force.add(force);
    const r = worldPoint.clone().sub(this.position);
    this.torque += r.cross(force);
  }

  applyImpulse(impulse) {
    if (this.type !== BodyType.DYNAMIC) return;
    this.velocity.add(impulse.clone().scale(this.invMass));
  }

  applyImpulseAtWorldPoint(impulse, worldPoint) {
    if (this.type !== BodyType.DYNAMIC) return;
    this.velocity.add(impulse.clone().scale(this.invMass));
    const r = worldPoint.clone().sub(this.position);
    this.angularVelocity += r.cross(impulse) * this.invInertia;
  }

  integrateForces(gravity, dt) {
    if (this.type !== BodyType.DYNAMIC) return;

    // Apply gravity
    this.velocity.x += (this.force.x * this.invMass + gravity.x * this.gravityScale) * dt;
    this.velocity.y += (this.force.y * this.invMass + gravity.y * this.gravityScale) * dt;

    this.angularVelocity += (this.torque * this.invInertia) * dt;

    // Damping
    this.velocity.scale(Math.max(0, 1 - this.linearDamping * dt));
    this.angularVelocity *= Math.max(0, 1 - this.angularDamping * dt);

    // Reset accumulated force/torque
    this.force.set(0, 0);
    this.torque = 0;
  }

  integrateVelocity(dt) {
    if (this.type === BodyType.STATIC) return;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    this.rotation += this.angularVelocity * dt;
  }
}

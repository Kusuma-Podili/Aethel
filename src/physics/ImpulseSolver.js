import { Vector2 } from '../core/math/Vector2.js';
import { BodyType } from './RigidBody2D.js';

export class ImpulseSolver {
  static resolveManifold(manifold) {
    if (!manifold.collided) return;

    const bodyA = manifold.colliderA.body;
    const bodyB = manifold.colliderB.body;

    if (!bodyA || !bodyB) return;
    if (bodyA.type === BodyType.STATIC && bodyB.type === BodyType.STATIC) return;

    // Positional correction (Penetration resolution)
    const percent = 0.8; // Positional Baumgarte stabilization
    const slop = 0.01;
    const totalInvMass = bodyA.invMass + bodyB.invMass;
    if (totalInvMass <= 0) return;

    const correctionMag = Math.max(manifold.depth - slop, 0) / totalInvMass * percent;
    const correction = manifold.normal.clone().scale(correctionMag);

    if (bodyA.type === BodyType.DYNAMIC) bodyA.position.sub(correction.clone().scale(bodyA.invMass));
    if (bodyB.type === BodyType.DYNAMIC) bodyB.position.add(correction.clone().scale(bodyB.invMass));

    // Relative velocity
    const rv = bodyB.velocity.clone().sub(bodyA.velocity);
    const velAlongNormal = rv.dot(manifold.normal);

    // Separating velocity -> Do not resolve
    if (velAlongNormal > 0) return;

    // Restitution (bounciness)
    const e = Math.min(bodyA.restitution, bodyB.restitution);

    // Normal impulse scalar
    let j = -(1 + e) * velAlongNormal;
    j /= totalInvMass;

    const impulse = manifold.normal.clone().scale(j);

    if (bodyA.type === BodyType.DYNAMIC) bodyA.velocity.sub(impulse.clone().scale(bodyA.invMass));
    if (bodyB.type === BodyType.DYNAMIC) bodyB.velocity.add(impulse.clone().scale(bodyB.invMass));

    // Friction impulse
    const tangent = rv.clone().sub(manifold.normal.clone().scale(rv.dot(manifold.normal))).normalize();
    const jt = -rv.dot(tangent) / totalInvMass;

    const mu = Math.hypot(bodyA.friction, bodyB.friction);
    let frictionImpulse;

    if (Math.abs(jt) < j * mu) {
      frictionImpulse = tangent.scale(jt);
    } else {
      frictionImpulse = tangent.scale(-j * mu);
    }

    if (bodyA.type === BodyType.DYNAMIC) bodyA.velocity.sub(frictionImpulse.clone().scale(bodyA.invMass));
    if (bodyB.type === BodyType.DYNAMIC) bodyB.velocity.add(frictionImpulse.clone().scale(bodyB.invMass));
  }
}

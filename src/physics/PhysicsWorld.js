import { Vector2 } from '../core/math/Vector2.js';
import { SATCollision, ContactManifold } from './SATCollision.js';
import { ImpulseSolver } from './ImpulseSolver.js';
import { SpatialHashGrid } from '../core/spatial/SpatialHashGrid.js';

export class PhysicsWorld {
  constructor(options = {}) {
    this.gravity = options.gravity || new Vector2(0, 0); // Default 0 for top-down Action-RPG
    this.bodies = [];
    this.colliders = [];
    this.spatialGrid = new SpatialHashGrid(64);
    this.manifold = new ContactManifold();
    this.onCollisionEnter = options.onCollisionEnter || (() => {});
  }

  addBody(body) {
    if (!this.bodies.includes(body)) {
      this.bodies.push(body);
    }
    return body;
  }

  removeBody(body) {
    const idx = this.bodies.indexOf(body);
    if (idx !== -1) {
      this.bodies.splice(idx, 1);
    }
  }

  addCollider(collider) {
    if (!this.colliders.includes(collider)) {
      this.colliders.push(collider);
    }
    return collider;
  }

  removeCollider(collider) {
    const idx = this.colliders.indexOf(collider);
    if (idx !== -1) {
      this.colliders.splice(idx, 1);
      this.spatialGrid.remove(collider);
    }
  }

  step(dt) {
    // 1. Integrate forces
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].integrateForces(this.gravity, dt);
    }

    // 2. Update collider bounds & spatial hash
    for (let i = 0; i < this.colliders.length; i++) {
      const col = this.colliders[i];
      if (col.body) {
        col.updateBounds(col.body.position, col.body.rotation);
        const center = col.bounds.getCenter();
        const size = col.bounds.getSize();
        this.spatialGrid.insert(col, center.x, center.y, size.x, size.y);
      }
    }

    // 3. Broadphase & Narrowphase collision detection
    const checkedPairs = new Set();

    for (let i = 0; i < this.colliders.length; i++) {
      const colA = this.colliders[i];
      const centerA = colA.bounds.getCenter();
      const nearby = this.spatialGrid.queryNear(centerA.x, centerA.y, 64);

      for (let j = 0; j < nearby.length; j++) {
        const colB = nearby[j];
        if (colA === colB) continue;

        // Ensure collision mask match
        if ((colA.categoryBits & colB.maskBits) === 0 || (colB.categoryBits & colA.maskBits) === 0) {
          continue;
        }

        // Avoid duplicate pair checks
        const idPair = colA < colB ? `${colA.bounds.min.x}_${colB.bounds.min.x}` : `${colB.bounds.min.x}_${colA.bounds.min.x}`;

        // AABB early check
        if (!colA.bounds.intersectsBox(colB.bounds)) continue;

        // Narrowphase SAT test
        if (SATCollision.testCollision(colA, colB, this.manifold)) {
          if (colA.isTrigger || colB.isTrigger) {
            this.onCollisionEnter(colA, colB, this.manifold);
          } else {
            ImpulseSolver.resolveManifold(this.manifold);
          }
        }
      }
    }

    // 4. Integrate velocities to positions
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].integrateVelocity(dt);
    }
  }
}

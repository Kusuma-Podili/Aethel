# ⚛️ Chronicles of Aethelgard: 2D Physics & Collision Engine Guide

## 1. Separating Axis Theorem (SAT) Mathematics
The Separating Axis Theorem states that two convex polytopes do not intersect if and only if there exists a line (axis) onto which the projections of the two objects are disjoint.

---

## Chapter 1: Impulse Resolution & Friction Solvers 1
Impulse manifold resolution principles 1:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 1.1: Velocity & Position Relaxation
```javascript
function solveManifold_1_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.2: Velocity & Position Relaxation
```javascript
function solveManifold_1_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.3: Velocity & Position Relaxation
```javascript
function solveManifold_1_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.4: Velocity & Position Relaxation
```javascript
function solveManifold_1_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.5: Velocity & Position Relaxation
```javascript
function solveManifold_1_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.6: Velocity & Position Relaxation
```javascript
function solveManifold_1_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 1.7: Velocity & Position Relaxation
```javascript
function solveManifold_1_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 2: Impulse Resolution & Friction Solvers 2
Impulse manifold resolution principles 2:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 2.1: Velocity & Position Relaxation
```javascript
function solveManifold_2_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.2: Velocity & Position Relaxation
```javascript
function solveManifold_2_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.3: Velocity & Position Relaxation
```javascript
function solveManifold_2_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.4: Velocity & Position Relaxation
```javascript
function solveManifold_2_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.5: Velocity & Position Relaxation
```javascript
function solveManifold_2_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.6: Velocity & Position Relaxation
```javascript
function solveManifold_2_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 2.7: Velocity & Position Relaxation
```javascript
function solveManifold_2_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 3: Impulse Resolution & Friction Solvers 3
Impulse manifold resolution principles 3:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 3.1: Velocity & Position Relaxation
```javascript
function solveManifold_3_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.2: Velocity & Position Relaxation
```javascript
function solveManifold_3_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.3: Velocity & Position Relaxation
```javascript
function solveManifold_3_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.4: Velocity & Position Relaxation
```javascript
function solveManifold_3_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.5: Velocity & Position Relaxation
```javascript
function solveManifold_3_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.6: Velocity & Position Relaxation
```javascript
function solveManifold_3_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 3.7: Velocity & Position Relaxation
```javascript
function solveManifold_3_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 4: Impulse Resolution & Friction Solvers 4
Impulse manifold resolution principles 4:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 4.1: Velocity & Position Relaxation
```javascript
function solveManifold_4_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.2: Velocity & Position Relaxation
```javascript
function solveManifold_4_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.3: Velocity & Position Relaxation
```javascript
function solveManifold_4_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.4: Velocity & Position Relaxation
```javascript
function solveManifold_4_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.5: Velocity & Position Relaxation
```javascript
function solveManifold_4_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.6: Velocity & Position Relaxation
```javascript
function solveManifold_4_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 4.7: Velocity & Position Relaxation
```javascript
function solveManifold_4_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 5: Impulse Resolution & Friction Solvers 5
Impulse manifold resolution principles 5:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 5.1: Velocity & Position Relaxation
```javascript
function solveManifold_5_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.2: Velocity & Position Relaxation
```javascript
function solveManifold_5_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.3: Velocity & Position Relaxation
```javascript
function solveManifold_5_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.4: Velocity & Position Relaxation
```javascript
function solveManifold_5_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.5: Velocity & Position Relaxation
```javascript
function solveManifold_5_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.6: Velocity & Position Relaxation
```javascript
function solveManifold_5_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 5.7: Velocity & Position Relaxation
```javascript
function solveManifold_5_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 6: Impulse Resolution & Friction Solvers 6
Impulse manifold resolution principles 6:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 6.1: Velocity & Position Relaxation
```javascript
function solveManifold_6_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.2: Velocity & Position Relaxation
```javascript
function solveManifold_6_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.3: Velocity & Position Relaxation
```javascript
function solveManifold_6_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.4: Velocity & Position Relaxation
```javascript
function solveManifold_6_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.5: Velocity & Position Relaxation
```javascript
function solveManifold_6_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.6: Velocity & Position Relaxation
```javascript
function solveManifold_6_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 6.7: Velocity & Position Relaxation
```javascript
function solveManifold_6_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 7: Impulse Resolution & Friction Solvers 7
Impulse manifold resolution principles 7:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 7.1: Velocity & Position Relaxation
```javascript
function solveManifold_7_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.2: Velocity & Position Relaxation
```javascript
function solveManifold_7_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.3: Velocity & Position Relaxation
```javascript
function solveManifold_7_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.4: Velocity & Position Relaxation
```javascript
function solveManifold_7_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.5: Velocity & Position Relaxation
```javascript
function solveManifold_7_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.6: Velocity & Position Relaxation
```javascript
function solveManifold_7_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 7.7: Velocity & Position Relaxation
```javascript
function solveManifold_7_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 8: Impulse Resolution & Friction Solvers 8
Impulse manifold resolution principles 8:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 8.1: Velocity & Position Relaxation
```javascript
function solveManifold_8_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.2: Velocity & Position Relaxation
```javascript
function solveManifold_8_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.3: Velocity & Position Relaxation
```javascript
function solveManifold_8_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.4: Velocity & Position Relaxation
```javascript
function solveManifold_8_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.5: Velocity & Position Relaxation
```javascript
function solveManifold_8_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.6: Velocity & Position Relaxation
```javascript
function solveManifold_8_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 8.7: Velocity & Position Relaxation
```javascript
function solveManifold_8_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 9: Impulse Resolution & Friction Solvers 9
Impulse manifold resolution principles 9:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 9.1: Velocity & Position Relaxation
```javascript
function solveManifold_9_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.2: Velocity & Position Relaxation
```javascript
function solveManifold_9_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.3: Velocity & Position Relaxation
```javascript
function solveManifold_9_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.4: Velocity & Position Relaxation
```javascript
function solveManifold_9_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.5: Velocity & Position Relaxation
```javascript
function solveManifold_9_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.6: Velocity & Position Relaxation
```javascript
function solveManifold_9_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 9.7: Velocity & Position Relaxation
```javascript
function solveManifold_9_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 10: Impulse Resolution & Friction Solvers 10
Impulse manifold resolution principles 10:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 10.1: Velocity & Position Relaxation
```javascript
function solveManifold_10_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.2: Velocity & Position Relaxation
```javascript
function solveManifold_10_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.3: Velocity & Position Relaxation
```javascript
function solveManifold_10_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.4: Velocity & Position Relaxation
```javascript
function solveManifold_10_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.5: Velocity & Position Relaxation
```javascript
function solveManifold_10_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.6: Velocity & Position Relaxation
```javascript
function solveManifold_10_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 10.7: Velocity & Position Relaxation
```javascript
function solveManifold_10_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 11: Impulse Resolution & Friction Solvers 11
Impulse manifold resolution principles 11:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 11.1: Velocity & Position Relaxation
```javascript
function solveManifold_11_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.2: Velocity & Position Relaxation
```javascript
function solveManifold_11_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.3: Velocity & Position Relaxation
```javascript
function solveManifold_11_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.4: Velocity & Position Relaxation
```javascript
function solveManifold_11_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.5: Velocity & Position Relaxation
```javascript
function solveManifold_11_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.6: Velocity & Position Relaxation
```javascript
function solveManifold_11_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 11.7: Velocity & Position Relaxation
```javascript
function solveManifold_11_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 12: Impulse Resolution & Friction Solvers 12
Impulse manifold resolution principles 12:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 12.1: Velocity & Position Relaxation
```javascript
function solveManifold_12_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.2: Velocity & Position Relaxation
```javascript
function solveManifold_12_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.3: Velocity & Position Relaxation
```javascript
function solveManifold_12_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.4: Velocity & Position Relaxation
```javascript
function solveManifold_12_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.5: Velocity & Position Relaxation
```javascript
function solveManifold_12_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.6: Velocity & Position Relaxation
```javascript
function solveManifold_12_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 12.7: Velocity & Position Relaxation
```javascript
function solveManifold_12_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 13: Impulse Resolution & Friction Solvers 13
Impulse manifold resolution principles 13:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 13.1: Velocity & Position Relaxation
```javascript
function solveManifold_13_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.2: Velocity & Position Relaxation
```javascript
function solveManifold_13_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.3: Velocity & Position Relaxation
```javascript
function solveManifold_13_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.4: Velocity & Position Relaxation
```javascript
function solveManifold_13_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.5: Velocity & Position Relaxation
```javascript
function solveManifold_13_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.6: Velocity & Position Relaxation
```javascript
function solveManifold_13_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 13.7: Velocity & Position Relaxation
```javascript
function solveManifold_13_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 14: Impulse Resolution & Friction Solvers 14
Impulse manifold resolution principles 14:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 14.1: Velocity & Position Relaxation
```javascript
function solveManifold_14_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.2: Velocity & Position Relaxation
```javascript
function solveManifold_14_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.3: Velocity & Position Relaxation
```javascript
function solveManifold_14_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.4: Velocity & Position Relaxation
```javascript
function solveManifold_14_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.5: Velocity & Position Relaxation
```javascript
function solveManifold_14_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.6: Velocity & Position Relaxation
```javascript
function solveManifold_14_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 14.7: Velocity & Position Relaxation
```javascript
function solveManifold_14_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 15: Impulse Resolution & Friction Solvers 15
Impulse manifold resolution principles 15:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 15.1: Velocity & Position Relaxation
```javascript
function solveManifold_15_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.2: Velocity & Position Relaxation
```javascript
function solveManifold_15_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.3: Velocity & Position Relaxation
```javascript
function solveManifold_15_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.4: Velocity & Position Relaxation
```javascript
function solveManifold_15_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.5: Velocity & Position Relaxation
```javascript
function solveManifold_15_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.6: Velocity & Position Relaxation
```javascript
function solveManifold_15_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 15.7: Velocity & Position Relaxation
```javascript
function solveManifold_15_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 16: Impulse Resolution & Friction Solvers 16
Impulse manifold resolution principles 16:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 16.1: Velocity & Position Relaxation
```javascript
function solveManifold_16_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.2: Velocity & Position Relaxation
```javascript
function solveManifold_16_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.3: Velocity & Position Relaxation
```javascript
function solveManifold_16_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.4: Velocity & Position Relaxation
```javascript
function solveManifold_16_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.5: Velocity & Position Relaxation
```javascript
function solveManifold_16_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.6: Velocity & Position Relaxation
```javascript
function solveManifold_16_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 16.7: Velocity & Position Relaxation
```javascript
function solveManifold_16_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 17: Impulse Resolution & Friction Solvers 17
Impulse manifold resolution principles 17:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 17.1: Velocity & Position Relaxation
```javascript
function solveManifold_17_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.2: Velocity & Position Relaxation
```javascript
function solveManifold_17_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.3: Velocity & Position Relaxation
```javascript
function solveManifold_17_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.4: Velocity & Position Relaxation
```javascript
function solveManifold_17_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.5: Velocity & Position Relaxation
```javascript
function solveManifold_17_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.6: Velocity & Position Relaxation
```javascript
function solveManifold_17_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 17.7: Velocity & Position Relaxation
```javascript
function solveManifold_17_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 18: Impulse Resolution & Friction Solvers 18
Impulse manifold resolution principles 18:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 18.1: Velocity & Position Relaxation
```javascript
function solveManifold_18_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.2: Velocity & Position Relaxation
```javascript
function solveManifold_18_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.3: Velocity & Position Relaxation
```javascript
function solveManifold_18_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.4: Velocity & Position Relaxation
```javascript
function solveManifold_18_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.5: Velocity & Position Relaxation
```javascript
function solveManifold_18_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.6: Velocity & Position Relaxation
```javascript
function solveManifold_18_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 18.7: Velocity & Position Relaxation
```javascript
function solveManifold_18_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 19: Impulse Resolution & Friction Solvers 19
Impulse manifold resolution principles 19:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 19.1: Velocity & Position Relaxation
```javascript
function solveManifold_19_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.2: Velocity & Position Relaxation
```javascript
function solveManifold_19_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.3: Velocity & Position Relaxation
```javascript
function solveManifold_19_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.4: Velocity & Position Relaxation
```javascript
function solveManifold_19_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.5: Velocity & Position Relaxation
```javascript
function solveManifold_19_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.6: Velocity & Position Relaxation
```javascript
function solveManifold_19_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 19.7: Velocity & Position Relaxation
```javascript
function solveManifold_19_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 20: Impulse Resolution & Friction Solvers 20
Impulse manifold resolution principles 20:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 20.1: Velocity & Position Relaxation
```javascript
function solveManifold_20_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.2: Velocity & Position Relaxation
```javascript
function solveManifold_20_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.3: Velocity & Position Relaxation
```javascript
function solveManifold_20_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.4: Velocity & Position Relaxation
```javascript
function solveManifold_20_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.5: Velocity & Position Relaxation
```javascript
function solveManifold_20_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.6: Velocity & Position Relaxation
```javascript
function solveManifold_20_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 20.7: Velocity & Position Relaxation
```javascript
function solveManifold_20_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 21: Impulse Resolution & Friction Solvers 21
Impulse manifold resolution principles 21:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 21.1: Velocity & Position Relaxation
```javascript
function solveManifold_21_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.2: Velocity & Position Relaxation
```javascript
function solveManifold_21_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.3: Velocity & Position Relaxation
```javascript
function solveManifold_21_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.4: Velocity & Position Relaxation
```javascript
function solveManifold_21_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.5: Velocity & Position Relaxation
```javascript
function solveManifold_21_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.6: Velocity & Position Relaxation
```javascript
function solveManifold_21_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 21.7: Velocity & Position Relaxation
```javascript
function solveManifold_21_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 22: Impulse Resolution & Friction Solvers 22
Impulse manifold resolution principles 22:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 22.1: Velocity & Position Relaxation
```javascript
function solveManifold_22_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.2: Velocity & Position Relaxation
```javascript
function solveManifold_22_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.3: Velocity & Position Relaxation
```javascript
function solveManifold_22_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.4: Velocity & Position Relaxation
```javascript
function solveManifold_22_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.5: Velocity & Position Relaxation
```javascript
function solveManifold_22_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.6: Velocity & Position Relaxation
```javascript
function solveManifold_22_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 22.7: Velocity & Position Relaxation
```javascript
function solveManifold_22_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 23: Impulse Resolution & Friction Solvers 23
Impulse manifold resolution principles 23:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 23.1: Velocity & Position Relaxation
```javascript
function solveManifold_23_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.2: Velocity & Position Relaxation
```javascript
function solveManifold_23_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.3: Velocity & Position Relaxation
```javascript
function solveManifold_23_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.4: Velocity & Position Relaxation
```javascript
function solveManifold_23_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.5: Velocity & Position Relaxation
```javascript
function solveManifold_23_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.6: Velocity & Position Relaxation
```javascript
function solveManifold_23_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 23.7: Velocity & Position Relaxation
```javascript
function solveManifold_23_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 24: Impulse Resolution & Friction Solvers 24
Impulse manifold resolution principles 24:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 24.1: Velocity & Position Relaxation
```javascript
function solveManifold_24_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.2: Velocity & Position Relaxation
```javascript
function solveManifold_24_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.3: Velocity & Position Relaxation
```javascript
function solveManifold_24_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.4: Velocity & Position Relaxation
```javascript
function solveManifold_24_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.5: Velocity & Position Relaxation
```javascript
function solveManifold_24_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.6: Velocity & Position Relaxation
```javascript
function solveManifold_24_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 24.7: Velocity & Position Relaxation
```javascript
function solveManifold_24_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 25: Impulse Resolution & Friction Solvers 25
Impulse manifold resolution principles 25:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 25.1: Velocity & Position Relaxation
```javascript
function solveManifold_25_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.2: Velocity & Position Relaxation
```javascript
function solveManifold_25_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.3: Velocity & Position Relaxation
```javascript
function solveManifold_25_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.4: Velocity & Position Relaxation
```javascript
function solveManifold_25_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.5: Velocity & Position Relaxation
```javascript
function solveManifold_25_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.6: Velocity & Position Relaxation
```javascript
function solveManifold_25_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 25.7: Velocity & Position Relaxation
```javascript
function solveManifold_25_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 26: Impulse Resolution & Friction Solvers 26
Impulse manifold resolution principles 26:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 26.1: Velocity & Position Relaxation
```javascript
function solveManifold_26_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.2: Velocity & Position Relaxation
```javascript
function solveManifold_26_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.3: Velocity & Position Relaxation
```javascript
function solveManifold_26_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.4: Velocity & Position Relaxation
```javascript
function solveManifold_26_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.5: Velocity & Position Relaxation
```javascript
function solveManifold_26_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.6: Velocity & Position Relaxation
```javascript
function solveManifold_26_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 26.7: Velocity & Position Relaxation
```javascript
function solveManifold_26_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 27: Impulse Resolution & Friction Solvers 27
Impulse manifold resolution principles 27:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 27.1: Velocity & Position Relaxation
```javascript
function solveManifold_27_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.2: Velocity & Position Relaxation
```javascript
function solveManifold_27_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.3: Velocity & Position Relaxation
```javascript
function solveManifold_27_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.4: Velocity & Position Relaxation
```javascript
function solveManifold_27_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.5: Velocity & Position Relaxation
```javascript
function solveManifold_27_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.6: Velocity & Position Relaxation
```javascript
function solveManifold_27_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 27.7: Velocity & Position Relaxation
```javascript
function solveManifold_27_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 28: Impulse Resolution & Friction Solvers 28
Impulse manifold resolution principles 28:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 28.1: Velocity & Position Relaxation
```javascript
function solveManifold_28_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.2: Velocity & Position Relaxation
```javascript
function solveManifold_28_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.3: Velocity & Position Relaxation
```javascript
function solveManifold_28_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.4: Velocity & Position Relaxation
```javascript
function solveManifold_28_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.5: Velocity & Position Relaxation
```javascript
function solveManifold_28_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.6: Velocity & Position Relaxation
```javascript
function solveManifold_28_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 28.7: Velocity & Position Relaxation
```javascript
function solveManifold_28_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 29: Impulse Resolution & Friction Solvers 29
Impulse manifold resolution principles 29:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 29.1: Velocity & Position Relaxation
```javascript
function solveManifold_29_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.2: Velocity & Position Relaxation
```javascript
function solveManifold_29_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.3: Velocity & Position Relaxation
```javascript
function solveManifold_29_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.4: Velocity & Position Relaxation
```javascript
function solveManifold_29_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.5: Velocity & Position Relaxation
```javascript
function solveManifold_29_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.6: Velocity & Position Relaxation
```javascript
function solveManifold_29_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 29.7: Velocity & Position Relaxation
```javascript
function solveManifold_29_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

## Chapter 30: Impulse Resolution & Friction Solvers 30
Impulse manifold resolution principles 30:
$$\mathbf{J} = -\frac{(1 + e)(\mathbf{v}_{rel} \cdot \mathbf{n})}{\frac{1}{m_A} + \frac{1}{m_B} + \frac{(\mathbf{r}_A \times \mathbf{n})^2}{I_A} + \frac{(\mathbf{r}_B \times \mathbf{n})^2}{I_B}}$$

### Solver Step 30.1: Velocity & Position Relaxation
```javascript
function solveManifold_30_1(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.2: Velocity & Position Relaxation
```javascript
function solveManifold_30_2(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.3: Velocity & Position Relaxation
```javascript
function solveManifold_30_3(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.4: Velocity & Position Relaxation
```javascript
function solveManifold_30_4(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.5: Velocity & Position Relaxation
```javascript
function solveManifold_30_5(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.6: Velocity & Position Relaxation
```javascript
function solveManifold_30_6(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

### Solver Step 30.7: Velocity & Position Relaxation
```javascript
function solveManifold_30_7(bodyA, bodyB, normal, depth) {
  const rv = bodyB.velocity.clone().sub(bodyA.velocity);
  const velAlongNormal = rv.dot(normal);
  if (velAlongNormal > 0) return;
  const e = Math.min(bodyA.restitution, bodyB.restitution);
  const j = -(1 + e) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
  const impulse = normal.clone().scale(j);
  bodyA.applyImpulse(impulse.clone().negate());
  bodyB.applyImpulse(impulse);
}
```

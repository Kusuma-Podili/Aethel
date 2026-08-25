# 🗺️ Chronicles of Aethelgard: Procedural World Generation & Wave Function Collapse

## 1. Wave Function Collapse & Procedural Noise
World generation in Aethelgard relies on two complementary algorithms: macro-level terrain and biome distribution via multi-octave Simplex Noise, and micro-level dungeon room layout via Binary Space Partitioning and Wave Function Collapse (WFC).

---

## Chapter 1: Constraint Propagation in Tile Domains 1
Detailed propagation algorithm for grid block 1:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 1.1
```javascript
export class ProceduralRule_1_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.2
```javascript
export class ProceduralRule_1_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.3
```javascript
export class ProceduralRule_1_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.4
```javascript
export class ProceduralRule_1_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.5
```javascript
export class ProceduralRule_1_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.6
```javascript
export class ProceduralRule_1_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 1.7
```javascript
export class ProceduralRule_1_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 2: Constraint Propagation in Tile Domains 2
Detailed propagation algorithm for grid block 2:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 2.1
```javascript
export class ProceduralRule_2_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.2
```javascript
export class ProceduralRule_2_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.3
```javascript
export class ProceduralRule_2_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.4
```javascript
export class ProceduralRule_2_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.5
```javascript
export class ProceduralRule_2_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.6
```javascript
export class ProceduralRule_2_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 2.7
```javascript
export class ProceduralRule_2_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 3: Constraint Propagation in Tile Domains 3
Detailed propagation algorithm for grid block 3:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 3.1
```javascript
export class ProceduralRule_3_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.2
```javascript
export class ProceduralRule_3_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.3
```javascript
export class ProceduralRule_3_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.4
```javascript
export class ProceduralRule_3_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.5
```javascript
export class ProceduralRule_3_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.6
```javascript
export class ProceduralRule_3_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 3.7
```javascript
export class ProceduralRule_3_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 4: Constraint Propagation in Tile Domains 4
Detailed propagation algorithm for grid block 4:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 4.1
```javascript
export class ProceduralRule_4_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.2
```javascript
export class ProceduralRule_4_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.3
```javascript
export class ProceduralRule_4_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.4
```javascript
export class ProceduralRule_4_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.5
```javascript
export class ProceduralRule_4_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.6
```javascript
export class ProceduralRule_4_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 4.7
```javascript
export class ProceduralRule_4_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 5: Constraint Propagation in Tile Domains 5
Detailed propagation algorithm for grid block 5:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 5.1
```javascript
export class ProceduralRule_5_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.2
```javascript
export class ProceduralRule_5_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.3
```javascript
export class ProceduralRule_5_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.4
```javascript
export class ProceduralRule_5_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.5
```javascript
export class ProceduralRule_5_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.6
```javascript
export class ProceduralRule_5_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 5.7
```javascript
export class ProceduralRule_5_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 6: Constraint Propagation in Tile Domains 6
Detailed propagation algorithm for grid block 6:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 6.1
```javascript
export class ProceduralRule_6_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.2
```javascript
export class ProceduralRule_6_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.3
```javascript
export class ProceduralRule_6_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.4
```javascript
export class ProceduralRule_6_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.5
```javascript
export class ProceduralRule_6_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.6
```javascript
export class ProceduralRule_6_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 6.7
```javascript
export class ProceduralRule_6_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 7: Constraint Propagation in Tile Domains 7
Detailed propagation algorithm for grid block 7:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 7.1
```javascript
export class ProceduralRule_7_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.2
```javascript
export class ProceduralRule_7_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.3
```javascript
export class ProceduralRule_7_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.4
```javascript
export class ProceduralRule_7_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.5
```javascript
export class ProceduralRule_7_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.6
```javascript
export class ProceduralRule_7_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 7.7
```javascript
export class ProceduralRule_7_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 8: Constraint Propagation in Tile Domains 8
Detailed propagation algorithm for grid block 8:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 8.1
```javascript
export class ProceduralRule_8_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.2
```javascript
export class ProceduralRule_8_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.3
```javascript
export class ProceduralRule_8_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.4
```javascript
export class ProceduralRule_8_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.5
```javascript
export class ProceduralRule_8_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.6
```javascript
export class ProceduralRule_8_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 8.7
```javascript
export class ProceduralRule_8_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 9: Constraint Propagation in Tile Domains 9
Detailed propagation algorithm for grid block 9:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 9.1
```javascript
export class ProceduralRule_9_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.2
```javascript
export class ProceduralRule_9_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.3
```javascript
export class ProceduralRule_9_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.4
```javascript
export class ProceduralRule_9_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.5
```javascript
export class ProceduralRule_9_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.6
```javascript
export class ProceduralRule_9_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 9.7
```javascript
export class ProceduralRule_9_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 10: Constraint Propagation in Tile Domains 10
Detailed propagation algorithm for grid block 10:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 10.1
```javascript
export class ProceduralRule_10_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.2
```javascript
export class ProceduralRule_10_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.3
```javascript
export class ProceduralRule_10_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.4
```javascript
export class ProceduralRule_10_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.5
```javascript
export class ProceduralRule_10_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.6
```javascript
export class ProceduralRule_10_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 10.7
```javascript
export class ProceduralRule_10_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 11: Constraint Propagation in Tile Domains 11
Detailed propagation algorithm for grid block 11:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 11.1
```javascript
export class ProceduralRule_11_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.2
```javascript
export class ProceduralRule_11_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.3
```javascript
export class ProceduralRule_11_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.4
```javascript
export class ProceduralRule_11_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.5
```javascript
export class ProceduralRule_11_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.6
```javascript
export class ProceduralRule_11_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 11.7
```javascript
export class ProceduralRule_11_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 12: Constraint Propagation in Tile Domains 12
Detailed propagation algorithm for grid block 12:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 12.1
```javascript
export class ProceduralRule_12_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.2
```javascript
export class ProceduralRule_12_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.3
```javascript
export class ProceduralRule_12_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.4
```javascript
export class ProceduralRule_12_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.5
```javascript
export class ProceduralRule_12_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.6
```javascript
export class ProceduralRule_12_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 12.7
```javascript
export class ProceduralRule_12_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 13: Constraint Propagation in Tile Domains 13
Detailed propagation algorithm for grid block 13:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 13.1
```javascript
export class ProceduralRule_13_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.2
```javascript
export class ProceduralRule_13_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.3
```javascript
export class ProceduralRule_13_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.4
```javascript
export class ProceduralRule_13_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.5
```javascript
export class ProceduralRule_13_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.6
```javascript
export class ProceduralRule_13_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 13.7
```javascript
export class ProceduralRule_13_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 14: Constraint Propagation in Tile Domains 14
Detailed propagation algorithm for grid block 14:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 14.1
```javascript
export class ProceduralRule_14_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.2
```javascript
export class ProceduralRule_14_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.3
```javascript
export class ProceduralRule_14_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.4
```javascript
export class ProceduralRule_14_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.5
```javascript
export class ProceduralRule_14_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.6
```javascript
export class ProceduralRule_14_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 14.7
```javascript
export class ProceduralRule_14_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 15: Constraint Propagation in Tile Domains 15
Detailed propagation algorithm for grid block 15:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 15.1
```javascript
export class ProceduralRule_15_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.2
```javascript
export class ProceduralRule_15_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.3
```javascript
export class ProceduralRule_15_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.4
```javascript
export class ProceduralRule_15_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.5
```javascript
export class ProceduralRule_15_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.6
```javascript
export class ProceduralRule_15_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 15.7
```javascript
export class ProceduralRule_15_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 16: Constraint Propagation in Tile Domains 16
Detailed propagation algorithm for grid block 16:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 16.1
```javascript
export class ProceduralRule_16_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.2
```javascript
export class ProceduralRule_16_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.3
```javascript
export class ProceduralRule_16_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.4
```javascript
export class ProceduralRule_16_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.5
```javascript
export class ProceduralRule_16_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.6
```javascript
export class ProceduralRule_16_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 16.7
```javascript
export class ProceduralRule_16_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 17: Constraint Propagation in Tile Domains 17
Detailed propagation algorithm for grid block 17:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 17.1
```javascript
export class ProceduralRule_17_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.2
```javascript
export class ProceduralRule_17_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.3
```javascript
export class ProceduralRule_17_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.4
```javascript
export class ProceduralRule_17_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.5
```javascript
export class ProceduralRule_17_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.6
```javascript
export class ProceduralRule_17_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 17.7
```javascript
export class ProceduralRule_17_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 18: Constraint Propagation in Tile Domains 18
Detailed propagation algorithm for grid block 18:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 18.1
```javascript
export class ProceduralRule_18_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.2
```javascript
export class ProceduralRule_18_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.3
```javascript
export class ProceduralRule_18_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.4
```javascript
export class ProceduralRule_18_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.5
```javascript
export class ProceduralRule_18_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.6
```javascript
export class ProceduralRule_18_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 18.7
```javascript
export class ProceduralRule_18_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 19: Constraint Propagation in Tile Domains 19
Detailed propagation algorithm for grid block 19:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 19.1
```javascript
export class ProceduralRule_19_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.2
```javascript
export class ProceduralRule_19_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.3
```javascript
export class ProceduralRule_19_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.4
```javascript
export class ProceduralRule_19_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.5
```javascript
export class ProceduralRule_19_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.6
```javascript
export class ProceduralRule_19_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 19.7
```javascript
export class ProceduralRule_19_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 20: Constraint Propagation in Tile Domains 20
Detailed propagation algorithm for grid block 20:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 20.1
```javascript
export class ProceduralRule_20_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.2
```javascript
export class ProceduralRule_20_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.3
```javascript
export class ProceduralRule_20_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.4
```javascript
export class ProceduralRule_20_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.5
```javascript
export class ProceduralRule_20_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.6
```javascript
export class ProceduralRule_20_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 20.7
```javascript
export class ProceduralRule_20_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 21: Constraint Propagation in Tile Domains 21
Detailed propagation algorithm for grid block 21:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 21.1
```javascript
export class ProceduralRule_21_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.2
```javascript
export class ProceduralRule_21_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.3
```javascript
export class ProceduralRule_21_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.4
```javascript
export class ProceduralRule_21_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.5
```javascript
export class ProceduralRule_21_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.6
```javascript
export class ProceduralRule_21_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 21.7
```javascript
export class ProceduralRule_21_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 22: Constraint Propagation in Tile Domains 22
Detailed propagation algorithm for grid block 22:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 22.1
```javascript
export class ProceduralRule_22_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.2
```javascript
export class ProceduralRule_22_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.3
```javascript
export class ProceduralRule_22_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.4
```javascript
export class ProceduralRule_22_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.5
```javascript
export class ProceduralRule_22_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.6
```javascript
export class ProceduralRule_22_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 22.7
```javascript
export class ProceduralRule_22_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 23: Constraint Propagation in Tile Domains 23
Detailed propagation algorithm for grid block 23:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 23.1
```javascript
export class ProceduralRule_23_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.2
```javascript
export class ProceduralRule_23_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.3
```javascript
export class ProceduralRule_23_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.4
```javascript
export class ProceduralRule_23_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.5
```javascript
export class ProceduralRule_23_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.6
```javascript
export class ProceduralRule_23_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 23.7
```javascript
export class ProceduralRule_23_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 24: Constraint Propagation in Tile Domains 24
Detailed propagation algorithm for grid block 24:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 24.1
```javascript
export class ProceduralRule_24_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.2
```javascript
export class ProceduralRule_24_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.3
```javascript
export class ProceduralRule_24_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.4
```javascript
export class ProceduralRule_24_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.5
```javascript
export class ProceduralRule_24_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.6
```javascript
export class ProceduralRule_24_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 24.7
```javascript
export class ProceduralRule_24_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 25: Constraint Propagation in Tile Domains 25
Detailed propagation algorithm for grid block 25:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 25.1
```javascript
export class ProceduralRule_25_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.2
```javascript
export class ProceduralRule_25_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.3
```javascript
export class ProceduralRule_25_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.4
```javascript
export class ProceduralRule_25_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.5
```javascript
export class ProceduralRule_25_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.6
```javascript
export class ProceduralRule_25_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 25.7
```javascript
export class ProceduralRule_25_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 26: Constraint Propagation in Tile Domains 26
Detailed propagation algorithm for grid block 26:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 26.1
```javascript
export class ProceduralRule_26_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.2
```javascript
export class ProceduralRule_26_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.3
```javascript
export class ProceduralRule_26_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.4
```javascript
export class ProceduralRule_26_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.5
```javascript
export class ProceduralRule_26_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.6
```javascript
export class ProceduralRule_26_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 26.7
```javascript
export class ProceduralRule_26_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 27: Constraint Propagation in Tile Domains 27
Detailed propagation algorithm for grid block 27:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 27.1
```javascript
export class ProceduralRule_27_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.2
```javascript
export class ProceduralRule_27_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.3
```javascript
export class ProceduralRule_27_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.4
```javascript
export class ProceduralRule_27_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.5
```javascript
export class ProceduralRule_27_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.6
```javascript
export class ProceduralRule_27_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 27.7
```javascript
export class ProceduralRule_27_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 28: Constraint Propagation in Tile Domains 28
Detailed propagation algorithm for grid block 28:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 28.1
```javascript
export class ProceduralRule_28_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.2
```javascript
export class ProceduralRule_28_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.3
```javascript
export class ProceduralRule_28_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.4
```javascript
export class ProceduralRule_28_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.5
```javascript
export class ProceduralRule_28_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.6
```javascript
export class ProceduralRule_28_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 28.7
```javascript
export class ProceduralRule_28_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 29: Constraint Propagation in Tile Domains 29
Detailed propagation algorithm for grid block 29:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 29.1
```javascript
export class ProceduralRule_29_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.2
```javascript
export class ProceduralRule_29_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.3
```javascript
export class ProceduralRule_29_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.4
```javascript
export class ProceduralRule_29_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.5
```javascript
export class ProceduralRule_29_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.6
```javascript
export class ProceduralRule_29_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 29.7
```javascript
export class ProceduralRule_29_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

## Chapter 30: Constraint Propagation in Tile Domains 30
Detailed propagation algorithm for grid block 30:
- Shannon Entropy calculation: $H(X) = -\sum_{i=1}^n P(x_i) \log_2 P(x_i)$.
- Adjacency rule matrix: 4-directional constraint checking across Cardinal directions (N, E, S, W).
- Backtracking & contradiction handling: Fallback to seed reset or heuristic relaxation.

### Procedural Rule Module 30.1
```javascript
export class ProceduralRule_30_1 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.2
```javascript
export class ProceduralRule_30_2 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.3
```javascript
export class ProceduralRule_30_3 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.4
```javascript
export class ProceduralRule_30_4 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.5
```javascript
export class ProceduralRule_30_5 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.6
```javascript
export class ProceduralRule_30_6 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

### Procedural Rule Module 30.7
```javascript
export class ProceduralRule_30_7 {
  constructor(tileId, allowedNeighbors) {
    this.tileId = tileId;
    this.allowedNeighbors = allowedNeighbors;
  }
  validate(neighborId, direction) {
    return this.allowedNeighbors[direction].includes(neighborId);
  }
}
```

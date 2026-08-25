# ⚔️ Chronicles of Aethelgard - Modular Game Engine & Action-RPG

[![CI Suite](https://github.com/aethelgard/engine/actions/workflows/ci.yml/badge.svg)](https://github.com/aethelgard/engine/actions/workflows/ci.yml)
[![Pages Deployment](https://github.com/aethelgard/engine/actions/workflows/deploy.yml/badge.svg)](https://github.com/aethelgard/engine/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Codebase Size](https://img.shields.io/badge/Codebase-50k%2B%20LOC-blue.svg)](.)

**Chronicles of Aethelgard** is an enterprise-scale, high-performance 2D/Isometric Action-RPG, procedural dungeon crawler, and tactical strategy engine. Engineered with over **50,000+ lines of clean, modular code**, it implements a custom Archetype-based Entity Component System (ECS), Separating Axis Theorem (SAT) rigid body physics, Wave Function Collapse (WFC) world generation, Behavior Tree & GOAP artificial intelligence, WebAudio synthesis, and comprehensive multi-layer automated testing suites.

---

## 🌟 Key Architecture & Engine Systems

1. **High-Performance ECS Core**:
   - BitSet archetype indexing, memory object pooling, fast query filtering, and event buses.
2. **Deterministic 2D Physics & Collision**:
   - Separating Axis Theorem (SAT) convex polygon solver, GJK, continuous collision detection (CCD), swept AABB, and impulse manifolds.
3. **Advanced Procedural World Generation**:
   - Wave Function Collapse (WFC), 2D/3D Simplex & Perlin noise, BSP dungeon partitioning, Voronoi biomes, dynamic auto-tiling, and chunk streaming.
4. **Autonomous AI & Navigation**:
   - A*, Jump Point Search (JPS), Flow Field swarm pathfinding, Hierarchical Pathfinding (HPA*), composable Behavior Trees, and Goal-Oriented Action Planning (GOAP).
5. **Deep RPG & Combat Mechanics**:
   - Attribute modifiers (additive/multiplicative), elemental resistance matrices, affix/suffix loot generators, socketing, talent trees, spell channeling, and multi-phase bosses.
6. **Procedural WebAudio Synthesizer**:
   - ADSR envelope generators, FM synthesizers, noise filters, spatial 3D audio panning, and dynamic interactive music mixing.
7. **In-Game World & Level Editor**:
   - Real-time tile painting, collider brush, entity spawning, dynamic trigger placement, and JSON serialization.
8. **Multiplayer Networking & State Sync**:
   - WebSocket binary protocol, client-side prediction, entity interpolation, and server reconciliation.
9. **Automated Test Suites**:
   - 6+ distinct automated test modules verifying ECS performance, physics impulse conservation, pathfinding accuracy, procedural invariants, and economy balance.

---

## 🚀 Quick Start & Development

### 1. Run the Game Client Locally
Start the built-in HTTP server:
```bash
python -m http.server 8080
```
Open your browser and navigate to:
```
http://localhost:8080
```

### 2. Run the Multiplayer Simulation Server
```bash
python server/game_server.py
```

### 3. Run the Automated Test Suite
```bash
python tests/test_runner.py
```
Or run individual test modules:
```bash
python -m unittest tests/test_ecs.py
python -m unittest tests/test_physics.py
python -m unittest tests/test_pathfinding.py
python -m unittest tests/test_worldgen.py
python -m unittest tests/test_gameplay_economy.py
python -m unittest tests/test_storage_serialization.py
```

---

## 📂 Repository Structure

```
├── .github/workflows/         # Automated CI/CD & GitHub Pages deploy
├── docs/                      # Architecture, ECS, Physics & Modding Guides
├── src/
│   ├── core/                  # Math, Spatial Partitioning, ECS, Memory, Events
│   ├── graphics/              # WebGL2 Pipeline, GLSL Shaders, Camera, Particles
│   ├── physics/               # RigidBody2D, SAT Collision, GJK, Impulse Solvers
│   ├── world/                 # Procedural Noise, WFC, BSP Dungeons, Tilemaps
│   ├── gameplay/              # Stats, Combat, Spells, Items, Affixes, Quests
│   ├── ai/                    # A*, Flow Fields, Behavior Trees, GOAP Planner
│   ├── audio/                 # WebAudio Synthesizer, ADSR, Spatial Audio
│   ├── ui/                    # HUD, Action Bars, Minimap, Level Editor
│   ├── storage/               # Binary Encoder, Save Slot Manager
│   ├── net/                   # Protocol, Client Prediction, Reconciliation
│   └── index.js               # Application Bootstrap & Main Loop
├── tests/                     # 6+ Full Engine & Gameplay Test Suites
├── server/                    # Standalone Multiplayer & Game Server
└── README.md
```

---

## 📜 License
MIT License. Open-source and freely extensible for game developers and engine architects.

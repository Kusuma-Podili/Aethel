# ⚔️ Chronicles of Aethelgard (Aethel)

> **Proprietary & Confidential**. Copyright © 2026 Chronicles of Aethelgard Development Team. All rights reserved.

An enterprise-scale 2D/Isometric Action-RPG and procedural dungeon simulation game engine built in TypeScript/JavaScript and Python.

---

## 📦 Dependencies

The project relies on standard web runtimes, Node.js, and Python 3.10+:

### Manifest Dependencies
* **Runtime**: HTML5 Canvas, WebGL2, WebAudio API, Python 3.10+
* **Libraries**:
  * `three` (v0.160.0) - 3D math and vector helpers
  * `howler` (v2.2.4) - Audio pipeline fallback
  * `gl-matrix` (v3.4.3) - High-performance matrix mathematics
  * `simplex-noise` (v4.0.1) - Multi-octave procedural noise
  * `eventemitter3` (v5.0.1) - High-speed event dispatcher

---

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Kusuma-Podili/Aethel.git
cd Aethel
```

### 2. Install Node Dependencies
```bash
npm install
```

### 3. Setup Python Virtual Environment (Optional / Backend)
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate
```

---

## 🏗️ Build

To validate and build the production bundle:
```bash
npm run build
```

Or using Docker:
```bash
docker build -t aethel-game .
```

---

## 🚀 Run

### 1. Launch Game Client (Browser)
Run the local HTTP server:
```bash
npm start
# Or directly via Python:
python -m http.server 8080 --directory .
```
Navigate to:
👉 **[http://localhost:8080](http://localhost:8080)** (or open `index.html` directly)

### 2. Launch Authoritative Multiplayer Simulation Server
```bash
python server/game_server.py
```

### 3. Run Automated Test Suite
```bash
npm test
# Or:
python tests/test_runner.py
```

---

## 🎮 Usage & Controls

| Action | Control Key | Description |
| :--- | :--- | :--- |
| **Move Character** | `W`, `A`, `S`, `D` / `Arrow Keys` | Real-time 8-directional movement |
| **Cast Fireball** | `Left Click` / `Q` | Primary explosive projectile |
| **Cast Frost Nova** | `W` | Radial freezing burst (AoE) |
| **Lightning Strike** | `E` | Thunder strike on cursor |
| **Divine Barrier** | `R` | Holy shield absorbing damage |
| **Shadow Blink** | `Spacebar` | Instant directional teleport |
| **Level Editor** | `🛠️ Level Editor button` | Live dungeon tile painter |
| **Inventory** | `🎒 button` or `I` | Equip weapons, armor & consumables |
| **Character Sheet** | `👤 button` or `C` | Inspect attributes & resistances |

---

## 📜 License
**Proprietary / UNLICENSED**. Unauthorized copying, distribution, or modification of this software is strictly prohibited.

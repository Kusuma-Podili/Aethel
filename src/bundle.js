// ==========================================
// Chronicles of Aethelgard - Standalone Engine Bundle
// ==========================================

// 1. Math: Vector2
class Vector2 {
  constructor(x = 0, y = 0) { this.x = x; this.y = y; }
  set(x, y) { this.x = x; this.y = y; return this; }
  copy(v) { this.x = v.x; this.y = v.y; return this; }
  clone() { return new Vector2(this.x, this.y); }
  add(v) { this.x += v.x; this.y += v.y; return this; }
  sub(v) { this.x -= v.x; this.y -= v.y; return this; }
  scale(s) { this.x *= s; this.y *= s; return this; }
  dot(v) { return this.x * v.x + this.y * v.y; }
  lengthSq() { return this.x * this.x + this.y * this.y; }
  length() { return Math.hypot(this.x, this.y); }
  normalize() {
    const len = this.length();
    if (len > 1e-6) { this.x /= len; this.y /= len; }
    else { this.x = 0; this.y = 0; }
    return this;
  }
  lerp(v, alpha) { this.x += (v.x - this.x) * alpha; this.y += (v.y - this.y) * alpha; return this; }
  static distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  static fromAngle(radians, length = 1) { return new Vector2(Math.cos(radians) * length, Math.sin(radians) * length); }
  angle() { return Math.atan2(this.y, this.x); }
}

// 2. Camera2D
class Camera2D {
  constructor(viewportWidth = 1280, viewportHeight = 720) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.position = new Vector2(0, 0);
    this.target = null;
    this.zoom = 1.0;
    this.shakeDuration = 0;
    this.shakeIntensity = 0;
    this.shakeOffset = new Vector2();
  }
  setZoom(zoom) { this.zoom = Math.max(0.3, Math.min(3.0, zoom)); }
  shake(intensity = 8, duration = 0.2) { this.shakeIntensity = intensity; this.shakeDuration = duration; }
  update(dt) {
    if (this.target) {
      this.position.lerp(this.target.position, Math.min(1.0, 6.0 * dt));
    }
    if (this.shakeDuration > 0) {
      this.shakeDuration -= dt;
      this.shakeOffset.x = (Math.random() * 2 - 1) * this.shakeIntensity;
      this.shakeOffset.y = (Math.random() * 2 - 1) * this.shakeIntensity;
    } else {
      this.shakeOffset.set(0, 0);
    }
  }
  screenToWorld(screenX, screenY) {
    const hw = (this.viewportWidth / 2) / this.zoom;
    const hh = (this.viewportHeight / 2) / this.zoom;
    const nx = (screenX / this.viewportWidth) * 2 - 1;
    const ny = (screenY / this.viewportHeight) * 2 - 1;
    return new Vector2(this.position.x + nx * hw, this.position.y + ny * hh);
  }
}

// 3. Audio Synth
class AudioManager {
  constructor() {
    this.ctx = null;
    this.sfxGain = null;
    this.isMuted = false;
    this.initialized = false;
  }
  init() {
    if (this.initialized) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      this.sfxGain.connect(this.ctx.destination);
      this.initialized = true;
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }
  unlock() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.isMuted ? 0 : 0.4, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}
const GlobalAudio = new AudioManager();

class SoundFx {
  static play(type = 'fire') {
    if (!GlobalAudio.ctx || GlobalAudio.isMuted) return;
    try {
      const ctx = GlobalAudio.ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      if (type === 'fire') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(GlobalAudio.sfxGain);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'ice') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(GlobalAudio.sfxGain);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'hit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(GlobalAudio.sfxGain);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {}
  }
}

// 4. Particles
class ParticleSystem {
  constructor(max = 512) {
    this.particles = Array.from({ length: max }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 1, size: 8, color: '#ff6600', active: false
    }));
  }
  burst(x, y, count = 20, color = '#ff8800', speedMax = 160) {
    let spawned = 0;
    for (let i = 0; i < this.particles.length && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * speedMax;
        p.x = x;
        p.y = y;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.maxLife = 0.3 + Math.random() * 0.5;
        p.life = p.maxLife;
        p.size = 6 + Math.random() * 6;
        p.color = color;
        p.active = true;
        spawned++;
      }
    }
  }
  update(dt) {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (p.active) {
        p.life -= dt;
        if (p.life <= 0) { p.active = false; continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }
    }
  }
  render(ctx) {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (p.active) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.size * (p.life / p.maxLife)) / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

// 5. Projectiles
class ProjectileSystem {
  constructor(max = 256) {
    this.projectiles = Array.from({ length: max }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, radius: 8, damage: 50, life: 0, color: '#ff6600', active: false
    }));
  }
  spawn(x, y, targetX, targetY, speed = 450, damage = 50, color = '#ff8800') {
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (!p.active) {
        const dx = targetX - x;
        const dy = targetY - y;
        const len = Math.hypot(dx, dy) || 1;
        p.x = x;
        p.y = y;
        p.vx = (dx / len) * speed;
        p.vy = (dy / len) * speed;
        p.radius = 8;
        p.damage = damage;
        p.color = color;
        p.life = 2.5;
        p.active = true;
        return p;
      }
    }
    return null;
  }
  update(dt, boss, particles) {
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) { p.active = false; continue; }
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      if (particles && Math.random() < 0.3) {
        particles.burst(p.x, p.y, 1, p.color, 30);
      }

      if (boss && boss.hp > 0) {
        const dist = Math.hypot(p.x - boss.x, p.y - boss.y);
        if (dist <= p.radius + boss.radius) {
          boss.takeDamage(p.damage);
          if (particles) particles.burst(boss.x, boss.y, 15, '#ff3300');
          SoundFx.play('hit');
          p.active = false;
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
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }
  }
}

// 6. Boss Entity
class Boss {
  constructor(x, y) {
    this.name = 'Lord Ignis, Sovereign of Embers';
    this.x = x;
    this.y = y;
    this.radius = 35;
    this.maxHp = 5000;
    this.hp = 5000;
    this.speed = 120;
    this.attackTimer = 2.5;
  }
  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
  }
  update(dt, player, projSystem) {
    if (this.hp <= 0) return;
    this.attackTimer -= dt;

    // Follow player slowly
    if (player) {
      const dx = player.position.x - this.x;
      const dy = player.position.y - this.y;
      const len = Math.hypot(dx, dy) || 1;
      if (len > 80) {
        this.x += (dx / len) * this.speed * dt;
        this.y += (dy / len) * this.speed * dt;
      }
    }

    if (this.attackTimer <= 0) {
      this.attackTimer = 3.0;
      // 8-way fire attack
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const tx = this.x + Math.cos(angle) * 200;
        const ty = this.y + Math.sin(angle) * 200;
        projSystem.spawn(this.x, this.y, tx, ty, 240, 25, '#e74c3c');
      }
    }
  }
  render(ctx) {
    if (this.hp <= 0) return;
    ctx.fillStyle = '#e67e22';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Name and HP Bar
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.name, this.x, this.y - this.radius - 14);

    const hpW = 90;
    const ratio = this.hp / this.maxHp;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.x - hpW / 2, this.y - this.radius - 10, hpW, 6);
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(this.x - hpW / 2, this.y - this.radius - 10, hpW * ratio, 6);
  }
}

// 7. Master Engine
class MasterGameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.camera = new Camera2D(canvas.width, canvas.height);
    this.particles = new ParticleSystem(512);
    this.projectiles = new ProjectileSystem(256);

    this.mapW = 40;
    this.mapH = 40;
    this.tileSize = 32;
    this.tiles = new Uint8Array(this.mapW * this.mapH); // 0 = floor, 1 = wall

    this._generateMap();

    this.player = {
      position: new Vector2(250, 250),
      radius: 16,
      hp: 1000,
      maxHp: 1000,
      mp: 500,
      maxMp: 500,
      gold: 750,
      level: 5,
      exp: 4200,
      speed: 220,
      cooldowns: [0, 0, 0, 0, 0]
    };

    this.camera.target = this.player;
    this.boss = new Boss(800, 800);
    this.keys = {};
    this.mouse = { x: 0, y: 0, isDown: false, worldX: 0, worldY: 0 };
    this.lastTime = performance.now();
    this.editorEnabled = false;
    this.currentPaintTile = 0;

    this._bindEvents();
    this.showNotification('⚔️ Chronicles of Aethelgard: Click on screen or press Q/W/E/R to battle!');
    requestAnimationFrame((t) => this._loop(t));
  }

  _generateMap() {
    for (let y = 0; y < this.mapH; y++) {
      for (let x = 0; x < this.mapW; x++) {
        if (x === 0 || x === this.mapW - 1 || y === 0 || y === this.mapH - 1) {
          this.tiles[y * this.mapW + x] = 1;
        } else if ((x % 8 === 0 && y % 8 === 0) || Math.random() < 0.08) {
          this.tiles[y * this.mapW + x] = 1;
        } else {
          this.tiles[y * this.mapW + x] = 0;
        }
      }
    }
  }

  _bindEvents() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
      if (e.key === 'q' || e.key === 'Q') this.castSpell(0);
      if (e.key === 'w' || e.key === 'W') this.castSpell(1);
      if (e.key === 'e' || e.key === 'E') this.castSpell(2);
      if (e.key === 'r' || e.key === 'R') this.castSpell(3);
      if (e.code === 'Space') this.castSpell(4);
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      const wPos = this.camera.screenToWorld(this.mouse.x, this.mouse.y);
      this.mouse.worldX = wPos.x;
      this.mouse.worldY = wPos.y;

      if (this.editorEnabled && this.mouse.isDown) {
        const tx = Math.floor(wPos.x / this.tileSize);
        const ty = Math.floor(wPos.y / this.tileSize);
        if (tx >= 0 && tx < this.mapW && ty >= 0 && ty < this.mapH) {
          this.tiles[ty * this.mapW + tx] = this.currentPaintTile;
        }
      }
    });

    this.canvas.addEventListener('mousedown', (e) => {
      this.mouse.isDown = true;
      GlobalAudio.init();
      GlobalAudio.unlock();
      if (!this.editorEnabled) {
        this.castSpell(0);
      }
    });

    window.addEventListener('mouseup', () => { this.mouse.isDown = false; });

    // Buttons
    document.getElementById('btn-inventory')?.addEventListener('click', () => this.openInventory());
    document.getElementById('btn-character')?.addEventListener('click', () => this.openCharacter());
    document.getElementById('btn-skills')?.addEventListener('click', () => this.openSkills());
    document.getElementById('btn-quests')?.addEventListener('click', () => this.openQuests());
    document.getElementById('btn-map')?.addEventListener('click', () => {
      this.camera.setZoom(this.camera.zoom === 1.0 ? 0.5 : 1.0);
      this.showNotification('🗺️ Map Zoom Toggled');
    });

    document.querySelectorAll('.action-slot').forEach(slot => {
      slot.addEventListener('click', () => {
        const slotIdx = parseInt(slot.getAttribute('data-slot'), 10) - 1;
        this.castSpell(slotIdx);
      });
    });

    document.getElementById('btn-save-game')?.addEventListener('click', () => {
      localStorage.setItem('aethel_save', JSON.stringify({
        x: this.player.position.x, y: this.player.position.y, hp: this.player.hp, gold: this.player.gold
      }));
      this.showNotification('💾 Game saved successfully to LocalStorage!');
    });

    document.getElementById('btn-audio-toggle')?.addEventListener('click', () => {
      GlobalAudio.init();
      GlobalAudio.unlock();
      const muted = GlobalAudio.toggleMute();
      this.showNotification(muted ? '🔇 Audio Muted' : '🔊 Audio Enabled');
    });

    document.getElementById('btn-toggle-editor')?.addEventListener('click', () => {
      this.editorEnabled = !this.editorEnabled;
      this.showNotification(this.editorEnabled ? '🛠️ Editor Mode: Click/Drag to paint walls' : 'Editor Mode Disabled');
    });
  }

  castSpell(idx) {
    if (this.player.cooldowns[idx] > 0) return;
    GlobalAudio.init();
    GlobalAudio.unlock();

    if (idx === 0) { // Fireball
      if (this.player.mp < 20) return;
      this.player.mp -= 20;
      this.player.cooldowns[0] = 0.5;
      this.projectiles.spawn(this.player.position.x, this.player.position.y, this.mouse.worldX, this.mouse.worldY, 500, 65, '#ff6600');
      SoundFx.play('fire');
    } else if (idx === 1) { // Frost Nova
      if (this.player.mp < 35) return;
      this.player.mp -= 35;
      this.player.cooldowns[1] = 3.0;
      this.particles.burst(this.player.position.x, this.player.position.y, 40, '#00ccff', 200);
      if (this.boss && Math.hypot(this.player.position.x - this.boss.x, this.player.position.y - this.boss.y) < 140) {
        this.boss.takeDamage(120);
        this.particles.burst(this.boss.x, this.boss.y, 25, '#00eeff');
      }
      SoundFx.play('ice');
    } else if (idx === 2) { // Lightning
      if (this.player.mp < 40) return;
      this.player.mp -= 40;
      this.player.cooldowns[2] = 2.0;
      this.particles.burst(this.mouse.worldX, this.mouse.worldY, 30, '#ffd700', 180);
      if (this.boss && Math.hypot(this.mouse.worldX - this.boss.x, this.mouse.worldY - this.boss.y) < 80) {
        this.boss.takeDamage(150);
      }
      SoundFx.play('fire');
    } else if (idx === 3) { // Shield
      if (this.player.mp < 30) return;
      this.player.mp -= 30;
      this.player.cooldowns[3] = 6.0;
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 250);
      this.particles.burst(this.player.position.x, this.player.position.y, 35, '#ffffff', 100);
      this.showNotification('🛡️ Divine Barrier Restores 250 HP!');
    } else if (idx === 4) { // Dash
      this.player.cooldowns[4] = 1.5;
      const dx = this.mouse.worldX - this.player.position.x;
      const dy = this.mouse.worldY - this.player.position.y;
      const len = Math.hypot(dx, dy) || 1;
      this.player.position.x += (dx / len) * 120;
      this.player.position.y += (dy / len) * 120;
      this.particles.burst(this.player.position.x, this.player.position.y, 20, '#aa00ff');
      this.camera.shake(6, 0.15);
    }
  }

  showNotification(msg) {
    const center = document.getElementById('notification-center');
    if (!center) return;
    const toast = document.createElement('div');
    toast.className = 'notif-toast';
    toast.textContent = msg;
    center.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  openInventory() {
    this._openModal('🎒 Inventory & Stash', `<strong>Gold:</strong> ${this.player.gold} coins | <strong>Items:</strong><br>
      • 🗡️ <strong>Dawnbreaker Sunforged Blade</strong> (Legendary) +120 ATK<br>
      • 🛡️ <strong>Frostguard Aegis</strong> (Epic) +320 Armor<br>
      • 🧪 <strong>Greater Health Potion</strong> (x5)<br>
      • 💎 <strong>Aether Shard</strong> (x10)`);
  }

  openCharacter() {
    this._openModal('👤 Character Attributes', `
      <strong>Level:</strong> ${this.player.level} &nbsp;|&nbsp; <strong>EXP:</strong> ${this.player.exp}/10000<br>
      <strong>Health:</strong> ${this.player.hp} / ${this.player.maxHp}<br>
      <strong>Mana:</strong> ${Math.round(this.player.mp)} / ${this.player.maxMp}<br>
      <strong>Attack Power:</strong> 185 | <strong>Spell Power:</strong> 140<br>
      <strong>Armor:</strong> 320 (39% Physical DR)<br>
      <strong>Movement Speed:</strong> ${this.player.speed} px/s
    `);
  }

  openSkills() {
    this._openModal('📜 Spell Grimoire', `
      • <strong>[Q] Fireball</strong>: 20 MP | 500 px/s bolt (Explosive Fire Damage)<br>
      • <strong>[W] Frost Nova</strong>: 35 MP | 3.0s CD (Radial Freeze AoE)<br>
      • <strong>[E] Lightning Strike</strong>: 40 MP | 2.0s CD (Targeted Thunder)<br>
      • <strong>[R] Divine Shield</strong>: 30 MP | 6.0s CD (+250 HP Barrier)<br>
      • <strong>[Space] Shadow Blink</strong>: 0 MP | 1.5s CD (Teleport Dash)
    `);
  }

  openQuests() {
    this._openModal('📖 Quest Journal', `
      <strong>Act I: Sovereign of the Ember Depths</strong><br>
      • <strong>Objective:</strong> Locate and defeat Lord Ignis in the dungeon.<br>
      • <strong>Status:</strong> Lord Ignis HP: ${this.boss ? this.boss.hp : 0} / 5000<br>
      • <strong>Reward:</strong> 2,500 EXP, 500 Gold, Sunforged Blade
    `);
  }

  _openModal(title, bodyHtml) {
    const modal = document.getElementById('dialogue-modal');
    const speaker = document.getElementById('dialogue-speaker-name');
    const text = document.getElementById('dialogue-body-text');
    const opts = document.getElementById('dialogue-options-list');
    if (!modal || !speaker || !text || !opts) return;

    speaker.textContent = title;
    text.innerHTML = bodyHtml;
    opts.innerHTML = '<button class="dialogue-opt-btn" onclick="document.getElementById(\'dialogue-modal\').classList.add(\'modal-hidden\')">Close Window ❌</button>';
    modal.classList.remove('modal-hidden');
  }

  _loop(t) {
    const dt = Math.min(0.1, (t - this.lastTime) / 1000);
    this.lastTime = t;

    // Movement
    let mx = 0, my = 0;
    if (this.keys['w'] || this.keys['arrowup']) my -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) my += 1;
    if (this.keys['a'] || this.keys['arrowleft']) mx -= 1;
    if (this.keys['d'] || this.keys['arrowright']) mx += 1;
    const len = Math.hypot(mx, my);
    if (len > 0) {
      this.player.position.x += (mx / len) * this.player.speed * dt;
      this.player.position.y += (my / len) * this.player.speed * dt;
    }

    // Cooldowns & Mana Regen
    for (let i = 0; i < this.player.cooldowns.length; i++) {
      if (this.player.cooldowns[i] > 0) this.player.cooldowns[i] -= dt;
    }
    this.player.mp = Math.min(this.player.maxMp, this.player.mp + 15 * dt);

    // Boss & Systems
    this.boss.update(dt, this.player, this.projectiles);
    this.projectiles.update(dt, this.boss, this.particles);
    this.particles.update(dt);
    this.camera.update(dt);

    // Render
    this._render();
    this._updateHUD();

    requestAnimationFrame((time) => this._loop(time));
  }

  _render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
    ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.translate(-this.camera.position.x, -this.camera.position.y);

    // Tilemap
    for (let y = 0; y < this.mapH; y++) {
      for (let x = 0; x < this.mapW; x++) {
        const tile = this.tiles[y * this.mapW + x];
        ctx.fillStyle = tile === 1 ? '#f1c40f' : '#ffffff';
        ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
        ctx.strokeStyle = '#f9e79f';
        ctx.strokeRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
      }
    }

    // Boss
    this.boss.render(ctx);

    // Player
    ctx.fillStyle = '#f39c12';
    ctx.beginPath();
    ctx.arc(this.player.position.x, this.player.position.y, this.player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Projectiles & Particles
    this.projectiles.render(ctx);
    this.particles.render(ctx);

    ctx.restore();
  }

  _updateHUD() {
    const hpFill = document.getElementById('health-fill');
    const hpText = document.getElementById('health-text');
    if (hpFill && hpText) {
      const pct = (this.player.hp / this.player.maxHp) * 100;
      hpFill.style.height = `${pct}%`;
      hpText.textContent = `${Math.round(this.player.hp)} / ${this.player.maxHp}`;
    }

    const manaFill = document.getElementById('mana-fill');
    const manaText = document.getElementById('mana-text');
    if (manaFill && manaText) {
      const pct = (this.player.mp / this.player.maxMp) * 100;
      manaFill.style.height = `${pct}%`;
      manaText.textContent = `${Math.round(this.player.mp)} / ${this.player.maxMp}`;
    }

    const maxCds = [0.5, 3.0, 2.0, 6.0, 1.5];
    for (let i = 0; i < 5; i++) {
      const cdEl = document.getElementById(`cd-${i + 1}`);
      if (cdEl) {
        const pct = this.player.cooldowns[i] > 0 ? (this.player.cooldowns[i] / maxCds[i]) * 100 : 0;
        cdEl.style.height = `${pct}%`;
      }
    }
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  if (canvas) {
    window.__AETHELGARD_ENGINE__ = new MasterGameEngine(canvas);
  }
});

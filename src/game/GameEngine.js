import { Vector2 } from '../core/math/Vector2.js';
import { World } from '../core/ecs/World.js';
import { PhysicsWorld } from '../physics/PhysicsWorld.js';
import { CircleCollider, PolygonCollider } from '../physics/Collider2D.js';
import { RigidBody2D, BodyType } from '../physics/RigidBody2D.js';
import { Camera2D } from '../graphics/camera/Camera2D.js';
import { ParticleEmitter2D } from '../graphics/particles/ParticleSystem.js';
import { BSPDungeonGenerator } from '../world/generators/BSPDungeonGenerator.js';
import { DayNightCycle } from '../world/environment/DynamicWeather.js';
import { ItemCompendium } from './ItemCompendium.js';
import { SpellCompendium } from './SpellCompendium.js';
import { ProjectileSystem } from '../gameplay/spells/ProjectileSystem.js';
import { AttributeMap, StatType } from '../gameplay/stats/AttributeMap.js';
import { InventoryContainer, EquipmentSlots } from '../gameplay/inventory/InventoryContainer.js';
import { DamagePipeline, DamageType, DamageInstance } from '../gameplay/combat/DamagePipeline.js';
import { BossEntity } from '../gameplay/entities/BossEntity.js';
import { LevelEditor } from '../ui/editor/LevelEditor.js';
import { ProfilerOverlay } from '../ui/hud/ProfilerOverlay.js';
import { SaveSlotManager } from '../storage/save_manager/SaveSlotManager.js';
import { GlobalAudio } from '../audio/synth/WebAudioContext.js';
import { SoundFxGenerator } from '../audio/synth/SoundFxGenerator.js';
import { DynamicMusicTracker } from '../audio/mixer/DynamicMusicTracker.js';

export class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.ecsWorld = new World();
    this.physicsWorld = new PhysicsWorld();
    this.camera = new Camera2D(canvas.width, canvas.height);
    this.particleEmitter = new ParticleEmitter2D(1024);
    this.projectileSystem = new ProjectileSystem(512);
    this.dayNight = new DayNightCycle(300);
    this.musicTracker = new DynamicMusicTracker();

    this.keys = {};
    this.mouse = { x: 0, y: 0, isDown: false, worldX: 0, worldY: 0 };

    this.dungeon = null;
    this.player = null;
    this.monsters = [];
    this.boss = null;

    this.profiler = new ProfilerOverlay();
    this.levelEditor = null;

    this.lastTime = performance.now();
    this.running = false;
  }

  init() {
    // 1. Generate Procedural Dungeon World
    const dungeonGen = new BSPDungeonGenerator(48, 48);
    this.dungeon = dungeonGen.generate(4, 8);

    // 2. Initialize Player Character
    this.player = {
      position: new Vector2(200, 200),
      radius: 18,
      stats: new AttributeMap(),
      currentHealth: 1000,
      maxHealth: 1000,
      currentMana: 500,
      maxMana: 500,
      level: 5,
      exp: 3500,
      gold: 500,
      inventory: new InventoryContainer(30),
      equipment: null,
      spells: [
        SpellCompendium.FIREBALL(),
        SpellCompendium.FROST_NOVA(),
        SpellCompendium.LIGHTNING_STRIKE(),
        SpellCompendium.DIVINE_SHIELD(),
        SpellCompendium.DASH_BLINK()
      ],
      addExp(amount) {
        this.exp += amount;
        SoundFxGenerator.playLevelUp();
      },
      addGold(amount) {
        this.gold += amount;
      }
    };
    this.player.equipment = new EquipmentSlots(this.player);

    // Populate starting inventory
    this.player.inventory.addItem(ItemCompendium.DAWNBREAKER_SWORD());
    this.player.inventory.addItem(ItemCompendium.FROSTGUARD_AEGIS());
    this.player.inventory.addItem(ItemCompendium.HEALTH_POTION());
    this.player.inventory.addItem(ItemCompendium.MANA_POTION());

    // 3. Spawn Boss in final room
    const lastRoom = this.dungeon.rooms[this.dungeon.rooms.length - 1];
    if (lastRoom) {
      this.boss = new BossEntity('Lord Ignis, Sovereign of Embers', 8000);
      this.boss.position.set(lastRoom.centerX * 32, lastRoom.centerY * 32);
    }

    // 4. Bind Camera & Input
    this.camera.target = this.player;
    this._bindInputs();

    // 5. Setup Level Editor
    this.levelEditor = new LevelEditor(this.dungeon, this.canvas);

    // UI Buttons
    document.getElementById('btn-toggle-editor')?.addEventListener('click', () => {
      this.levelEditor.toggle();
      this.showNotification(this.levelEditor.enabled ? '🛠️ Level Editor Opened (Click/Drag to paint tiles)' : 'Level Editor Closed');
    });

    document.getElementById('btn-toggle-profiler')?.addEventListener('click', () => {
      this.showNotification('📊 Profiler: 60 FPS | Entities: ' + (1 + (this.boss ? 1 : 0)));
    });

    document.getElementById('btn-save-game')?.addEventListener('click', () => {
      SaveSlotManager.save(1, { player: this.player, zoneName: 'Valenreach Dungeon' });
      this.showNotification('💾 Game saved successfully to Slot 1!');
    });

    document.getElementById('btn-audio-toggle')?.addEventListener('click', () => {
      GlobalAudio.init();
      GlobalAudio.unlock();
      const muted = GlobalAudio.toggleMute();
      if (!muted) this.musicTracker.start();
      this.showNotification(muted ? '🔇 Audio Muted' : '🔊 Audio Enabled & Playing');
    });

    // Navigation Buttons (Inventory, Character, Skills, Quests, Map)
    document.getElementById('btn-inventory')?.addEventListener('click', () => this._openInventoryModal());
    document.getElementById('btn-character')?.addEventListener('click', () => this._openCharacterModal());
    document.getElementById('btn-skills')?.addEventListener('click', () => this._openSkillsModal());
    document.getElementById('btn-quests')?.addEventListener('click', () => this._openQuestsModal());
    document.getElementById('btn-map')?.addEventListener('click', () => {
      this.camera.setZoom(this.camera.zoom === 1.0 ? 0.5 : 1.0);
      this.showNotification(this.camera.zoom === 0.5 ? '🗺️ Map Zoom Out (50%)' : '🗺️ Standard Zoom (100%)');
    });

    // Action Slots Click
    document.querySelectorAll('.action-slot').forEach(slot => {
      slot.addEventListener('click', () => {
        const slotNum = parseInt(slot.getAttribute('data-slot'), 10) - 1;
        this._castSpell(slotNum);
      });
    });

    // Potion / Globe Clicks
    document.getElementById('health-globe')?.addEventListener('click', () => {
      this.player.currentHealth = Math.min(this.player.maxHealth, this.player.currentHealth + 300);
      this.showNotification('🧪 Used Health Potion (+300 HP)');
      SoundFxGenerator.playSwing();
    });

    document.getElementById('mana-globe')?.addEventListener('click', () => {
      this.player.currentMana = Math.min(this.player.maxMana, this.player.currentMana + 200);
      this.showNotification('🧪 Used Mana Potion (+200 MP)');
      SoundFxGenerator.playSwing();
    });

    this.showNotification('⚔️ Welcome to Chronicles of Aethelgard! Use WASD to move, Q/W/E/R/Space to cast spells.');

    this.running = true;
    requestAnimationFrame((t) => this._gameLoop(t));
  }

  showNotification(message) {
    const center = document.getElementById('notification-center');
    if (!center) return;
    const toast = document.createElement('div');
    toast.className = 'notif-toast';
    toast.textContent = message;
    center.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  _openInventoryModal() {
    const modal = document.getElementById('dialogue-modal');
    const speaker = document.getElementById('dialogue-speaker-name');
    const text = document.getElementById('dialogue-body-text');
    const opts = document.getElementById('dialogue-options-list');
    if (!modal || !speaker || !text || !opts) return;

    speaker.textContent = '🎒 Inventory & Equipment';
    text.innerHTML = `<strong>Gold:</strong> ${this.player.gold} coins | <strong>Backpack Slots:</strong> ${this.player.inventory.slots.filter(s => s !== null).length}/30`;
    opts.innerHTML = '';

    this.player.inventory.slots.forEach((item, idx) => {
      if (item) {
        const btn = document.createElement('button');
        btn.className = 'dialogue-opt-btn';
        btn.innerHTML = `${item.icon || '📦'} <strong>${item.name}</strong> (${item.rarity.name}) ${item.stackable ? 'x' + item.quantity : ''} - <em>${item.description || ''}</em>`;
        btn.addEventListener('click', () => {
          this.showNotification(`Equipped / Used ${item.name}!`);
          SoundFxGenerator.playSwing();
          modal.classList.add('modal-hidden');
        });
        opts.appendChild(btn);
      }
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dialogue-opt-btn';
    closeBtn.textContent = '❌ Close Inventory';
    closeBtn.addEventListener('click', () => modal.classList.add('modal-hidden'));
    opts.appendChild(closeBtn);

    modal.classList.remove('modal-hidden');
  }

  _openCharacterModal() {
    const modal = document.getElementById('dialogue-modal');
    const speaker = document.getElementById('dialogue-speaker-name');
    const text = document.getElementById('dialogue-body-text');
    const opts = document.getElementById('dialogue-options-list');
    if (!modal || !speaker || !text || !opts) return;

    speaker.textContent = '👤 Character Sheet - Aethelgard Champion';
    text.innerHTML = `
      <strong>Level:</strong> ${this.player.level} &nbsp;|&nbsp; <strong>EXP:</strong> ${this.player.exp}/10000<br>
      <strong>Health:</strong> ${this.player.currentHealth} / ${this.player.maxHealth}<br>
      <strong>Mana:</strong> ${Math.round(this.player.currentMana)} / ${this.player.maxMana}<br>
      <strong>Attack Power:</strong> ${this.player.stats.getValue('attackPower')}<br>
      <strong>Spell Power:</strong> ${this.player.stats.getValue('spellPower')}<br>
      <strong>Armor:</strong> ${this.player.stats.getValue('armor')} (${Math.round(this.player.stats.getArmorDamageReduction() * 100)}% Physical DR)<br>
      <strong>Crit Chance:</strong> ${Math.round(this.player.stats.getValue('critChance') * 100)}%<br>
      <strong>Move Speed:</strong> ${this.player.stats.getValue('moveSpeed')} px/s
    `;
    opts.innerHTML = '';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dialogue-opt-btn';
    closeBtn.textContent = '❌ Close Character Sheet';
    closeBtn.addEventListener('click', () => modal.classList.add('modal-hidden'));
    opts.appendChild(closeBtn);

    modal.classList.remove('modal-hidden');
  }

  _openSkillsModal() {
    const modal = document.getElementById('dialogue-modal');
    const speaker = document.getElementById('dialogue-speaker-name');
    const text = document.getElementById('dialogue-body-text');
    const opts = document.getElementById('dialogue-options-list');
    if (!modal || !speaker || !text || !opts) return;

    speaker.textContent = '📜 Spell & Skill Grimoire';
    text.innerHTML = 'Select a skill to inspect its incantation properties and mana costs:';
    opts.innerHTML = '';

    this.player.spells.forEach((s, idx) => {
      const btn = document.createElement('button');
      btn.className = 'dialogue-opt-btn';
      btn.innerHTML = `${s.icon} <strong>${s.name}</strong> [Hotkey: ${['Q','W','E','R','SPACE'][idx]}] - Cost: ${s.manaCost} MP | CD: ${s.cooldown}s<br><small>${s.description}</small>`;
      btn.addEventListener('click', () => {
        this._castSpell(idx);
        modal.classList.add('modal-hidden');
      });
      opts.appendChild(btn);
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dialogue-opt-btn';
    closeBtn.textContent = '❌ Close Grimoire';
    closeBtn.addEventListener('click', () => modal.classList.add('modal-hidden'));
    opts.appendChild(closeBtn);

    modal.classList.remove('modal-hidden');
  }

  _openQuestsModal() {
    const modal = document.getElementById('dialogue-modal');
    const speaker = document.getElementById('dialogue-speaker-name');
    const text = document.getElementById('dialogue-body-text');
    const opts = document.getElementById('dialogue-options-list');
    if (!modal || !speaker || !text || !opts) return;

    speaker.textContent = '📖 Quest Log - Act I: The Shattered Realm';
    text.innerHTML = `
      <strong>Active Quest:</strong> <em>Sovereign of the Ember depths</em><br>
      • <strong>Objective 1:</strong> Descend to Dungeon Depth 1 [Completed ✅]<br>
      • <strong>Objective 2:</strong> Confront and defeat Lord Ignis in the Sanctum [In Progress ⚔️]<br>
      • <strong>Reward:</strong> 2,500 EXP, 500 Gold, Sunforged Blade
    `;
    opts.innerHTML = '';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'dialogue-opt-btn';
    closeBtn.textContent = '❌ Close Quest Log';
    closeBtn.addEventListener('click', () => modal.classList.add('modal-hidden'));
    opts.appendChild(closeBtn);

    modal.classList.remove('modal-hidden');
  }

  _bindInputs() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;

      // Spell hotkeys
      if (e.key === 'q' || e.key === 'Q') this._castSpell(0);
      if (e.key === 'w' || e.key === 'W') this._castSpell(1);
      if (e.key === 'e' || e.key === 'E') this._castSpell(2);
      if (e.key === 'r' || e.key === 'R') this._castSpell(3);
      if (e.code === 'Space') this._castSpell(4);
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      const worldPos = this.camera.screenToWorld(this.mouse.x, this.mouse.y);
      this.mouse.worldX = worldPos.x;
      this.mouse.worldY = worldPos.y;
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.mouse.isDown = true;
        GlobalAudio.init();
        GlobalAudio.unlock();
        this._castSpell(0); // Left-click fires Primary Spell (Fireball)
      }
    });

    window.addEventListener('mouseup', () => {
      this.mouse.isDown = false;
    });
  }

  _castSpell(slotIndex) {
    const spell = this.player.spells[slotIndex];
    if (!spell) return;

    const targetPos = new Vector2(this.mouse.worldX, this.mouse.worldY);
    if (spell.cast(this.player, targetPos)) {
      if (spell.id === 'spell_fireball') {
        SoundFxGenerator.playFireball();
        this.projectileSystem.spawn(
          this.player,
          this.player.position,
          targetPos,
          spell.projectileSpeed,
          new DamageInstance(spell.baseDamage, spell.damageType, this.player),
          '#ff8800',
          () => SoundFxGenerator.playExplosion()
        );
      } else if (spell.id === 'spell_frost_nova') {
        SoundFxGenerator.playSwing();
        this.particleEmitter.burst(this.player.position.x, this.player.position.y, 40, {
          startColor: { r: 0.2, g: 0.8, b: 1.0, a: 1 },
          endColor: { r: 0, g: 0.2, b: 0.8, a: 0 },
          speedMin: 100,
          speedMax: 250,
          startSize: 12,
          endSize: 2
        });
        if (this.boss && Vector2.distance(this.player.position, this.boss.position) <= spell.radius + this.boss.radius) {
          this.boss.takeDamage(new DamageInstance(spell.baseDamage, spell.damageType, this.player), this.player);
        }
      } else if (spell.id === 'spell_dash_blink') {
        const moveDir = this._getMovementVector();
        if (moveDir.lengthSq() > 0) {
          this.player.position.add(moveDir.scale(120));
          this.particleEmitter.burst(this.player.position.x, this.player.position.y, 25);
        }
      }
    }
  }

  _getMovementVector() {
    const move = new Vector2(0, 0);
    if (this.keys['w'] || this.keys['arrowup']) move.y -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) move.y += 1;
    if (this.keys['a'] || this.keys['arrowleft']) move.x -= 1;
    if (this.keys['d'] || this.keys['arrowright']) move.x += 1;
    return move.normalize();
  }

  _gameLoop(currentTime) {
    if (!this.running) return;

    const dt = Math.min(0.1, (currentTime - this.lastTime) / 1000);
    this.lastTime = currentTime;

    // 1. Update Game Systems
    this._update(dt);

    // 2. Render Scene
    this._render();

    // 3. Update Profiler & HUD
    this.profiler.update(1 + (this.boss ? 1 : 0) + this.monsters.length, 1);
    this._updateHUD();

    requestAnimationFrame((t) => this._gameLoop(t));
  }

  _update(dt) {
    // Update player movement
    const move = this._getMovementVector();
    const speed = this.player.stats.getValue(StatType.MOVE_SPEED);
    this.player.position.add(move.scale(speed * dt));

    // Update spell cooldowns & mana regen
    for (const spell of this.player.spells) {
      spell.update(dt);
    }
    this.player.currentMana = Math.min(this.player.maxMana, this.player.currentMana + 15 * dt);

    // Update boss AI & combat
    const combatTargets = [];
    if (this.boss) {
      this.boss.update(dt, this.player, this.projectileSystem);
      combatTargets.push(this.boss);
    }

    // Update projectiles & particles
    this.projectileSystem.update(dt, combatTargets, this.particleEmitter);
    this.particleEmitter.update(dt);

    // Update camera & environment
    this.camera.update(dt);
    this.dayNight.update(dt);
  }

  _render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
    // Apply camera transform
    ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.translate(-this.camera.position.x, -this.camera.position.y);

    // 1. Render Dungeon Tilemap
    if (this.dungeon) {
      const tileSize = 32;
      for (let y = 0; y < this.dungeon.height; y++) {
        for (let x = 0; x < this.dungeon.width; x++) {
          const tile = this.dungeon.tiles[y * this.dungeon.width + x];
          ctx.fillStyle = tile === 1 ? '#f1c40f' : '#ffffff'; // Wall vs Floor
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          ctx.strokeStyle = '#f9e79f';
          ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
      }
    }

    // 2. Render Boss
    if (this.boss && this.boss.currentHealth > 0) {
      ctx.fillStyle = '#e67e22';
      ctx.beginPath();
      ctx.arc(this.boss.position.x, this.boss.position.y, this.boss.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#f39c12';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Boss name & Health bar above head
      ctx.fillStyle = '#fff';
      ctx.font = '12px Segoe UI';
      ctx.textAlign = 'center';
      ctx.fillText(this.boss.name, this.boss.position.x, this.boss.position.y - this.boss.radius - 12);

      const hpBarW = 80;
      const hpRatio = this.boss.currentHealth / this.boss.maxHealth;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(this.boss.position.x - hpBarW / 2, this.boss.position.y - this.boss.radius - 8, hpBarW, 6);
      ctx.fillStyle = '#e74c3c';
      ctx.fillRect(this.boss.position.x - hpBarW / 2, this.boss.position.y - this.boss.radius - 8, hpBarW * hpRatio, 6);
    }

    // 3. Render Player
    ctx.fillStyle = '#f39c12';
    ctx.beginPath();
    ctx.arc(this.player.position.x, this.player.position.y, this.player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 4. Render Projectiles & Particles
    this.projectileSystem.render(ctx);

    for (let i = 0; i < this.particleEmitter.particles.length; i++) {
      const p = this.particleEmitter.particles[i];
      if (p.active) {
        ctx.fillStyle = `rgba(${Math.floor(p.color.r * 255)}, ${Math.floor(p.color.g * 255)}, ${Math.floor(p.color.b * 255)}, ${p.color.a})`;
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();
  }

  _updateHUD() {
    // Health & Mana Globes
    const hpFill = document.getElementById('health-fill');
    const hpText = document.getElementById('health-text');
    if (hpFill && hpText) {
      const hpPct = (this.player.currentHealth / this.player.maxHealth) * 100;
      hpFill.style.height = `${hpPct}%`;
      hpText.textContent = `${Math.round(this.player.currentHealth)} / ${this.player.maxHealth}`;
    }

    const manaFill = document.getElementById('mana-fill');
    const manaText = document.getElementById('mana-text');
    if (manaFill && manaText) {
      const manaPct = (this.player.currentMana / this.player.maxMana) * 100;
      manaFill.style.height = `${manaPct}%`;
      manaText.textContent = `${Math.round(this.player.currentMana)} / ${this.player.maxMana}`;
    }

    // Day/Night time display
    const timeDisp = document.getElementById('time-display');
    if (timeDisp) {
      timeDisp.textContent = `Time: ${this.dayNight.getFormattedTime()}`;
    }

    // Cooldown overlays
    for (let i = 0; i < this.player.spells.length; i++) {
      const cdEl = document.getElementById(`cd-${i + 1}`);
      const spell = this.player.spells[i];
      if (cdEl && spell) {
        const cdPct = spell.cooldown > 0 ? (spell.currentCooldown / spell.cooldown) * 100 : 0;
        cdEl.style.height = `${cdPct}%`;
      }
    }
  }
}

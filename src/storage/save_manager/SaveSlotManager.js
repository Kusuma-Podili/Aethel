export class SaveSlotManager {
  static SAVE_PREFIX = 'aethelgard_save_slot_';

  static save(slotIndex, gameState) {
    const data = {
      version: '1.0.0',
      timestamp: Date.now(),
      player: {
        level: gameState.player.level || 1,
        exp: gameState.player.exp || 0,
        position: { x: gameState.player.position.x, y: gameState.player.position.y },
        gold: gameState.player.gold || 0,
        inventory: gameState.player.inventory.slots.map(s => s ? {
          id: s.id,
          name: s.name,
          rarity: s.rarity.name,
          quantity: s.quantity
        } : null)
      },
      world: {
        zoneName: gameState.zoneName || 'Valenreach Forest',
        seed: gameState.seed || 1337
      }
    };

    const serialized = JSON.stringify(data);
    localStorage.setItem(this.SAVE_PREFIX + slotIndex, serialized);
    return true;
  }

  static load(slotIndex) {
    const raw = localStorage.getItem(this.SAVE_PREFIX + slotIndex);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error('Failed to parse save file:', e);
      return null;
    }
  }

  static getSaveMetadata(slotIndex) {
    const data = this.load(slotIndex);
    if (!data) return null;
    return {
      slotIndex: slotIndex,
      timestamp: data.timestamp,
      level: data.player.level,
      zoneName: data.world.zoneName
    };
  }
}

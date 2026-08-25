export class InventoryContainer {
  constructor(capacity = 30) {
    this.capacity = capacity;
    this.slots = new Array(capacity).fill(null);
  }

  addItem(item) {
    // If stackable, find existing stack
    if (item.stackable) {
      for (let i = 0; i < this.slots.length; i++) {
        const slotItem = this.slots[i];
        if (slotItem && slotItem.id === item.id && slotItem.quantity < slotItem.maxStack) {
          const space = slotItem.maxStack - slotItem.quantity;
          const toAdd = Math.min(space, item.quantity);
          slotItem.quantity += toAdd;
          item.quantity -= toAdd;
          if (item.quantity <= 0) return true;
        }
      }
    }

    // Find first empty slot
    for (let i = 0; i < this.slots.length; i++) {
      if (this.slots[i] === null) {
        this.slots[i] = item;
        return true;
      }
    }

    return false; // Inventory full
  }

  removeItem(slotIndex, quantity = 1) {
    const item = this.slots[slotIndex];
    if (!item) return null;

    if (item.stackable && item.quantity > quantity) {
      item.quantity -= quantity;
      return item;
    } else {
      this.slots[slotIndex] = null;
      return item;
    }
  }

  swapSlots(fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= this.capacity || toIndex < 0 || toIndex >= this.capacity) return false;
    const temp = this.slots[fromIndex];
    this.slots[fromIndex] = this.slots[toIndex];
    this.slots[toIndex] = temp;
    return true;
  }
}

export class EquipmentSlots {
  constructor(entity) {
    this.entity = entity;
    this.slots = {
      mainHand: null,
      offHand: null,
      helmet: null,
      chestArmor: null,
      gloves: null,
      boots: null,
      amulet: null,
      ring1: null,
      ring2: null
    };
  }

  equip(slotName, item) {
    const unequipped = this.slots[slotName];
    this.slots[slotName] = item;
    this._reapplyStats();
    return unequipped;
  }

  unequip(slotName) {
    const item = this.slots[slotName];
    this.slots[slotName] = null;
    this._reapplyStats();
    return item;
  }

  _reapplyStats() {
    if (!this.entity || !this.entity.stats) return;

    this.entity.stats.removeModifiersBySource('equipment');

    for (const [slot, item] of Object.entries(this.slots)) {
      if (!item) continue;

      // Base stats
      for (const [stat, val] of Object.entries(item.baseStats || {})) {
        this.entity.stats.addModifier({
          stat: stat,
          value: val,
          op: 0, // Flat
          source: 'equipment'
        });
      }

      // Affixes
      for (const affix of item.affixes || []) {
        this.entity.stats.addModifier({
          stat: affix.stat,
          value: affix.value,
          op: affix.op,
          source: 'equipment'
        });
      }
    }
  }
}

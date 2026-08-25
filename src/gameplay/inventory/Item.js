export const ItemType = {
  WEAPON: 'weapon',
  HELMET: 'helmet',
  CHEST_ARMOR: 'chest_armor',
  GLOVES: 'gloves',
  BOOTS: 'boots',
  AMULET: 'amulet',
  RING: 'ring',
  POTION: 'potion',
  MATERIAL: 'material',
  GEM: 'gem'
};

export const ItemRarity = {
  COMMON: { name: 'Common', color: '#ffffff', affixCount: [0, 0] },
  MAGIC: { name: 'Magic', color: '#3498db', affixCount: [1, 2] },
  RARE: { name: 'Rare', color: '#f1c40f', affixCount: [3, 4] },
  EPIC: { name: 'Epic', color: '#9b59b6', affixCount: [4, 5] },
  LEGENDARY: { name: 'Legendary', color: '#e67e22', affixCount: [5, 6] }
};

export class Item {
  constructor(options = {}) {
    this.id = options.id || ('item_' + Math.random().toString(36).substr(2, 9));
    this.name = options.name || 'Unidentified Item';
    this.type = options.type || ItemType.WEAPON;
    this.rarity = options.rarity || ItemRarity.COMMON;
    this.itemLevel = options.itemLevel || 1;
    this.icon = options.icon || '🗡️';
    this.description = options.description || '';

    this.baseStats = options.baseStats || {}; // { attackPower: 25, armor: 0 }
    this.affixes = options.affixes || [];     // Array of { name, stat, value, op }
    this.sockets = options.sockets || [];     // Array of Gem or null
    this.maxSockets = options.maxSockets || 0;

    this.stackable = options.stackable || false;
    this.quantity = options.quantity || 1;
    this.maxStack = options.maxStack || 99;
    this.goldValue = options.goldValue || 10;
  }

  getFullName() {
    let name = this.name;
    const prefix = this.affixes.find(a => a.isPrefix);
    const suffix = this.affixes.find(a => !a.isPrefix);

    if (prefix) name = `${prefix.name} ${name}`;
    if (suffix) name = `${name} of ${suffix.name}`;
    return name;
  }
}

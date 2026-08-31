import { Item, ItemRarity, ItemType } from '../gameplay/inventory/Item.js';
import { StatType, ModifierOp } from '../gameplay/stats/AttributeMap.js';

export const ItemCompendium = {
  // Legendary Weapons
  DAWNBREAKER_SWORD: () => new Item({
    id: 'wpn_dawnbreaker',
    name: 'Dawnbreaker, Sunforged Blade',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '☀️🗡️',
    description: 'A radiant blade forged in the heart of a dying star. Illuminates darkness and burns unholy foes.',
    baseStats: { attackPower: 120, critChance: 0.15 },
    affixes: [
      { name: 'Solar Flare', stat: StatType.FIRE_RESIST, value: 0.25, op: ModifierOp.FLAT, isPrefix: true },
      { name: 'Radiance', stat: StatType.SPELL_POWER, value: 80, op: ModifierOp.FLAT, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2500
  }),

  FROSTGUARD_AEGIS: () => new Item({
    id: 'arm_frostguard',
    name: 'Frostguard Aegis',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.EPIC,
    itemLevel: 45,
    icon: '🛡️❄️',
    description: 'Chilled dragonscale plate armor that slows attackers.',
    baseStats: { armor: 320, vitality: 45 },
    affixes: [
      { name: 'Glacial Barrier', stat: StatType.COLD_RESIST, value: 0.35, op: ModifierOp.FLAT, isPrefix: true }
    ],
    maxSockets: 2,
    goldValue: 1200
  }),

  VOID_WALKER_BOOTS: () => new Item({
    id: 'boot_voidwalker',
    name: 'Void Walker Treads',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '👢🌌',
    description: 'Boots woven from ethereal shadow cloth.',
    baseStats: { moveSpeed: 45, agility: 20 },
    affixes: [
      { name: 'Phasing', stat: StatType.CHAOS_RESIST, value: 0.20, op: ModifierOp.FLAT, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 600
  }),

  // Consumables & Materials
  HEALTH_POTION: () => new Item({
    id: 'pot_health',
    name: 'Greater Health Potion',
    type: ItemType.POTION,
    rarity: ItemRarity.COMMON,
    icon: '🧪❤️',
    description: 'Restores 500 Health over 5 seconds.',
    stackable: true,
    quantity: 5,
    maxStack: 20,
    goldValue: 25
  }),

  MANA_POTION: () => new Item({
    id: 'pot_mana',
    name: 'Greater Mana Potion',
    type: ItemType.POTION,
    rarity: ItemRarity.COMMON,
    icon: '🧪💙',
    description: 'Restores 350 Mana instantly.',
    stackable: true,
    quantity: 5,
    maxStack: 20,
    goldValue: 25
  }),

  AETHER_SHARD: () => new Item({
    id: 'mat_aether_shard',
    name: 'Aether Shard',
    type: ItemType.MATERIAL,
    rarity: ItemRarity.RARE,
    icon: '💎✨',
    description: 'Refined crystal shard used for masterwork enchanting.',
    stackable: true,
    quantity: 10,
    maxStack: 99,
    goldValue: 100
  })
};

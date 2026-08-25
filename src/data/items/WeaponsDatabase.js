/**
 * @file WeaponsDatabase.js
 * @description Comprehensive weapon item definitions for Chronicles of Aethelgard.
 */
import { ItemType, ItemRarity } from '../../gameplay/inventory/Item.js';
import { StatType, ModifierOp } from '../../gameplay/stats/AttributeMap.js';

export const WeaponsDatabase = [
  {
    id: 'wpn_0001',
    name: 'Magic Greatsword #1',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 110
  },
  {
    id: 'wpn_0002',
    name: 'Rare Dagger #2',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 170
  },
  {
    id: 'wpn_0003',
    name: 'Epic Warhammer #3',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 230
  },
  {
    id: 'wpn_0004',
    name: 'Legendary Battleaxe #4',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 290
  },
  {
    id: 'wpn_0005',
    name: 'Common Staff #5',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 350
  },
  {
    id: 'wpn_0006',
    name: 'Magic Wand #6',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 410
  },
  {
    id: 'wpn_0007',
    name: 'Rare Bow #7',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 470
  },
  {
    id: 'wpn_0008',
    name: 'Epic Crossbow #8',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 530
  },
  {
    id: 'wpn_0009',
    name: 'Legendary Halberd #9',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 590
  },
  {
    id: 'wpn_0010',
    name: 'Common Sword #10',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 650
  },
  {
    id: 'wpn_0011',
    name: 'Magic Greatsword #11',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 710
  },
  {
    id: 'wpn_0012',
    name: 'Rare Dagger #12',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 770
  },
  {
    id: 'wpn_0013',
    name: 'Epic Warhammer #13',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 830
  },
  {
    id: 'wpn_0014',
    name: 'Legendary Battleaxe #14',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 890
  },
  {
    id: 'wpn_0015',
    name: 'Common Staff #15',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 950
  },
  {
    id: 'wpn_0016',
    name: 'Magic Wand #16',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1010
  },
  {
    id: 'wpn_0017',
    name: 'Rare Bow #17',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1070
  },
  {
    id: 'wpn_0018',
    name: 'Epic Crossbow #18',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1130
  },
  {
    id: 'wpn_0019',
    name: 'Legendary Halberd #19',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1190
  },
  {
    id: 'wpn_0020',
    name: 'Common Sword #20',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1250
  },
  {
    id: 'wpn_0021',
    name: 'Magic Greatsword #21',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1310
  },
  {
    id: 'wpn_0022',
    name: 'Rare Dagger #22',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1370
  },
  {
    id: 'wpn_0023',
    name: 'Epic Warhammer #23',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1430
  },
  {
    id: 'wpn_0024',
    name: 'Legendary Battleaxe #24',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1490
  },
  {
    id: 'wpn_0025',
    name: 'Common Staff #25',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1550
  },
  {
    id: 'wpn_0026',
    name: 'Magic Wand #26',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1610
  },
  {
    id: 'wpn_0027',
    name: 'Rare Bow #27',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1670
  },
  {
    id: 'wpn_0028',
    name: 'Epic Crossbow #28',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1730
  },
  {
    id: 'wpn_0029',
    name: 'Legendary Halberd #29',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1790
  },
  {
    id: 'wpn_0030',
    name: 'Common Sword #30',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1850
  },
  {
    id: 'wpn_0031',
    name: 'Magic Greatsword #31',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1910
  },
  {
    id: 'wpn_0032',
    name: 'Rare Dagger #32',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1970
  },
  {
    id: 'wpn_0033',
    name: 'Epic Warhammer #33',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2030
  },
  {
    id: 'wpn_0034',
    name: 'Legendary Battleaxe #34',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2090
  },
  {
    id: 'wpn_0035',
    name: 'Common Staff #35',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2150
  },
  {
    id: 'wpn_0036',
    name: 'Magic Wand #36',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2210
  },
  {
    id: 'wpn_0037',
    name: 'Rare Bow #37',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2270
  },
  {
    id: 'wpn_0038',
    name: 'Epic Crossbow #38',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2330
  },
  {
    id: 'wpn_0039',
    name: 'Legendary Halberd #39',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2390
  },
  {
    id: 'wpn_0040',
    name: 'Common Sword #40',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2450
  },
  {
    id: 'wpn_0041',
    name: 'Magic Greatsword #41',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2510
  },
  {
    id: 'wpn_0042',
    name: 'Rare Dagger #42',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2570
  },
  {
    id: 'wpn_0043',
    name: 'Epic Warhammer #43',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2630
  },
  {
    id: 'wpn_0044',
    name: 'Legendary Battleaxe #44',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2690
  },
  {
    id: 'wpn_0045',
    name: 'Common Staff #45',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2750
  },
  {
    id: 'wpn_0046',
    name: 'Magic Wand #46',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2810
  },
  {
    id: 'wpn_0047',
    name: 'Rare Bow #47',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2870
  },
  {
    id: 'wpn_0048',
    name: 'Epic Crossbow #48',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2930
  },
  {
    id: 'wpn_0049',
    name: 'Legendary Halberd #49',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2990
  },
  {
    id: 'wpn_0050',
    name: 'Common Sword #50',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3050
  },
  {
    id: 'wpn_0051',
    name: 'Magic Greatsword #51',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 52,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 52 battle implement.',
    baseStats: { attackPower: 442, critChance: 0.06 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3110
  },
  {
    id: 'wpn_0052',
    name: 'Rare Dagger #52',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 53 battle implement.',
    baseStats: { attackPower: 451, critChance: 0.07 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3170
  },
  {
    id: 'wpn_0053',
    name: 'Epic Warhammer #53',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 54,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 54 battle implement.',
    baseStats: { attackPower: 460, critChance: 0.08 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3230
  },
  {
    id: 'wpn_0054',
    name: 'Legendary Battleaxe #54',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 55,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 55 battle implement.',
    baseStats: { attackPower: 469, critChance: 0.09 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3290
  },
  {
    id: 'wpn_0055',
    name: 'Common Staff #55',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 56,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 56 battle implement.',
    baseStats: { attackPower: 478, critChance: 0.10 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3350
  },
  {
    id: 'wpn_0056',
    name: 'Magic Wand #56',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 57,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 57 battle implement.',
    baseStats: { attackPower: 487, critChance: 0.11 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3410
  },
  {
    id: 'wpn_0057',
    name: 'Rare Bow #57',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 58 battle implement.',
    baseStats: { attackPower: 496, critChance: 0.12 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3470
  },
  {
    id: 'wpn_0058',
    name: 'Epic Crossbow #58',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 59,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 59 battle implement.',
    baseStats: { attackPower: 505, critChance: 0.13 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3530
  },
  {
    id: 'wpn_0059',
    name: 'Legendary Halberd #59',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 60,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 60 battle implement.',
    baseStats: { attackPower: 514, critChance: 0.14 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3590
  },
  {
    id: 'wpn_0060',
    name: 'Common Sword #60',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 1,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 1 battle implement.',
    baseStats: { attackPower: 23, critChance: 0.05 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 650
  },
  {
    id: 'wpn_0061',
    name: 'Magic Greatsword #61',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 710
  },
  {
    id: 'wpn_0062',
    name: 'Rare Dagger #62',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 770
  },
  {
    id: 'wpn_0063',
    name: 'Epic Warhammer #63',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 830
  },
  {
    id: 'wpn_0064',
    name: 'Legendary Battleaxe #64',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 890
  },
  {
    id: 'wpn_0065',
    name: 'Common Staff #65',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 950
  },
  {
    id: 'wpn_0066',
    name: 'Magic Wand #66',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1010
  },
  {
    id: 'wpn_0067',
    name: 'Rare Bow #67',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1070
  },
  {
    id: 'wpn_0068',
    name: 'Epic Crossbow #68',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1130
  },
  {
    id: 'wpn_0069',
    name: 'Legendary Halberd #69',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1190
  },
  {
    id: 'wpn_0070',
    name: 'Common Sword #70',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1250
  },
  {
    id: 'wpn_0071',
    name: 'Magic Greatsword #71',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1310
  },
  {
    id: 'wpn_0072',
    name: 'Rare Dagger #72',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1370
  },
  {
    id: 'wpn_0073',
    name: 'Epic Warhammer #73',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1430
  },
  {
    id: 'wpn_0074',
    name: 'Legendary Battleaxe #74',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1490
  },
  {
    id: 'wpn_0075',
    name: 'Common Staff #75',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1550
  },
  {
    id: 'wpn_0076',
    name: 'Magic Wand #76',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1610
  },
  {
    id: 'wpn_0077',
    name: 'Rare Bow #77',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1670
  },
  {
    id: 'wpn_0078',
    name: 'Epic Crossbow #78',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1730
  },
  {
    id: 'wpn_0079',
    name: 'Legendary Halberd #79',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1790
  },
  {
    id: 'wpn_0080',
    name: 'Common Sword #80',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1850
  },
  {
    id: 'wpn_0081',
    name: 'Magic Greatsword #81',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1910
  },
  {
    id: 'wpn_0082',
    name: 'Rare Dagger #82',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1970
  },
  {
    id: 'wpn_0083',
    name: 'Epic Warhammer #83',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2030
  },
  {
    id: 'wpn_0084',
    name: 'Legendary Battleaxe #84',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2090
  },
  {
    id: 'wpn_0085',
    name: 'Common Staff #85',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2150
  },
  {
    id: 'wpn_0086',
    name: 'Magic Wand #86',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2210
  },
  {
    id: 'wpn_0087',
    name: 'Rare Bow #87',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2270
  },
  {
    id: 'wpn_0088',
    name: 'Epic Crossbow #88',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2330
  },
  {
    id: 'wpn_0089',
    name: 'Legendary Halberd #89',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2390
  },
  {
    id: 'wpn_0090',
    name: 'Common Sword #90',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2450
  },
  {
    id: 'wpn_0091',
    name: 'Magic Greatsword #91',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2510
  },
  {
    id: 'wpn_0092',
    name: 'Rare Dagger #92',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2570
  },
  {
    id: 'wpn_0093',
    name: 'Epic Warhammer #93',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2630
  },
  {
    id: 'wpn_0094',
    name: 'Legendary Battleaxe #94',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2690
  },
  {
    id: 'wpn_0095',
    name: 'Common Staff #95',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2750
  },
  {
    id: 'wpn_0096',
    name: 'Magic Wand #96',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2810
  },
  {
    id: 'wpn_0097',
    name: 'Rare Bow #97',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2870
  },
  {
    id: 'wpn_0098',
    name: 'Epic Crossbow #98',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2930
  },
  {
    id: 'wpn_0099',
    name: 'Legendary Halberd #99',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2990
  },
  {
    id: 'wpn_0100',
    name: 'Common Sword #100',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3050
  },
  {
    id: 'wpn_0101',
    name: 'Magic Greatsword #101',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3110
  },
  {
    id: 'wpn_0102',
    name: 'Rare Dagger #102',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3170
  },
  {
    id: 'wpn_0103',
    name: 'Epic Warhammer #103',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3230
  },
  {
    id: 'wpn_0104',
    name: 'Legendary Battleaxe #104',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3290
  },
  {
    id: 'wpn_0105',
    name: 'Common Staff #105',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3350
  },
  {
    id: 'wpn_0106',
    name: 'Magic Wand #106',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3410
  },
  {
    id: 'wpn_0107',
    name: 'Rare Bow #107',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3470
  },
  {
    id: 'wpn_0108',
    name: 'Epic Crossbow #108',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3530
  },
  {
    id: 'wpn_0109',
    name: 'Legendary Halberd #109',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3590
  },
  {
    id: 'wpn_0110',
    name: 'Common Sword #110',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3650
  },
  {
    id: 'wpn_0111',
    name: 'Magic Greatsword #111',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 52,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 52 battle implement.',
    baseStats: { attackPower: 442, critChance: 0.06 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3710
  },
  {
    id: 'wpn_0112',
    name: 'Rare Dagger #112',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 53 battle implement.',
    baseStats: { attackPower: 451, critChance: 0.07 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3770
  },
  {
    id: 'wpn_0113',
    name: 'Epic Warhammer #113',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 54,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 54 battle implement.',
    baseStats: { attackPower: 460, critChance: 0.08 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3830
  },
  {
    id: 'wpn_0114',
    name: 'Legendary Battleaxe #114',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 55,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 55 battle implement.',
    baseStats: { attackPower: 469, critChance: 0.09 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3890
  },
  {
    id: 'wpn_0115',
    name: 'Common Staff #115',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 56,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 56 battle implement.',
    baseStats: { attackPower: 478, critChance: 0.10 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3950
  },
  {
    id: 'wpn_0116',
    name: 'Magic Wand #116',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 57,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 57 battle implement.',
    baseStats: { attackPower: 487, critChance: 0.11 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4010
  },
  {
    id: 'wpn_0117',
    name: 'Rare Bow #117',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 58 battle implement.',
    baseStats: { attackPower: 496, critChance: 0.12 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4070
  },
  {
    id: 'wpn_0118',
    name: 'Epic Crossbow #118',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 59,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 59 battle implement.',
    baseStats: { attackPower: 505, critChance: 0.13 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4130
  },
  {
    id: 'wpn_0119',
    name: 'Legendary Halberd #119',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 60,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 60 battle implement.',
    baseStats: { attackPower: 514, critChance: 0.14 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4190
  },
  {
    id: 'wpn_0120',
    name: 'Common Sword #120',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 1,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 1 battle implement.',
    baseStats: { attackPower: 23, critChance: 0.05 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1250
  },
  {
    id: 'wpn_0121',
    name: 'Magic Greatsword #121',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1310
  },
  {
    id: 'wpn_0122',
    name: 'Rare Dagger #122',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1370
  },
  {
    id: 'wpn_0123',
    name: 'Epic Warhammer #123',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1430
  },
  {
    id: 'wpn_0124',
    name: 'Legendary Battleaxe #124',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1490
  },
  {
    id: 'wpn_0125',
    name: 'Common Staff #125',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1550
  },
  {
    id: 'wpn_0126',
    name: 'Magic Wand #126',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1610
  },
  {
    id: 'wpn_0127',
    name: 'Rare Bow #127',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1670
  },
  {
    id: 'wpn_0128',
    name: 'Epic Crossbow #128',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1730
  },
  {
    id: 'wpn_0129',
    name: 'Legendary Halberd #129',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1790
  },
  {
    id: 'wpn_0130',
    name: 'Common Sword #130',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1850
  },
  {
    id: 'wpn_0131',
    name: 'Magic Greatsword #131',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1910
  },
  {
    id: 'wpn_0132',
    name: 'Rare Dagger #132',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1970
  },
  {
    id: 'wpn_0133',
    name: 'Epic Warhammer #133',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2030
  },
  {
    id: 'wpn_0134',
    name: 'Legendary Battleaxe #134',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2090
  },
  {
    id: 'wpn_0135',
    name: 'Common Staff #135',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2150
  },
  {
    id: 'wpn_0136',
    name: 'Magic Wand #136',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2210
  },
  {
    id: 'wpn_0137',
    name: 'Rare Bow #137',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2270
  },
  {
    id: 'wpn_0138',
    name: 'Epic Crossbow #138',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2330
  },
  {
    id: 'wpn_0139',
    name: 'Legendary Halberd #139',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2390
  },
  {
    id: 'wpn_0140',
    name: 'Common Sword #140',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2450
  },
  {
    id: 'wpn_0141',
    name: 'Magic Greatsword #141',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2510
  },
  {
    id: 'wpn_0142',
    name: 'Rare Dagger #142',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2570
  },
  {
    id: 'wpn_0143',
    name: 'Epic Warhammer #143',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2630
  },
  {
    id: 'wpn_0144',
    name: 'Legendary Battleaxe #144',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2690
  },
  {
    id: 'wpn_0145',
    name: 'Common Staff #145',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2750
  },
  {
    id: 'wpn_0146',
    name: 'Magic Wand #146',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2810
  },
  {
    id: 'wpn_0147',
    name: 'Rare Bow #147',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2870
  },
  {
    id: 'wpn_0148',
    name: 'Epic Crossbow #148',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2930
  },
  {
    id: 'wpn_0149',
    name: 'Legendary Halberd #149',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2990
  },
  {
    id: 'wpn_0150',
    name: 'Common Sword #150',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3050
  },
  {
    id: 'wpn_0151',
    name: 'Magic Greatsword #151',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3110
  },
  {
    id: 'wpn_0152',
    name: 'Rare Dagger #152',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3170
  },
  {
    id: 'wpn_0153',
    name: 'Epic Warhammer #153',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3230
  },
  {
    id: 'wpn_0154',
    name: 'Legendary Battleaxe #154',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3290
  },
  {
    id: 'wpn_0155',
    name: 'Common Staff #155',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3350
  },
  {
    id: 'wpn_0156',
    name: 'Magic Wand #156',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3410
  },
  {
    id: 'wpn_0157',
    name: 'Rare Bow #157',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3470
  },
  {
    id: 'wpn_0158',
    name: 'Epic Crossbow #158',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3530
  },
  {
    id: 'wpn_0159',
    name: 'Legendary Halberd #159',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3590
  },
  {
    id: 'wpn_0160',
    name: 'Common Sword #160',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3650
  },
  {
    id: 'wpn_0161',
    name: 'Magic Greatsword #161',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3710
  },
  {
    id: 'wpn_0162',
    name: 'Rare Dagger #162',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3770
  },
  {
    id: 'wpn_0163',
    name: 'Epic Warhammer #163',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3830
  },
  {
    id: 'wpn_0164',
    name: 'Legendary Battleaxe #164',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3890
  },
  {
    id: 'wpn_0165',
    name: 'Common Staff #165',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3950
  },
  {
    id: 'wpn_0166',
    name: 'Magic Wand #166',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4010
  },
  {
    id: 'wpn_0167',
    name: 'Rare Bow #167',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4070
  },
  {
    id: 'wpn_0168',
    name: 'Epic Crossbow #168',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4130
  },
  {
    id: 'wpn_0169',
    name: 'Legendary Halberd #169',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4190
  },
  {
    id: 'wpn_0170',
    name: 'Common Sword #170',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4250
  },
  {
    id: 'wpn_0171',
    name: 'Magic Greatsword #171',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 52,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 52 battle implement.',
    baseStats: { attackPower: 442, critChance: 0.06 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4310
  },
  {
    id: 'wpn_0172',
    name: 'Rare Dagger #172',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 53 battle implement.',
    baseStats: { attackPower: 451, critChance: 0.07 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4370
  },
  {
    id: 'wpn_0173',
    name: 'Epic Warhammer #173',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 54,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 54 battle implement.',
    baseStats: { attackPower: 460, critChance: 0.08 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4430
  },
  {
    id: 'wpn_0174',
    name: 'Legendary Battleaxe #174',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 55,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 55 battle implement.',
    baseStats: { attackPower: 469, critChance: 0.09 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4490
  },
  {
    id: 'wpn_0175',
    name: 'Common Staff #175',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 56,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 56 battle implement.',
    baseStats: { attackPower: 478, critChance: 0.10 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4550
  },
  {
    id: 'wpn_0176',
    name: 'Magic Wand #176',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 57,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 57 battle implement.',
    baseStats: { attackPower: 487, critChance: 0.11 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4610
  },
  {
    id: 'wpn_0177',
    name: 'Rare Bow #177',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 58 battle implement.',
    baseStats: { attackPower: 496, critChance: 0.12 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4670
  },
  {
    id: 'wpn_0178',
    name: 'Epic Crossbow #178',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 59,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 59 battle implement.',
    baseStats: { attackPower: 505, critChance: 0.13 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4730
  },
  {
    id: 'wpn_0179',
    name: 'Legendary Halberd #179',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 60,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 60 battle implement.',
    baseStats: { attackPower: 514, critChance: 0.14 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4790
  },
  {
    id: 'wpn_0180',
    name: 'Common Sword #180',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 1,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 1 battle implement.',
    baseStats: { attackPower: 23, critChance: 0.05 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1850
  },
  {
    id: 'wpn_0181',
    name: 'Magic Greatsword #181',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1910
  },
  {
    id: 'wpn_0182',
    name: 'Rare Dagger #182',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 1970
  },
  {
    id: 'wpn_0183',
    name: 'Epic Warhammer #183',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2030
  },
  {
    id: 'wpn_0184',
    name: 'Legendary Battleaxe #184',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2090
  },
  {
    id: 'wpn_0185',
    name: 'Common Staff #185',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2150
  },
  {
    id: 'wpn_0186',
    name: 'Magic Wand #186',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2210
  },
  {
    id: 'wpn_0187',
    name: 'Rare Bow #187',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2270
  },
  {
    id: 'wpn_0188',
    name: 'Epic Crossbow #188',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2330
  },
  {
    id: 'wpn_0189',
    name: 'Legendary Halberd #189',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2390
  },
  {
    id: 'wpn_0190',
    name: 'Common Sword #190',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2450
  },
  {
    id: 'wpn_0191',
    name: 'Magic Greatsword #191',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2510
  },
  {
    id: 'wpn_0192',
    name: 'Rare Dagger #192',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2570
  },
  {
    id: 'wpn_0193',
    name: 'Epic Warhammer #193',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2630
  },
  {
    id: 'wpn_0194',
    name: 'Legendary Battleaxe #194',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2690
  },
  {
    id: 'wpn_0195',
    name: 'Common Staff #195',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2750
  },
  {
    id: 'wpn_0196',
    name: 'Magic Wand #196',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2810
  },
  {
    id: 'wpn_0197',
    name: 'Rare Bow #197',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2870
  },
  {
    id: 'wpn_0198',
    name: 'Epic Crossbow #198',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2930
  },
  {
    id: 'wpn_0199',
    name: 'Legendary Halberd #199',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2990
  },
  {
    id: 'wpn_0200',
    name: 'Common Sword #200',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3050
  },
  {
    id: 'wpn_0201',
    name: 'Magic Greatsword #201',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3110
  },
  {
    id: 'wpn_0202',
    name: 'Rare Dagger #202',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3170
  },
  {
    id: 'wpn_0203',
    name: 'Epic Warhammer #203',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3230
  },
  {
    id: 'wpn_0204',
    name: 'Legendary Battleaxe #204',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3290
  },
  {
    id: 'wpn_0205',
    name: 'Common Staff #205',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3350
  },
  {
    id: 'wpn_0206',
    name: 'Magic Wand #206',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3410
  },
  {
    id: 'wpn_0207',
    name: 'Rare Bow #207',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3470
  },
  {
    id: 'wpn_0208',
    name: 'Epic Crossbow #208',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3530
  },
  {
    id: 'wpn_0209',
    name: 'Legendary Halberd #209',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3590
  },
  {
    id: 'wpn_0210',
    name: 'Common Sword #210',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3650
  },
  {
    id: 'wpn_0211',
    name: 'Magic Greatsword #211',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3710
  },
  {
    id: 'wpn_0212',
    name: 'Rare Dagger #212',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3770
  },
  {
    id: 'wpn_0213',
    name: 'Epic Warhammer #213',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3830
  },
  {
    id: 'wpn_0214',
    name: 'Legendary Battleaxe #214',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3890
  },
  {
    id: 'wpn_0215',
    name: 'Common Staff #215',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3950
  },
  {
    id: 'wpn_0216',
    name: 'Magic Wand #216',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4010
  },
  {
    id: 'wpn_0217',
    name: 'Rare Bow #217',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4070
  },
  {
    id: 'wpn_0218',
    name: 'Epic Crossbow #218',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4130
  },
  {
    id: 'wpn_0219',
    name: 'Legendary Halberd #219',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4190
  },
  {
    id: 'wpn_0220',
    name: 'Common Sword #220',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4250
  },
  {
    id: 'wpn_0221',
    name: 'Magic Greatsword #221',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4310
  },
  {
    id: 'wpn_0222',
    name: 'Rare Dagger #222',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4370
  },
  {
    id: 'wpn_0223',
    name: 'Epic Warhammer #223',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4430
  },
  {
    id: 'wpn_0224',
    name: 'Legendary Battleaxe #224',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4490
  },
  {
    id: 'wpn_0225',
    name: 'Common Staff #225',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4550
  },
  {
    id: 'wpn_0226',
    name: 'Magic Wand #226',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4610
  },
  {
    id: 'wpn_0227',
    name: 'Rare Bow #227',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4670
  },
  {
    id: 'wpn_0228',
    name: 'Epic Crossbow #228',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4730
  },
  {
    id: 'wpn_0229',
    name: 'Legendary Halberd #229',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4790
  },
  {
    id: 'wpn_0230',
    name: 'Common Sword #230',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4850
  },
  {
    id: 'wpn_0231',
    name: 'Magic Greatsword #231',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 52,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 52 battle implement.',
    baseStats: { attackPower: 442, critChance: 0.06 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4910
  },
  {
    id: 'wpn_0232',
    name: 'Rare Dagger #232',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 53 battle implement.',
    baseStats: { attackPower: 451, critChance: 0.07 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4970
  },
  {
    id: 'wpn_0233',
    name: 'Epic Warhammer #233',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 54,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 54 battle implement.',
    baseStats: { attackPower: 460, critChance: 0.08 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5030
  },
  {
    id: 'wpn_0234',
    name: 'Legendary Battleaxe #234',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 55,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 55 battle implement.',
    baseStats: { attackPower: 469, critChance: 0.09 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5090
  },
  {
    id: 'wpn_0235',
    name: 'Common Staff #235',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 56,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 56 battle implement.',
    baseStats: { attackPower: 478, critChance: 0.10 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5150
  },
  {
    id: 'wpn_0236',
    name: 'Magic Wand #236',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 57,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 57 battle implement.',
    baseStats: { attackPower: 487, critChance: 0.11 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5210
  },
  {
    id: 'wpn_0237',
    name: 'Rare Bow #237',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 58 battle implement.',
    baseStats: { attackPower: 496, critChance: 0.12 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5270
  },
  {
    id: 'wpn_0238',
    name: 'Epic Crossbow #238',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 59,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 59 battle implement.',
    baseStats: { attackPower: 505, critChance: 0.13 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5330
  },
  {
    id: 'wpn_0239',
    name: 'Legendary Halberd #239',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 60,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 60 battle implement.',
    baseStats: { attackPower: 514, critChance: 0.14 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5390
  },
  {
    id: 'wpn_0240',
    name: 'Common Sword #240',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 1,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 1 battle implement.',
    baseStats: { attackPower: 23, critChance: 0.05 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2450
  },
  {
    id: 'wpn_0241',
    name: 'Magic Greatsword #241',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2510
  },
  {
    id: 'wpn_0242',
    name: 'Rare Dagger #242',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2570
  },
  {
    id: 'wpn_0243',
    name: 'Epic Warhammer #243',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2630
  },
  {
    id: 'wpn_0244',
    name: 'Legendary Battleaxe #244',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2690
  },
  {
    id: 'wpn_0245',
    name: 'Common Staff #245',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2750
  },
  {
    id: 'wpn_0246',
    name: 'Magic Wand #246',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2810
  },
  {
    id: 'wpn_0247',
    name: 'Rare Bow #247',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2870
  },
  {
    id: 'wpn_0248',
    name: 'Epic Crossbow #248',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 2930
  },
  {
    id: 'wpn_0249',
    name: 'Legendary Halberd #249',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2990
  },
  {
    id: 'wpn_0250',
    name: 'Common Sword #250',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3050
  },
  {
    id: 'wpn_0251',
    name: 'Magic Greatsword #251',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3110
  },
  {
    id: 'wpn_0252',
    name: 'Rare Dagger #252',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3170
  },
  {
    id: 'wpn_0253',
    name: 'Epic Warhammer #253',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3230
  },
  {
    id: 'wpn_0254',
    name: 'Legendary Battleaxe #254',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3290
  },
  {
    id: 'wpn_0255',
    name: 'Common Staff #255',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3350
  },
  {
    id: 'wpn_0256',
    name: 'Magic Wand #256',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3410
  },
  {
    id: 'wpn_0257',
    name: 'Rare Bow #257',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3470
  },
  {
    id: 'wpn_0258',
    name: 'Epic Crossbow #258',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3530
  },
  {
    id: 'wpn_0259',
    name: 'Legendary Halberd #259',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3590
  },
  {
    id: 'wpn_0260',
    name: 'Common Sword #260',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3650
  },
  {
    id: 'wpn_0261',
    name: 'Magic Greatsword #261',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3710
  },
  {
    id: 'wpn_0262',
    name: 'Rare Dagger #262',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3770
  },
  {
    id: 'wpn_0263',
    name: 'Epic Warhammer #263',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3830
  },
  {
    id: 'wpn_0264',
    name: 'Legendary Battleaxe #264',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3890
  },
  {
    id: 'wpn_0265',
    name: 'Common Staff #265',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3950
  },
  {
    id: 'wpn_0266',
    name: 'Magic Wand #266',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4010
  },
  {
    id: 'wpn_0267',
    name: 'Rare Bow #267',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4070
  },
  {
    id: 'wpn_0268',
    name: 'Epic Crossbow #268',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4130
  },
  {
    id: 'wpn_0269',
    name: 'Legendary Halberd #269',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4190
  },
  {
    id: 'wpn_0270',
    name: 'Common Sword #270',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4250
  },
  {
    id: 'wpn_0271',
    name: 'Magic Greatsword #271',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4310
  },
  {
    id: 'wpn_0272',
    name: 'Rare Dagger #272',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4370
  },
  {
    id: 'wpn_0273',
    name: 'Epic Warhammer #273',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4430
  },
  {
    id: 'wpn_0274',
    name: 'Legendary Battleaxe #274',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4490
  },
  {
    id: 'wpn_0275',
    name: 'Common Staff #275',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4550
  },
  {
    id: 'wpn_0276',
    name: 'Magic Wand #276',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4610
  },
  {
    id: 'wpn_0277',
    name: 'Rare Bow #277',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4670
  },
  {
    id: 'wpn_0278',
    name: 'Epic Crossbow #278',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4730
  },
  {
    id: 'wpn_0279',
    name: 'Legendary Halberd #279',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4790
  },
  {
    id: 'wpn_0280',
    name: 'Common Sword #280',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4850
  },
  {
    id: 'wpn_0281',
    name: 'Magic Greatsword #281',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4910
  },
  {
    id: 'wpn_0282',
    name: 'Rare Dagger #282',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4970
  },
  {
    id: 'wpn_0283',
    name: 'Epic Warhammer #283',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5030
  },
  {
    id: 'wpn_0284',
    name: 'Legendary Battleaxe #284',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5090
  },
  {
    id: 'wpn_0285',
    name: 'Common Staff #285',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5150
  },
  {
    id: 'wpn_0286',
    name: 'Magic Wand #286',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5210
  },
  {
    id: 'wpn_0287',
    name: 'Rare Bow #287',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5270
  },
  {
    id: 'wpn_0288',
    name: 'Epic Crossbow #288',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5330
  },
  {
    id: 'wpn_0289',
    name: 'Legendary Halberd #289',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5390
  },
  {
    id: 'wpn_0290',
    name: 'Common Sword #290',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5450
  },
  {
    id: 'wpn_0291',
    name: 'Magic Greatsword #291',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 52,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 52 battle implement.',
    baseStats: { attackPower: 442, critChance: 0.06 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5510
  },
  {
    id: 'wpn_0292',
    name: 'Rare Dagger #292',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 53 battle implement.',
    baseStats: { attackPower: 451, critChance: 0.07 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5570
  },
  {
    id: 'wpn_0293',
    name: 'Epic Warhammer #293',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 54,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 54 battle implement.',
    baseStats: { attackPower: 460, critChance: 0.08 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5630
  },
  {
    id: 'wpn_0294',
    name: 'Legendary Battleaxe #294',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 55,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 55 battle implement.',
    baseStats: { attackPower: 469, critChance: 0.09 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5690
  },
  {
    id: 'wpn_0295',
    name: 'Common Staff #295',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 56,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 56 battle implement.',
    baseStats: { attackPower: 478, critChance: 0.10 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5750
  },
  {
    id: 'wpn_0296',
    name: 'Magic Wand #296',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 57,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 57 battle implement.',
    baseStats: { attackPower: 487, critChance: 0.11 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5810
  },
  {
    id: 'wpn_0297',
    name: 'Rare Bow #297',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 58 battle implement.',
    baseStats: { attackPower: 496, critChance: 0.12 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5870
  },
  {
    id: 'wpn_0298',
    name: 'Epic Crossbow #298',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 59,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 59 battle implement.',
    baseStats: { attackPower: 505, critChance: 0.13 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5930
  },
  {
    id: 'wpn_0299',
    name: 'Legendary Halberd #299',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 60,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 60 battle implement.',
    baseStats: { attackPower: 514, critChance: 0.14 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5990
  },
  {
    id: 'wpn_0300',
    name: 'Common Sword #300',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 1,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 1 battle implement.',
    baseStats: { attackPower: 23, critChance: 0.05 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3050
  },
  {
    id: 'wpn_0301',
    name: 'Magic Greatsword #301',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 2,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 2 battle implement.',
    baseStats: { attackPower: 32, critChance: 0.06 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3110
  },
  {
    id: 'wpn_0302',
    name: 'Rare Dagger #302',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 3 battle implement.',
    baseStats: { attackPower: 41, critChance: 0.07 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3170
  },
  {
    id: 'wpn_0303',
    name: 'Epic Warhammer #303',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 4,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 4 battle implement.',
    baseStats: { attackPower: 50, critChance: 0.08 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3230
  },
  {
    id: 'wpn_0304',
    name: 'Legendary Battleaxe #304',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 5,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 5 battle implement.',
    baseStats: { attackPower: 59, critChance: 0.09 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3290
  },
  {
    id: 'wpn_0305',
    name: 'Common Staff #305',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 6,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 6 battle implement.',
    baseStats: { attackPower: 68, critChance: 0.10 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3350
  },
  {
    id: 'wpn_0306',
    name: 'Magic Wand #306',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 7,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 7 battle implement.',
    baseStats: { attackPower: 77, critChance: 0.11 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3410
  },
  {
    id: 'wpn_0307',
    name: 'Rare Bow #307',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 8 battle implement.',
    baseStats: { attackPower: 86, critChance: 0.12 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3470
  },
  {
    id: 'wpn_0308',
    name: 'Epic Crossbow #308',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 9,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 9 battle implement.',
    baseStats: { attackPower: 95, critChance: 0.13 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3530
  },
  {
    id: 'wpn_0309',
    name: 'Legendary Halberd #309',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 10,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 10 battle implement.',
    baseStats: { attackPower: 104, critChance: 0.14 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3590
  },
  {
    id: 'wpn_0310',
    name: 'Common Sword #310',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 11,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 11 battle implement.',
    baseStats: { attackPower: 113, critChance: 0.05 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3650
  },
  {
    id: 'wpn_0311',
    name: 'Magic Greatsword #311',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 12,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 12 battle implement.',
    baseStats: { attackPower: 122, critChance: 0.06 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3710
  },
  {
    id: 'wpn_0312',
    name: 'Rare Dagger #312',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 13 battle implement.',
    baseStats: { attackPower: 131, critChance: 0.07 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3770
  },
  {
    id: 'wpn_0313',
    name: 'Epic Warhammer #313',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 14,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 14 battle implement.',
    baseStats: { attackPower: 140, critChance: 0.08 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3830
  },
  {
    id: 'wpn_0314',
    name: 'Legendary Battleaxe #314',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 15,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 15 battle implement.',
    baseStats: { attackPower: 149, critChance: 0.09 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 3890
  },
  {
    id: 'wpn_0315',
    name: 'Common Staff #315',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 16,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 16 battle implement.',
    baseStats: { attackPower: 158, critChance: 0.10 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3950
  },
  {
    id: 'wpn_0316',
    name: 'Magic Wand #316',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 17,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 17 battle implement.',
    baseStats: { attackPower: 167, critChance: 0.11 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4010
  },
  {
    id: 'wpn_0317',
    name: 'Rare Bow #317',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 18 battle implement.',
    baseStats: { attackPower: 176, critChance: 0.12 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4070
  },
  {
    id: 'wpn_0318',
    name: 'Epic Crossbow #318',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 19,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 19 battle implement.',
    baseStats: { attackPower: 185, critChance: 0.13 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4130
  },
  {
    id: 'wpn_0319',
    name: 'Legendary Halberd #319',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 20,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 20 battle implement.',
    baseStats: { attackPower: 194, critChance: 0.14 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4190
  },
  {
    id: 'wpn_0320',
    name: 'Common Sword #320',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 21,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 21 battle implement.',
    baseStats: { attackPower: 183, critChance: 0.05 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4250
  },
  {
    id: 'wpn_0321',
    name: 'Magic Greatsword #321',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 22,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 22 battle implement.',
    baseStats: { attackPower: 192, critChance: 0.06 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4310
  },
  {
    id: 'wpn_0322',
    name: 'Rare Dagger #322',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 23 battle implement.',
    baseStats: { attackPower: 201, critChance: 0.07 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4370
  },
  {
    id: 'wpn_0323',
    name: 'Epic Warhammer #323',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 24,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 24 battle implement.',
    baseStats: { attackPower: 210, critChance: 0.08 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4430
  },
  {
    id: 'wpn_0324',
    name: 'Legendary Battleaxe #324',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 25,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 25 battle implement.',
    baseStats: { attackPower: 219, critChance: 0.09 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4490
  },
  {
    id: 'wpn_0325',
    name: 'Common Staff #325',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 26,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 26 battle implement.',
    baseStats: { attackPower: 228, critChance: 0.10 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4550
  },
  {
    id: 'wpn_0326',
    name: 'Magic Wand #326',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 27,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 27 battle implement.',
    baseStats: { attackPower: 237, critChance: 0.11 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4610
  },
  {
    id: 'wpn_0327',
    name: 'Rare Bow #327',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 28 battle implement.',
    baseStats: { attackPower: 246, critChance: 0.12 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4670
  },
  {
    id: 'wpn_0328',
    name: 'Epic Crossbow #328',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 29,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 29 battle implement.',
    baseStats: { attackPower: 255, critChance: 0.13 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4730
  },
  {
    id: 'wpn_0329',
    name: 'Legendary Halberd #329',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 30,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 30 battle implement.',
    baseStats: { attackPower: 264, critChance: 0.14 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4790
  },
  {
    id: 'wpn_0330',
    name: 'Common Sword #330',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 31,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 31 battle implement.',
    baseStats: { attackPower: 273, critChance: 0.05 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4850
  },
  {
    id: 'wpn_0331',
    name: 'Magic Greatsword #331',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 32,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 32 battle implement.',
    baseStats: { attackPower: 282, critChance: 0.06 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4910
  },
  {
    id: 'wpn_0332',
    name: 'Rare Dagger #332',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 33 battle implement.',
    baseStats: { attackPower: 291, critChance: 0.07 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 4970
  },
  {
    id: 'wpn_0333',
    name: 'Epic Warhammer #333',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 34,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 34 battle implement.',
    baseStats: { attackPower: 300, critChance: 0.08 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5030
  },
  {
    id: 'wpn_0334',
    name: 'Legendary Battleaxe #334',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 35,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 35 battle implement.',
    baseStats: { attackPower: 309, critChance: 0.09 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5090
  },
  {
    id: 'wpn_0335',
    name: 'Common Staff #335',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 36,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 36 battle implement.',
    baseStats: { attackPower: 318, critChance: 0.10 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5150
  },
  {
    id: 'wpn_0336',
    name: 'Magic Wand #336',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 37,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 37 battle implement.',
    baseStats: { attackPower: 327, critChance: 0.11 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5210
  },
  {
    id: 'wpn_0337',
    name: 'Rare Bow #337',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 38 battle implement.',
    baseStats: { attackPower: 336, critChance: 0.12 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5270
  },
  {
    id: 'wpn_0338',
    name: 'Epic Crossbow #338',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 39,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 39 battle implement.',
    baseStats: { attackPower: 345, critChance: 0.13 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5330
  },
  {
    id: 'wpn_0339',
    name: 'Legendary Halberd #339',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 40,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 40 battle implement.',
    baseStats: { attackPower: 354, critChance: 0.14 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5390
  },
  {
    id: 'wpn_0340',
    name: 'Common Sword #340',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 41,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 41 battle implement.',
    baseStats: { attackPower: 343, critChance: 0.05 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5450
  },
  {
    id: 'wpn_0341',
    name: 'Magic Greatsword #341',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 42,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 42 battle implement.',
    baseStats: { attackPower: 352, critChance: 0.06 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5510
  },
  {
    id: 'wpn_0342',
    name: 'Rare Dagger #342',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 43 battle implement.',
    baseStats: { attackPower: 361, critChance: 0.07 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5570
  },
  {
    id: 'wpn_0343',
    name: 'Epic Warhammer #343',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 44,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 44 battle implement.',
    baseStats: { attackPower: 370, critChance: 0.08 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5630
  },
  {
    id: 'wpn_0344',
    name: 'Legendary Battleaxe #344',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 45,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 45 battle implement.',
    baseStats: { attackPower: 379, critChance: 0.09 },
    affixes: [
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5690
  },
  {
    id: 'wpn_0345',
    name: 'Common Staff #345',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 46,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 46 battle implement.',
    baseStats: { attackPower: 388, critChance: 0.10 },
    affixes: [
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5750
  },
  {
    id: 'wpn_0346',
    name: 'Magic Wand #346',
    type: ItemType.WEAPON,
    rarity: ItemRarity.MAGIC,
    itemLevel: 47,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 47 battle implement.',
    baseStats: { attackPower: 397, critChance: 0.11 },
    affixes: [
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: true },
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5810
  },
  {
    id: 'wpn_0347',
    name: 'Rare Bow #347',
    type: ItemType.WEAPON,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 48 battle implement.',
    baseStats: { attackPower: 406, critChance: 0.12 },
    affixes: [
      { name: 'Vicious', stat: 'StatType.CRIT_CHANCE', value: 0.05, op: 0, isPrefix: true },
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 5870
  },
  {
    id: 'wpn_0348',
    name: 'Epic Crossbow #348',
    type: ItemType.WEAPON,
    rarity: ItemRarity.EPIC,
    itemLevel: 49,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 49 battle implement.',
    baseStats: { attackPower: 415, critChance: 0.13 },
    affixes: [
      { name: 'Savage', stat: 'StatType.CRIT_DAMAGE', value: 0.35, op: 0, isPrefix: true },
      { name: 'Glacial', stat: 'StatType.COLD_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 5930
  },
  {
    id: 'wpn_0349',
    name: 'Legendary Halberd #349',
    type: ItemType.WEAPON,
    rarity: ItemRarity.LEGENDARY,
    itemLevel: 50,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 50 battle implement.',
    baseStats: { attackPower: 424, critChance: 0.14 },
    affixes: [
      { name: 'Swift', stat: 'StatType.MOVE_SPEED', value: 25, op: 0, isPrefix: true },
      { name: 'Shocking', stat: 'StatType.LIGHTNING_RESIST', value: 0.15, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 5990
  },
  {
    id: 'wpn_0350',
    name: 'Common Sword #350',
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    itemLevel: 51,
    icon: '🗡️',
    description: 'Forged in the ancestral armories of Aethelgard. Tier 51 battle implement.',
    baseStats: { attackPower: 433, critChance: 0.05 },
    affixes: [
      { name: 'Flaming', stat: 'StatType.FIRE_RESIST', value: 0.15, op: 0, isPrefix: true },
      { name: 'Void-infused', stat: 'StatType.CHAOS_RESIST', value: 0.2, op: 0, isPrefix: false }
    ],
    maxSockets: 3,
    goldValue: 6050
  },
];

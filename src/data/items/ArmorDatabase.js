/**
 * @file ArmorDatabase.js
 * @description Comprehensive armor item definitions across all defensive slots.
 */
import { ItemType, ItemRarity } from '../../gameplay/inventory/Item.js';
import { StatType, ModifierOp } from '../../gameplay/stats/AttributeMap.js';

export const ArmorDatabase = [
  {
    id: 'arm_0001',
    name: 'Reinforced Cuirass #1',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 88
  },
  {
    id: 'arm_0002',
    name: 'Reinforced Gauntlets #2',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 136
  },
  {
    id: 'arm_0003',
    name: 'Reinforced Greaves #3',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 184
  },
  {
    id: 'arm_0004',
    name: 'Reinforced Pendant #4',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 232
  },
  {
    id: 'arm_0005',
    name: 'Reinforced Signet Ring #5',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 280
  },
  {
    id: 'arm_0006',
    name: 'Reinforced Helmet #6',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 328
  },
  {
    id: 'arm_0007',
    name: 'Reinforced Cuirass #7',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 376
  },
  {
    id: 'arm_0008',
    name: 'Reinforced Gauntlets #8',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 424
  },
  {
    id: 'arm_0009',
    name: 'Reinforced Greaves #9',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 472
  },
  {
    id: 'arm_0010',
    name: 'Reinforced Pendant #10',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 520
  },
  {
    id: 'arm_0011',
    name: 'Reinforced Signet Ring #11',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 568
  },
  {
    id: 'arm_0012',
    name: 'Reinforced Helmet #12',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 616
  },
  {
    id: 'arm_0013',
    name: 'Reinforced Cuirass #13',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 664
  },
  {
    id: 'arm_0014',
    name: 'Reinforced Gauntlets #14',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 712
  },
  {
    id: 'arm_0015',
    name: 'Reinforced Greaves #15',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 760
  },
  {
    id: 'arm_0016',
    name: 'Reinforced Pendant #16',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 808
  },
  {
    id: 'arm_0017',
    name: 'Reinforced Signet Ring #17',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 856
  },
  {
    id: 'arm_0018',
    name: 'Reinforced Helmet #18',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 904
  },
  {
    id: 'arm_0019',
    name: 'Reinforced Cuirass #19',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 952
  },
  {
    id: 'arm_0020',
    name: 'Reinforced Gauntlets #20',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1000
  },
  {
    id: 'arm_0021',
    name: 'Reinforced Greaves #21',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1048
  },
  {
    id: 'arm_0022',
    name: 'Reinforced Pendant #22',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1096
  },
  {
    id: 'arm_0023',
    name: 'Reinforced Signet Ring #23',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1144
  },
  {
    id: 'arm_0024',
    name: 'Reinforced Helmet #24',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1192
  },
  {
    id: 'arm_0025',
    name: 'Reinforced Cuirass #25',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1240
  },
  {
    id: 'arm_0026',
    name: 'Reinforced Gauntlets #26',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1288
  },
  {
    id: 'arm_0027',
    name: 'Reinforced Greaves #27',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1336
  },
  {
    id: 'arm_0028',
    name: 'Reinforced Pendant #28',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1384
  },
  {
    id: 'arm_0029',
    name: 'Reinforced Signet Ring #29',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1432
  },
  {
    id: 'arm_0030',
    name: 'Reinforced Helmet #30',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1480
  },
  {
    id: 'arm_0031',
    name: 'Reinforced Cuirass #31',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1528
  },
  {
    id: 'arm_0032',
    name: 'Reinforced Gauntlets #32',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1576
  },
  {
    id: 'arm_0033',
    name: 'Reinforced Greaves #33',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1624
  },
  {
    id: 'arm_0034',
    name: 'Reinforced Pendant #34',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1672
  },
  {
    id: 'arm_0035',
    name: 'Reinforced Signet Ring #35',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1720
  },
  {
    id: 'arm_0036',
    name: 'Reinforced Helmet #36',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1768
  },
  {
    id: 'arm_0037',
    name: 'Reinforced Cuirass #37',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1816
  },
  {
    id: 'arm_0038',
    name: 'Reinforced Gauntlets #38',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1864
  },
  {
    id: 'arm_0039',
    name: 'Reinforced Greaves #39',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1912
  },
  {
    id: 'arm_0040',
    name: 'Reinforced Pendant #40',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1960
  },
  {
    id: 'arm_0041',
    name: 'Reinforced Signet Ring #41',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2008
  },
  {
    id: 'arm_0042',
    name: 'Reinforced Helmet #42',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2056
  },
  {
    id: 'arm_0043',
    name: 'Reinforced Cuirass #43',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2104
  },
  {
    id: 'arm_0044',
    name: 'Reinforced Gauntlets #44',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2152
  },
  {
    id: 'arm_0045',
    name: 'Reinforced Greaves #45',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2200
  },
  {
    id: 'arm_0046',
    name: 'Reinforced Pendant #46',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2248
  },
  {
    id: 'arm_0047',
    name: 'Reinforced Signet Ring #47',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2296
  },
  {
    id: 'arm_0048',
    name: 'Reinforced Helmet #48',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2344
  },
  {
    id: 'arm_0049',
    name: 'Reinforced Cuirass #49',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2392
  },
  {
    id: 'arm_0050',
    name: 'Reinforced Gauntlets #50',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0051',
    name: 'Reinforced Greaves #51',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 52,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 675, vitality: 156 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 260, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 104, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0052',
    name: 'Reinforced Pendant #52',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 688, vitality: 159 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 265, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 106, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0053',
    name: 'Reinforced Signet Ring #53',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 54,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 701, vitality: 162 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 270, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 108, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0054',
    name: 'Reinforced Helmet #54',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 55,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 714, vitality: 165 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 275, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 110, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0055',
    name: 'Reinforced Cuirass #55',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 56,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 727, vitality: 168 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 280, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 112, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0056',
    name: 'Reinforced Gauntlets #56',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 57,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 740, vitality: 171 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 285, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 114, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0057',
    name: 'Reinforced Greaves #57',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 753, vitality: 174 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 290, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 116, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0058',
    name: 'Reinforced Pendant #58',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 59,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 766, vitality: 177 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 295, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 118, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0059',
    name: 'Reinforced Signet Ring #59',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 60,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 779, vitality: 180 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 300, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 120, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0060',
    name: 'Reinforced Helmet #60',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 1,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 42, vitality: 3 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 5, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 520
  },
  {
    id: 'arm_0061',
    name: 'Reinforced Cuirass #61',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 568
  },
  {
    id: 'arm_0062',
    name: 'Reinforced Gauntlets #62',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 616
  },
  {
    id: 'arm_0063',
    name: 'Reinforced Greaves #63',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 664
  },
  {
    id: 'arm_0064',
    name: 'Reinforced Pendant #64',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 712
  },
  {
    id: 'arm_0065',
    name: 'Reinforced Signet Ring #65',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 760
  },
  {
    id: 'arm_0066',
    name: 'Reinforced Helmet #66',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 808
  },
  {
    id: 'arm_0067',
    name: 'Reinforced Cuirass #67',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 856
  },
  {
    id: 'arm_0068',
    name: 'Reinforced Gauntlets #68',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 904
  },
  {
    id: 'arm_0069',
    name: 'Reinforced Greaves #69',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 952
  },
  {
    id: 'arm_0070',
    name: 'Reinforced Pendant #70',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1000
  },
  {
    id: 'arm_0071',
    name: 'Reinforced Signet Ring #71',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1048
  },
  {
    id: 'arm_0072',
    name: 'Reinforced Helmet #72',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1096
  },
  {
    id: 'arm_0073',
    name: 'Reinforced Cuirass #73',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1144
  },
  {
    id: 'arm_0074',
    name: 'Reinforced Gauntlets #74',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1192
  },
  {
    id: 'arm_0075',
    name: 'Reinforced Greaves #75',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1240
  },
  {
    id: 'arm_0076',
    name: 'Reinforced Pendant #76',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1288
  },
  {
    id: 'arm_0077',
    name: 'Reinforced Signet Ring #77',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1336
  },
  {
    id: 'arm_0078',
    name: 'Reinforced Helmet #78',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1384
  },
  {
    id: 'arm_0079',
    name: 'Reinforced Cuirass #79',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1432
  },
  {
    id: 'arm_0080',
    name: 'Reinforced Gauntlets #80',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1480
  },
  {
    id: 'arm_0081',
    name: 'Reinforced Greaves #81',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1528
  },
  {
    id: 'arm_0082',
    name: 'Reinforced Pendant #82',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1576
  },
  {
    id: 'arm_0083',
    name: 'Reinforced Signet Ring #83',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1624
  },
  {
    id: 'arm_0084',
    name: 'Reinforced Helmet #84',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1672
  },
  {
    id: 'arm_0085',
    name: 'Reinforced Cuirass #85',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1720
  },
  {
    id: 'arm_0086',
    name: 'Reinforced Gauntlets #86',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1768
  },
  {
    id: 'arm_0087',
    name: 'Reinforced Greaves #87',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1816
  },
  {
    id: 'arm_0088',
    name: 'Reinforced Pendant #88',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1864
  },
  {
    id: 'arm_0089',
    name: 'Reinforced Signet Ring #89',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1912
  },
  {
    id: 'arm_0090',
    name: 'Reinforced Helmet #90',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1960
  },
  {
    id: 'arm_0091',
    name: 'Reinforced Cuirass #91',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2008
  },
  {
    id: 'arm_0092',
    name: 'Reinforced Gauntlets #92',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2056
  },
  {
    id: 'arm_0093',
    name: 'Reinforced Greaves #93',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2104
  },
  {
    id: 'arm_0094',
    name: 'Reinforced Pendant #94',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2152
  },
  {
    id: 'arm_0095',
    name: 'Reinforced Signet Ring #95',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2200
  },
  {
    id: 'arm_0096',
    name: 'Reinforced Helmet #96',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2248
  },
  {
    id: 'arm_0097',
    name: 'Reinforced Cuirass #97',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2296
  },
  {
    id: 'arm_0098',
    name: 'Reinforced Gauntlets #98',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2344
  },
  {
    id: 'arm_0099',
    name: 'Reinforced Greaves #99',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2392
  },
  {
    id: 'arm_0100',
    name: 'Reinforced Pendant #100',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0101',
    name: 'Reinforced Signet Ring #101',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0102',
    name: 'Reinforced Helmet #102',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0103',
    name: 'Reinforced Cuirass #103',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0104',
    name: 'Reinforced Gauntlets #104',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0105',
    name: 'Reinforced Greaves #105',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0106',
    name: 'Reinforced Pendant #106',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0107',
    name: 'Reinforced Signet Ring #107',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0108',
    name: 'Reinforced Helmet #108',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0109',
    name: 'Reinforced Cuirass #109',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0110',
    name: 'Reinforced Gauntlets #110',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2920
  },
  {
    id: 'arm_0111',
    name: 'Reinforced Greaves #111',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 52,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 675, vitality: 156 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 260, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 104, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2968
  },
  {
    id: 'arm_0112',
    name: 'Reinforced Pendant #112',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 688, vitality: 159 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 265, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 106, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3016
  },
  {
    id: 'arm_0113',
    name: 'Reinforced Signet Ring #113',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 54,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 701, vitality: 162 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 270, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 108, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3064
  },
  {
    id: 'arm_0114',
    name: 'Reinforced Helmet #114',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 55,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 714, vitality: 165 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 275, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 110, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3112
  },
  {
    id: 'arm_0115',
    name: 'Reinforced Cuirass #115',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 56,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 727, vitality: 168 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 280, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 112, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3160
  },
  {
    id: 'arm_0116',
    name: 'Reinforced Gauntlets #116',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 57,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 740, vitality: 171 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 285, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 114, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3208
  },
  {
    id: 'arm_0117',
    name: 'Reinforced Greaves #117',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 753, vitality: 174 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 290, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 116, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3256
  },
  {
    id: 'arm_0118',
    name: 'Reinforced Pendant #118',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 59,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 766, vitality: 177 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 295, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 118, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3304
  },
  {
    id: 'arm_0119',
    name: 'Reinforced Signet Ring #119',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 60,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 779, vitality: 180 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 300, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 120, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3352
  },
  {
    id: 'arm_0120',
    name: 'Reinforced Helmet #120',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 1,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 42, vitality: 3 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 5, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1000
  },
  {
    id: 'arm_0121',
    name: 'Reinforced Cuirass #121',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1048
  },
  {
    id: 'arm_0122',
    name: 'Reinforced Gauntlets #122',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1096
  },
  {
    id: 'arm_0123',
    name: 'Reinforced Greaves #123',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1144
  },
  {
    id: 'arm_0124',
    name: 'Reinforced Pendant #124',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1192
  },
  {
    id: 'arm_0125',
    name: 'Reinforced Signet Ring #125',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1240
  },
  {
    id: 'arm_0126',
    name: 'Reinforced Helmet #126',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1288
  },
  {
    id: 'arm_0127',
    name: 'Reinforced Cuirass #127',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1336
  },
  {
    id: 'arm_0128',
    name: 'Reinforced Gauntlets #128',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1384
  },
  {
    id: 'arm_0129',
    name: 'Reinforced Greaves #129',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1432
  },
  {
    id: 'arm_0130',
    name: 'Reinforced Pendant #130',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1480
  },
  {
    id: 'arm_0131',
    name: 'Reinforced Signet Ring #131',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1528
  },
  {
    id: 'arm_0132',
    name: 'Reinforced Helmet #132',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1576
  },
  {
    id: 'arm_0133',
    name: 'Reinforced Cuirass #133',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1624
  },
  {
    id: 'arm_0134',
    name: 'Reinforced Gauntlets #134',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1672
  },
  {
    id: 'arm_0135',
    name: 'Reinforced Greaves #135',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1720
  },
  {
    id: 'arm_0136',
    name: 'Reinforced Pendant #136',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1768
  },
  {
    id: 'arm_0137',
    name: 'Reinforced Signet Ring #137',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1816
  },
  {
    id: 'arm_0138',
    name: 'Reinforced Helmet #138',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1864
  },
  {
    id: 'arm_0139',
    name: 'Reinforced Cuirass #139',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1912
  },
  {
    id: 'arm_0140',
    name: 'Reinforced Gauntlets #140',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1960
  },
  {
    id: 'arm_0141',
    name: 'Reinforced Greaves #141',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2008
  },
  {
    id: 'arm_0142',
    name: 'Reinforced Pendant #142',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2056
  },
  {
    id: 'arm_0143',
    name: 'Reinforced Signet Ring #143',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2104
  },
  {
    id: 'arm_0144',
    name: 'Reinforced Helmet #144',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2152
  },
  {
    id: 'arm_0145',
    name: 'Reinforced Cuirass #145',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2200
  },
  {
    id: 'arm_0146',
    name: 'Reinforced Gauntlets #146',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2248
  },
  {
    id: 'arm_0147',
    name: 'Reinforced Greaves #147',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2296
  },
  {
    id: 'arm_0148',
    name: 'Reinforced Pendant #148',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2344
  },
  {
    id: 'arm_0149',
    name: 'Reinforced Signet Ring #149',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2392
  },
  {
    id: 'arm_0150',
    name: 'Reinforced Helmet #150',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0151',
    name: 'Reinforced Cuirass #151',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0152',
    name: 'Reinforced Gauntlets #152',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0153',
    name: 'Reinforced Greaves #153',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0154',
    name: 'Reinforced Pendant #154',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0155',
    name: 'Reinforced Signet Ring #155',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0156',
    name: 'Reinforced Helmet #156',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0157',
    name: 'Reinforced Cuirass #157',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0158',
    name: 'Reinforced Gauntlets #158',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0159',
    name: 'Reinforced Greaves #159',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0160',
    name: 'Reinforced Pendant #160',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2920
  },
  {
    id: 'arm_0161',
    name: 'Reinforced Signet Ring #161',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2968
  },
  {
    id: 'arm_0162',
    name: 'Reinforced Helmet #162',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3016
  },
  {
    id: 'arm_0163',
    name: 'Reinforced Cuirass #163',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3064
  },
  {
    id: 'arm_0164',
    name: 'Reinforced Gauntlets #164',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3112
  },
  {
    id: 'arm_0165',
    name: 'Reinforced Greaves #165',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3160
  },
  {
    id: 'arm_0166',
    name: 'Reinforced Pendant #166',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3208
  },
  {
    id: 'arm_0167',
    name: 'Reinforced Signet Ring #167',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3256
  },
  {
    id: 'arm_0168',
    name: 'Reinforced Helmet #168',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3304
  },
  {
    id: 'arm_0169',
    name: 'Reinforced Cuirass #169',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3352
  },
  {
    id: 'arm_0170',
    name: 'Reinforced Gauntlets #170',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3400
  },
  {
    id: 'arm_0171',
    name: 'Reinforced Greaves #171',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 52,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 675, vitality: 156 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 260, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 104, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3448
  },
  {
    id: 'arm_0172',
    name: 'Reinforced Pendant #172',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 688, vitality: 159 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 265, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 106, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3496
  },
  {
    id: 'arm_0173',
    name: 'Reinforced Signet Ring #173',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 54,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 701, vitality: 162 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 270, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 108, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3544
  },
  {
    id: 'arm_0174',
    name: 'Reinforced Helmet #174',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 55,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 714, vitality: 165 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 275, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 110, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3592
  },
  {
    id: 'arm_0175',
    name: 'Reinforced Cuirass #175',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 56,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 727, vitality: 168 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 280, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 112, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3640
  },
  {
    id: 'arm_0176',
    name: 'Reinforced Gauntlets #176',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 57,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 740, vitality: 171 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 285, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 114, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3688
  },
  {
    id: 'arm_0177',
    name: 'Reinforced Greaves #177',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 753, vitality: 174 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 290, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 116, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3736
  },
  {
    id: 'arm_0178',
    name: 'Reinforced Pendant #178',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 59,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 766, vitality: 177 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 295, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 118, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3784
  },
  {
    id: 'arm_0179',
    name: 'Reinforced Signet Ring #179',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 60,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 779, vitality: 180 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 300, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 120, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3832
  },
  {
    id: 'arm_0180',
    name: 'Reinforced Helmet #180',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 1,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 42, vitality: 3 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 5, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1480
  },
  {
    id: 'arm_0181',
    name: 'Reinforced Cuirass #181',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1528
  },
  {
    id: 'arm_0182',
    name: 'Reinforced Gauntlets #182',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1576
  },
  {
    id: 'arm_0183',
    name: 'Reinforced Greaves #183',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1624
  },
  {
    id: 'arm_0184',
    name: 'Reinforced Pendant #184',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1672
  },
  {
    id: 'arm_0185',
    name: 'Reinforced Signet Ring #185',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1720
  },
  {
    id: 'arm_0186',
    name: 'Reinforced Helmet #186',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1768
  },
  {
    id: 'arm_0187',
    name: 'Reinforced Cuirass #187',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1816
  },
  {
    id: 'arm_0188',
    name: 'Reinforced Gauntlets #188',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1864
  },
  {
    id: 'arm_0189',
    name: 'Reinforced Greaves #189',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 1912
  },
  {
    id: 'arm_0190',
    name: 'Reinforced Pendant #190',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1960
  },
  {
    id: 'arm_0191',
    name: 'Reinforced Signet Ring #191',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2008
  },
  {
    id: 'arm_0192',
    name: 'Reinforced Helmet #192',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2056
  },
  {
    id: 'arm_0193',
    name: 'Reinforced Cuirass #193',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2104
  },
  {
    id: 'arm_0194',
    name: 'Reinforced Gauntlets #194',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2152
  },
  {
    id: 'arm_0195',
    name: 'Reinforced Greaves #195',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2200
  },
  {
    id: 'arm_0196',
    name: 'Reinforced Pendant #196',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2248
  },
  {
    id: 'arm_0197',
    name: 'Reinforced Signet Ring #197',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2296
  },
  {
    id: 'arm_0198',
    name: 'Reinforced Helmet #198',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2344
  },
  {
    id: 'arm_0199',
    name: 'Reinforced Cuirass #199',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2392
  },
  {
    id: 'arm_0200',
    name: 'Reinforced Gauntlets #200',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0201',
    name: 'Reinforced Greaves #201',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0202',
    name: 'Reinforced Pendant #202',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0203',
    name: 'Reinforced Signet Ring #203',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0204',
    name: 'Reinforced Helmet #204',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0205',
    name: 'Reinforced Cuirass #205',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0206',
    name: 'Reinforced Gauntlets #206',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0207',
    name: 'Reinforced Greaves #207',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0208',
    name: 'Reinforced Pendant #208',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0209',
    name: 'Reinforced Signet Ring #209',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0210',
    name: 'Reinforced Helmet #210',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2920
  },
  {
    id: 'arm_0211',
    name: 'Reinforced Cuirass #211',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2968
  },
  {
    id: 'arm_0212',
    name: 'Reinforced Gauntlets #212',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3016
  },
  {
    id: 'arm_0213',
    name: 'Reinforced Greaves #213',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3064
  },
  {
    id: 'arm_0214',
    name: 'Reinforced Pendant #214',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3112
  },
  {
    id: 'arm_0215',
    name: 'Reinforced Signet Ring #215',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3160
  },
  {
    id: 'arm_0216',
    name: 'Reinforced Helmet #216',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3208
  },
  {
    id: 'arm_0217',
    name: 'Reinforced Cuirass #217',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3256
  },
  {
    id: 'arm_0218',
    name: 'Reinforced Gauntlets #218',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3304
  },
  {
    id: 'arm_0219',
    name: 'Reinforced Greaves #219',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3352
  },
  {
    id: 'arm_0220',
    name: 'Reinforced Pendant #220',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3400
  },
  {
    id: 'arm_0221',
    name: 'Reinforced Signet Ring #221',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3448
  },
  {
    id: 'arm_0222',
    name: 'Reinforced Helmet #222',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3496
  },
  {
    id: 'arm_0223',
    name: 'Reinforced Cuirass #223',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3544
  },
  {
    id: 'arm_0224',
    name: 'Reinforced Gauntlets #224',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3592
  },
  {
    id: 'arm_0225',
    name: 'Reinforced Greaves #225',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3640
  },
  {
    id: 'arm_0226',
    name: 'Reinforced Pendant #226',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3688
  },
  {
    id: 'arm_0227',
    name: 'Reinforced Signet Ring #227',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3736
  },
  {
    id: 'arm_0228',
    name: 'Reinforced Helmet #228',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3784
  },
  {
    id: 'arm_0229',
    name: 'Reinforced Cuirass #229',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3832
  },
  {
    id: 'arm_0230',
    name: 'Reinforced Gauntlets #230',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3880
  },
  {
    id: 'arm_0231',
    name: 'Reinforced Greaves #231',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 52,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 675, vitality: 156 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 260, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 104, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3928
  },
  {
    id: 'arm_0232',
    name: 'Reinforced Pendant #232',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 688, vitality: 159 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 265, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 106, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3976
  },
  {
    id: 'arm_0233',
    name: 'Reinforced Signet Ring #233',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 54,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 701, vitality: 162 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 270, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 108, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4024
  },
  {
    id: 'arm_0234',
    name: 'Reinforced Helmet #234',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 55,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 714, vitality: 165 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 275, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 110, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4072
  },
  {
    id: 'arm_0235',
    name: 'Reinforced Cuirass #235',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 56,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 727, vitality: 168 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 280, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 112, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4120
  },
  {
    id: 'arm_0236',
    name: 'Reinforced Gauntlets #236',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 57,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 740, vitality: 171 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 285, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 114, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4168
  },
  {
    id: 'arm_0237',
    name: 'Reinforced Greaves #237',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 753, vitality: 174 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 290, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 116, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4216
  },
  {
    id: 'arm_0238',
    name: 'Reinforced Pendant #238',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 59,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 766, vitality: 177 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 295, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 118, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4264
  },
  {
    id: 'arm_0239',
    name: 'Reinforced Signet Ring #239',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 60,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 779, vitality: 180 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 300, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 120, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4312
  },
  {
    id: 'arm_0240',
    name: 'Reinforced Helmet #240',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 1,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 42, vitality: 3 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 5, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 1960
  },
  {
    id: 'arm_0241',
    name: 'Reinforced Cuirass #241',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2008
  },
  {
    id: 'arm_0242',
    name: 'Reinforced Gauntlets #242',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2056
  },
  {
    id: 'arm_0243',
    name: 'Reinforced Greaves #243',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2104
  },
  {
    id: 'arm_0244',
    name: 'Reinforced Pendant #244',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2152
  },
  {
    id: 'arm_0245',
    name: 'Reinforced Signet Ring #245',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2200
  },
  {
    id: 'arm_0246',
    name: 'Reinforced Helmet #246',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2248
  },
  {
    id: 'arm_0247',
    name: 'Reinforced Cuirass #247',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2296
  },
  {
    id: 'arm_0248',
    name: 'Reinforced Gauntlets #248',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2344
  },
  {
    id: 'arm_0249',
    name: 'Reinforced Greaves #249',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2392
  },
  {
    id: 'arm_0250',
    name: 'Reinforced Pendant #250',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0251',
    name: 'Reinforced Signet Ring #251',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0252',
    name: 'Reinforced Helmet #252',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0253',
    name: 'Reinforced Cuirass #253',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0254',
    name: 'Reinforced Gauntlets #254',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0255',
    name: 'Reinforced Greaves #255',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0256',
    name: 'Reinforced Pendant #256',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0257',
    name: 'Reinforced Signet Ring #257',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0258',
    name: 'Reinforced Helmet #258',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0259',
    name: 'Reinforced Cuirass #259',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0260',
    name: 'Reinforced Gauntlets #260',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2920
  },
  {
    id: 'arm_0261',
    name: 'Reinforced Greaves #261',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2968
  },
  {
    id: 'arm_0262',
    name: 'Reinforced Pendant #262',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3016
  },
  {
    id: 'arm_0263',
    name: 'Reinforced Signet Ring #263',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3064
  },
  {
    id: 'arm_0264',
    name: 'Reinforced Helmet #264',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3112
  },
  {
    id: 'arm_0265',
    name: 'Reinforced Cuirass #265',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3160
  },
  {
    id: 'arm_0266',
    name: 'Reinforced Gauntlets #266',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3208
  },
  {
    id: 'arm_0267',
    name: 'Reinforced Greaves #267',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3256
  },
  {
    id: 'arm_0268',
    name: 'Reinforced Pendant #268',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3304
  },
  {
    id: 'arm_0269',
    name: 'Reinforced Signet Ring #269',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3352
  },
  {
    id: 'arm_0270',
    name: 'Reinforced Helmet #270',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3400
  },
  {
    id: 'arm_0271',
    name: 'Reinforced Cuirass #271',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3448
  },
  {
    id: 'arm_0272',
    name: 'Reinforced Gauntlets #272',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3496
  },
  {
    id: 'arm_0273',
    name: 'Reinforced Greaves #273',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3544
  },
  {
    id: 'arm_0274',
    name: 'Reinforced Pendant #274',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3592
  },
  {
    id: 'arm_0275',
    name: 'Reinforced Signet Ring #275',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3640
  },
  {
    id: 'arm_0276',
    name: 'Reinforced Helmet #276',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3688
  },
  {
    id: 'arm_0277',
    name: 'Reinforced Cuirass #277',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3736
  },
  {
    id: 'arm_0278',
    name: 'Reinforced Gauntlets #278',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3784
  },
  {
    id: 'arm_0279',
    name: 'Reinforced Greaves #279',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3832
  },
  {
    id: 'arm_0280',
    name: 'Reinforced Pendant #280',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3880
  },
  {
    id: 'arm_0281',
    name: 'Reinforced Signet Ring #281',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3928
  },
  {
    id: 'arm_0282',
    name: 'Reinforced Helmet #282',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3976
  },
  {
    id: 'arm_0283',
    name: 'Reinforced Cuirass #283',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4024
  },
  {
    id: 'arm_0284',
    name: 'Reinforced Gauntlets #284',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4072
  },
  {
    id: 'arm_0285',
    name: 'Reinforced Greaves #285',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4120
  },
  {
    id: 'arm_0286',
    name: 'Reinforced Pendant #286',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4168
  },
  {
    id: 'arm_0287',
    name: 'Reinforced Signet Ring #287',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4216
  },
  {
    id: 'arm_0288',
    name: 'Reinforced Helmet #288',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4264
  },
  {
    id: 'arm_0289',
    name: 'Reinforced Cuirass #289',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4312
  },
  {
    id: 'arm_0290',
    name: 'Reinforced Gauntlets #290',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4360
  },
  {
    id: 'arm_0291',
    name: 'Reinforced Greaves #291',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 52,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 675, vitality: 156 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 260, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 104, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4408
  },
  {
    id: 'arm_0292',
    name: 'Reinforced Pendant #292',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 53,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 688, vitality: 159 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 265, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 106, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4456
  },
  {
    id: 'arm_0293',
    name: 'Reinforced Signet Ring #293',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 54,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 701, vitality: 162 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 270, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 108, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4504
  },
  {
    id: 'arm_0294',
    name: 'Reinforced Helmet #294',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 55,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 714, vitality: 165 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 275, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 110, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4552
  },
  {
    id: 'arm_0295',
    name: 'Reinforced Cuirass #295',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 56,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 727, vitality: 168 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 280, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 112, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4600
  },
  {
    id: 'arm_0296',
    name: 'Reinforced Gauntlets #296',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 57,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 740, vitality: 171 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 285, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 114, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4648
  },
  {
    id: 'arm_0297',
    name: 'Reinforced Greaves #297',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 58,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 753, vitality: 174 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 290, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 116, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4696
  },
  {
    id: 'arm_0298',
    name: 'Reinforced Pendant #298',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 59,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 766, vitality: 177 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 295, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 118, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4744
  },
  {
    id: 'arm_0299',
    name: 'Reinforced Signet Ring #299',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 60,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 779, vitality: 180 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 300, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 120, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4792
  },
  {
    id: 'arm_0300',
    name: 'Reinforced Helmet #300',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 1,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 42, vitality: 3 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 5, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 2, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2440
  },
  {
    id: 'arm_0301',
    name: 'Reinforced Cuirass #301',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 2,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 55, vitality: 6 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 10, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 4, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2488
  },
  {
    id: 'arm_0302',
    name: 'Reinforced Gauntlets #302',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 3,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 68, vitality: 9 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 15, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 6, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2536
  },
  {
    id: 'arm_0303',
    name: 'Reinforced Greaves #303',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 4,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 81, vitality: 12 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 20, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 8, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2584
  },
  {
    id: 'arm_0304',
    name: 'Reinforced Pendant #304',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 5,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 94, vitality: 15 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 25, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 10, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2632
  },
  {
    id: 'arm_0305',
    name: 'Reinforced Signet Ring #305',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 6,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 107, vitality: 18 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 30, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 12, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2680
  },
  {
    id: 'arm_0306',
    name: 'Reinforced Helmet #306',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 7,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 120, vitality: 21 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 35, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 14, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2728
  },
  {
    id: 'arm_0307',
    name: 'Reinforced Cuirass #307',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 8,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 133, vitality: 24 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 40, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 16, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2776
  },
  {
    id: 'arm_0308',
    name: 'Reinforced Gauntlets #308',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 9,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 146, vitality: 27 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 45, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 18, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2824
  },
  {
    id: 'arm_0309',
    name: 'Reinforced Greaves #309',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 10,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 159, vitality: 30 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 50, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 20, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2872
  },
  {
    id: 'arm_0310',
    name: 'Reinforced Pendant #310',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 11,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 172, vitality: 33 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 55, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 22, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 2920
  },
  {
    id: 'arm_0311',
    name: 'Reinforced Signet Ring #311',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 12,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 185, vitality: 36 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 60, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 24, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 2968
  },
  {
    id: 'arm_0312',
    name: 'Reinforced Helmet #312',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 13,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 198, vitality: 39 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 65, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 26, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3016
  },
  {
    id: 'arm_0313',
    name: 'Reinforced Cuirass #313',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 14,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 211, vitality: 42 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 70, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 28, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3064
  },
  {
    id: 'arm_0314',
    name: 'Reinforced Gauntlets #314',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 15,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 224, vitality: 45 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 75, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 30, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3112
  },
  {
    id: 'arm_0315',
    name: 'Reinforced Greaves #315',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 16,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 237, vitality: 48 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 80, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 32, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3160
  },
  {
    id: 'arm_0316',
    name: 'Reinforced Pendant #316',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 17,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 250, vitality: 51 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 85, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 34, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3208
  },
  {
    id: 'arm_0317',
    name: 'Reinforced Signet Ring #317',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 18,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 263, vitality: 54 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 90, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 36, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3256
  },
  {
    id: 'arm_0318',
    name: 'Reinforced Helmet #318',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 19,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 276, vitality: 57 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 95, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 38, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3304
  },
  {
    id: 'arm_0319',
    name: 'Reinforced Cuirass #319',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 20,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 289, vitality: 60 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 100, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 40, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3352
  },
  {
    id: 'arm_0320',
    name: 'Reinforced Gauntlets #320',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 21,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 302, vitality: 63 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 105, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 42, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3400
  },
  {
    id: 'arm_0321',
    name: 'Reinforced Greaves #321',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 22,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 315, vitality: 66 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 110, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 44, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3448
  },
  {
    id: 'arm_0322',
    name: 'Reinforced Pendant #322',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 23,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 328, vitality: 69 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 115, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 46, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3496
  },
  {
    id: 'arm_0323',
    name: 'Reinforced Signet Ring #323',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 24,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 341, vitality: 72 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 120, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 48, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3544
  },
  {
    id: 'arm_0324',
    name: 'Reinforced Helmet #324',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 25,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 354, vitality: 75 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 125, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 50, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3592
  },
  {
    id: 'arm_0325',
    name: 'Reinforced Cuirass #325',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 26,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 367, vitality: 78 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 130, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 52, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3640
  },
  {
    id: 'arm_0326',
    name: 'Reinforced Gauntlets #326',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 27,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 380, vitality: 81 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 135, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 54, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3688
  },
  {
    id: 'arm_0327',
    name: 'Reinforced Greaves #327',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 28,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 393, vitality: 84 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 140, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 56, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3736
  },
  {
    id: 'arm_0328',
    name: 'Reinforced Pendant #328',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 29,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 406, vitality: 87 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 145, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 58, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3784
  },
  {
    id: 'arm_0329',
    name: 'Reinforced Signet Ring #329',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 30,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 419, vitality: 90 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 150, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 60, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3832
  },
  {
    id: 'arm_0330',
    name: 'Reinforced Helmet #330',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 31,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 402, vitality: 93 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 155, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 62, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3880
  },
  {
    id: 'arm_0331',
    name: 'Reinforced Cuirass #331',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 32,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 415, vitality: 96 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 160, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 64, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 3928
  },
  {
    id: 'arm_0332',
    name: 'Reinforced Gauntlets #332',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 33,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 428, vitality: 99 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 165, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 66, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 3976
  },
  {
    id: 'arm_0333',
    name: 'Reinforced Greaves #333',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 34,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 441, vitality: 102 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 170, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 68, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4024
  },
  {
    id: 'arm_0334',
    name: 'Reinforced Pendant #334',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 35,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 454, vitality: 105 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 175, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 70, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4072
  },
  {
    id: 'arm_0335',
    name: 'Reinforced Signet Ring #335',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 36,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 467, vitality: 108 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 180, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 72, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4120
  },
  {
    id: 'arm_0336',
    name: 'Reinforced Helmet #336',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 37,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 480, vitality: 111 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 185, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 74, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4168
  },
  {
    id: 'arm_0337',
    name: 'Reinforced Cuirass #337',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 38,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 493, vitality: 114 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 190, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 76, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4216
  },
  {
    id: 'arm_0338',
    name: 'Reinforced Gauntlets #338',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 39,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 506, vitality: 117 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 195, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 78, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4264
  },
  {
    id: 'arm_0339',
    name: 'Reinforced Greaves #339',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 40,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 519, vitality: 120 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 200, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 80, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4312
  },
  {
    id: 'arm_0340',
    name: 'Reinforced Pendant #340',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 41,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 532, vitality: 123 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 205, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 82, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4360
  },
  {
    id: 'arm_0341',
    name: 'Reinforced Signet Ring #341',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 42,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 545, vitality: 126 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 210, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 84, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4408
  },
  {
    id: 'arm_0342',
    name: 'Reinforced Helmet #342',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 43,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 558, vitality: 129 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 215, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 86, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4456
  },
  {
    id: 'arm_0343',
    name: 'Reinforced Cuirass #343',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 44,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 571, vitality: 132 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 220, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 88, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4504
  },
  {
    id: 'arm_0344',
    name: 'Reinforced Gauntlets #344',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 45,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 584, vitality: 135 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 225, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 90, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4552
  },
  {
    id: 'arm_0345',
    name: 'Reinforced Greaves #345',
    type: ItemType.BOOTS,
    rarity: ItemRarity.RARE,
    itemLevel: 46,
    icon: '👢',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 597, vitality: 138 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 230, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 92, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4600
  },
  {
    id: 'arm_0346',
    name: 'Reinforced Pendant #346',
    type: ItemType.AMULET,
    rarity: ItemRarity.RARE,
    itemLevel: 47,
    icon: '📿',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 610, vitality: 141 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 235, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 94, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4648
  },
  {
    id: 'arm_0347',
    name: 'Reinforced Signet Ring #347',
    type: ItemType.RING,
    rarity: ItemRarity.RARE,
    itemLevel: 48,
    icon: '💍',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 623, vitality: 144 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 240, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 96, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4696
  },
  {
    id: 'arm_0348',
    name: 'Reinforced Helmet #348',
    type: ItemType.HELMET,
    rarity: ItemRarity.RARE,
    itemLevel: 49,
    icon: '🪖',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 636, vitality: 147 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 245, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 98, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4744
  },
  {
    id: 'arm_0349',
    name: 'Reinforced Cuirass #349',
    type: ItemType.CHEST_ARMOR,
    rarity: ItemRarity.RARE,
    itemLevel: 50,
    icon: '🥋',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 649, vitality: 150 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 250, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 100, op: 0, isPrefix: false }
    ],
    maxSockets: 2,
    goldValue: 4792
  },
  {
    id: 'arm_0350',
    name: 'Reinforced Gauntlets #350',
    type: ItemType.GLOVES,
    rarity: ItemRarity.RARE,
    itemLevel: 51,
    icon: '🧤',
    description: 'Imbued protective defensive vestment bearing the sigils of the High Guard.',
    baseStats: { armor: 662, vitality: 153 },
    affixes: [
      { name: 'Stalwart', stat: StatType.ARMOR, value: 255, op: 0, isPrefix: true },
      { name: 'Vitality', stat: StatType.VITALITY, value: 102, op: 0, isPrefix: false }
    ],
    maxSockets: 1,
    goldValue: 4840
  },
];

/**
 * @file TalentTreesDatabase.js
 * @description Comprehensive skill talent trees, mastery nodes, and passive perk matrices.
 */
export const TalentTreesDatabase = [
  {
    id: 'talent_0001',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #1',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0001'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_1'
  },
  {
    id: 'talent_0002',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #2',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0001'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_2'
  },
  {
    id: 'talent_0003',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #3',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0002'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_3'
  },
  {
    id: 'talent_0004',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #4',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0003'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_4'
  },
  {
    id: 'talent_0005',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #5',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0004'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_5'
  },
  {
    id: 'talent_0006',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #6',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0005'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_6'
  },
  {
    id: 'talent_0007',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #7',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0006'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_7'
  },
  {
    id: 'talent_0008',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #8',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0007'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_8'
  },
  {
    id: 'talent_0009',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #9',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0008'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_9'
  },
  {
    id: 'talent_0010',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #10',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0009'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_10'
  },
  {
    id: 'talent_0011',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #11',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0010'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_11'
  },
  {
    id: 'talent_0012',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #12',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0011'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_12'
  },
  {
    id: 'talent_0013',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #13',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0012'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_13'
  },
  {
    id: 'talent_0014',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #14',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0013'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_14'
  },
  {
    id: 'talent_0015',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #15',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0014'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_15'
  },
  {
    id: 'talent_0016',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #16',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0015'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_16'
  },
  {
    id: 'talent_0017',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #17',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0016'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_17'
  },
  {
    id: 'talent_0018',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #18',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0017'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_18'
  },
  {
    id: 'talent_0019',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #19',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0018'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_19'
  },
  {
    id: 'talent_0020',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #20',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0019'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_20'
  },
  {
    id: 'talent_0021',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #21',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0020'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_21'
  },
  {
    id: 'talent_0022',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #22',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0021'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_22'
  },
  {
    id: 'talent_0023',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #23',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0022'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_23'
  },
  {
    id: 'talent_0024',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #24',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0023'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_24'
  },
  {
    id: 'talent_0025',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #25',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0024'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_25'
  },
  {
    id: 'talent_0026',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #26',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0025'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_26'
  },
  {
    id: 'talent_0027',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #27',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0026'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_27'
  },
  {
    id: 'talent_0028',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #28',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0027'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_28'
  },
  {
    id: 'talent_0029',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #29',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0028'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_29'
  },
  {
    id: 'talent_0030',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #30',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0029'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_30'
  },
  {
    id: 'talent_0031',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #31',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0030'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_31'
  },
  {
    id: 'talent_0032',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #32',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0031'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_32'
  },
  {
    id: 'talent_0033',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #33',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0032'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_33'
  },
  {
    id: 'talent_0034',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #34',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0033'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_34'
  },
  {
    id: 'talent_0035',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #35',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0034'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_35'
  },
  {
    id: 'talent_0036',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #36',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0035'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_36'
  },
  {
    id: 'talent_0037',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #37',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0036'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_37'
  },
  {
    id: 'talent_0038',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #38',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0037'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_38'
  },
  {
    id: 'talent_0039',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #39',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0038'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_39'
  },
  {
    id: 'talent_0040',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #40',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0039'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_40'
  },
  {
    id: 'talent_0041',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #41',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0040'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_41'
  },
  {
    id: 'talent_0042',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #42',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0041'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_42'
  },
  {
    id: 'talent_0043',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #43',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0042'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_43'
  },
  {
    id: 'talent_0044',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #44',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0043'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_44'
  },
  {
    id: 'talent_0045',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #45',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0044'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_45'
  },
  {
    id: 'talent_0046',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #46',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0045'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_46'
  },
  {
    id: 'talent_0047',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #47',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0046'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_47'
  },
  {
    id: 'talent_0048',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #48',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0047'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_48'
  },
  {
    id: 'talent_0049',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #49',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0048'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_49'
  },
  {
    id: 'talent_0050',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #50',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0049'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_50'
  },
  {
    id: 'talent_0051',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #51',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0050'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_51'
  },
  {
    id: 'talent_0052',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #52',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0051'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_52'
  },
  {
    id: 'talent_0053',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #53',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0052'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_53'
  },
  {
    id: 'talent_0054',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #54',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0053'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_54'
  },
  {
    id: 'talent_0055',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #55',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0054'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_55'
  },
  {
    id: 'talent_0056',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #56',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0055'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_56'
  },
  {
    id: 'talent_0057',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #57',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0056'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_57'
  },
  {
    id: 'talent_0058',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #58',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0057'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_58'
  },
  {
    id: 'talent_0059',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #59',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0058'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_59'
  },
  {
    id: 'talent_0060',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #60',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0059'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_60'
  },
  {
    id: 'talent_0061',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #61',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0060'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_61'
  },
  {
    id: 'talent_0062',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #62',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0061'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_62'
  },
  {
    id: 'talent_0063',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #63',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0062'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_63'
  },
  {
    id: 'talent_0064',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #64',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0063'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_64'
  },
  {
    id: 'talent_0065',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #65',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0064'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_65'
  },
  {
    id: 'talent_0066',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #66',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0065'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_66'
  },
  {
    id: 'talent_0067',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #67',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0066'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_67'
  },
  {
    id: 'talent_0068',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #68',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0067'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_68'
  },
  {
    id: 'talent_0069',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #69',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0068'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_69'
  },
  {
    id: 'talent_0070',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #70',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0069'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_70'
  },
  {
    id: 'talent_0071',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #71',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0070'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_71'
  },
  {
    id: 'talent_0072',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #72',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0071'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_72'
  },
  {
    id: 'talent_0073',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #73',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0072'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_73'
  },
  {
    id: 'talent_0074',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #74',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0073'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_74'
  },
  {
    id: 'talent_0075',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #75',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0074'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_75'
  },
  {
    id: 'talent_0076',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #76',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0075'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_76'
  },
  {
    id: 'talent_0077',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #77',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0076'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_77'
  },
  {
    id: 'talent_0078',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #78',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0077'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_78'
  },
  {
    id: 'talent_0079',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #79',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0078'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_79'
  },
  {
    id: 'talent_0080',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #80',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0079'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_80'
  },
  {
    id: 'talent_0081',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #81',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0080'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_81'
  },
  {
    id: 'talent_0082',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #82',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0081'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_82'
  },
  {
    id: 'talent_0083',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #83',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0082'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_83'
  },
  {
    id: 'talent_0084',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #84',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0083'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_84'
  },
  {
    id: 'talent_0085',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #85',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0084'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_85'
  },
  {
    id: 'talent_0086',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #86',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0085'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_86'
  },
  {
    id: 'talent_0087',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #87',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0086'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_87'
  },
  {
    id: 'talent_0088',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #88',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0087'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_88'
  },
  {
    id: 'talent_0089',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #89',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0088'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_89'
  },
  {
    id: 'talent_0090',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #90',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0089'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_90'
  },
  {
    id: 'talent_0091',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #91',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0090'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_91'
  },
  {
    id: 'talent_0092',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #92',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0091'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_92'
  },
  {
    id: 'talent_0093',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #93',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0092'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_93'
  },
  {
    id: 'talent_0094',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #94',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0093'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_94'
  },
  {
    id: 'talent_0095',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #95',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0094'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_95'
  },
  {
    id: 'talent_0096',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #96',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0095'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_96'
  },
  {
    id: 'talent_0097',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #97',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0096'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_97'
  },
  {
    id: 'talent_0098',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #98',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0097'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_98'
  },
  {
    id: 'talent_0099',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #99',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0098'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_99'
  },
  {
    id: 'talent_0100',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #100',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0099'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_100'
  },
  {
    id: 'talent_0101',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #101',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0100'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_101'
  },
  {
    id: 'talent_0102',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #102',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0101'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_102'
  },
  {
    id: 'talent_0103',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #103',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0102'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_103'
  },
  {
    id: 'talent_0104',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #104',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0103'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_104'
  },
  {
    id: 'talent_0105',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #105',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0104'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_105'
  },
  {
    id: 'talent_0106',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #106',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0105'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_106'
  },
  {
    id: 'talent_0107',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #107',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0106'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_107'
  },
  {
    id: 'talent_0108',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #108',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0107'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_108'
  },
  {
    id: 'talent_0109',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #109',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0108'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_109'
  },
  {
    id: 'talent_0110',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #110',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0109'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_110'
  },
  {
    id: 'talent_0111',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #111',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0110'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_111'
  },
  {
    id: 'talent_0112',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #112',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0111'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_112'
  },
  {
    id: 'talent_0113',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #113',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0112'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_113'
  },
  {
    id: 'talent_0114',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #114',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0113'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_114'
  },
  {
    id: 'talent_0115',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #115',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0114'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_115'
  },
  {
    id: 'talent_0116',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #116',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0115'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_116'
  },
  {
    id: 'talent_0117',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #117',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0116'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_117'
  },
  {
    id: 'talent_0118',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #118',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0117'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_118'
  },
  {
    id: 'talent_0119',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #119',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0118'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_119'
  },
  {
    id: 'talent_0120',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #120',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0119'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_120'
  },
  {
    id: 'talent_0121',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #121',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0120'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_121'
  },
  {
    id: 'talent_0122',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #122',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0121'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_122'
  },
  {
    id: 'talent_0123',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #123',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0122'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_123'
  },
  {
    id: 'talent_0124',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #124',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0123'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_124'
  },
  {
    id: 'talent_0125',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #125',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0124'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_125'
  },
  {
    id: 'talent_0126',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #126',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0125'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_126'
  },
  {
    id: 'talent_0127',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #127',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0126'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_127'
  },
  {
    id: 'talent_0128',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #128',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0127'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_128'
  },
  {
    id: 'talent_0129',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #129',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0128'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_129'
  },
  {
    id: 'talent_0130',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #130',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0129'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_130'
  },
  {
    id: 'talent_0131',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #131',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0130'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_131'
  },
  {
    id: 'talent_0132',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #132',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0131'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_132'
  },
  {
    id: 'talent_0133',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #133',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0132'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_133'
  },
  {
    id: 'talent_0134',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #134',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0133'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_134'
  },
  {
    id: 'talent_0135',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #135',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0134'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_135'
  },
  {
    id: 'talent_0136',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #136',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0135'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_136'
  },
  {
    id: 'talent_0137',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #137',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0136'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_137'
  },
  {
    id: 'talent_0138',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #138',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0137'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_138'
  },
  {
    id: 'talent_0139',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #139',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0138'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_139'
  },
  {
    id: 'talent_0140',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #140',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0139'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_140'
  },
  {
    id: 'talent_0141',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #141',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0140'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_141'
  },
  {
    id: 'talent_0142',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #142',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0141'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_142'
  },
  {
    id: 'talent_0143',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #143',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0142'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_143'
  },
  {
    id: 'talent_0144',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #144',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0143'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_144'
  },
  {
    id: 'talent_0145',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #145',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0144'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_145'
  },
  {
    id: 'talent_0146',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #146',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0145'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_146'
  },
  {
    id: 'talent_0147',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #147',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0146'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_147'
  },
  {
    id: 'talent_0148',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #148',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0147'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_148'
  },
  {
    id: 'talent_0149',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #149',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0148'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_149'
  },
  {
    id: 'talent_0150',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #150',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0149'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_150'
  },
  {
    id: 'talent_0151',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #151',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0150'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_151'
  },
  {
    id: 'talent_0152',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #152',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0151'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_152'
  },
  {
    id: 'talent_0153',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #153',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0152'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_153'
  },
  {
    id: 'talent_0154',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #154',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0153'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_154'
  },
  {
    id: 'talent_0155',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #155',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0154'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_155'
  },
  {
    id: 'talent_0156',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #156',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0155'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_156'
  },
  {
    id: 'talent_0157',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #157',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0156'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_157'
  },
  {
    id: 'talent_0158',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #158',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0157'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_158'
  },
  {
    id: 'talent_0159',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #159',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0158'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_159'
  },
  {
    id: 'talent_0160',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #160',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0159'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_160'
  },
  {
    id: 'talent_0161',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #161',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0160'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_161'
  },
  {
    id: 'talent_0162',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #162',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0161'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_162'
  },
  {
    id: 'talent_0163',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #163',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0162'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_163'
  },
  {
    id: 'talent_0164',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #164',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0163'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_164'
  },
  {
    id: 'talent_0165',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #165',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0164'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_165'
  },
  {
    id: 'talent_0166',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #166',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0165'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_166'
  },
  {
    id: 'talent_0167',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #167',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0166'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_167'
  },
  {
    id: 'talent_0168',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #168',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0167'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_168'
  },
  {
    id: 'talent_0169',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #169',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0168'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_169'
  },
  {
    id: 'talent_0170',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #170',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0169'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_170'
  },
  {
    id: 'talent_0171',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #171',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0170'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_171'
  },
  {
    id: 'talent_0172',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #172',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0171'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_172'
  },
  {
    id: 'talent_0173',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #173',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0172'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_173'
  },
  {
    id: 'talent_0174',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #174',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0173'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_174'
  },
  {
    id: 'talent_0175',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #175',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0174'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_175'
  },
  {
    id: 'talent_0176',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #176',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0175'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_176'
  },
  {
    id: 'talent_0177',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #177',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0176'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_177'
  },
  {
    id: 'talent_0178',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #178',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0177'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_178'
  },
  {
    id: 'talent_0179',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #179',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0178'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_179'
  },
  {
    id: 'talent_0180',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #180',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0179'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_180'
  },
  {
    id: 'talent_0181',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #181',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0180'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_181'
  },
  {
    id: 'talent_0182',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #182',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0181'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_182'
  },
  {
    id: 'talent_0183',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #183',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0182'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_183'
  },
  {
    id: 'talent_0184',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #184',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0183'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_184'
  },
  {
    id: 'talent_0185',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #185',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0184'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_185'
  },
  {
    id: 'talent_0186',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #186',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0185'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_186'
  },
  {
    id: 'talent_0187',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #187',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0186'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_187'
  },
  {
    id: 'talent_0188',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #188',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0187'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_188'
  },
  {
    id: 'talent_0189',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #189',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0188'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_189'
  },
  {
    id: 'talent_0190',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #190',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0189'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_190'
  },
  {
    id: 'talent_0191',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #191',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0190'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_191'
  },
  {
    id: 'talent_0192',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #192',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0191'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_192'
  },
  {
    id: 'talent_0193',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #193',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0192'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_193'
  },
  {
    id: 'talent_0194',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #194',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0193'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_194'
  },
  {
    id: 'talent_0195',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #195',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0194'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_195'
  },
  {
    id: 'talent_0196',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #196',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0195'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_196'
  },
  {
    id: 'talent_0197',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #197',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0196'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_197'
  },
  {
    id: 'talent_0198',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #198',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0197'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_198'
  },
  {
    id: 'talent_0199',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #199',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0198'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_199'
  },
  {
    id: 'talent_0200',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #200',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0199'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_200'
  },
  {
    id: 'talent_0201',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #201',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0200'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_201'
  },
  {
    id: 'talent_0202',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #202',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0201'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_202'
  },
  {
    id: 'talent_0203',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #203',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0202'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_203'
  },
  {
    id: 'talent_0204',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #204',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0203'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_204'
  },
  {
    id: 'talent_0205',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #205',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0204'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_205'
  },
  {
    id: 'talent_0206',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #206',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0205'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_206'
  },
  {
    id: 'talent_0207',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #207',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0206'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_207'
  },
  {
    id: 'talent_0208',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #208',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0207'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_208'
  },
  {
    id: 'talent_0209',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #209',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0208'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_209'
  },
  {
    id: 'talent_0210',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #210',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0209'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_210'
  },
  {
    id: 'talent_0211',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #211',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0210'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_211'
  },
  {
    id: 'talent_0212',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #212',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0211'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_212'
  },
  {
    id: 'talent_0213',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #213',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0212'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_213'
  },
  {
    id: 'talent_0214',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #214',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0213'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_214'
  },
  {
    id: 'talent_0215',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #215',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0214'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_215'
  },
  {
    id: 'talent_0216',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #216',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0215'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_216'
  },
  {
    id: 'talent_0217',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #217',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0216'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_217'
  },
  {
    id: 'talent_0218',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #218',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0217'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_218'
  },
  {
    id: 'talent_0219',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #219',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0218'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_219'
  },
  {
    id: 'talent_0220',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #220',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0219'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_220'
  },
  {
    id: 'talent_0221',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #221',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0220'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_221'
  },
  {
    id: 'talent_0222',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #222',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0221'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_222'
  },
  {
    id: 'talent_0223',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #223',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0222'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_223'
  },
  {
    id: 'talent_0224',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #224',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0223'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_224'
  },
  {
    id: 'talent_0225',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #225',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0224'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_225'
  },
  {
    id: 'talent_0226',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #226',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0225'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_226'
  },
  {
    id: 'talent_0227',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #227',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0226'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_227'
  },
  {
    id: 'talent_0228',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #228',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0227'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_228'
  },
  {
    id: 'talent_0229',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #229',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0228'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_229'
  },
  {
    id: 'talent_0230',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #230',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0229'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_230'
  },
  {
    id: 'talent_0231',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #231',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0230'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_231'
  },
  {
    id: 'talent_0232',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #232',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0231'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_232'
  },
  {
    id: 'talent_0233',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #233',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0232'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_233'
  },
  {
    id: 'talent_0234',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #234',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0233'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_234'
  },
  {
    id: 'talent_0235',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #235',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0234'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_235'
  },
  {
    id: 'talent_0236',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #236',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0235'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_236'
  },
  {
    id: 'talent_0237',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #237',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0236'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_237'
  },
  {
    id: 'talent_0238',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #238',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0237'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_238'
  },
  {
    id: 'talent_0239',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #239',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0238'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_239'
  },
  {
    id: 'talent_0240',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #240',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0239'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_240'
  },
  {
    id: 'talent_0241',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #241',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0240'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_241'
  },
  {
    id: 'talent_0242',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #242',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0241'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_242'
  },
  {
    id: 'talent_0243',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #243',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0242'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_243'
  },
  {
    id: 'talent_0244',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #244',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0243'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_244'
  },
  {
    id: 'talent_0245',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #245',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0244'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_245'
  },
  {
    id: 'talent_0246',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #246',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0245'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_246'
  },
  {
    id: 'talent_0247',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #247',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0246'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_247'
  },
  {
    id: 'talent_0248',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #248',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0247'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_248'
  },
  {
    id: 'talent_0249',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #249',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0248'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_249'
  },
  {
    id: 'talent_0250',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #250',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0249'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_250'
  },
  {
    id: 'talent_0251',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #251',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0250'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_251'
  },
  {
    id: 'talent_0252',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #252',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0251'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_252'
  },
  {
    id: 'talent_0253',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #253',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0252'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_253'
  },
  {
    id: 'talent_0254',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #254',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0253'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_254'
  },
  {
    id: 'talent_0255',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #255',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0254'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_255'
  },
  {
    id: 'talent_0256',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #256',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0255'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_256'
  },
  {
    id: 'talent_0257',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #257',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0256'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_257'
  },
  {
    id: 'talent_0258',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #258',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0257'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_258'
  },
  {
    id: 'talent_0259',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #259',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0258'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_259'
  },
  {
    id: 'talent_0260',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #260',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0259'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_260'
  },
  {
    id: 'talent_0261',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #261',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0260'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_261'
  },
  {
    id: 'talent_0262',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #262',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0261'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_262'
  },
  {
    id: 'talent_0263',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #263',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0262'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_263'
  },
  {
    id: 'talent_0264',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #264',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0263'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_264'
  },
  {
    id: 'talent_0265',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #265',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0264'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_265'
  },
  {
    id: 'talent_0266',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #266',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0265'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_266'
  },
  {
    id: 'talent_0267',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #267',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0266'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_267'
  },
  {
    id: 'talent_0268',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #268',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0267'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_268'
  },
  {
    id: 'talent_0269',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #269',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0268'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_269'
  },
  {
    id: 'talent_0270',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #270',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0269'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_270'
  },
  {
    id: 'talent_0271',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #271',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0270'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_271'
  },
  {
    id: 'talent_0272',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #272',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0271'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_272'
  },
  {
    id: 'talent_0273',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #273',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0272'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_273'
  },
  {
    id: 'talent_0274',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #274',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0273'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_274'
  },
  {
    id: 'talent_0275',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #275',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0274'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_275'
  },
  {
    id: 'talent_0276',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #276',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0275'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_276'
  },
  {
    id: 'talent_0277',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #277',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0276'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_277'
  },
  {
    id: 'talent_0278',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #278',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0277'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_278'
  },
  {
    id: 'talent_0279',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #279',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0278'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_279'
  },
  {
    id: 'talent_0280',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #280',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0279'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_280'
  },
  {
    id: 'talent_0281',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #281',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0280'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_281'
  },
  {
    id: 'talent_0282',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #282',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0281'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_282'
  },
  {
    id: 'talent_0283',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #283',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0282'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_283'
  },
  {
    id: 'talent_0284',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #284',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0283'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_284'
  },
  {
    id: 'talent_0285',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #285',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0284'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_285'
  },
  {
    id: 'talent_0286',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #286',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0285'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_286'
  },
  {
    id: 'talent_0287',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #287',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0286'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_287'
  },
  {
    id: 'talent_0288',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #288',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0287'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_288'
  },
  {
    id: 'talent_0289',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #289',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0288'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_289'
  },
  {
    id: 'talent_0290',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #290',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0289'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_290'
  },
  {
    id: 'talent_0291',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #291',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0290'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_291'
  },
  {
    id: 'talent_0292',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #292',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0291'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_292'
  },
  {
    id: 'talent_0293',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #293',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0292'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_293'
  },
  {
    id: 'talent_0294',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #294',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0293'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_294'
  },
  {
    id: 'talent_0295',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #295',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0294'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_295'
  },
  {
    id: 'talent_0296',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #296',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0295'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_296'
  },
  {
    id: 'talent_0297',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #297',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0296'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_297'
  },
  {
    id: 'talent_0298',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #298',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0297'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_298'
  },
  {
    id: 'talent_0299',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #299',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0298'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_299'
  },
  {
    id: 'talent_0300',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #300',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0299'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_300'
  },
  {
    id: 'talent_0301',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #301',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0300'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_301'
  },
  {
    id: 'talent_0302',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #302',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0301'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_302'
  },
  {
    id: 'talent_0303',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #303',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0302'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_303'
  },
  {
    id: 'talent_0304',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #304',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0303'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_304'
  },
  {
    id: 'talent_0305',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #305',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0304'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_305'
  },
  {
    id: 'talent_0306',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #306',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0305'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_306'
  },
  {
    id: 'talent_0307',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #307',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0306'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_307'
  },
  {
    id: 'talent_0308',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #308',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0307'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_308'
  },
  {
    id: 'talent_0309',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #309',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0308'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_309'
  },
  {
    id: 'talent_0310',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #310',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0309'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_310'
  },
  {
    id: 'talent_0311',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #311',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0310'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_311'
  },
  {
    id: 'talent_0312',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #312',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0311'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_312'
  },
  {
    id: 'talent_0313',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #313',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0312'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_313'
  },
  {
    id: 'talent_0314',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #314',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0313'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_314'
  },
  {
    id: 'talent_0315',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #315',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0314'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_315'
  },
  {
    id: 'talent_0316',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #316',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0315'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_316'
  },
  {
    id: 'talent_0317',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #317',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0316'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_317'
  },
  {
    id: 'talent_0318',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #318',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0317'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_318'
  },
  {
    id: 'talent_0319',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #319',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0318'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_319'
  },
  {
    id: 'talent_0320',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #320',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0319'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_320'
  },
  {
    id: 'talent_0321',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #321',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0320'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_321'
  },
  {
    id: 'talent_0322',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #322',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0321'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_322'
  },
  {
    id: 'talent_0323',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #323',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0322'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_323'
  },
  {
    id: 'talent_0324',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #324',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0323'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_324'
  },
  {
    id: 'talent_0325',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #325',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0324'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_325'
  },
  {
    id: 'talent_0326',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #326',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0325'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_326'
  },
  {
    id: 'talent_0327',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #327',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0326'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_327'
  },
  {
    id: 'talent_0328',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #328',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0327'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_328'
  },
  {
    id: 'talent_0329',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #329',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0328'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_329'
  },
  {
    id: 'talent_0330',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #330',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0329'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_330'
  },
  {
    id: 'talent_0331',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #331',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0330'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_331'
  },
  {
    id: 'talent_0332',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #332',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0331'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_332'
  },
  {
    id: 'talent_0333',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #333',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0332'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_333'
  },
  {
    id: 'talent_0334',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #334',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0333'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_334'
  },
  {
    id: 'talent_0335',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #335',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0334'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_335'
  },
  {
    id: 'talent_0336',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #336',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0335'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_336'
  },
  {
    id: 'talent_0337',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #337',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0336'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_337'
  },
  {
    id: 'talent_0338',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #338',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0337'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_338'
  },
  {
    id: 'talent_0339',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #339',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0338'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_339'
  },
  {
    id: 'talent_0340',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #340',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0339'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_340'
  },
  {
    id: 'talent_0341',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #341',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0340'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_341'
  },
  {
    id: 'talent_0342',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #342',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0341'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_342'
  },
  {
    id: 'talent_0343',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #343',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0342'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_343'
  },
  {
    id: 'talent_0344',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #344',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0343'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_344'
  },
  {
    id: 'talent_0345',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #345',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0344'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_345'
  },
  {
    id: 'talent_0346',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #346',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0345'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_346'
  },
  {
    id: 'talent_0347',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #347',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0346'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_347'
  },
  {
    id: 'talent_0348',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #348',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0347'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_348'
  },
  {
    id: 'talent_0349',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #349',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0348'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_349'
  },
  {
    id: 'talent_0350',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #350',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0349'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_350'
  },
  {
    id: 'talent_0351',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #351',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0350'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_351'
  },
  {
    id: 'talent_0352',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #352',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0351'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_352'
  },
  {
    id: 'talent_0353',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #353',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0352'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_353'
  },
  {
    id: 'talent_0354',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #354',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0353'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_354'
  },
  {
    id: 'talent_0355',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #355',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0354'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_355'
  },
  {
    id: 'talent_0356',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #356',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0355'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_356'
  },
  {
    id: 'talent_0357',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #357',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0356'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_357'
  },
  {
    id: 'talent_0358',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #358',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0357'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_358'
  },
  {
    id: 'talent_0359',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #359',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0358'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_359'
  },
  {
    id: 'talent_0360',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #360',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0359'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_360'
  },
  {
    id: 'talent_0361',
    tree: 'GlacialArchon',
    tier: 2,
    name: 'GlacialArchon Mastery Perk #361',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0360'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_361'
  },
  {
    id: 'talent_0362',
    tree: 'Stormcaller',
    tier: 3,
    name: 'Stormcaller Mastery Perk #362',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0361'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_362'
  },
  {
    id: 'talent_0363',
    tree: 'Voidweaver',
    tier: 4,
    name: 'Voidweaver Mastery Perk #363',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0362'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_363'
  },
  {
    id: 'talent_0364',
    tree: 'PaladinAegis',
    tier: 5,
    name: 'PaladinAegis Mastery Perk #364',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0363'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_364'
  },
  {
    id: 'talent_0365',
    tree: 'Shadowblade',
    tier: 6,
    name: 'Shadowblade Mastery Perk #365',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0364'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_365'
  },
  {
    id: 'talent_0366',
    tree: 'Berserker',
    tier: 7,
    name: 'Berserker Mastery Perk #366',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0365'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_366'
  },
  {
    id: 'talent_0367',
    tree: 'Warlock',
    tier: 8,
    name: 'Warlock Mastery Perk #367',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0366'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_367'
  },
  {
    id: 'talent_0368',
    tree: 'Pyromancer',
    tier: 9,
    name: 'Pyromancer Mastery Perk #368',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0367'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_368'
  },
  {
    id: 'talent_0369',
    tree: 'GlacialArchon',
    tier: 10,
    name: 'GlacialArchon Mastery Perk #369',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0368'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_369'
  },
  {
    id: 'talent_0370',
    tree: 'Stormcaller',
    tier: 1,
    name: 'Stormcaller Mastery Perk #370',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0369'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_370'
  },
  {
    id: 'talent_0371',
    tree: 'Voidweaver',
    tier: 2,
    name: 'Voidweaver Mastery Perk #371',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0370'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_371'
  },
  {
    id: 'talent_0372',
    tree: 'PaladinAegis',
    tier: 3,
    name: 'PaladinAegis Mastery Perk #372',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0371'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_372'
  },
  {
    id: 'talent_0373',
    tree: 'Shadowblade',
    tier: 4,
    name: 'Shadowblade Mastery Perk #373',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0372'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_373'
  },
  {
    id: 'talent_0374',
    tree: 'Berserker',
    tier: 5,
    name: 'Berserker Mastery Perk #374',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0373'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_374'
  },
  {
    id: 'talent_0375',
    tree: 'Warlock',
    tier: 6,
    name: 'Warlock Mastery Perk #375',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0374'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_375'
  },
  {
    id: 'talent_0376',
    tree: 'Pyromancer',
    tier: 7,
    name: 'Pyromancer Mastery Perk #376',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0375'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_376'
  },
  {
    id: 'talent_0377',
    tree: 'GlacialArchon',
    tier: 8,
    name: 'GlacialArchon Mastery Perk #377',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0376'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_377'
  },
  {
    id: 'talent_0378',
    tree: 'Stormcaller',
    tier: 9,
    name: 'Stormcaller Mastery Perk #378',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0377'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_378'
  },
  {
    id: 'talent_0379',
    tree: 'Voidweaver',
    tier: 10,
    name: 'Voidweaver Mastery Perk #379',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0378'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_379'
  },
  {
    id: 'talent_0380',
    tree: 'PaladinAegis',
    tier: 1,
    name: 'PaladinAegis Mastery Perk #380',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0379'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_380'
  },
  {
    id: 'talent_0381',
    tree: 'Shadowblade',
    tier: 2,
    name: 'Shadowblade Mastery Perk #381',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0380'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_381'
  },
  {
    id: 'talent_0382',
    tree: 'Berserker',
    tier: 3,
    name: 'Berserker Mastery Perk #382',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0381'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_382'
  },
  {
    id: 'talent_0383',
    tree: 'Warlock',
    tier: 4,
    name: 'Warlock Mastery Perk #383',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0382'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_383'
  },
  {
    id: 'talent_0384',
    tree: 'Pyromancer',
    tier: 5,
    name: 'Pyromancer Mastery Perk #384',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0383'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_384'
  },
  {
    id: 'talent_0385',
    tree: 'GlacialArchon',
    tier: 6,
    name: 'GlacialArchon Mastery Perk #385',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0384'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_385'
  },
  {
    id: 'talent_0386',
    tree: 'Stormcaller',
    tier: 7,
    name: 'Stormcaller Mastery Perk #386',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0385'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_386'
  },
  {
    id: 'talent_0387',
    tree: 'Voidweaver',
    tier: 8,
    name: 'Voidweaver Mastery Perk #387',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0386'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_387'
  },
  {
    id: 'talent_0388',
    tree: 'PaladinAegis',
    tier: 9,
    name: 'PaladinAegis Mastery Perk #388',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0387'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_388'
  },
  {
    id: 'talent_0389',
    tree: 'Shadowblade',
    tier: 10,
    name: 'Shadowblade Mastery Perk #389',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0388'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_389'
  },
  {
    id: 'talent_0390',
    tree: 'Berserker',
    tier: 1,
    name: 'Berserker Mastery Perk #390',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0389'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_390'
  },
  {
    id: 'talent_0391',
    tree: 'Warlock',
    tier: 2,
    name: 'Warlock Mastery Perk #391',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 2.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0390'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 10, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.06,
    procEffect: 'proc_elemental_overload_391'
  },
  {
    id: 'talent_0392',
    tree: 'Pyromancer',
    tier: 3,
    name: 'Pyromancer Mastery Perk #392',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 3.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0391'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 15, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.07,
    procEffect: 'proc_elemental_overload_392'
  },
  {
    id: 'talent_0393',
    tree: 'GlacialArchon',
    tier: 4,
    name: 'GlacialArchon Mastery Perk #393',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 4.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0392'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 20, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.08,
    procEffect: 'proc_elemental_overload_393'
  },
  {
    id: 'talent_0394',
    tree: 'Stormcaller',
    tier: 5,
    name: 'Stormcaller Mastery Perk #394',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 5.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0393'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 25, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.09,
    procEffect: 'proc_elemental_overload_394'
  },
  {
    id: 'talent_0395',
    tree: 'Voidweaver',
    tier: 6,
    name: 'Voidweaver Mastery Perk #395',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 6.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0394'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 30, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.10,
    procEffect: 'proc_elemental_overload_395'
  },
  {
    id: 'talent_0396',
    tree: 'PaladinAegis',
    tier: 7,
    name: 'PaladinAegis Mastery Perk #396',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 7.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0395'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 35, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.11,
    procEffect: 'proc_elemental_overload_396'
  },
  {
    id: 'talent_0397',
    tree: 'Shadowblade',
    tier: 8,
    name: 'Shadowblade Mastery Perk #397',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 8.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0396'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 40, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.12,
    procEffect: 'proc_elemental_overload_397'
  },
  {
    id: 'talent_0398',
    tree: 'Berserker',
    tier: 9,
    name: 'Berserker Mastery Perk #398',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 9.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0397'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 45, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.13,
    procEffect: 'proc_elemental_overload_398'
  },
  {
    id: 'talent_0399',
    tree: 'Warlock',
    tier: 10,
    name: 'Warlock Mastery Perk #399',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 10.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0398'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 50, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.14,
    procEffect: 'proc_elemental_overload_399'
  },
  {
    id: 'talent_0400',
    tree: 'Pyromancer',
    tier: 1,
    name: 'Pyromancer Mastery Perk #400',
    description: 'Increases elemental spell effectiveness and grants passive resource regeneration for tier 1.',
    maxRank: 5,
    currentRank: 0,
    prerequisites: ['talent_0399'],
    statModifiers: [
      { stat: 'spellPower', valuePerRank: 5, op: 0 },
      { stat: 'critChance', valuePerRank: 0.015, op: 0 },
      { stat: 'manaCost', valuePerRank: -0.02, op: 1 }
    ],
    procChance: 0.05,
    procEffect: 'proc_elemental_overload_400'
  },
];

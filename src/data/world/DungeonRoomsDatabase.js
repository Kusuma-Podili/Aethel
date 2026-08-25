/**
 * @file DungeonRoomsDatabase.js
 * @description Handcrafted room layout templates, puzzle chambers, and boss arena matrices.
 */
export const DungeonRoomsDatabase = [
  {
    id: 'room_prefab_0001',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #1',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 10 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0002',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #2',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 20 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0003',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #3',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 30 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0004',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #4',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 40 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0005',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #5',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 50 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0006',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #6',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 60 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0007',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #7',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 70 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0008',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #8',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 80 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0009',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #9',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 90 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0010',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #10',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 100 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0011',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #11',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 110 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0012',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #12',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 120 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0013',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #13',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 130 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0014',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #14',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 140 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0015',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #15',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 150 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0016',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #16',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 160 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0017',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #17',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 170 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0018',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #18',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 180 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0019',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #19',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 190 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0020',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #20',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 200 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0021',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #21',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 210 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0022',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #22',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 220 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0023',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #23',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 230 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0024',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #24',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 240 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0025',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #25',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 250 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0026',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #26',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 260 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0027',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #27',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 270 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0028',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #28',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 280 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0029',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #29',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 290 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0030',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #30',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 300 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0031',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #31',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 310 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0032',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #32',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 320 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0033',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #33',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 330 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0034',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #34',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 340 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0035',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #35',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 350 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0036',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #36',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 360 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0037',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #37',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 370 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0038',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #38',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 380 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0039',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #39',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 390 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0040',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #40',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 400 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0041',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #41',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 410 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0042',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #42',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 420 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0043',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #43',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 430 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0044',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #44',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 440 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0045',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #45',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 450 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0046',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #46',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 460 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0047',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #47',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 470 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0048',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #48',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 480 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0049',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #49',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 490 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0050',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #50',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 500 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0051',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #51',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 510 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0052',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #52',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 520 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0053',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #53',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 530 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0054',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #54',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 540 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0055',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #55',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 550 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0056',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #56',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 560 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0057',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #57',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 570 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0058',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #58',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 580 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0059',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #59',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 590 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0060',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #60',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 600 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0061',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #61',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 610 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0062',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #62',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 620 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0063',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #63',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 630 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0064',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #64',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 640 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0065',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #65',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 650 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0066',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #66',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 660 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0067',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #67',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 670 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0068',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #68',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 680 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0069',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #69',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 690 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0070',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #70',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 700 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0071',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #71',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 710 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0072',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #72',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 720 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0073',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #73',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 730 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0074',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #74',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 740 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0075',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #75',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 750 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0076',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #76',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 760 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0077',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #77',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 770 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0078',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #78',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 780 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0079',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #79',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 790 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0080',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #80',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 800 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0081',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #81',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 810 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0082',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #82',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 820 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0083',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #83',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 830 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0084',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #84',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 840 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0085',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #85',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 850 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0086',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #86',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 860 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0087',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #87',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 870 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0088',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #88',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 880 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0089',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #89',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 890 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0090',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #90',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 900 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0091',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #91',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 910 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0092',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #92',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 920 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0093',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #93',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 930 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0094',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #94',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 940 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0095',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #95',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 950 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0096',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #96',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 960 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0097',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #97',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 970 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0098',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #98',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 980 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0099',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #99',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 990 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0100',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #100',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1000 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0101',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #101',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1010 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0102',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #102',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1020 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0103',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #103',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1030 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0104',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #104',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1040 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0105',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #105',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1050 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0106',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #106',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1060 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0107',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #107',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1070 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0108',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #108',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1080 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0109',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #109',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1090 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0110',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #110',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1100 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0111',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #111',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1110 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0112',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #112',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1120 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0113',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #113',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1130 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0114',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #114',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1140 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0115',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #115',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1150 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0116',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #116',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1160 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0117',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #117',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1170 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0118',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #118',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1180 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0119',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #119',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1190 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0120',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #120',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1200 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0121',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #121',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1210 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0122',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #122',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1220 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0123',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #123',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1230 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0124',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #124',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1240 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0125',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #125',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1250 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0126',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #126',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1260 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0127',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #127',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1270 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0128',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #128',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1280 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0129',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #129',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1290 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0130',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #130',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1300 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0131',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #131',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1310 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0132',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #132',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1320 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0133',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #133',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1330 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0134',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #134',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1340 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0135',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #135',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1350 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0136',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #136',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1360 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0137',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #137',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1370 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0138',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #138',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1380 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0139',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #139',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1390 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0140',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #140',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1400 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0141',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #141',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1410 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0142',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #142',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1420 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0143',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #143',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1430 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0144',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #144',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1440 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0145',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #145',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1450 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0146',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #146',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1460 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0147',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #147',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1470 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0148',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #148',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1480 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0149',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #149',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1490 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0150',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #150',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1500 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0151',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #151',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1510 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0152',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #152',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1520 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0153',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #153',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1530 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0154',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #154',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1540 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0155',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #155',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1550 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0156',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #156',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1560 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0157',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #157',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1570 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0158',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #158',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1580 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0159',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #159',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1590 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0160',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #160',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1600 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0161',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #161',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1610 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0162',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #162',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1620 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0163',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #163',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1630 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0164',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #164',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1640 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0165',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #165',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1650 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0166',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #166',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1660 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0167',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #167',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1670 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0168',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #168',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1680 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0169',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #169',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1690 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0170',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #170',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1700 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0171',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #171',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1710 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0172',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #172',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1720 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0173',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #173',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1730 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0174',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #174',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1740 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0175',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #175',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1750 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0176',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #176',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1760 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0177',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #177',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1770 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0178',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #178',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1780 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0179',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #179',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1790 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0180',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #180',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1800 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0181',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #181',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1810 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0182',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #182',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1820 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0183',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #183',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1830 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0184',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #184',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1840 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0185',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #185',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1850 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0186',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #186',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1860 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0187',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #187',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1870 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0188',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #188',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1880 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0189',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #189',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1890 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0190',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #190',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1900 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0191',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #191',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1910 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0192',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #192',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1920 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0193',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #193',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1930 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0194',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #194',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1940 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0195',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #195',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1950 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0196',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #196',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1960 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0197',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #197',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1970 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0198',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #198',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1980 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0199',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #199',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 1990 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0200',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #200',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2000 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0201',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #201',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2010 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0202',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #202',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2020 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0203',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #203',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2030 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0204',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #204',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2040 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0205',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #205',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2050 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0206',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #206',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2060 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0207',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #207',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2070 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0208',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #208',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2080 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0209',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #209',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2090 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0210',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #210',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2100 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0211',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #211',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2110 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0212',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #212',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2120 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0213',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #213',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2130 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0214',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #214',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2140 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0215',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #215',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2150 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0216',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #216',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2160 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0217',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #217',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2170 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0218',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #218',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2180 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0219',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #219',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2190 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0220',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #220',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2200 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0221',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #221',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2210 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0222',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #222',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2220 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0223',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #223',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2230 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0224',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #224',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2240 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0225',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #225',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2250 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0226',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #226',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2260 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0227',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #227',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2270 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0228',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #228',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2280 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0229',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #229',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2290 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0230',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #230',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2300 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0231',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #231',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2310 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0232',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #232',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2320 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0233',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #233',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2330 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0234',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #234',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2340 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0235',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #235',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2350 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0236',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #236',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2360 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0237',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #237',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2370 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0238',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #238',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2380 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0239',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #239',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2390 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0240',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #240',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2400 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0241',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #241',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2410 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0242',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #242',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2420 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0243',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #243',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2430 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0244',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #244',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2440 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0245',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #245',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2450 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0246',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #246',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2460 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0247',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #247',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2470 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0248',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #248',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2480 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0249',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #249',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2490 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0250',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #250',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2500 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0251',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #251',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2510 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0252',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #252',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2520 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0253',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #253',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2530 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0254',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #254',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2540 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0255',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #255',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2550 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0256',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #256',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2560 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0257',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #257',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2570 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0258',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #258',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2580 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0259',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #259',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2590 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0260',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #260',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2600 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0261',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #261',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2610 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0262',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #262',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2620 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0263',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #263',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2630 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0264',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #264',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2640 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0265',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #265',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2650 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0266',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #266',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2660 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0267',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #267',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2670 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0268',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #268',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2680 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0269',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #269',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2690 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0270',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #270',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2700 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0271',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #271',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2710 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0272',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #272',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2720 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0273',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #273',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2730 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0274',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #274',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2740 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0275',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #275',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2750 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0276',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #276',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2760 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0277',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #277',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2770 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0278',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #278',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2780 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0279',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #279',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2790 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0280',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #280',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2800 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0281',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #281',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2810 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0282',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #282',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2820 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0283',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #283',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2830 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0284',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #284',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2840 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0285',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #285',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2850 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0286',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #286',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2860 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0287',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #287',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2870 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0288',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #288',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2880 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0289',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #289',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2890 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0290',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #290',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2900 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0291',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #291',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2910 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0292',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #292',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2920 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0293',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #293',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2930 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0294',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #294',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2940 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0295',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #295',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2950 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0296',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #296',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2960 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0297',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #297',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2970 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0298',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #298',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2980 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0299',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #299',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 2990 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0300',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #300',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3000 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0301',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #301',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3010 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0302',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #302',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3020 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0303',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #303',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3030 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0304',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #304',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3040 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0305',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #305',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3050 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0306',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #306',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3060 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0307',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #307',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3070 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0308',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #308',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3080 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0309',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #309',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3090 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0310',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #310',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3100 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0311',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #311',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3110 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0312',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #312',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3120 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0313',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #313',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3130 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0314',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #314',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3140 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0315',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #315',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3150 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0316',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #316',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3160 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0317',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #317',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3170 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0318',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #318',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3180 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0319',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #319',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3190 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0320',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #320',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3200 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0321',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #321',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3210 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0322',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #322',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3220 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0323',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #323',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3230 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0324',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #324',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3240 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0325',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #325',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3250 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0326',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #326',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3260 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0327',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #327',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3270 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0328',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #328',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3280 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0329',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #329',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3290 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0330',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #330',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3300 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0331',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #331',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3310 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0332',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #332',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3320 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0333',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #333',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3330 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0334',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #334',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3340 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0335',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #335',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3350 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0336',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #336',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3360 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0337',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #337',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3370 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0338',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #338',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3380 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0339',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #339',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3390 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0340',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #340',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3400 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0341',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #341',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3410 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0342',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #342',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3420 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0343',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #343',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3430 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0344',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #344',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3440 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0345',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #345',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3450 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0346',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #346',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3460 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0347',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #347',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3470 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0348',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #348',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3480 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0349',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #349',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3490 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0350',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #350',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3500 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0351',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #351',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3510 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0352',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #352',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3520 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0353',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #353',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3530 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0354',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #354',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3540 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0355',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #355',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3550 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0356',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #356',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3560 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0357',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #357',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3570 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0358',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #358',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3580 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0359',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #359',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3590 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0360',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #360',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3600 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0361',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #361',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3610 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0362',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #362',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3620 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0363',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #363',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3630 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0364',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #364',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3640 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0365',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #365',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3650 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0366',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #366',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3660 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0367',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #367',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3670 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0368',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #368',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3680 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0369',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #369',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3690 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0370',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #370',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3700 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0371',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #371',
    width: 22,
    height: 22,
    difficultyRating: 2,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3710 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0372',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #372',
    width: 12,
    height: 12,
    difficultyRating: 3,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3720 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0373',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #373',
    width: 14,
    height: 14,
    difficultyRating: 4,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3730 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0374',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #374',
    width: 16,
    height: 16,
    difficultyRating: 5,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3740 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0375',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #375',
    width: 18,
    height: 18,
    difficultyRating: 6,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3750 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0376',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #376',
    width: 20,
    height: 20,
    difficultyRating: 7,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3760 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0377',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #377',
    width: 22,
    height: 22,
    difficultyRating: 8,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3770 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0378',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #378',
    width: 12,
    height: 12,
    difficultyRating: 9,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3780 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0379',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #379',
    width: 14,
    height: 14,
    difficultyRating: 10,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3790 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0380',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #380',
    width: 16,
    height: 16,
    difficultyRating: 1,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3800 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0381',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #381',
    width: 18,
    height: 18,
    difficultyRating: 2,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3810 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0382',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #382',
    width: 20,
    height: 20,
    difficultyRating: 3,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3820 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0383',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #383',
    width: 22,
    height: 22,
    difficultyRating: 4,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3830 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0384',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #384',
    width: 12,
    height: 12,
    difficultyRating: 5,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3840 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0385',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #385',
    width: 14,
    height: 14,
    difficultyRating: 6,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3850 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0386',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #386',
    width: 16,
    height: 16,
    difficultyRating: 7,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3860 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0387',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #387',
    width: 18,
    height: 18,
    difficultyRating: 8,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3870 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0388',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #388',
    width: 20,
    height: 20,
    difficultyRating: 9,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3880 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0389',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #389',
    width: 22,
    height: 22,
    difficultyRating: 10,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3890 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0390',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #390',
    width: 12,
    height: 12,
    difficultyRating: 1,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3900 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0391',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #391',
    width: 14,
    height: 14,
    difficultyRating: 2,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3910 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0392',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #392',
    width: 16,
    height: 16,
    difficultyRating: 3,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3920 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0393',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #393',
    width: 18,
    height: 18,
    difficultyRating: 4,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3930 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0394',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #394',
    width: 20,
    height: 20,
    difficultyRating: 5,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3940 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0395',
    biome: 'ArcaneSanctum',
    name: 'ArcaneSanctum Chamber Template #395',
    width: 22,
    height: 22,
    difficultyRating: 6,
    spawnPoints: [
      { x: 11, y: 11, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3950 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0396',
    biome: 'Crypt',
    name: 'Crypt Chamber Template #396',
    width: 12,
    height: 12,
    difficultyRating: 7,
    spawnPoints: [
      { x: 6, y: 6, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3960 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0397',
    biome: 'Catacomb',
    name: 'Catacomb Chamber Template #397',
    width: 14,
    height: 14,
    difficultyRating: 8,
    spawnPoints: [
      { x: 7, y: 7, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3970 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0398',
    biome: 'MagmaChamber',
    name: 'MagmaChamber Chamber Template #398',
    width: 16,
    height: 16,
    difficultyRating: 9,
    spawnPoints: [
      { x: 8, y: 8, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3980 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0399',
    biome: 'SunkenTemple',
    name: 'SunkenTemple Chamber Template #399',
    width: 18,
    height: 18,
    difficultyRating: 10,
    spawnPoints: [
      { x: 9, y: 9, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 3990 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
  {
    id: 'room_prefab_0400',
    biome: 'FrozenVault',
    name: 'FrozenVault Chamber Template #400',
    width: 20,
    height: 20,
    difficultyRating: 1,
    spawnPoints: [
      { x: 10, y: 10, type: 'elite_monster' },
      { x: 2, y: 2, type: 'treasure_chest' }
    ],
    trapZones: [
      { x: 4, y: 4, trapType: 'fire_grate', damage: 4000 }
    ],
    doorways: ['N', 'S', 'E', 'W']
  },
];

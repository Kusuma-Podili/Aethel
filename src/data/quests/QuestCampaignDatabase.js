/**
 * @file QuestCampaignDatabase.js
 * @description Story campaign quest chains, narrative branching, and world lore triggers.
 */
import { ObjectiveType } from '../../gameplay/dialogue_quest/QuestStateTree.js';

export const QuestCampaignDatabase = [
  {
    id: 'quest_chain_0001',
    title: 'Chapter 1: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 2,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_1_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0002', requiredCount: 4 },
      { id: 'obj_1_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 1000,
    rewardGold: 310,
    rewardItemIds: ['wpn_0002', 'arm_0002']
  },
  {
    id: 'quest_chain_0002',
    title: 'Chapter 2: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 3,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_2_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0003', requiredCount: 5 },
      { id: 'obj_2_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 1250,
    rewardGold: 390,
    rewardItemIds: ['wpn_0003', 'arm_0003']
  },
  {
    id: 'quest_chain_0003',
    title: 'Chapter 3: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 4,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_3_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0004', requiredCount: 6 },
      { id: 'obj_3_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 1500,
    rewardGold: 470,
    rewardItemIds: ['wpn_0004', 'arm_0004']
  },
  {
    id: 'quest_chain_0004',
    title: 'Chapter 4: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 5,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_4_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0005', requiredCount: 7 },
      { id: 'obj_4_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 1750,
    rewardGold: 550,
    rewardItemIds: ['wpn_0005', 'arm_0005']
  },
  {
    id: 'quest_chain_0005',
    title: 'Chapter 5: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 6,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_5_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0006', requiredCount: 8 },
      { id: 'obj_5_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 2000,
    rewardGold: 630,
    rewardItemIds: ['wpn_0006', 'arm_0006']
  },
  {
    id: 'quest_chain_0006',
    title: 'Chapter 6: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 7,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_6_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0007', requiredCount: 9 },
      { id: 'obj_6_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 2250,
    rewardGold: 710,
    rewardItemIds: ['wpn_0007', 'arm_0007']
  },
  {
    id: 'quest_chain_0007',
    title: 'Chapter 7: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 8,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_7_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0008', requiredCount: 10 },
      { id: 'obj_7_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 2500,
    rewardGold: 790,
    rewardItemIds: ['wpn_0008', 'arm_0008']
  },
  {
    id: 'quest_chain_0008',
    title: 'Chapter 8: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 9,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_8_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0009', requiredCount: 3 },
      { id: 'obj_8_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 2750,
    rewardGold: 870,
    rewardItemIds: ['wpn_0009', 'arm_0009']
  },
  {
    id: 'quest_chain_0009',
    title: 'Chapter 9: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 10,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_9_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0010', requiredCount: 4 },
      { id: 'obj_9_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 3000,
    rewardGold: 950,
    rewardItemIds: ['wpn_0010', 'arm_0010']
  },
  {
    id: 'quest_chain_0010',
    title: 'Chapter 10: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 11,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_10_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0011', requiredCount: 5 },
      { id: 'obj_10_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 3250,
    rewardGold: 1030,
    rewardItemIds: ['wpn_0011', 'arm_0011']
  },
  {
    id: 'quest_chain_0011',
    title: 'Chapter 11: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 12,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_11_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0012', requiredCount: 6 },
      { id: 'obj_11_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 3500,
    rewardGold: 1110,
    rewardItemIds: ['wpn_0012', 'arm_0012']
  },
  {
    id: 'quest_chain_0012',
    title: 'Chapter 12: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 13,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_12_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0013', requiredCount: 7 },
      { id: 'obj_12_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 3750,
    rewardGold: 1190,
    rewardItemIds: ['wpn_0013', 'arm_0013']
  },
  {
    id: 'quest_chain_0013',
    title: 'Chapter 13: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 14,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_13_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0014', requiredCount: 8 },
      { id: 'obj_13_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 4000,
    rewardGold: 1270,
    rewardItemIds: ['wpn_0014', 'arm_0014']
  },
  {
    id: 'quest_chain_0014',
    title: 'Chapter 14: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 15,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_14_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0015', requiredCount: 9 },
      { id: 'obj_14_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 4250,
    rewardGold: 1350,
    rewardItemIds: ['wpn_0015', 'arm_0015']
  },
  {
    id: 'quest_chain_0015',
    title: 'Chapter 15: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 16,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_15_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0016', requiredCount: 10 },
      { id: 'obj_15_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 4500,
    rewardGold: 1430,
    rewardItemIds: ['wpn_0016', 'arm_0016']
  },
  {
    id: 'quest_chain_0016',
    title: 'Chapter 16: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 17,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_16_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0017', requiredCount: 3 },
      { id: 'obj_16_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 4750,
    rewardGold: 1510,
    rewardItemIds: ['wpn_0017', 'arm_0017']
  },
  {
    id: 'quest_chain_0017',
    title: 'Chapter 17: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 18,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_17_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0018', requiredCount: 4 },
      { id: 'obj_17_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 5000,
    rewardGold: 1590,
    rewardItemIds: ['wpn_0018', 'arm_0018']
  },
  {
    id: 'quest_chain_0018',
    title: 'Chapter 18: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 19,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_18_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0019', requiredCount: 5 },
      { id: 'obj_18_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 5250,
    rewardGold: 1670,
    rewardItemIds: ['wpn_0019', 'arm_0019']
  },
  {
    id: 'quest_chain_0019',
    title: 'Chapter 19: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 20,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_19_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0020', requiredCount: 6 },
      { id: 'obj_19_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 5500,
    rewardGold: 1750,
    rewardItemIds: ['wpn_0020', 'arm_0020']
  },
  {
    id: 'quest_chain_0020',
    title: 'Chapter 20: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 21,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_20_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0021', requiredCount: 7 },
      { id: 'obj_20_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 5750,
    rewardGold: 1830,
    rewardItemIds: ['wpn_0021', 'arm_0021']
  },
  {
    id: 'quest_chain_0021',
    title: 'Chapter 21: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 22,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_21_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0022', requiredCount: 8 },
      { id: 'obj_21_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 6000,
    rewardGold: 1910,
    rewardItemIds: ['wpn_0022', 'arm_0022']
  },
  {
    id: 'quest_chain_0022',
    title: 'Chapter 22: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 23,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_22_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0023', requiredCount: 9 },
      { id: 'obj_22_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 6250,
    rewardGold: 1990,
    rewardItemIds: ['wpn_0023', 'arm_0023']
  },
  {
    id: 'quest_chain_0023',
    title: 'Chapter 23: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 24,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_23_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0024', requiredCount: 10 },
      { id: 'obj_23_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 6500,
    rewardGold: 2070,
    rewardItemIds: ['wpn_0024', 'arm_0024']
  },
  {
    id: 'quest_chain_0024',
    title: 'Chapter 24: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 25,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_24_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0025', requiredCount: 3 },
      { id: 'obj_24_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 6750,
    rewardGold: 2150,
    rewardItemIds: ['wpn_0025', 'arm_0025']
  },
  {
    id: 'quest_chain_0025',
    title: 'Chapter 25: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 26,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_25_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0026', requiredCount: 4 },
      { id: 'obj_25_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 7000,
    rewardGold: 2230,
    rewardItemIds: ['wpn_0026', 'arm_0026']
  },
  {
    id: 'quest_chain_0026',
    title: 'Chapter 26: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 27,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_26_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0027', requiredCount: 5 },
      { id: 'obj_26_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 7250,
    rewardGold: 2310,
    rewardItemIds: ['wpn_0027', 'arm_0027']
  },
  {
    id: 'quest_chain_0027',
    title: 'Chapter 27: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 28,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_27_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0028', requiredCount: 6 },
      { id: 'obj_27_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 7500,
    rewardGold: 2390,
    rewardItemIds: ['wpn_0028', 'arm_0028']
  },
  {
    id: 'quest_chain_0028',
    title: 'Chapter 28: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 29,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_28_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0029', requiredCount: 7 },
      { id: 'obj_28_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 7750,
    rewardGold: 2470,
    rewardItemIds: ['wpn_0029', 'arm_0029']
  },
  {
    id: 'quest_chain_0029',
    title: 'Chapter 29: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 30,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_29_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0030', requiredCount: 8 },
      { id: 'obj_29_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 8000,
    rewardGold: 2550,
    rewardItemIds: ['wpn_0030', 'arm_0030']
  },
  {
    id: 'quest_chain_0030',
    title: 'Chapter 30: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 31,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_30_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0031', requiredCount: 9 },
      { id: 'obj_30_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 8250,
    rewardGold: 2630,
    rewardItemIds: ['wpn_0031', 'arm_0031']
  },
  {
    id: 'quest_chain_0031',
    title: 'Chapter 31: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 32,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_31_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0032', requiredCount: 10 },
      { id: 'obj_31_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 8500,
    rewardGold: 2710,
    rewardItemIds: ['wpn_0032', 'arm_0032']
  },
  {
    id: 'quest_chain_0032',
    title: 'Chapter 32: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 33,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_32_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0033', requiredCount: 3 },
      { id: 'obj_32_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 8750,
    rewardGold: 2790,
    rewardItemIds: ['wpn_0033', 'arm_0033']
  },
  {
    id: 'quest_chain_0033',
    title: 'Chapter 33: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 34,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_33_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0034', requiredCount: 4 },
      { id: 'obj_33_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 9000,
    rewardGold: 2870,
    rewardItemIds: ['wpn_0034', 'arm_0034']
  },
  {
    id: 'quest_chain_0034',
    title: 'Chapter 34: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 35,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_34_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0035', requiredCount: 5 },
      { id: 'obj_34_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 9250,
    rewardGold: 2950,
    rewardItemIds: ['wpn_0035', 'arm_0035']
  },
  {
    id: 'quest_chain_0035',
    title: 'Chapter 35: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 36,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_35_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0036', requiredCount: 6 },
      { id: 'obj_35_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 9500,
    rewardGold: 3030,
    rewardItemIds: ['wpn_0036', 'arm_0036']
  },
  {
    id: 'quest_chain_0036',
    title: 'Chapter 36: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 37,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_36_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0037', requiredCount: 7 },
      { id: 'obj_36_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 9750,
    rewardGold: 3110,
    rewardItemIds: ['wpn_0037', 'arm_0037']
  },
  {
    id: 'quest_chain_0037',
    title: 'Chapter 37: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 38,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_37_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0038', requiredCount: 8 },
      { id: 'obj_37_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 10000,
    rewardGold: 3190,
    rewardItemIds: ['wpn_0038', 'arm_0038']
  },
  {
    id: 'quest_chain_0038',
    title: 'Chapter 38: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 39,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_38_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0039', requiredCount: 9 },
      { id: 'obj_38_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 10250,
    rewardGold: 3270,
    rewardItemIds: ['wpn_0039', 'arm_0039']
  },
  {
    id: 'quest_chain_0039',
    title: 'Chapter 39: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 40,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_39_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0040', requiredCount: 10 },
      { id: 'obj_39_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 10500,
    rewardGold: 3350,
    rewardItemIds: ['wpn_0040', 'arm_0040']
  },
  {
    id: 'quest_chain_0040',
    title: 'Chapter 40: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 41,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_40_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0041', requiredCount: 3 },
      { id: 'obj_40_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 10750,
    rewardGold: 3430,
    rewardItemIds: ['wpn_0041', 'arm_0041']
  },
  {
    id: 'quest_chain_0041',
    title: 'Chapter 41: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 42,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_41_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0042', requiredCount: 4 },
      { id: 'obj_41_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 11000,
    rewardGold: 3510,
    rewardItemIds: ['wpn_0042', 'arm_0042']
  },
  {
    id: 'quest_chain_0042',
    title: 'Chapter 42: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 43,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_42_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0043', requiredCount: 5 },
      { id: 'obj_42_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 11250,
    rewardGold: 3590,
    rewardItemIds: ['wpn_0043', 'arm_0043']
  },
  {
    id: 'quest_chain_0043',
    title: 'Chapter 43: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 44,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_43_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0044', requiredCount: 6 },
      { id: 'obj_43_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 11500,
    rewardGold: 3670,
    rewardItemIds: ['wpn_0044', 'arm_0044']
  },
  {
    id: 'quest_chain_0044',
    title: 'Chapter 44: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 45,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_44_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0045', requiredCount: 7 },
      { id: 'obj_44_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 11750,
    rewardGold: 3750,
    rewardItemIds: ['wpn_0045', 'arm_0045']
  },
  {
    id: 'quest_chain_0045',
    title: 'Chapter 45: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 46,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_45_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0046', requiredCount: 8 },
      { id: 'obj_45_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 12000,
    rewardGold: 3830,
    rewardItemIds: ['wpn_0046', 'arm_0046']
  },
  {
    id: 'quest_chain_0046',
    title: 'Chapter 46: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 47,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_46_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0047', requiredCount: 9 },
      { id: 'obj_46_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 12250,
    rewardGold: 3910,
    rewardItemIds: ['wpn_0047', 'arm_0047']
  },
  {
    id: 'quest_chain_0047',
    title: 'Chapter 47: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 48,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_47_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0048', requiredCount: 10 },
      { id: 'obj_47_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 12500,
    rewardGold: 3990,
    rewardItemIds: ['wpn_0048', 'arm_0048']
  },
  {
    id: 'quest_chain_0048',
    title: 'Chapter 48: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 49,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_48_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0049', requiredCount: 3 },
      { id: 'obj_48_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 12750,
    rewardGold: 4070,
    rewardItemIds: ['wpn_0049', 'arm_0049']
  },
  {
    id: 'quest_chain_0049',
    title: 'Chapter 49: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 50,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_49_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0050', requiredCount: 4 },
      { id: 'obj_49_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 13000,
    rewardGold: 4150,
    rewardItemIds: ['wpn_0050', 'arm_0050']
  },
  {
    id: 'quest_chain_0050',
    title: 'Chapter 50: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 51,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_50_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0001', requiredCount: 5 },
      { id: 'obj_50_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 13250,
    rewardGold: 4230,
    rewardItemIds: ['wpn_0001', 'arm_0001']
  },
  {
    id: 'quest_chain_0051',
    title: 'Chapter 51: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 52,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_51_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0002', requiredCount: 6 },
      { id: 'obj_51_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 13500,
    rewardGold: 4310,
    rewardItemIds: ['wpn_0002', 'arm_0002']
  },
  {
    id: 'quest_chain_0052',
    title: 'Chapter 52: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 53,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_52_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0003', requiredCount: 7 },
      { id: 'obj_52_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 13750,
    rewardGold: 4390,
    rewardItemIds: ['wpn_0003', 'arm_0003']
  },
  {
    id: 'quest_chain_0053',
    title: 'Chapter 53: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 54,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_53_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0004', requiredCount: 8 },
      { id: 'obj_53_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 14000,
    rewardGold: 4470,
    rewardItemIds: ['wpn_0004', 'arm_0004']
  },
  {
    id: 'quest_chain_0054',
    title: 'Chapter 54: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 55,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_54_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0005', requiredCount: 9 },
      { id: 'obj_54_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 14250,
    rewardGold: 4550,
    rewardItemIds: ['wpn_0005', 'arm_0005']
  },
  {
    id: 'quest_chain_0055',
    title: 'Chapter 55: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 56,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_55_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0006', requiredCount: 10 },
      { id: 'obj_55_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 14500,
    rewardGold: 4630,
    rewardItemIds: ['wpn_0006', 'arm_0006']
  },
  {
    id: 'quest_chain_0056',
    title: 'Chapter 56: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 57,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_56_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0007', requiredCount: 3 },
      { id: 'obj_56_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 14750,
    rewardGold: 4710,
    rewardItemIds: ['wpn_0007', 'arm_0007']
  },
  {
    id: 'quest_chain_0057',
    title: 'Chapter 57: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 58,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_57_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0008', requiredCount: 4 },
      { id: 'obj_57_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 15000,
    rewardGold: 4790,
    rewardItemIds: ['wpn_0008', 'arm_0008']
  },
  {
    id: 'quest_chain_0058',
    title: 'Chapter 58: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 59,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_58_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0009', requiredCount: 5 },
      { id: 'obj_58_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 15250,
    rewardGold: 4870,
    rewardItemIds: ['wpn_0009', 'arm_0009']
  },
  {
    id: 'quest_chain_0059',
    title: 'Chapter 59: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 60,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_59_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0010', requiredCount: 6 },
      { id: 'obj_59_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 15500,
    rewardGold: 4950,
    rewardItemIds: ['wpn_0010', 'arm_0010']
  },
  {
    id: 'quest_chain_0060',
    title: 'Chapter 60: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 1,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_60_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0011', requiredCount: 7 },
      { id: 'obj_60_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 750,
    rewardGold: 230,
    rewardItemIds: ['wpn_0011', 'arm_0011']
  },
  {
    id: 'quest_chain_0061',
    title: 'Chapter 61: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 2,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_61_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0012', requiredCount: 8 },
      { id: 'obj_61_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 1000,
    rewardGold: 310,
    rewardItemIds: ['wpn_0012', 'arm_0012']
  },
  {
    id: 'quest_chain_0062',
    title: 'Chapter 62: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 3,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_62_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0013', requiredCount: 9 },
      { id: 'obj_62_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 1250,
    rewardGold: 390,
    rewardItemIds: ['wpn_0013', 'arm_0013']
  },
  {
    id: 'quest_chain_0063',
    title: 'Chapter 63: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 4,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_63_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0014', requiredCount: 10 },
      { id: 'obj_63_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 1500,
    rewardGold: 470,
    rewardItemIds: ['wpn_0014', 'arm_0014']
  },
  {
    id: 'quest_chain_0064',
    title: 'Chapter 64: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 5,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_64_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0015', requiredCount: 3 },
      { id: 'obj_64_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 1750,
    rewardGold: 550,
    rewardItemIds: ['wpn_0015', 'arm_0015']
  },
  {
    id: 'quest_chain_0065',
    title: 'Chapter 65: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 6,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_65_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0016', requiredCount: 4 },
      { id: 'obj_65_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 2000,
    rewardGold: 630,
    rewardItemIds: ['wpn_0016', 'arm_0016']
  },
  {
    id: 'quest_chain_0066',
    title: 'Chapter 66: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 7,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_66_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0017', requiredCount: 5 },
      { id: 'obj_66_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 2250,
    rewardGold: 710,
    rewardItemIds: ['wpn_0017', 'arm_0017']
  },
  {
    id: 'quest_chain_0067',
    title: 'Chapter 67: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 8,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_67_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0018', requiredCount: 6 },
      { id: 'obj_67_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 2500,
    rewardGold: 790,
    rewardItemIds: ['wpn_0018', 'arm_0018']
  },
  {
    id: 'quest_chain_0068',
    title: 'Chapter 68: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 9,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_68_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0019', requiredCount: 7 },
      { id: 'obj_68_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 2750,
    rewardGold: 870,
    rewardItemIds: ['wpn_0019', 'arm_0019']
  },
  {
    id: 'quest_chain_0069',
    title: 'Chapter 69: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 10,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_69_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0020', requiredCount: 8 },
      { id: 'obj_69_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 3000,
    rewardGold: 950,
    rewardItemIds: ['wpn_0020', 'arm_0020']
  },
  {
    id: 'quest_chain_0070',
    title: 'Chapter 70: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 11,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_70_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0021', requiredCount: 9 },
      { id: 'obj_70_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 3250,
    rewardGold: 1030,
    rewardItemIds: ['wpn_0021', 'arm_0021']
  },
  {
    id: 'quest_chain_0071',
    title: 'Chapter 71: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 12,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_71_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0022', requiredCount: 10 },
      { id: 'obj_71_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 3500,
    rewardGold: 1110,
    rewardItemIds: ['wpn_0022', 'arm_0022']
  },
  {
    id: 'quest_chain_0072',
    title: 'Chapter 72: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 13,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_72_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0023', requiredCount: 3 },
      { id: 'obj_72_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 3750,
    rewardGold: 1190,
    rewardItemIds: ['wpn_0023', 'arm_0023']
  },
  {
    id: 'quest_chain_0073',
    title: 'Chapter 73: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 14,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_73_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0024', requiredCount: 4 },
      { id: 'obj_73_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 4000,
    rewardGold: 1270,
    rewardItemIds: ['wpn_0024', 'arm_0024']
  },
  {
    id: 'quest_chain_0074',
    title: 'Chapter 74: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 15,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_74_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0025', requiredCount: 5 },
      { id: 'obj_74_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 4250,
    rewardGold: 1350,
    rewardItemIds: ['wpn_0025', 'arm_0025']
  },
  {
    id: 'quest_chain_0075',
    title: 'Chapter 75: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 16,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_75_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0026', requiredCount: 6 },
      { id: 'obj_75_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 4500,
    rewardGold: 1430,
    rewardItemIds: ['wpn_0026', 'arm_0026']
  },
  {
    id: 'quest_chain_0076',
    title: 'Chapter 76: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 17,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_76_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0027', requiredCount: 7 },
      { id: 'obj_76_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 4750,
    rewardGold: 1510,
    rewardItemIds: ['wpn_0027', 'arm_0027']
  },
  {
    id: 'quest_chain_0077',
    title: 'Chapter 77: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 18,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_77_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0028', requiredCount: 8 },
      { id: 'obj_77_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 5000,
    rewardGold: 1590,
    rewardItemIds: ['wpn_0028', 'arm_0028']
  },
  {
    id: 'quest_chain_0078',
    title: 'Chapter 78: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 19,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_78_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0029', requiredCount: 9 },
      { id: 'obj_78_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 5250,
    rewardGold: 1670,
    rewardItemIds: ['wpn_0029', 'arm_0029']
  },
  {
    id: 'quest_chain_0079',
    title: 'Chapter 79: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 20,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_79_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0030', requiredCount: 10 },
      { id: 'obj_79_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 5500,
    rewardGold: 1750,
    rewardItemIds: ['wpn_0030', 'arm_0030']
  },
  {
    id: 'quest_chain_0080',
    title: 'Chapter 80: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 21,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_80_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0031', requiredCount: 3 },
      { id: 'obj_80_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 5750,
    rewardGold: 1830,
    rewardItemIds: ['wpn_0031', 'arm_0031']
  },
  {
    id: 'quest_chain_0081',
    title: 'Chapter 81: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 22,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_81_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0032', requiredCount: 4 },
      { id: 'obj_81_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 6000,
    rewardGold: 1910,
    rewardItemIds: ['wpn_0032', 'arm_0032']
  },
  {
    id: 'quest_chain_0082',
    title: 'Chapter 82: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 23,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_82_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0033', requiredCount: 5 },
      { id: 'obj_82_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 6250,
    rewardGold: 1990,
    rewardItemIds: ['wpn_0033', 'arm_0033']
  },
  {
    id: 'quest_chain_0083',
    title: 'Chapter 83: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 24,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_83_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0034', requiredCount: 6 },
      { id: 'obj_83_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 6500,
    rewardGold: 2070,
    rewardItemIds: ['wpn_0034', 'arm_0034']
  },
  {
    id: 'quest_chain_0084',
    title: 'Chapter 84: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 25,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_84_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0035', requiredCount: 7 },
      { id: 'obj_84_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 6750,
    rewardGold: 2150,
    rewardItemIds: ['wpn_0035', 'arm_0035']
  },
  {
    id: 'quest_chain_0085',
    title: 'Chapter 85: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 26,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_85_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0036', requiredCount: 8 },
      { id: 'obj_85_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 7000,
    rewardGold: 2230,
    rewardItemIds: ['wpn_0036', 'arm_0036']
  },
  {
    id: 'quest_chain_0086',
    title: 'Chapter 86: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 27,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_86_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0037', requiredCount: 9 },
      { id: 'obj_86_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 7250,
    rewardGold: 2310,
    rewardItemIds: ['wpn_0037', 'arm_0037']
  },
  {
    id: 'quest_chain_0087',
    title: 'Chapter 87: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 28,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_87_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0038', requiredCount: 10 },
      { id: 'obj_87_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 7500,
    rewardGold: 2390,
    rewardItemIds: ['wpn_0038', 'arm_0038']
  },
  {
    id: 'quest_chain_0088',
    title: 'Chapter 88: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 29,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_88_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0039', requiredCount: 3 },
      { id: 'obj_88_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 7750,
    rewardGold: 2470,
    rewardItemIds: ['wpn_0039', 'arm_0039']
  },
  {
    id: 'quest_chain_0089',
    title: 'Chapter 89: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 30,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_89_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0040', requiredCount: 4 },
      { id: 'obj_89_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 8000,
    rewardGold: 2550,
    rewardItemIds: ['wpn_0040', 'arm_0040']
  },
  {
    id: 'quest_chain_0090',
    title: 'Chapter 90: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 31,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_90_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0041', requiredCount: 5 },
      { id: 'obj_90_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 8250,
    rewardGold: 2630,
    rewardItemIds: ['wpn_0041', 'arm_0041']
  },
  {
    id: 'quest_chain_0091',
    title: 'Chapter 91: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 32,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_91_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0042', requiredCount: 6 },
      { id: 'obj_91_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 8500,
    rewardGold: 2710,
    rewardItemIds: ['wpn_0042', 'arm_0042']
  },
  {
    id: 'quest_chain_0092',
    title: 'Chapter 92: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 33,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_92_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0043', requiredCount: 7 },
      { id: 'obj_92_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 8750,
    rewardGold: 2790,
    rewardItemIds: ['wpn_0043', 'arm_0043']
  },
  {
    id: 'quest_chain_0093',
    title: 'Chapter 93: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 34,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_93_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0044', requiredCount: 8 },
      { id: 'obj_93_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 9000,
    rewardGold: 2870,
    rewardItemIds: ['wpn_0044', 'arm_0044']
  },
  {
    id: 'quest_chain_0094',
    title: 'Chapter 94: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 35,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_94_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0045', requiredCount: 9 },
      { id: 'obj_94_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 9250,
    rewardGold: 2950,
    rewardItemIds: ['wpn_0045', 'arm_0045']
  },
  {
    id: 'quest_chain_0095',
    title: 'Chapter 95: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 36,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_95_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0046', requiredCount: 10 },
      { id: 'obj_95_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 9500,
    rewardGold: 3030,
    rewardItemIds: ['wpn_0046', 'arm_0046']
  },
  {
    id: 'quest_chain_0096',
    title: 'Chapter 96: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 37,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_96_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0047', requiredCount: 3 },
      { id: 'obj_96_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 9750,
    rewardGold: 3110,
    rewardItemIds: ['wpn_0047', 'arm_0047']
  },
  {
    id: 'quest_chain_0097',
    title: 'Chapter 97: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 38,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_97_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0048', requiredCount: 4 },
      { id: 'obj_97_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 10000,
    rewardGold: 3190,
    rewardItemIds: ['wpn_0048', 'arm_0048']
  },
  {
    id: 'quest_chain_0098',
    title: 'Chapter 98: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 39,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_98_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0049', requiredCount: 5 },
      { id: 'obj_98_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 10250,
    rewardGold: 3270,
    rewardItemIds: ['wpn_0049', 'arm_0049']
  },
  {
    id: 'quest_chain_0099',
    title: 'Chapter 99: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 40,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_99_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0050', requiredCount: 6 },
      { id: 'obj_99_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 10500,
    rewardGold: 3350,
    rewardItemIds: ['wpn_0050', 'arm_0050']
  },
  {
    id: 'quest_chain_0100',
    title: 'Chapter 100: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 41,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_100_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0001', requiredCount: 7 },
      { id: 'obj_100_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 10750,
    rewardGold: 3430,
    rewardItemIds: ['wpn_0001', 'arm_0001']
  },
  {
    id: 'quest_chain_0101',
    title: 'Chapter 101: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 42,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_101_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0002', requiredCount: 8 },
      { id: 'obj_101_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 11000,
    rewardGold: 3510,
    rewardItemIds: ['wpn_0002', 'arm_0002']
  },
  {
    id: 'quest_chain_0102',
    title: 'Chapter 102: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 43,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_102_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0003', requiredCount: 9 },
      { id: 'obj_102_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 11250,
    rewardGold: 3590,
    rewardItemIds: ['wpn_0003', 'arm_0003']
  },
  {
    id: 'quest_chain_0103',
    title: 'Chapter 103: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 44,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_103_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0004', requiredCount: 10 },
      { id: 'obj_103_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 11500,
    rewardGold: 3670,
    rewardItemIds: ['wpn_0004', 'arm_0004']
  },
  {
    id: 'quest_chain_0104',
    title: 'Chapter 104: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 45,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_104_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0005', requiredCount: 3 },
      { id: 'obj_104_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 11750,
    rewardGold: 3750,
    rewardItemIds: ['wpn_0005', 'arm_0005']
  },
  {
    id: 'quest_chain_0105',
    title: 'Chapter 105: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 46,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_105_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0006', requiredCount: 4 },
      { id: 'obj_105_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 12000,
    rewardGold: 3830,
    rewardItemIds: ['wpn_0006', 'arm_0006']
  },
  {
    id: 'quest_chain_0106',
    title: 'Chapter 106: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 47,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_106_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0007', requiredCount: 5 },
      { id: 'obj_106_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 12250,
    rewardGold: 3910,
    rewardItemIds: ['wpn_0007', 'arm_0007']
  },
  {
    id: 'quest_chain_0107',
    title: 'Chapter 107: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 48,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_107_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0008', requiredCount: 6 },
      { id: 'obj_107_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 12500,
    rewardGold: 3990,
    rewardItemIds: ['wpn_0008', 'arm_0008']
  },
  {
    id: 'quest_chain_0108',
    title: 'Chapter 108: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 49,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_108_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0009', requiredCount: 7 },
      { id: 'obj_108_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 12750,
    rewardGold: 4070,
    rewardItemIds: ['wpn_0009', 'arm_0009']
  },
  {
    id: 'quest_chain_0109',
    title: 'Chapter 109: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 50,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_109_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0010', requiredCount: 8 },
      { id: 'obj_109_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 13000,
    rewardGold: 4150,
    rewardItemIds: ['wpn_0010', 'arm_0010']
  },
  {
    id: 'quest_chain_0110',
    title: 'Chapter 110: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 51,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_110_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0011', requiredCount: 9 },
      { id: 'obj_110_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 13250,
    rewardGold: 4230,
    rewardItemIds: ['wpn_0011', 'arm_0011']
  },
  {
    id: 'quest_chain_0111',
    title: 'Chapter 111: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 52,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_111_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0012', requiredCount: 10 },
      { id: 'obj_111_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 13500,
    rewardGold: 4310,
    rewardItemIds: ['wpn_0012', 'arm_0012']
  },
  {
    id: 'quest_chain_0112',
    title: 'Chapter 112: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 53,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_112_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0013', requiredCount: 3 },
      { id: 'obj_112_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 13750,
    rewardGold: 4390,
    rewardItemIds: ['wpn_0013', 'arm_0013']
  },
  {
    id: 'quest_chain_0113',
    title: 'Chapter 113: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 54,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_113_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0014', requiredCount: 4 },
      { id: 'obj_113_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 14000,
    rewardGold: 4470,
    rewardItemIds: ['wpn_0014', 'arm_0014']
  },
  {
    id: 'quest_chain_0114',
    title: 'Chapter 114: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 55,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_114_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0015', requiredCount: 5 },
      { id: 'obj_114_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 14250,
    rewardGold: 4550,
    rewardItemIds: ['wpn_0015', 'arm_0015']
  },
  {
    id: 'quest_chain_0115',
    title: 'Chapter 115: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 56,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_115_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0016', requiredCount: 6 },
      { id: 'obj_115_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 14500,
    rewardGold: 4630,
    rewardItemIds: ['wpn_0016', 'arm_0016']
  },
  {
    id: 'quest_chain_0116',
    title: 'Chapter 116: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 57,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_116_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0017', requiredCount: 7 },
      { id: 'obj_116_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 14750,
    rewardGold: 4710,
    rewardItemIds: ['wpn_0017', 'arm_0017']
  },
  {
    id: 'quest_chain_0117',
    title: 'Chapter 117: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 58,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_117_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0018', requiredCount: 8 },
      { id: 'obj_117_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 15000,
    rewardGold: 4790,
    rewardItemIds: ['wpn_0018', 'arm_0018']
  },
  {
    id: 'quest_chain_0118',
    title: 'Chapter 118: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 59,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_118_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0019', requiredCount: 9 },
      { id: 'obj_118_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 15250,
    rewardGold: 4870,
    rewardItemIds: ['wpn_0019', 'arm_0019']
  },
  {
    id: 'quest_chain_0119',
    title: 'Chapter 119: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 60,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_119_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0020', requiredCount: 10 },
      { id: 'obj_119_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 15500,
    rewardGold: 4950,
    rewardItemIds: ['wpn_0020', 'arm_0020']
  },
  {
    id: 'quest_chain_0120',
    title: 'Chapter 120: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 1,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_120_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0021', requiredCount: 3 },
      { id: 'obj_120_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 750,
    rewardGold: 230,
    rewardItemIds: ['wpn_0021', 'arm_0021']
  },
  {
    id: 'quest_chain_0121',
    title: 'Chapter 121: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 2,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_121_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0022', requiredCount: 4 },
      { id: 'obj_121_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 1000,
    rewardGold: 310,
    rewardItemIds: ['wpn_0022', 'arm_0022']
  },
  {
    id: 'quest_chain_0122',
    title: 'Chapter 122: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 3,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_122_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0023', requiredCount: 5 },
      { id: 'obj_122_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 1250,
    rewardGold: 390,
    rewardItemIds: ['wpn_0023', 'arm_0023']
  },
  {
    id: 'quest_chain_0123',
    title: 'Chapter 123: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 4,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_123_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0024', requiredCount: 6 },
      { id: 'obj_123_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 1500,
    rewardGold: 470,
    rewardItemIds: ['wpn_0024', 'arm_0024']
  },
  {
    id: 'quest_chain_0124',
    title: 'Chapter 124: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 5,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_124_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0025', requiredCount: 7 },
      { id: 'obj_124_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 1750,
    rewardGold: 550,
    rewardItemIds: ['wpn_0025', 'arm_0025']
  },
  {
    id: 'quest_chain_0125',
    title: 'Chapter 125: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 6,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_125_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0026', requiredCount: 8 },
      { id: 'obj_125_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 2000,
    rewardGold: 630,
    rewardItemIds: ['wpn_0026', 'arm_0026']
  },
  {
    id: 'quest_chain_0126',
    title: 'Chapter 126: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 7,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_126_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0027', requiredCount: 9 },
      { id: 'obj_126_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 2250,
    rewardGold: 710,
    rewardItemIds: ['wpn_0027', 'arm_0027']
  },
  {
    id: 'quest_chain_0127',
    title: 'Chapter 127: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 8,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_127_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0028', requiredCount: 10 },
      { id: 'obj_127_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 2500,
    rewardGold: 790,
    rewardItemIds: ['wpn_0028', 'arm_0028']
  },
  {
    id: 'quest_chain_0128',
    title: 'Chapter 128: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 9,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_128_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0029', requiredCount: 3 },
      { id: 'obj_128_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 2750,
    rewardGold: 870,
    rewardItemIds: ['wpn_0029', 'arm_0029']
  },
  {
    id: 'quest_chain_0129',
    title: 'Chapter 129: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 10,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_129_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0030', requiredCount: 4 },
      { id: 'obj_129_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 3000,
    rewardGold: 950,
    rewardItemIds: ['wpn_0030', 'arm_0030']
  },
  {
    id: 'quest_chain_0130',
    title: 'Chapter 130: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 11,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_130_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0031', requiredCount: 5 },
      { id: 'obj_130_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 3250,
    rewardGold: 1030,
    rewardItemIds: ['wpn_0031', 'arm_0031']
  },
  {
    id: 'quest_chain_0131',
    title: 'Chapter 131: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 12,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_131_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0032', requiredCount: 6 },
      { id: 'obj_131_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 3500,
    rewardGold: 1110,
    rewardItemIds: ['wpn_0032', 'arm_0032']
  },
  {
    id: 'quest_chain_0132',
    title: 'Chapter 132: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 13,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_132_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0033', requiredCount: 7 },
      { id: 'obj_132_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 3750,
    rewardGold: 1190,
    rewardItemIds: ['wpn_0033', 'arm_0033']
  },
  {
    id: 'quest_chain_0133',
    title: 'Chapter 133: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 14,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_133_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0034', requiredCount: 8 },
      { id: 'obj_133_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 4000,
    rewardGold: 1270,
    rewardItemIds: ['wpn_0034', 'arm_0034']
  },
  {
    id: 'quest_chain_0134',
    title: 'Chapter 134: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 15,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_134_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0035', requiredCount: 9 },
      { id: 'obj_134_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 4250,
    rewardGold: 1350,
    rewardItemIds: ['wpn_0035', 'arm_0035']
  },
  {
    id: 'quest_chain_0135',
    title: 'Chapter 135: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 16,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_135_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0036', requiredCount: 10 },
      { id: 'obj_135_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 4500,
    rewardGold: 1430,
    rewardItemIds: ['wpn_0036', 'arm_0036']
  },
  {
    id: 'quest_chain_0136',
    title: 'Chapter 136: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 17,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_136_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0037', requiredCount: 3 },
      { id: 'obj_136_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 4750,
    rewardGold: 1510,
    rewardItemIds: ['wpn_0037', 'arm_0037']
  },
  {
    id: 'quest_chain_0137',
    title: 'Chapter 137: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 18,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_137_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0038', requiredCount: 4 },
      { id: 'obj_137_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 5000,
    rewardGold: 1590,
    rewardItemIds: ['wpn_0038', 'arm_0038']
  },
  {
    id: 'quest_chain_0138',
    title: 'Chapter 138: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 19,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_138_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0039', requiredCount: 5 },
      { id: 'obj_138_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 5250,
    rewardGold: 1670,
    rewardItemIds: ['wpn_0039', 'arm_0039']
  },
  {
    id: 'quest_chain_0139',
    title: 'Chapter 139: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 20,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_139_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0040', requiredCount: 6 },
      { id: 'obj_139_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 5500,
    rewardGold: 1750,
    rewardItemIds: ['wpn_0040', 'arm_0040']
  },
  {
    id: 'quest_chain_0140',
    title: 'Chapter 140: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 21,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_140_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0041', requiredCount: 7 },
      { id: 'obj_140_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 5750,
    rewardGold: 1830,
    rewardItemIds: ['wpn_0041', 'arm_0041']
  },
  {
    id: 'quest_chain_0141',
    title: 'Chapter 141: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 22,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_141_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0042', requiredCount: 8 },
      { id: 'obj_141_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 6000,
    rewardGold: 1910,
    rewardItemIds: ['wpn_0042', 'arm_0042']
  },
  {
    id: 'quest_chain_0142',
    title: 'Chapter 142: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 23,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_142_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0043', requiredCount: 9 },
      { id: 'obj_142_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 6250,
    rewardGold: 1990,
    rewardItemIds: ['wpn_0043', 'arm_0043']
  },
  {
    id: 'quest_chain_0143',
    title: 'Chapter 143: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 24,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_143_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0044', requiredCount: 10 },
      { id: 'obj_143_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 6500,
    rewardGold: 2070,
    rewardItemIds: ['wpn_0044', 'arm_0044']
  },
  {
    id: 'quest_chain_0144',
    title: 'Chapter 144: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 25,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_144_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0045', requiredCount: 3 },
      { id: 'obj_144_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 6750,
    rewardGold: 2150,
    rewardItemIds: ['wpn_0045', 'arm_0045']
  },
  {
    id: 'quest_chain_0145',
    title: 'Chapter 145: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 26,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_145_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0046', requiredCount: 4 },
      { id: 'obj_145_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 7000,
    rewardGold: 2230,
    rewardItemIds: ['wpn_0046', 'arm_0046']
  },
  {
    id: 'quest_chain_0146',
    title: 'Chapter 146: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 27,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_146_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0047', requiredCount: 5 },
      { id: 'obj_146_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 7250,
    rewardGold: 2310,
    rewardItemIds: ['wpn_0047', 'arm_0047']
  },
  {
    id: 'quest_chain_0147',
    title: 'Chapter 147: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 28,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_147_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0048', requiredCount: 6 },
      { id: 'obj_147_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 7500,
    rewardGold: 2390,
    rewardItemIds: ['wpn_0048', 'arm_0048']
  },
  {
    id: 'quest_chain_0148',
    title: 'Chapter 148: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 29,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_148_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0049', requiredCount: 7 },
      { id: 'obj_148_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 7750,
    rewardGold: 2470,
    rewardItemIds: ['wpn_0049', 'arm_0049']
  },
  {
    id: 'quest_chain_0149',
    title: 'Chapter 149: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 30,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_149_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0050', requiredCount: 8 },
      { id: 'obj_149_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 8000,
    rewardGold: 2550,
    rewardItemIds: ['wpn_0050', 'arm_0050']
  },
  {
    id: 'quest_chain_0150',
    title: 'Chapter 150: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 31,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_150_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0001', requiredCount: 9 },
      { id: 'obj_150_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 8250,
    rewardGold: 2630,
    rewardItemIds: ['wpn_0001', 'arm_0001']
  },
  {
    id: 'quest_chain_0151',
    title: 'Chapter 151: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 32,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_151_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0002', requiredCount: 10 },
      { id: 'obj_151_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 8500,
    rewardGold: 2710,
    rewardItemIds: ['wpn_0002', 'arm_0002']
  },
  {
    id: 'quest_chain_0152',
    title: 'Chapter 152: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 33,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_152_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0003', requiredCount: 3 },
      { id: 'obj_152_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 8750,
    rewardGold: 2790,
    rewardItemIds: ['wpn_0003', 'arm_0003']
  },
  {
    id: 'quest_chain_0153',
    title: 'Chapter 153: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 34,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_153_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0004', requiredCount: 4 },
      { id: 'obj_153_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 9000,
    rewardGold: 2870,
    rewardItemIds: ['wpn_0004', 'arm_0004']
  },
  {
    id: 'quest_chain_0154',
    title: 'Chapter 154: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 35,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_154_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0005', requiredCount: 5 },
      { id: 'obj_154_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 9250,
    rewardGold: 2950,
    rewardItemIds: ['wpn_0005', 'arm_0005']
  },
  {
    id: 'quest_chain_0155',
    title: 'Chapter 155: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 36,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_155_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0006', requiredCount: 6 },
      { id: 'obj_155_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 9500,
    rewardGold: 3030,
    rewardItemIds: ['wpn_0006', 'arm_0006']
  },
  {
    id: 'quest_chain_0156',
    title: 'Chapter 156: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 37,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_156_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0007', requiredCount: 7 },
      { id: 'obj_156_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 9750,
    rewardGold: 3110,
    rewardItemIds: ['wpn_0007', 'arm_0007']
  },
  {
    id: 'quest_chain_0157',
    title: 'Chapter 157: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 38,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_157_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0008', requiredCount: 8 },
      { id: 'obj_157_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 10000,
    rewardGold: 3190,
    rewardItemIds: ['wpn_0008', 'arm_0008']
  },
  {
    id: 'quest_chain_0158',
    title: 'Chapter 158: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 39,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_158_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0009', requiredCount: 9 },
      { id: 'obj_158_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 10250,
    rewardGold: 3270,
    rewardItemIds: ['wpn_0009', 'arm_0009']
  },
  {
    id: 'quest_chain_0159',
    title: 'Chapter 159: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 40,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_159_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0010', requiredCount: 10 },
      { id: 'obj_159_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 10500,
    rewardGold: 3350,
    rewardItemIds: ['wpn_0010', 'arm_0010']
  },
  {
    id: 'quest_chain_0160',
    title: 'Chapter 160: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 41,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_160_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0011', requiredCount: 3 },
      { id: 'obj_160_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 10750,
    rewardGold: 3430,
    rewardItemIds: ['wpn_0011', 'arm_0011']
  },
  {
    id: 'quest_chain_0161',
    title: 'Chapter 161: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 42,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_161_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0012', requiredCount: 4 },
      { id: 'obj_161_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 11000,
    rewardGold: 3510,
    rewardItemIds: ['wpn_0012', 'arm_0012']
  },
  {
    id: 'quest_chain_0162',
    title: 'Chapter 162: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 43,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_162_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0013', requiredCount: 5 },
      { id: 'obj_162_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 11250,
    rewardGold: 3590,
    rewardItemIds: ['wpn_0013', 'arm_0013']
  },
  {
    id: 'quest_chain_0163',
    title: 'Chapter 163: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 44,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_163_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0014', requiredCount: 6 },
      { id: 'obj_163_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 11500,
    rewardGold: 3670,
    rewardItemIds: ['wpn_0014', 'arm_0014']
  },
  {
    id: 'quest_chain_0164',
    title: 'Chapter 164: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 45,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_164_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0015', requiredCount: 7 },
      { id: 'obj_164_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 11750,
    rewardGold: 3750,
    rewardItemIds: ['wpn_0015', 'arm_0015']
  },
  {
    id: 'quest_chain_0165',
    title: 'Chapter 165: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 46,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_165_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0016', requiredCount: 8 },
      { id: 'obj_165_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 12000,
    rewardGold: 3830,
    rewardItemIds: ['wpn_0016', 'arm_0016']
  },
  {
    id: 'quest_chain_0166',
    title: 'Chapter 166: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 47,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_166_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0017', requiredCount: 9 },
      { id: 'obj_166_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 12250,
    rewardGold: 3910,
    rewardItemIds: ['wpn_0017', 'arm_0017']
  },
  {
    id: 'quest_chain_0167',
    title: 'Chapter 167: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 48,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_167_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0018', requiredCount: 10 },
      { id: 'obj_167_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 12500,
    rewardGold: 3990,
    rewardItemIds: ['wpn_0018', 'arm_0018']
  },
  {
    id: 'quest_chain_0168',
    title: 'Chapter 168: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 49,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_168_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0019', requiredCount: 3 },
      { id: 'obj_168_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 12750,
    rewardGold: 4070,
    rewardItemIds: ['wpn_0019', 'arm_0019']
  },
  {
    id: 'quest_chain_0169',
    title: 'Chapter 169: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 50,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_169_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0020', requiredCount: 4 },
      { id: 'obj_169_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 13000,
    rewardGold: 4150,
    rewardItemIds: ['wpn_0020', 'arm_0020']
  },
  {
    id: 'quest_chain_0170',
    title: 'Chapter 170: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 51,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_170_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0021', requiredCount: 5 },
      { id: 'obj_170_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 13250,
    rewardGold: 4230,
    rewardItemIds: ['wpn_0021', 'arm_0021']
  },
  {
    id: 'quest_chain_0171',
    title: 'Chapter 171: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 52,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_171_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0022', requiredCount: 6 },
      { id: 'obj_171_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 13500,
    rewardGold: 4310,
    rewardItemIds: ['wpn_0022', 'arm_0022']
  },
  {
    id: 'quest_chain_0172',
    title: 'Chapter 172: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 53,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_172_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0023', requiredCount: 7 },
      { id: 'obj_172_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 13750,
    rewardGold: 4390,
    rewardItemIds: ['wpn_0023', 'arm_0023']
  },
  {
    id: 'quest_chain_0173',
    title: 'Chapter 173: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 54,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_173_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0024', requiredCount: 8 },
      { id: 'obj_173_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 14000,
    rewardGold: 4470,
    rewardItemIds: ['wpn_0024', 'arm_0024']
  },
  {
    id: 'quest_chain_0174',
    title: 'Chapter 174: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 55,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_174_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0025', requiredCount: 9 },
      { id: 'obj_174_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 14250,
    rewardGold: 4550,
    rewardItemIds: ['wpn_0025', 'arm_0025']
  },
  {
    id: 'quest_chain_0175',
    title: 'Chapter 175: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 56,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_175_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0026', requiredCount: 10 },
      { id: 'obj_175_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 14500,
    rewardGold: 4630,
    rewardItemIds: ['wpn_0026', 'arm_0026']
  },
  {
    id: 'quest_chain_0176',
    title: 'Chapter 176: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 57,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_176_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0027', requiredCount: 3 },
      { id: 'obj_176_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 14750,
    rewardGold: 4710,
    rewardItemIds: ['wpn_0027', 'arm_0027']
  },
  {
    id: 'quest_chain_0177',
    title: 'Chapter 177: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 58,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_177_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0028', requiredCount: 4 },
      { id: 'obj_177_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 15000,
    rewardGold: 4790,
    rewardItemIds: ['wpn_0028', 'arm_0028']
  },
  {
    id: 'quest_chain_0178',
    title: 'Chapter 178: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 59,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_178_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0029', requiredCount: 5 },
      { id: 'obj_178_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 15250,
    rewardGold: 4870,
    rewardItemIds: ['wpn_0029', 'arm_0029']
  },
  {
    id: 'quest_chain_0179',
    title: 'Chapter 179: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 60,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_179_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0030', requiredCount: 6 },
      { id: 'obj_179_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 15500,
    rewardGold: 4950,
    rewardItemIds: ['wpn_0030', 'arm_0030']
  },
  {
    id: 'quest_chain_0180',
    title: 'Chapter 180: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 1,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_180_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0031', requiredCount: 7 },
      { id: 'obj_180_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 750,
    rewardGold: 230,
    rewardItemIds: ['wpn_0031', 'arm_0031']
  },
  {
    id: 'quest_chain_0181',
    title: 'Chapter 181: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 2,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_181_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0032', requiredCount: 8 },
      { id: 'obj_181_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 1000,
    rewardGold: 310,
    rewardItemIds: ['wpn_0032', 'arm_0032']
  },
  {
    id: 'quest_chain_0182',
    title: 'Chapter 182: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 3,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_182_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0033', requiredCount: 9 },
      { id: 'obj_182_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 1250,
    rewardGold: 390,
    rewardItemIds: ['wpn_0033', 'arm_0033']
  },
  {
    id: 'quest_chain_0183',
    title: 'Chapter 183: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 4,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_183_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0034', requiredCount: 10 },
      { id: 'obj_183_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 1500,
    rewardGold: 470,
    rewardItemIds: ['wpn_0034', 'arm_0034']
  },
  {
    id: 'quest_chain_0184',
    title: 'Chapter 184: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 5,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_184_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0035', requiredCount: 3 },
      { id: 'obj_184_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 1750,
    rewardGold: 550,
    rewardItemIds: ['wpn_0035', 'arm_0035']
  },
  {
    id: 'quest_chain_0185',
    title: 'Chapter 185: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 6,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_185_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0036', requiredCount: 4 },
      { id: 'obj_185_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 2000,
    rewardGold: 630,
    rewardItemIds: ['wpn_0036', 'arm_0036']
  },
  {
    id: 'quest_chain_0186',
    title: 'Chapter 186: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 7,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_186_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0037', requiredCount: 5 },
      { id: 'obj_186_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 2250,
    rewardGold: 710,
    rewardItemIds: ['wpn_0037', 'arm_0037']
  },
  {
    id: 'quest_chain_0187',
    title: 'Chapter 187: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 8,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_187_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0038', requiredCount: 6 },
      { id: 'obj_187_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 2500,
    rewardGold: 790,
    rewardItemIds: ['wpn_0038', 'arm_0038']
  },
  {
    id: 'quest_chain_0188',
    title: 'Chapter 188: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 9,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_188_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0039', requiredCount: 7 },
      { id: 'obj_188_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 2750,
    rewardGold: 870,
    rewardItemIds: ['wpn_0039', 'arm_0039']
  },
  {
    id: 'quest_chain_0189',
    title: 'Chapter 189: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 10,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_189_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0040', requiredCount: 8 },
      { id: 'obj_189_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 3000,
    rewardGold: 950,
    rewardItemIds: ['wpn_0040', 'arm_0040']
  },
  {
    id: 'quest_chain_0190',
    title: 'Chapter 190: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 11,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_190_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0041', requiredCount: 9 },
      { id: 'obj_190_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 3250,
    rewardGold: 1030,
    rewardItemIds: ['wpn_0041', 'arm_0041']
  },
  {
    id: 'quest_chain_0191',
    title: 'Chapter 191: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 12,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_191_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0042', requiredCount: 10 },
      { id: 'obj_191_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 3500,
    rewardGold: 1110,
    rewardItemIds: ['wpn_0042', 'arm_0042']
  },
  {
    id: 'quest_chain_0192',
    title: 'Chapter 192: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 13,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_192_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0043', requiredCount: 3 },
      { id: 'obj_192_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 3750,
    rewardGold: 1190,
    rewardItemIds: ['wpn_0043', 'arm_0043']
  },
  {
    id: 'quest_chain_0193',
    title: 'Chapter 193: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 14,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_193_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0044', requiredCount: 4 },
      { id: 'obj_193_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 4000,
    rewardGold: 1270,
    rewardItemIds: ['wpn_0044', 'arm_0044']
  },
  {
    id: 'quest_chain_0194',
    title: 'Chapter 194: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 15,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_194_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0045', requiredCount: 5 },
      { id: 'obj_194_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 4250,
    rewardGold: 1350,
    rewardItemIds: ['wpn_0045', 'arm_0045']
  },
  {
    id: 'quest_chain_0195',
    title: 'Chapter 195: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 16,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_195_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0046', requiredCount: 6 },
      { id: 'obj_195_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 4500,
    rewardGold: 1430,
    rewardItemIds: ['wpn_0046', 'arm_0046']
  },
  {
    id: 'quest_chain_0196',
    title: 'Chapter 196: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 17,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_196_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0047', requiredCount: 7 },
      { id: 'obj_196_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 4750,
    rewardGold: 1510,
    rewardItemIds: ['wpn_0047', 'arm_0047']
  },
  {
    id: 'quest_chain_0197',
    title: 'Chapter 197: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 18,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_197_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0048', requiredCount: 8 },
      { id: 'obj_197_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 5000,
    rewardGold: 1590,
    rewardItemIds: ['wpn_0048', 'arm_0048']
  },
  {
    id: 'quest_chain_0198',
    title: 'Chapter 198: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 19,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_198_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0049', requiredCount: 9 },
      { id: 'obj_198_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 5250,
    rewardGold: 1670,
    rewardItemIds: ['wpn_0049', 'arm_0049']
  },
  {
    id: 'quest_chain_0199',
    title: 'Chapter 199: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 20,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_199_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0050', requiredCount: 10 },
      { id: 'obj_199_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 5500,
    rewardGold: 1750,
    rewardItemIds: ['wpn_0050', 'arm_0050']
  },
  {
    id: 'quest_chain_0200',
    title: 'Chapter 200: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 21,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_200_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0001', requiredCount: 3 },
      { id: 'obj_200_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 5750,
    rewardGold: 1830,
    rewardItemIds: ['wpn_0001', 'arm_0001']
  },
  {
    id: 'quest_chain_0201',
    title: 'Chapter 201: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 22,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_201_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0002', requiredCount: 4 },
      { id: 'obj_201_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 6000,
    rewardGold: 1910,
    rewardItemIds: ['wpn_0002', 'arm_0002']
  },
  {
    id: 'quest_chain_0202',
    title: 'Chapter 202: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 23,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_202_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0003', requiredCount: 5 },
      { id: 'obj_202_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 6250,
    rewardGold: 1990,
    rewardItemIds: ['wpn_0003', 'arm_0003']
  },
  {
    id: 'quest_chain_0203',
    title: 'Chapter 203: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 24,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_203_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0004', requiredCount: 6 },
      { id: 'obj_203_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 6500,
    rewardGold: 2070,
    rewardItemIds: ['wpn_0004', 'arm_0004']
  },
  {
    id: 'quest_chain_0204',
    title: 'Chapter 204: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 25,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_204_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0005', requiredCount: 7 },
      { id: 'obj_204_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 6750,
    rewardGold: 2150,
    rewardItemIds: ['wpn_0005', 'arm_0005']
  },
  {
    id: 'quest_chain_0205',
    title: 'Chapter 205: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 26,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_205_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0006', requiredCount: 8 },
      { id: 'obj_205_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 7000,
    rewardGold: 2230,
    rewardItemIds: ['wpn_0006', 'arm_0006']
  },
  {
    id: 'quest_chain_0206',
    title: 'Chapter 206: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 27,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_206_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0007', requiredCount: 9 },
      { id: 'obj_206_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 7250,
    rewardGold: 2310,
    rewardItemIds: ['wpn_0007', 'arm_0007']
  },
  {
    id: 'quest_chain_0207',
    title: 'Chapter 207: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 28,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_207_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0008', requiredCount: 10 },
      { id: 'obj_207_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 7500,
    rewardGold: 2390,
    rewardItemIds: ['wpn_0008', 'arm_0008']
  },
  {
    id: 'quest_chain_0208',
    title: 'Chapter 208: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 29,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_208_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0009', requiredCount: 3 },
      { id: 'obj_208_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 7750,
    rewardGold: 2470,
    rewardItemIds: ['wpn_0009', 'arm_0009']
  },
  {
    id: 'quest_chain_0209',
    title: 'Chapter 209: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 30,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_209_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0010', requiredCount: 4 },
      { id: 'obj_209_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 8000,
    rewardGold: 2550,
    rewardItemIds: ['wpn_0010', 'arm_0010']
  },
  {
    id: 'quest_chain_0210',
    title: 'Chapter 210: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 31,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_210_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0011', requiredCount: 5 },
      { id: 'obj_210_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 8250,
    rewardGold: 2630,
    rewardItemIds: ['wpn_0011', 'arm_0011']
  },
  {
    id: 'quest_chain_0211',
    title: 'Chapter 211: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 32,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_211_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0012', requiredCount: 6 },
      { id: 'obj_211_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 8500,
    rewardGold: 2710,
    rewardItemIds: ['wpn_0012', 'arm_0012']
  },
  {
    id: 'quest_chain_0212',
    title: 'Chapter 212: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 33,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_212_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0013', requiredCount: 7 },
      { id: 'obj_212_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 8750,
    rewardGold: 2790,
    rewardItemIds: ['wpn_0013', 'arm_0013']
  },
  {
    id: 'quest_chain_0213',
    title: 'Chapter 213: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 34,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_213_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0014', requiredCount: 8 },
      { id: 'obj_213_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 9000,
    rewardGold: 2870,
    rewardItemIds: ['wpn_0014', 'arm_0014']
  },
  {
    id: 'quest_chain_0214',
    title: 'Chapter 214: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 35,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_214_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0015', requiredCount: 9 },
      { id: 'obj_214_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 9250,
    rewardGold: 2950,
    rewardItemIds: ['wpn_0015', 'arm_0015']
  },
  {
    id: 'quest_chain_0215',
    title: 'Chapter 215: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 36,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_215_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0016', requiredCount: 10 },
      { id: 'obj_215_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 9500,
    rewardGold: 3030,
    rewardItemIds: ['wpn_0016', 'arm_0016']
  },
  {
    id: 'quest_chain_0216',
    title: 'Chapter 216: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 37,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_216_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0017', requiredCount: 3 },
      { id: 'obj_216_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 9750,
    rewardGold: 3110,
    rewardItemIds: ['wpn_0017', 'arm_0017']
  },
  {
    id: 'quest_chain_0217',
    title: 'Chapter 217: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 38,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_217_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0018', requiredCount: 4 },
      { id: 'obj_217_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 10000,
    rewardGold: 3190,
    rewardItemIds: ['wpn_0018', 'arm_0018']
  },
  {
    id: 'quest_chain_0218',
    title: 'Chapter 218: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 39,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_218_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0019', requiredCount: 5 },
      { id: 'obj_218_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 10250,
    rewardGold: 3270,
    rewardItemIds: ['wpn_0019', 'arm_0019']
  },
  {
    id: 'quest_chain_0219',
    title: 'Chapter 219: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 40,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_219_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0020', requiredCount: 6 },
      { id: 'obj_219_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 10500,
    rewardGold: 3350,
    rewardItemIds: ['wpn_0020', 'arm_0020']
  },
  {
    id: 'quest_chain_0220',
    title: 'Chapter 220: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 41,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_220_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0021', requiredCount: 7 },
      { id: 'obj_220_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 10750,
    rewardGold: 3430,
    rewardItemIds: ['wpn_0021', 'arm_0021']
  },
  {
    id: 'quest_chain_0221',
    title: 'Chapter 221: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 42,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_221_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0022', requiredCount: 8 },
      { id: 'obj_221_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 11000,
    rewardGold: 3510,
    rewardItemIds: ['wpn_0022', 'arm_0022']
  },
  {
    id: 'quest_chain_0222',
    title: 'Chapter 222: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 43,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_222_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0023', requiredCount: 9 },
      { id: 'obj_222_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 11250,
    rewardGold: 3590,
    rewardItemIds: ['wpn_0023', 'arm_0023']
  },
  {
    id: 'quest_chain_0223',
    title: 'Chapter 223: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 44,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_223_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0024', requiredCount: 10 },
      { id: 'obj_223_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 11500,
    rewardGold: 3670,
    rewardItemIds: ['wpn_0024', 'arm_0024']
  },
  {
    id: 'quest_chain_0224',
    title: 'Chapter 224: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 45,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_224_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0025', requiredCount: 3 },
      { id: 'obj_224_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 11750,
    rewardGold: 3750,
    rewardItemIds: ['wpn_0025', 'arm_0025']
  },
  {
    id: 'quest_chain_0225',
    title: 'Chapter 225: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 46,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_225_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0026', requiredCount: 4 },
      { id: 'obj_225_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 12000,
    rewardGold: 3830,
    rewardItemIds: ['wpn_0026', 'arm_0026']
  },
  {
    id: 'quest_chain_0226',
    title: 'Chapter 226: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 47,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_226_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0027', requiredCount: 5 },
      { id: 'obj_226_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 12250,
    rewardGold: 3910,
    rewardItemIds: ['wpn_0027', 'arm_0027']
  },
  {
    id: 'quest_chain_0227',
    title: 'Chapter 227: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 48,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_227_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0028', requiredCount: 6 },
      { id: 'obj_227_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 12500,
    rewardGold: 3990,
    rewardItemIds: ['wpn_0028', 'arm_0028']
  },
  {
    id: 'quest_chain_0228',
    title: 'Chapter 228: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 49,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_228_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0029', requiredCount: 7 },
      { id: 'obj_228_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 12750,
    rewardGold: 4070,
    rewardItemIds: ['wpn_0029', 'arm_0029']
  },
  {
    id: 'quest_chain_0229',
    title: 'Chapter 229: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 50,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_229_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0030', requiredCount: 8 },
      { id: 'obj_229_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 13000,
    rewardGold: 4150,
    rewardItemIds: ['wpn_0030', 'arm_0030']
  },
  {
    id: 'quest_chain_0230',
    title: 'Chapter 230: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 51,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_230_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0031', requiredCount: 9 },
      { id: 'obj_230_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 13250,
    rewardGold: 4230,
    rewardItemIds: ['wpn_0031', 'arm_0031']
  },
  {
    id: 'quest_chain_0231',
    title: 'Chapter 231: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 52,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_231_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0032', requiredCount: 10 },
      { id: 'obj_231_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 13500,
    rewardGold: 4310,
    rewardItemIds: ['wpn_0032', 'arm_0032']
  },
  {
    id: 'quest_chain_0232',
    title: 'Chapter 232: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 53,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_232_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0033', requiredCount: 3 },
      { id: 'obj_232_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 13750,
    rewardGold: 4390,
    rewardItemIds: ['wpn_0033', 'arm_0033']
  },
  {
    id: 'quest_chain_0233',
    title: 'Chapter 233: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 54,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_233_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0034', requiredCount: 4 },
      { id: 'obj_233_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 14000,
    rewardGold: 4470,
    rewardItemIds: ['wpn_0034', 'arm_0034']
  },
  {
    id: 'quest_chain_0234',
    title: 'Chapter 234: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 55,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_234_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0035', requiredCount: 5 },
      { id: 'obj_234_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 14250,
    rewardGold: 4550,
    rewardItemIds: ['wpn_0035', 'arm_0035']
  },
  {
    id: 'quest_chain_0235',
    title: 'Chapter 235: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 56,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_235_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0036', requiredCount: 6 },
      { id: 'obj_235_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 14500,
    rewardGold: 4630,
    rewardItemIds: ['wpn_0036', 'arm_0036']
  },
  {
    id: 'quest_chain_0236',
    title: 'Chapter 236: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 57,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_236_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0037', requiredCount: 7 },
      { id: 'obj_236_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 14750,
    rewardGold: 4710,
    rewardItemIds: ['wpn_0037', 'arm_0037']
  },
  {
    id: 'quest_chain_0237',
    title: 'Chapter 237: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 58,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_237_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0038', requiredCount: 8 },
      { id: 'obj_237_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 15000,
    rewardGold: 4790,
    rewardItemIds: ['wpn_0038', 'arm_0038']
  },
  {
    id: 'quest_chain_0238',
    title: 'Chapter 238: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 59,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_238_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0039', requiredCount: 9 },
      { id: 'obj_238_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 15250,
    rewardGold: 4870,
    rewardItemIds: ['wpn_0039', 'arm_0039']
  },
  {
    id: 'quest_chain_0239',
    title: 'Chapter 239: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 60,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_239_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0040', requiredCount: 10 },
      { id: 'obj_239_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 15500,
    rewardGold: 4950,
    rewardItemIds: ['wpn_0040', 'arm_0040']
  },
  {
    id: 'quest_chain_0240',
    title: 'Chapter 240: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 1,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_240_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0041', requiredCount: 3 },
      { id: 'obj_240_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 750,
    rewardGold: 230,
    rewardItemIds: ['wpn_0041', 'arm_0041']
  },
  {
    id: 'quest_chain_0241',
    title: 'Chapter 241: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 2,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_241_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0042', requiredCount: 4 },
      { id: 'obj_241_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 1000,
    rewardGold: 310,
    rewardItemIds: ['wpn_0042', 'arm_0042']
  },
  {
    id: 'quest_chain_0242',
    title: 'Chapter 242: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 3,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_242_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0043', requiredCount: 5 },
      { id: 'obj_242_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 1250,
    rewardGold: 390,
    rewardItemIds: ['wpn_0043', 'arm_0043']
  },
  {
    id: 'quest_chain_0243',
    title: 'Chapter 243: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 4,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_243_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0044', requiredCount: 6 },
      { id: 'obj_243_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 1500,
    rewardGold: 470,
    rewardItemIds: ['wpn_0044', 'arm_0044']
  },
  {
    id: 'quest_chain_0244',
    title: 'Chapter 244: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 5,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_244_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0045', requiredCount: 7 },
      { id: 'obj_244_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 1750,
    rewardGold: 550,
    rewardItemIds: ['wpn_0045', 'arm_0045']
  },
  {
    id: 'quest_chain_0245',
    title: 'Chapter 245: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 6,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_245_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0046', requiredCount: 8 },
      { id: 'obj_245_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 2000,
    rewardGold: 630,
    rewardItemIds: ['wpn_0046', 'arm_0046']
  },
  {
    id: 'quest_chain_0246',
    title: 'Chapter 246: Rite of the Guardians',
    act: 'Act II: Whispers of the Void',
    requiredLevel: 7,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_246_1', description: 'Defeat Alpha Vanguard in dungeon depth 2', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0047', requiredCount: 9 },
      { id: 'obj_246_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 3 }
    ],
    rewardExp: 2250,
    rewardGold: 710,
    rewardItemIds: ['wpn_0047', 'arm_0047']
  },
  {
    id: 'quest_chain_0247',
    title: 'Chapter 247: Rite of the Guardians',
    act: 'Act III: The Sunken Vaults',
    requiredLevel: 8,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_247_1', description: 'Defeat Alpha Vanguard in dungeon depth 3', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0048', requiredCount: 10 },
      { id: 'obj_247_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 4 }
    ],
    rewardExp: 2500,
    rewardGold: 790,
    rewardItemIds: ['wpn_0048', 'arm_0048']
  },
  {
    id: 'quest_chain_0248',
    title: 'Chapter 248: Rite of the Guardians',
    act: 'Act IV: The Dragon's Spire',
    requiredLevel: 9,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_248_1', description: 'Defeat Alpha Vanguard in dungeon depth 4', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0049', requiredCount: 3 },
      { id: 'obj_248_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 5 }
    ],
    rewardExp: 2750,
    rewardGold: 870,
    rewardItemIds: ['wpn_0049', 'arm_0049']
  },
  {
    id: 'quest_chain_0249',
    title: 'Chapter 249: Rite of the Guardians',
    act: 'Act V: Convergence of Chaos',
    requiredLevel: 10,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_249_1', description: 'Defeat Alpha Vanguard in dungeon depth 5', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0050', requiredCount: 4 },
      { id: 'obj_249_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 6 }
    ],
    rewardExp: 3000,
    rewardGold: 950,
    rewardItemIds: ['wpn_0050', 'arm_0050']
  },
  {
    id: 'quest_chain_0250',
    title: 'Chapter 250: Rite of the Guardians',
    act: 'Act I: The Shattered Seals',
    requiredLevel: 11,
    description: 'Travel deep into the uncharted subterranean catacombs to restore the harmonic seals of Aethelgard.',
    objectives: [
      { id: 'obj_250_1', description: 'Defeat Alpha Vanguard in dungeon depth 1', type: ObjectiveType.KILL_MONSTER, targetId: 'mob_0001', requiredCount: 5 },
      { id: 'obj_250_2', description: 'Collect Ancient Shards', type: ObjectiveType.COLLECT_ITEM, targetId: 'mat_aether_shard', requiredCount: 2 }
    ],
    rewardExp: 3250,
    rewardGold: 1030,
    rewardItemIds: ['wpn_0001', 'arm_0001']
  },
];

/**
 * @file LoreAndDialogueDatabase.js
 * @description Narrative quest dialogues, NPC rumor engines, and world lore archives.
 */
export const LoreAndDialogueDatabase = [
  {
    id: 'lore_dialogue_0001',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #1...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0001', factionBonus: 'SilverGuard', repAmount: 5 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0002', factionBonus: 'Scholars', repAmount: 5 }
    ],
    reputationRequirement: 10
  },
  {
    id: 'lore_dialogue_0002',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #2...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0001', factionBonus: 'SilverGuard', repAmount: 10 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0003', factionBonus: 'Scholars', repAmount: 10 }
    ],
    reputationRequirement: 20
  },
  {
    id: 'lore_dialogue_0003',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #3...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0001', factionBonus: 'SilverGuard', repAmount: 15 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0004', factionBonus: 'Scholars', repAmount: 15 }
    ],
    reputationRequirement: 30
  },
  {
    id: 'lore_dialogue_0004',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #4...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0002', factionBonus: 'SilverGuard', repAmount: 20 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0005', factionBonus: 'Scholars', repAmount: 20 }
    ],
    reputationRequirement: 40
  },
  {
    id: 'lore_dialogue_0005',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #5...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0003', factionBonus: 'SilverGuard', repAmount: 25 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0006', factionBonus: 'Scholars', repAmount: 25 }
    ],
    reputationRequirement: 50
  },
  {
    id: 'lore_dialogue_0006',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #6...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0004', factionBonus: 'SilverGuard', repAmount: 30 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0007', factionBonus: 'Scholars', repAmount: 30 }
    ],
    reputationRequirement: 60
  },
  {
    id: 'lore_dialogue_0007',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #7...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0005', factionBonus: 'SilverGuard', repAmount: 35 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0008', factionBonus: 'Scholars', repAmount: 35 }
    ],
    reputationRequirement: 70
  },
  {
    id: 'lore_dialogue_0008',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #8...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0006', factionBonus: 'SilverGuard', repAmount: 40 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0009', factionBonus: 'Scholars', repAmount: 40 }
    ],
    reputationRequirement: 80
  },
  {
    id: 'lore_dialogue_0009',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #9...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0007', factionBonus: 'SilverGuard', repAmount: 45 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0010', factionBonus: 'Scholars', repAmount: 45 }
    ],
    reputationRequirement: 90
  },
  {
    id: 'lore_dialogue_0010',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #10...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0008', factionBonus: 'SilverGuard', repAmount: 50 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0011', factionBonus: 'Scholars', repAmount: 50 }
    ],
    reputationRequirement: 100
  },
  {
    id: 'lore_dialogue_0011',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #11...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0009', factionBonus: 'SilverGuard', repAmount: 55 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0012', factionBonus: 'Scholars', repAmount: 55 }
    ],
    reputationRequirement: 110
  },
  {
    id: 'lore_dialogue_0012',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #12...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0010', factionBonus: 'SilverGuard', repAmount: 60 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0013', factionBonus: 'Scholars', repAmount: 60 }
    ],
    reputationRequirement: 120
  },
  {
    id: 'lore_dialogue_0013',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #13...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0011', factionBonus: 'SilverGuard', repAmount: 65 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0014', factionBonus: 'Scholars', repAmount: 65 }
    ],
    reputationRequirement: 130
  },
  {
    id: 'lore_dialogue_0014',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #14...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0012', factionBonus: 'SilverGuard', repAmount: 70 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0015', factionBonus: 'Scholars', repAmount: 70 }
    ],
    reputationRequirement: 140
  },
  {
    id: 'lore_dialogue_0015',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #15...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0013', factionBonus: 'SilverGuard', repAmount: 75 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0016', factionBonus: 'Scholars', repAmount: 75 }
    ],
    reputationRequirement: 150
  },
  {
    id: 'lore_dialogue_0016',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #16...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0014', factionBonus: 'SilverGuard', repAmount: 80 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0017', factionBonus: 'Scholars', repAmount: 80 }
    ],
    reputationRequirement: 160
  },
  {
    id: 'lore_dialogue_0017',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #17...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0015', factionBonus: 'SilverGuard', repAmount: 85 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0018', factionBonus: 'Scholars', repAmount: 85 }
    ],
    reputationRequirement: 170
  },
  {
    id: 'lore_dialogue_0018',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #18...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0016', factionBonus: 'SilverGuard', repAmount: 90 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0019', factionBonus: 'Scholars', repAmount: 90 }
    ],
    reputationRequirement: 180
  },
  {
    id: 'lore_dialogue_0019',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #19...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0017', factionBonus: 'SilverGuard', repAmount: 95 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0020', factionBonus: 'Scholars', repAmount: 95 }
    ],
    reputationRequirement: 190
  },
  {
    id: 'lore_dialogue_0020',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #20...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0018', factionBonus: 'SilverGuard', repAmount: 100 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0021', factionBonus: 'Scholars', repAmount: 100 }
    ],
    reputationRequirement: 200
  },
  {
    id: 'lore_dialogue_0021',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #21...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0019', factionBonus: 'SilverGuard', repAmount: 105 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0022', factionBonus: 'Scholars', repAmount: 105 }
    ],
    reputationRequirement: 210
  },
  {
    id: 'lore_dialogue_0022',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #22...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0020', factionBonus: 'SilverGuard', repAmount: 110 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0023', factionBonus: 'Scholars', repAmount: 110 }
    ],
    reputationRequirement: 220
  },
  {
    id: 'lore_dialogue_0023',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #23...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0021', factionBonus: 'SilverGuard', repAmount: 115 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0024', factionBonus: 'Scholars', repAmount: 115 }
    ],
    reputationRequirement: 230
  },
  {
    id: 'lore_dialogue_0024',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #24...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0022', factionBonus: 'SilverGuard', repAmount: 120 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0025', factionBonus: 'Scholars', repAmount: 120 }
    ],
    reputationRequirement: 240
  },
  {
    id: 'lore_dialogue_0025',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #25...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0023', factionBonus: 'SilverGuard', repAmount: 125 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0026', factionBonus: 'Scholars', repAmount: 125 }
    ],
    reputationRequirement: 250
  },
  {
    id: 'lore_dialogue_0026',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #26...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0024', factionBonus: 'SilverGuard', repAmount: 130 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0027', factionBonus: 'Scholars', repAmount: 130 }
    ],
    reputationRequirement: 260
  },
  {
    id: 'lore_dialogue_0027',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #27...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0025', factionBonus: 'SilverGuard', repAmount: 135 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0028', factionBonus: 'Scholars', repAmount: 135 }
    ],
    reputationRequirement: 270
  },
  {
    id: 'lore_dialogue_0028',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #28...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0026', factionBonus: 'SilverGuard', repAmount: 140 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0029', factionBonus: 'Scholars', repAmount: 140 }
    ],
    reputationRequirement: 280
  },
  {
    id: 'lore_dialogue_0029',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #29...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0027', factionBonus: 'SilverGuard', repAmount: 145 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0030', factionBonus: 'Scholars', repAmount: 145 }
    ],
    reputationRequirement: 290
  },
  {
    id: 'lore_dialogue_0030',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #30...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0028', factionBonus: 'SilverGuard', repAmount: 150 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0031', factionBonus: 'Scholars', repAmount: 150 }
    ],
    reputationRequirement: 300
  },
  {
    id: 'lore_dialogue_0031',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #31...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0029', factionBonus: 'SilverGuard', repAmount: 155 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0032', factionBonus: 'Scholars', repAmount: 155 }
    ],
    reputationRequirement: 310
  },
  {
    id: 'lore_dialogue_0032',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #32...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0030', factionBonus: 'SilverGuard', repAmount: 160 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0033', factionBonus: 'Scholars', repAmount: 160 }
    ],
    reputationRequirement: 320
  },
  {
    id: 'lore_dialogue_0033',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #33...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0031', factionBonus: 'SilverGuard', repAmount: 165 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0034', factionBonus: 'Scholars', repAmount: 165 }
    ],
    reputationRequirement: 330
  },
  {
    id: 'lore_dialogue_0034',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #34...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0032', factionBonus: 'SilverGuard', repAmount: 170 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0035', factionBonus: 'Scholars', repAmount: 170 }
    ],
    reputationRequirement: 340
  },
  {
    id: 'lore_dialogue_0035',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #35...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0033', factionBonus: 'SilverGuard', repAmount: 175 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0036', factionBonus: 'Scholars', repAmount: 175 }
    ],
    reputationRequirement: 350
  },
  {
    id: 'lore_dialogue_0036',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #36...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0034', factionBonus: 'SilverGuard', repAmount: 180 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0037', factionBonus: 'Scholars', repAmount: 180 }
    ],
    reputationRequirement: 360
  },
  {
    id: 'lore_dialogue_0037',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #37...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0035', factionBonus: 'SilverGuard', repAmount: 185 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0038', factionBonus: 'Scholars', repAmount: 185 }
    ],
    reputationRequirement: 370
  },
  {
    id: 'lore_dialogue_0038',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #38...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0036', factionBonus: 'SilverGuard', repAmount: 190 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0039', factionBonus: 'Scholars', repAmount: 190 }
    ],
    reputationRequirement: 380
  },
  {
    id: 'lore_dialogue_0039',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #39...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0037', factionBonus: 'SilverGuard', repAmount: 195 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0040', factionBonus: 'Scholars', repAmount: 195 }
    ],
    reputationRequirement: 390
  },
  {
    id: 'lore_dialogue_0040',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #40...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0038', factionBonus: 'SilverGuard', repAmount: 200 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0041', factionBonus: 'Scholars', repAmount: 200 }
    ],
    reputationRequirement: 400
  },
  {
    id: 'lore_dialogue_0041',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #41...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0039', factionBonus: 'SilverGuard', repAmount: 205 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0042', factionBonus: 'Scholars', repAmount: 205 }
    ],
    reputationRequirement: 410
  },
  {
    id: 'lore_dialogue_0042',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #42...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0040', factionBonus: 'SilverGuard', repAmount: 210 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0043', factionBonus: 'Scholars', repAmount: 210 }
    ],
    reputationRequirement: 420
  },
  {
    id: 'lore_dialogue_0043',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #43...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0041', factionBonus: 'SilverGuard', repAmount: 215 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0044', factionBonus: 'Scholars', repAmount: 215 }
    ],
    reputationRequirement: 430
  },
  {
    id: 'lore_dialogue_0044',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #44...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0042', factionBonus: 'SilverGuard', repAmount: 220 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0045', factionBonus: 'Scholars', repAmount: 220 }
    ],
    reputationRequirement: 440
  },
  {
    id: 'lore_dialogue_0045',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #45...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0043', factionBonus: 'SilverGuard', repAmount: 225 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0046', factionBonus: 'Scholars', repAmount: 225 }
    ],
    reputationRequirement: 450
  },
  {
    id: 'lore_dialogue_0046',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #46...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0044', factionBonus: 'SilverGuard', repAmount: 230 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0047', factionBonus: 'Scholars', repAmount: 230 }
    ],
    reputationRequirement: 460
  },
  {
    id: 'lore_dialogue_0047',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #47...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0045', factionBonus: 'SilverGuard', repAmount: 235 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0048', factionBonus: 'Scholars', repAmount: 235 }
    ],
    reputationRequirement: 470
  },
  {
    id: 'lore_dialogue_0048',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #48...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0046', factionBonus: 'SilverGuard', repAmount: 240 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0049', factionBonus: 'Scholars', repAmount: 240 }
    ],
    reputationRequirement: 480
  },
  {
    id: 'lore_dialogue_0049',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #49...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0047', factionBonus: 'SilverGuard', repAmount: 245 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0050', factionBonus: 'Scholars', repAmount: 245 }
    ],
    reputationRequirement: 490
  },
  {
    id: 'lore_dialogue_0050',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #50...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0048', factionBonus: 'SilverGuard', repAmount: 250 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0051', factionBonus: 'Scholars', repAmount: 250 }
    ],
    reputationRequirement: 500
  },
  {
    id: 'lore_dialogue_0051',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #51...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0049', factionBonus: 'SilverGuard', repAmount: 255 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0052', factionBonus: 'Scholars', repAmount: 255 }
    ],
    reputationRequirement: 510
  },
  {
    id: 'lore_dialogue_0052',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #52...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0050', factionBonus: 'SilverGuard', repAmount: 260 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0053', factionBonus: 'Scholars', repAmount: 260 }
    ],
    reputationRequirement: 520
  },
  {
    id: 'lore_dialogue_0053',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #53...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0051', factionBonus: 'SilverGuard', repAmount: 265 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0054', factionBonus: 'Scholars', repAmount: 265 }
    ],
    reputationRequirement: 530
  },
  {
    id: 'lore_dialogue_0054',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #54...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0052', factionBonus: 'SilverGuard', repAmount: 270 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0055', factionBonus: 'Scholars', repAmount: 270 }
    ],
    reputationRequirement: 540
  },
  {
    id: 'lore_dialogue_0055',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #55...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0053', factionBonus: 'SilverGuard', repAmount: 275 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0056', factionBonus: 'Scholars', repAmount: 275 }
    ],
    reputationRequirement: 550
  },
  {
    id: 'lore_dialogue_0056',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #56...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0054', factionBonus: 'SilverGuard', repAmount: 280 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0057', factionBonus: 'Scholars', repAmount: 280 }
    ],
    reputationRequirement: 560
  },
  {
    id: 'lore_dialogue_0057',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #57...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0055', factionBonus: 'SilverGuard', repAmount: 285 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0058', factionBonus: 'Scholars', repAmount: 285 }
    ],
    reputationRequirement: 570
  },
  {
    id: 'lore_dialogue_0058',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #58...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0056', factionBonus: 'SilverGuard', repAmount: 290 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0059', factionBonus: 'Scholars', repAmount: 290 }
    ],
    reputationRequirement: 580
  },
  {
    id: 'lore_dialogue_0059',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #59...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0057', factionBonus: 'SilverGuard', repAmount: 295 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0060', factionBonus: 'Scholars', repAmount: 295 }
    ],
    reputationRequirement: 590
  },
  {
    id: 'lore_dialogue_0060',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #60...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0058', factionBonus: 'SilverGuard', repAmount: 300 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0061', factionBonus: 'Scholars', repAmount: 300 }
    ],
    reputationRequirement: 600
  },
  {
    id: 'lore_dialogue_0061',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #61...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0059', factionBonus: 'SilverGuard', repAmount: 305 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0062', factionBonus: 'Scholars', repAmount: 305 }
    ],
    reputationRequirement: 610
  },
  {
    id: 'lore_dialogue_0062',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #62...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0060', factionBonus: 'SilverGuard', repAmount: 310 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0063', factionBonus: 'Scholars', repAmount: 310 }
    ],
    reputationRequirement: 620
  },
  {
    id: 'lore_dialogue_0063',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #63...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0061', factionBonus: 'SilverGuard', repAmount: 315 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0064', factionBonus: 'Scholars', repAmount: 315 }
    ],
    reputationRequirement: 630
  },
  {
    id: 'lore_dialogue_0064',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #64...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0062', factionBonus: 'SilverGuard', repAmount: 320 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0065', factionBonus: 'Scholars', repAmount: 320 }
    ],
    reputationRequirement: 640
  },
  {
    id: 'lore_dialogue_0065',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #65...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0063', factionBonus: 'SilverGuard', repAmount: 325 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0066', factionBonus: 'Scholars', repAmount: 325 }
    ],
    reputationRequirement: 650
  },
  {
    id: 'lore_dialogue_0066',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #66...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0064', factionBonus: 'SilverGuard', repAmount: 330 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0067', factionBonus: 'Scholars', repAmount: 330 }
    ],
    reputationRequirement: 660
  },
  {
    id: 'lore_dialogue_0067',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #67...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0065', factionBonus: 'SilverGuard', repAmount: 335 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0068', factionBonus: 'Scholars', repAmount: 335 }
    ],
    reputationRequirement: 670
  },
  {
    id: 'lore_dialogue_0068',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #68...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0066', factionBonus: 'SilverGuard', repAmount: 340 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0069', factionBonus: 'Scholars', repAmount: 340 }
    ],
    reputationRequirement: 680
  },
  {
    id: 'lore_dialogue_0069',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #69...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0067', factionBonus: 'SilverGuard', repAmount: 345 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0070', factionBonus: 'Scholars', repAmount: 345 }
    ],
    reputationRequirement: 690
  },
  {
    id: 'lore_dialogue_0070',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #70...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0068', factionBonus: 'SilverGuard', repAmount: 350 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0071', factionBonus: 'Scholars', repAmount: 350 }
    ],
    reputationRequirement: 700
  },
  {
    id: 'lore_dialogue_0071',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #71...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0069', factionBonus: 'SilverGuard', repAmount: 355 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0072', factionBonus: 'Scholars', repAmount: 355 }
    ],
    reputationRequirement: 710
  },
  {
    id: 'lore_dialogue_0072',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #72...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0070', factionBonus: 'SilverGuard', repAmount: 360 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0073', factionBonus: 'Scholars', repAmount: 360 }
    ],
    reputationRequirement: 720
  },
  {
    id: 'lore_dialogue_0073',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #73...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0071', factionBonus: 'SilverGuard', repAmount: 365 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0074', factionBonus: 'Scholars', repAmount: 365 }
    ],
    reputationRequirement: 730
  },
  {
    id: 'lore_dialogue_0074',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #74...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0072', factionBonus: 'SilverGuard', repAmount: 370 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0075', factionBonus: 'Scholars', repAmount: 370 }
    ],
    reputationRequirement: 740
  },
  {
    id: 'lore_dialogue_0075',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #75...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0073', factionBonus: 'SilverGuard', repAmount: 375 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0076', factionBonus: 'Scholars', repAmount: 375 }
    ],
    reputationRequirement: 750
  },
  {
    id: 'lore_dialogue_0076',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #76...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0074', factionBonus: 'SilverGuard', repAmount: 380 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0077', factionBonus: 'Scholars', repAmount: 380 }
    ],
    reputationRequirement: 760
  },
  {
    id: 'lore_dialogue_0077',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #77...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0075', factionBonus: 'SilverGuard', repAmount: 385 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0078', factionBonus: 'Scholars', repAmount: 385 }
    ],
    reputationRequirement: 770
  },
  {
    id: 'lore_dialogue_0078',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #78...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0076', factionBonus: 'SilverGuard', repAmount: 390 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0079', factionBonus: 'Scholars', repAmount: 390 }
    ],
    reputationRequirement: 780
  },
  {
    id: 'lore_dialogue_0079',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #79...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0077', factionBonus: 'SilverGuard', repAmount: 395 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0080', factionBonus: 'Scholars', repAmount: 395 }
    ],
    reputationRequirement: 790
  },
  {
    id: 'lore_dialogue_0080',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #80...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0078', factionBonus: 'SilverGuard', repAmount: 400 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0081', factionBonus: 'Scholars', repAmount: 400 }
    ],
    reputationRequirement: 800
  },
  {
    id: 'lore_dialogue_0081',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #81...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0079', factionBonus: 'SilverGuard', repAmount: 405 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0082', factionBonus: 'Scholars', repAmount: 405 }
    ],
    reputationRequirement: 810
  },
  {
    id: 'lore_dialogue_0082',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #82...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0080', factionBonus: 'SilverGuard', repAmount: 410 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0083', factionBonus: 'Scholars', repAmount: 410 }
    ],
    reputationRequirement: 820
  },
  {
    id: 'lore_dialogue_0083',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #83...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0081', factionBonus: 'SilverGuard', repAmount: 415 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0084', factionBonus: 'Scholars', repAmount: 415 }
    ],
    reputationRequirement: 830
  },
  {
    id: 'lore_dialogue_0084',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #84...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0082', factionBonus: 'SilverGuard', repAmount: 420 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0085', factionBonus: 'Scholars', repAmount: 420 }
    ],
    reputationRequirement: 840
  },
  {
    id: 'lore_dialogue_0085',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #85...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0083', factionBonus: 'SilverGuard', repAmount: 425 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0086', factionBonus: 'Scholars', repAmount: 425 }
    ],
    reputationRequirement: 850
  },
  {
    id: 'lore_dialogue_0086',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #86...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0084', factionBonus: 'SilverGuard', repAmount: 430 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0087', factionBonus: 'Scholars', repAmount: 430 }
    ],
    reputationRequirement: 860
  },
  {
    id: 'lore_dialogue_0087',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #87...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0085', factionBonus: 'SilverGuard', repAmount: 435 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0088', factionBonus: 'Scholars', repAmount: 435 }
    ],
    reputationRequirement: 870
  },
  {
    id: 'lore_dialogue_0088',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #88...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0086', factionBonus: 'SilverGuard', repAmount: 440 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0089', factionBonus: 'Scholars', repAmount: 440 }
    ],
    reputationRequirement: 880
  },
  {
    id: 'lore_dialogue_0089',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #89...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0087', factionBonus: 'SilverGuard', repAmount: 445 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0090', factionBonus: 'Scholars', repAmount: 445 }
    ],
    reputationRequirement: 890
  },
  {
    id: 'lore_dialogue_0090',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #90...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0088', factionBonus: 'SilverGuard', repAmount: 450 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0091', factionBonus: 'Scholars', repAmount: 450 }
    ],
    reputationRequirement: 900
  },
  {
    id: 'lore_dialogue_0091',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #91...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0089', factionBonus: 'SilverGuard', repAmount: 455 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0092', factionBonus: 'Scholars', repAmount: 455 }
    ],
    reputationRequirement: 910
  },
  {
    id: 'lore_dialogue_0092',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #92...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0090', factionBonus: 'SilverGuard', repAmount: 460 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0093', factionBonus: 'Scholars', repAmount: 460 }
    ],
    reputationRequirement: 920
  },
  {
    id: 'lore_dialogue_0093',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #93...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0091', factionBonus: 'SilverGuard', repAmount: 465 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0094', factionBonus: 'Scholars', repAmount: 465 }
    ],
    reputationRequirement: 930
  },
  {
    id: 'lore_dialogue_0094',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #94...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0092', factionBonus: 'SilverGuard', repAmount: 470 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0095', factionBonus: 'Scholars', repAmount: 470 }
    ],
    reputationRequirement: 940
  },
  {
    id: 'lore_dialogue_0095',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #95...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0093', factionBonus: 'SilverGuard', repAmount: 475 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0096', factionBonus: 'Scholars', repAmount: 475 }
    ],
    reputationRequirement: 950
  },
  {
    id: 'lore_dialogue_0096',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #96...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0094', factionBonus: 'SilverGuard', repAmount: 480 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0097', factionBonus: 'Scholars', repAmount: 480 }
    ],
    reputationRequirement: 960
  },
  {
    id: 'lore_dialogue_0097',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #97...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0095', factionBonus: 'SilverGuard', repAmount: 485 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0098', factionBonus: 'Scholars', repAmount: 485 }
    ],
    reputationRequirement: 970
  },
  {
    id: 'lore_dialogue_0098',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #98...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0096', factionBonus: 'SilverGuard', repAmount: 490 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0099', factionBonus: 'Scholars', repAmount: 490 }
    ],
    reputationRequirement: 980
  },
  {
    id: 'lore_dialogue_0099',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #99...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0097', factionBonus: 'SilverGuard', repAmount: 495 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0100', factionBonus: 'Scholars', repAmount: 495 }
    ],
    reputationRequirement: 990
  },
  {
    id: 'lore_dialogue_0100',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #100...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0098', factionBonus: 'SilverGuard', repAmount: 500 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0101', factionBonus: 'Scholars', repAmount: 500 }
    ],
    reputationRequirement: 1000
  },
  {
    id: 'lore_dialogue_0101',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #101...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0099', factionBonus: 'SilverGuard', repAmount: 505 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0102', factionBonus: 'Scholars', repAmount: 505 }
    ],
    reputationRequirement: 1010
  },
  {
    id: 'lore_dialogue_0102',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #102...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0100', factionBonus: 'SilverGuard', repAmount: 510 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0103', factionBonus: 'Scholars', repAmount: 510 }
    ],
    reputationRequirement: 1020
  },
  {
    id: 'lore_dialogue_0103',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #103...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0101', factionBonus: 'SilverGuard', repAmount: 515 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0104', factionBonus: 'Scholars', repAmount: 515 }
    ],
    reputationRequirement: 1030
  },
  {
    id: 'lore_dialogue_0104',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #104...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0102', factionBonus: 'SilverGuard', repAmount: 520 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0105', factionBonus: 'Scholars', repAmount: 520 }
    ],
    reputationRequirement: 1040
  },
  {
    id: 'lore_dialogue_0105',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #105...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0103', factionBonus: 'SilverGuard', repAmount: 525 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0106', factionBonus: 'Scholars', repAmount: 525 }
    ],
    reputationRequirement: 1050
  },
  {
    id: 'lore_dialogue_0106',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #106...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0104', factionBonus: 'SilverGuard', repAmount: 530 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0107', factionBonus: 'Scholars', repAmount: 530 }
    ],
    reputationRequirement: 1060
  },
  {
    id: 'lore_dialogue_0107',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #107...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0105', factionBonus: 'SilverGuard', repAmount: 535 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0108', factionBonus: 'Scholars', repAmount: 535 }
    ],
    reputationRequirement: 1070
  },
  {
    id: 'lore_dialogue_0108',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #108...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0106', factionBonus: 'SilverGuard', repAmount: 540 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0109', factionBonus: 'Scholars', repAmount: 540 }
    ],
    reputationRequirement: 1080
  },
  {
    id: 'lore_dialogue_0109',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #109...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0107', factionBonus: 'SilverGuard', repAmount: 545 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0110', factionBonus: 'Scholars', repAmount: 545 }
    ],
    reputationRequirement: 1090
  },
  {
    id: 'lore_dialogue_0110',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #110...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0108', factionBonus: 'SilverGuard', repAmount: 550 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0111', factionBonus: 'Scholars', repAmount: 550 }
    ],
    reputationRequirement: 1100
  },
  {
    id: 'lore_dialogue_0111',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #111...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0109', factionBonus: 'SilverGuard', repAmount: 555 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0112', factionBonus: 'Scholars', repAmount: 555 }
    ],
    reputationRequirement: 1110
  },
  {
    id: 'lore_dialogue_0112',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #112...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0110', factionBonus: 'SilverGuard', repAmount: 560 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0113', factionBonus: 'Scholars', repAmount: 560 }
    ],
    reputationRequirement: 1120
  },
  {
    id: 'lore_dialogue_0113',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #113...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0111', factionBonus: 'SilverGuard', repAmount: 565 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0114', factionBonus: 'Scholars', repAmount: 565 }
    ],
    reputationRequirement: 1130
  },
  {
    id: 'lore_dialogue_0114',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #114...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0112', factionBonus: 'SilverGuard', repAmount: 570 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0115', factionBonus: 'Scholars', repAmount: 570 }
    ],
    reputationRequirement: 1140
  },
  {
    id: 'lore_dialogue_0115',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #115...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0113', factionBonus: 'SilverGuard', repAmount: 575 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0116', factionBonus: 'Scholars', repAmount: 575 }
    ],
    reputationRequirement: 1150
  },
  {
    id: 'lore_dialogue_0116',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #116...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0114', factionBonus: 'SilverGuard', repAmount: 580 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0117', factionBonus: 'Scholars', repAmount: 580 }
    ],
    reputationRequirement: 1160
  },
  {
    id: 'lore_dialogue_0117',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #117...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0115', factionBonus: 'SilverGuard', repAmount: 585 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0118', factionBonus: 'Scholars', repAmount: 585 }
    ],
    reputationRequirement: 1170
  },
  {
    id: 'lore_dialogue_0118',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #118...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0116', factionBonus: 'SilverGuard', repAmount: 590 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0119', factionBonus: 'Scholars', repAmount: 590 }
    ],
    reputationRequirement: 1180
  },
  {
    id: 'lore_dialogue_0119',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #119...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0117', factionBonus: 'SilverGuard', repAmount: 595 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0120', factionBonus: 'Scholars', repAmount: 595 }
    ],
    reputationRequirement: 1190
  },
  {
    id: 'lore_dialogue_0120',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #120...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0118', factionBonus: 'SilverGuard', repAmount: 600 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0121', factionBonus: 'Scholars', repAmount: 600 }
    ],
    reputationRequirement: 1200
  },
  {
    id: 'lore_dialogue_0121',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #121...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0119', factionBonus: 'SilverGuard', repAmount: 605 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0122', factionBonus: 'Scholars', repAmount: 605 }
    ],
    reputationRequirement: 1210
  },
  {
    id: 'lore_dialogue_0122',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #122...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0120', factionBonus: 'SilverGuard', repAmount: 610 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0123', factionBonus: 'Scholars', repAmount: 610 }
    ],
    reputationRequirement: 1220
  },
  {
    id: 'lore_dialogue_0123',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #123...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0121', factionBonus: 'SilverGuard', repAmount: 615 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0124', factionBonus: 'Scholars', repAmount: 615 }
    ],
    reputationRequirement: 1230
  },
  {
    id: 'lore_dialogue_0124',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #124...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0122', factionBonus: 'SilverGuard', repAmount: 620 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0125', factionBonus: 'Scholars', repAmount: 620 }
    ],
    reputationRequirement: 1240
  },
  {
    id: 'lore_dialogue_0125',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #125...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0123', factionBonus: 'SilverGuard', repAmount: 625 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0126', factionBonus: 'Scholars', repAmount: 625 }
    ],
    reputationRequirement: 1250
  },
  {
    id: 'lore_dialogue_0126',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #126...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0124', factionBonus: 'SilverGuard', repAmount: 630 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0127', factionBonus: 'Scholars', repAmount: 630 }
    ],
    reputationRequirement: 1260
  },
  {
    id: 'lore_dialogue_0127',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #127...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0125', factionBonus: 'SilverGuard', repAmount: 635 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0128', factionBonus: 'Scholars', repAmount: 635 }
    ],
    reputationRequirement: 1270
  },
  {
    id: 'lore_dialogue_0128',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #128...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0126', factionBonus: 'SilverGuard', repAmount: 640 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0129', factionBonus: 'Scholars', repAmount: 640 }
    ],
    reputationRequirement: 1280
  },
  {
    id: 'lore_dialogue_0129',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #129...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0127', factionBonus: 'SilverGuard', repAmount: 645 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0130', factionBonus: 'Scholars', repAmount: 645 }
    ],
    reputationRequirement: 1290
  },
  {
    id: 'lore_dialogue_0130',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #130...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0128', factionBonus: 'SilverGuard', repAmount: 650 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0131', factionBonus: 'Scholars', repAmount: 650 }
    ],
    reputationRequirement: 1300
  },
  {
    id: 'lore_dialogue_0131',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #131...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0129', factionBonus: 'SilverGuard', repAmount: 655 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0132', factionBonus: 'Scholars', repAmount: 655 }
    ],
    reputationRequirement: 1310
  },
  {
    id: 'lore_dialogue_0132',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #132...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0130', factionBonus: 'SilverGuard', repAmount: 660 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0133', factionBonus: 'Scholars', repAmount: 660 }
    ],
    reputationRequirement: 1320
  },
  {
    id: 'lore_dialogue_0133',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #133...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0131', factionBonus: 'SilverGuard', repAmount: 665 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0134', factionBonus: 'Scholars', repAmount: 665 }
    ],
    reputationRequirement: 1330
  },
  {
    id: 'lore_dialogue_0134',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #134...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0132', factionBonus: 'SilverGuard', repAmount: 670 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0135', factionBonus: 'Scholars', repAmount: 670 }
    ],
    reputationRequirement: 1340
  },
  {
    id: 'lore_dialogue_0135',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #135...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0133', factionBonus: 'SilverGuard', repAmount: 675 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0136', factionBonus: 'Scholars', repAmount: 675 }
    ],
    reputationRequirement: 1350
  },
  {
    id: 'lore_dialogue_0136',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #136...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0134', factionBonus: 'SilverGuard', repAmount: 680 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0137', factionBonus: 'Scholars', repAmount: 680 }
    ],
    reputationRequirement: 1360
  },
  {
    id: 'lore_dialogue_0137',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #137...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0135', factionBonus: 'SilverGuard', repAmount: 685 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0138', factionBonus: 'Scholars', repAmount: 685 }
    ],
    reputationRequirement: 1370
  },
  {
    id: 'lore_dialogue_0138',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #138...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0136', factionBonus: 'SilverGuard', repAmount: 690 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0139', factionBonus: 'Scholars', repAmount: 690 }
    ],
    reputationRequirement: 1380
  },
  {
    id: 'lore_dialogue_0139',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #139...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0137', factionBonus: 'SilverGuard', repAmount: 695 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0140', factionBonus: 'Scholars', repAmount: 695 }
    ],
    reputationRequirement: 1390
  },
  {
    id: 'lore_dialogue_0140',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #140...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0138', factionBonus: 'SilverGuard', repAmount: 700 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0141', factionBonus: 'Scholars', repAmount: 700 }
    ],
    reputationRequirement: 1400
  },
  {
    id: 'lore_dialogue_0141',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #141...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0139', factionBonus: 'SilverGuard', repAmount: 705 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0142', factionBonus: 'Scholars', repAmount: 705 }
    ],
    reputationRequirement: 1410
  },
  {
    id: 'lore_dialogue_0142',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #142...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0140', factionBonus: 'SilverGuard', repAmount: 710 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0143', factionBonus: 'Scholars', repAmount: 710 }
    ],
    reputationRequirement: 1420
  },
  {
    id: 'lore_dialogue_0143',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #143...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0141', factionBonus: 'SilverGuard', repAmount: 715 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0144', factionBonus: 'Scholars', repAmount: 715 }
    ],
    reputationRequirement: 1430
  },
  {
    id: 'lore_dialogue_0144',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #144...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0142', factionBonus: 'SilverGuard', repAmount: 720 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0145', factionBonus: 'Scholars', repAmount: 720 }
    ],
    reputationRequirement: 1440
  },
  {
    id: 'lore_dialogue_0145',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #145...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0143', factionBonus: 'SilverGuard', repAmount: 725 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0146', factionBonus: 'Scholars', repAmount: 725 }
    ],
    reputationRequirement: 1450
  },
  {
    id: 'lore_dialogue_0146',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #146...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0144', factionBonus: 'SilverGuard', repAmount: 730 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0147', factionBonus: 'Scholars', repAmount: 730 }
    ],
    reputationRequirement: 1460
  },
  {
    id: 'lore_dialogue_0147',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #147...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0145', factionBonus: 'SilverGuard', repAmount: 735 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0148', factionBonus: 'Scholars', repAmount: 735 }
    ],
    reputationRequirement: 1470
  },
  {
    id: 'lore_dialogue_0148',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #148...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0146', factionBonus: 'SilverGuard', repAmount: 740 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0149', factionBonus: 'Scholars', repAmount: 740 }
    ],
    reputationRequirement: 1480
  },
  {
    id: 'lore_dialogue_0149',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #149...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0147', factionBonus: 'SilverGuard', repAmount: 745 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0150', factionBonus: 'Scholars', repAmount: 745 }
    ],
    reputationRequirement: 1490
  },
  {
    id: 'lore_dialogue_0150',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #150...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0148', factionBonus: 'SilverGuard', repAmount: 750 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0151', factionBonus: 'Scholars', repAmount: 750 }
    ],
    reputationRequirement: 1500
  },
  {
    id: 'lore_dialogue_0151',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #151...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0149', factionBonus: 'SilverGuard', repAmount: 755 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0152', factionBonus: 'Scholars', repAmount: 755 }
    ],
    reputationRequirement: 1510
  },
  {
    id: 'lore_dialogue_0152',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #152...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0150', factionBonus: 'SilverGuard', repAmount: 760 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0153', factionBonus: 'Scholars', repAmount: 760 }
    ],
    reputationRequirement: 1520
  },
  {
    id: 'lore_dialogue_0153',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #153...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0151', factionBonus: 'SilverGuard', repAmount: 765 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0154', factionBonus: 'Scholars', repAmount: 765 }
    ],
    reputationRequirement: 1530
  },
  {
    id: 'lore_dialogue_0154',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #154...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0152', factionBonus: 'SilverGuard', repAmount: 770 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0155', factionBonus: 'Scholars', repAmount: 770 }
    ],
    reputationRequirement: 1540
  },
  {
    id: 'lore_dialogue_0155',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #155...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0153', factionBonus: 'SilverGuard', repAmount: 775 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0156', factionBonus: 'Scholars', repAmount: 775 }
    ],
    reputationRequirement: 1550
  },
  {
    id: 'lore_dialogue_0156',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #156...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0154', factionBonus: 'SilverGuard', repAmount: 780 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0157', factionBonus: 'Scholars', repAmount: 780 }
    ],
    reputationRequirement: 1560
  },
  {
    id: 'lore_dialogue_0157',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #157...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0155', factionBonus: 'SilverGuard', repAmount: 785 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0158', factionBonus: 'Scholars', repAmount: 785 }
    ],
    reputationRequirement: 1570
  },
  {
    id: 'lore_dialogue_0158',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #158...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0156', factionBonus: 'SilverGuard', repAmount: 790 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0159', factionBonus: 'Scholars', repAmount: 790 }
    ],
    reputationRequirement: 1580
  },
  {
    id: 'lore_dialogue_0159',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #159...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0157', factionBonus: 'SilverGuard', repAmount: 795 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0160', factionBonus: 'Scholars', repAmount: 795 }
    ],
    reputationRequirement: 1590
  },
  {
    id: 'lore_dialogue_0160',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #160...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0158', factionBonus: 'SilverGuard', repAmount: 800 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0161', factionBonus: 'Scholars', repAmount: 800 }
    ],
    reputationRequirement: 1600
  },
  {
    id: 'lore_dialogue_0161',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #161...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0159', factionBonus: 'SilverGuard', repAmount: 805 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0162', factionBonus: 'Scholars', repAmount: 805 }
    ],
    reputationRequirement: 1610
  },
  {
    id: 'lore_dialogue_0162',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #162...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0160', factionBonus: 'SilverGuard', repAmount: 810 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0163', factionBonus: 'Scholars', repAmount: 810 }
    ],
    reputationRequirement: 1620
  },
  {
    id: 'lore_dialogue_0163',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #163...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0161', factionBonus: 'SilverGuard', repAmount: 815 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0164', factionBonus: 'Scholars', repAmount: 815 }
    ],
    reputationRequirement: 1630
  },
  {
    id: 'lore_dialogue_0164',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #164...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0162', factionBonus: 'SilverGuard', repAmount: 820 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0165', factionBonus: 'Scholars', repAmount: 820 }
    ],
    reputationRequirement: 1640
  },
  {
    id: 'lore_dialogue_0165',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #165...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0163', factionBonus: 'SilverGuard', repAmount: 825 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0166', factionBonus: 'Scholars', repAmount: 825 }
    ],
    reputationRequirement: 1650
  },
  {
    id: 'lore_dialogue_0166',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #166...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0164', factionBonus: 'SilverGuard', repAmount: 830 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0167', factionBonus: 'Scholars', repAmount: 830 }
    ],
    reputationRequirement: 1660
  },
  {
    id: 'lore_dialogue_0167',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #167...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0165', factionBonus: 'SilverGuard', repAmount: 835 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0168', factionBonus: 'Scholars', repAmount: 835 }
    ],
    reputationRequirement: 1670
  },
  {
    id: 'lore_dialogue_0168',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #168...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0166', factionBonus: 'SilverGuard', repAmount: 840 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0169', factionBonus: 'Scholars', repAmount: 840 }
    ],
    reputationRequirement: 1680
  },
  {
    id: 'lore_dialogue_0169',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #169...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0167', factionBonus: 'SilverGuard', repAmount: 845 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0170', factionBonus: 'Scholars', repAmount: 845 }
    ],
    reputationRequirement: 1690
  },
  {
    id: 'lore_dialogue_0170',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #170...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0168', factionBonus: 'SilverGuard', repAmount: 850 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0171', factionBonus: 'Scholars', repAmount: 850 }
    ],
    reputationRequirement: 1700
  },
  {
    id: 'lore_dialogue_0171',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #171...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0169', factionBonus: 'SilverGuard', repAmount: 855 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0172', factionBonus: 'Scholars', repAmount: 855 }
    ],
    reputationRequirement: 1710
  },
  {
    id: 'lore_dialogue_0172',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #172...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0170', factionBonus: 'SilverGuard', repAmount: 860 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0173', factionBonus: 'Scholars', repAmount: 860 }
    ],
    reputationRequirement: 1720
  },
  {
    id: 'lore_dialogue_0173',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #173...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0171', factionBonus: 'SilverGuard', repAmount: 865 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0174', factionBonus: 'Scholars', repAmount: 865 }
    ],
    reputationRequirement: 1730
  },
  {
    id: 'lore_dialogue_0174',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #174...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0172', factionBonus: 'SilverGuard', repAmount: 870 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0175', factionBonus: 'Scholars', repAmount: 870 }
    ],
    reputationRequirement: 1740
  },
  {
    id: 'lore_dialogue_0175',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #175...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0173', factionBonus: 'SilverGuard', repAmount: 875 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0176', factionBonus: 'Scholars', repAmount: 875 }
    ],
    reputationRequirement: 1750
  },
  {
    id: 'lore_dialogue_0176',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #176...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0174', factionBonus: 'SilverGuard', repAmount: 880 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0177', factionBonus: 'Scholars', repAmount: 880 }
    ],
    reputationRequirement: 1760
  },
  {
    id: 'lore_dialogue_0177',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #177...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0175', factionBonus: 'SilverGuard', repAmount: 885 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0178', factionBonus: 'Scholars', repAmount: 885 }
    ],
    reputationRequirement: 1770
  },
  {
    id: 'lore_dialogue_0178',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #178...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0176', factionBonus: 'SilverGuard', repAmount: 890 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0179', factionBonus: 'Scholars', repAmount: 890 }
    ],
    reputationRequirement: 1780
  },
  {
    id: 'lore_dialogue_0179',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #179...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0177', factionBonus: 'SilverGuard', repAmount: 895 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0180', factionBonus: 'Scholars', repAmount: 895 }
    ],
    reputationRequirement: 1790
  },
  {
    id: 'lore_dialogue_0180',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #180...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0178', factionBonus: 'SilverGuard', repAmount: 900 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0181', factionBonus: 'Scholars', repAmount: 900 }
    ],
    reputationRequirement: 1800
  },
  {
    id: 'lore_dialogue_0181',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #181...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0179', factionBonus: 'SilverGuard', repAmount: 905 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0182', factionBonus: 'Scholars', repAmount: 905 }
    ],
    reputationRequirement: 1810
  },
  {
    id: 'lore_dialogue_0182',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #182...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0180', factionBonus: 'SilverGuard', repAmount: 910 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0183', factionBonus: 'Scholars', repAmount: 910 }
    ],
    reputationRequirement: 1820
  },
  {
    id: 'lore_dialogue_0183',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #183...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0181', factionBonus: 'SilverGuard', repAmount: 915 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0184', factionBonus: 'Scholars', repAmount: 915 }
    ],
    reputationRequirement: 1830
  },
  {
    id: 'lore_dialogue_0184',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #184...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0182', factionBonus: 'SilverGuard', repAmount: 920 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0185', factionBonus: 'Scholars', repAmount: 920 }
    ],
    reputationRequirement: 1840
  },
  {
    id: 'lore_dialogue_0185',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #185...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0183', factionBonus: 'SilverGuard', repAmount: 925 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0186', factionBonus: 'Scholars', repAmount: 925 }
    ],
    reputationRequirement: 1850
  },
  {
    id: 'lore_dialogue_0186',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #186...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0184', factionBonus: 'SilverGuard', repAmount: 930 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0187', factionBonus: 'Scholars', repAmount: 930 }
    ],
    reputationRequirement: 1860
  },
  {
    id: 'lore_dialogue_0187',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #187...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0185', factionBonus: 'SilverGuard', repAmount: 935 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0188', factionBonus: 'Scholars', repAmount: 935 }
    ],
    reputationRequirement: 1870
  },
  {
    id: 'lore_dialogue_0188',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #188...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0186', factionBonus: 'SilverGuard', repAmount: 940 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0189', factionBonus: 'Scholars', repAmount: 940 }
    ],
    reputationRequirement: 1880
  },
  {
    id: 'lore_dialogue_0189',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #189...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0187', factionBonus: 'SilverGuard', repAmount: 945 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0190', factionBonus: 'Scholars', repAmount: 945 }
    ],
    reputationRequirement: 1890
  },
  {
    id: 'lore_dialogue_0190',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #190...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0188', factionBonus: 'SilverGuard', repAmount: 950 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0191', factionBonus: 'Scholars', repAmount: 950 }
    ],
    reputationRequirement: 1900
  },
  {
    id: 'lore_dialogue_0191',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #191...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0189', factionBonus: 'SilverGuard', repAmount: 955 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0192', factionBonus: 'Scholars', repAmount: 955 }
    ],
    reputationRequirement: 1910
  },
  {
    id: 'lore_dialogue_0192',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #192...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0190', factionBonus: 'SilverGuard', repAmount: 960 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0193', factionBonus: 'Scholars', repAmount: 960 }
    ],
    reputationRequirement: 1920
  },
  {
    id: 'lore_dialogue_0193',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #193...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0191', factionBonus: 'SilverGuard', repAmount: 965 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0194', factionBonus: 'Scholars', repAmount: 965 }
    ],
    reputationRequirement: 1930
  },
  {
    id: 'lore_dialogue_0194',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #194...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0192', factionBonus: 'SilverGuard', repAmount: 970 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0195', factionBonus: 'Scholars', repAmount: 970 }
    ],
    reputationRequirement: 1940
  },
  {
    id: 'lore_dialogue_0195',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #195...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0193', factionBonus: 'SilverGuard', repAmount: 975 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0196', factionBonus: 'Scholars', repAmount: 975 }
    ],
    reputationRequirement: 1950
  },
  {
    id: 'lore_dialogue_0196',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #196...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0194', factionBonus: 'SilverGuard', repAmount: 980 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0197', factionBonus: 'Scholars', repAmount: 980 }
    ],
    reputationRequirement: 1960
  },
  {
    id: 'lore_dialogue_0197',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #197...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0195', factionBonus: 'SilverGuard', repAmount: 985 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0198', factionBonus: 'Scholars', repAmount: 985 }
    ],
    reputationRequirement: 1970
  },
  {
    id: 'lore_dialogue_0198',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #198...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0196', factionBonus: 'SilverGuard', repAmount: 990 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0199', factionBonus: 'Scholars', repAmount: 990 }
    ],
    reputationRequirement: 1980
  },
  {
    id: 'lore_dialogue_0199',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #199...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0197', factionBonus: 'SilverGuard', repAmount: 995 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0200', factionBonus: 'Scholars', repAmount: 995 }
    ],
    reputationRequirement: 1990
  },
  {
    id: 'lore_dialogue_0200',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #200...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0198', factionBonus: 'SilverGuard', repAmount: 1000 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0201', factionBonus: 'Scholars', repAmount: 1000 }
    ],
    reputationRequirement: 2000
  },
  {
    id: 'lore_dialogue_0201',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #201...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0199', factionBonus: 'SilverGuard', repAmount: 1005 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0202', factionBonus: 'Scholars', repAmount: 1005 }
    ],
    reputationRequirement: 2010
  },
  {
    id: 'lore_dialogue_0202',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #202...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0200', factionBonus: 'SilverGuard', repAmount: 1010 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0203', factionBonus: 'Scholars', repAmount: 1010 }
    ],
    reputationRequirement: 2020
  },
  {
    id: 'lore_dialogue_0203',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #203...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0201', factionBonus: 'SilverGuard', repAmount: 1015 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0204', factionBonus: 'Scholars', repAmount: 1015 }
    ],
    reputationRequirement: 2030
  },
  {
    id: 'lore_dialogue_0204',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #204...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0202', factionBonus: 'SilverGuard', repAmount: 1020 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0205', factionBonus: 'Scholars', repAmount: 1020 }
    ],
    reputationRequirement: 2040
  },
  {
    id: 'lore_dialogue_0205',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #205...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0203', factionBonus: 'SilverGuard', repAmount: 1025 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0206', factionBonus: 'Scholars', repAmount: 1025 }
    ],
    reputationRequirement: 2050
  },
  {
    id: 'lore_dialogue_0206',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #206...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0204', factionBonus: 'SilverGuard', repAmount: 1030 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0207', factionBonus: 'Scholars', repAmount: 1030 }
    ],
    reputationRequirement: 2060
  },
  {
    id: 'lore_dialogue_0207',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #207...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0205', factionBonus: 'SilverGuard', repAmount: 1035 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0208', factionBonus: 'Scholars', repAmount: 1035 }
    ],
    reputationRequirement: 2070
  },
  {
    id: 'lore_dialogue_0208',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #208...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0206', factionBonus: 'SilverGuard', repAmount: 1040 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0209', factionBonus: 'Scholars', repAmount: 1040 }
    ],
    reputationRequirement: 2080
  },
  {
    id: 'lore_dialogue_0209',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #209...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0207', factionBonus: 'SilverGuard', repAmount: 1045 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0210', factionBonus: 'Scholars', repAmount: 1045 }
    ],
    reputationRequirement: 2090
  },
  {
    id: 'lore_dialogue_0210',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #210...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0208', factionBonus: 'SilverGuard', repAmount: 1050 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0211', factionBonus: 'Scholars', repAmount: 1050 }
    ],
    reputationRequirement: 2100
  },
  {
    id: 'lore_dialogue_0211',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #211...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0209', factionBonus: 'SilverGuard', repAmount: 1055 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0212', factionBonus: 'Scholars', repAmount: 1055 }
    ],
    reputationRequirement: 2110
  },
  {
    id: 'lore_dialogue_0212',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #212...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0210', factionBonus: 'SilverGuard', repAmount: 1060 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0213', factionBonus: 'Scholars', repAmount: 1060 }
    ],
    reputationRequirement: 2120
  },
  {
    id: 'lore_dialogue_0213',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #213...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0211', factionBonus: 'SilverGuard', repAmount: 1065 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0214', factionBonus: 'Scholars', repAmount: 1065 }
    ],
    reputationRequirement: 2130
  },
  {
    id: 'lore_dialogue_0214',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #214...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0212', factionBonus: 'SilverGuard', repAmount: 1070 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0215', factionBonus: 'Scholars', repAmount: 1070 }
    ],
    reputationRequirement: 2140
  },
  {
    id: 'lore_dialogue_0215',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #215...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0213', factionBonus: 'SilverGuard', repAmount: 1075 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0216', factionBonus: 'Scholars', repAmount: 1075 }
    ],
    reputationRequirement: 2150
  },
  {
    id: 'lore_dialogue_0216',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #216...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0214', factionBonus: 'SilverGuard', repAmount: 1080 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0217', factionBonus: 'Scholars', repAmount: 1080 }
    ],
    reputationRequirement: 2160
  },
  {
    id: 'lore_dialogue_0217',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #217...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0215', factionBonus: 'SilverGuard', repAmount: 1085 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0218', factionBonus: 'Scholars', repAmount: 1085 }
    ],
    reputationRequirement: 2170
  },
  {
    id: 'lore_dialogue_0218',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #218...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0216', factionBonus: 'SilverGuard', repAmount: 1090 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0219', factionBonus: 'Scholars', repAmount: 1090 }
    ],
    reputationRequirement: 2180
  },
  {
    id: 'lore_dialogue_0219',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #219...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0217', factionBonus: 'SilverGuard', repAmount: 1095 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0220', factionBonus: 'Scholars', repAmount: 1095 }
    ],
    reputationRequirement: 2190
  },
  {
    id: 'lore_dialogue_0220',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #220...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0218', factionBonus: 'SilverGuard', repAmount: 1100 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0221', factionBonus: 'Scholars', repAmount: 1100 }
    ],
    reputationRequirement: 2200
  },
  {
    id: 'lore_dialogue_0221',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #221...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0219', factionBonus: 'SilverGuard', repAmount: 1105 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0222', factionBonus: 'Scholars', repAmount: 1105 }
    ],
    reputationRequirement: 2210
  },
  {
    id: 'lore_dialogue_0222',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #222...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0220', factionBonus: 'SilverGuard', repAmount: 1110 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0223', factionBonus: 'Scholars', repAmount: 1110 }
    ],
    reputationRequirement: 2220
  },
  {
    id: 'lore_dialogue_0223',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #223...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0221', factionBonus: 'SilverGuard', repAmount: 1115 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0224', factionBonus: 'Scholars', repAmount: 1115 }
    ],
    reputationRequirement: 2230
  },
  {
    id: 'lore_dialogue_0224',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #224...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0222', factionBonus: 'SilverGuard', repAmount: 1120 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0225', factionBonus: 'Scholars', repAmount: 1120 }
    ],
    reputationRequirement: 2240
  },
  {
    id: 'lore_dialogue_0225',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #225...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0223', factionBonus: 'SilverGuard', repAmount: 1125 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0226', factionBonus: 'Scholars', repAmount: 1125 }
    ],
    reputationRequirement: 2250
  },
  {
    id: 'lore_dialogue_0226',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #226...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0224', factionBonus: 'SilverGuard', repAmount: 1130 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0227', factionBonus: 'Scholars', repAmount: 1130 }
    ],
    reputationRequirement: 2260
  },
  {
    id: 'lore_dialogue_0227',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #227...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0225', factionBonus: 'SilverGuard', repAmount: 1135 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0228', factionBonus: 'Scholars', repAmount: 1135 }
    ],
    reputationRequirement: 2270
  },
  {
    id: 'lore_dialogue_0228',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #228...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0226', factionBonus: 'SilverGuard', repAmount: 1140 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0229', factionBonus: 'Scholars', repAmount: 1140 }
    ],
    reputationRequirement: 2280
  },
  {
    id: 'lore_dialogue_0229',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #229...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0227', factionBonus: 'SilverGuard', repAmount: 1145 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0230', factionBonus: 'Scholars', repAmount: 1145 }
    ],
    reputationRequirement: 2290
  },
  {
    id: 'lore_dialogue_0230',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #230...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0228', factionBonus: 'SilverGuard', repAmount: 1150 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0231', factionBonus: 'Scholars', repAmount: 1150 }
    ],
    reputationRequirement: 2300
  },
  {
    id: 'lore_dialogue_0231',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #231...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0229', factionBonus: 'SilverGuard', repAmount: 1155 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0232', factionBonus: 'Scholars', repAmount: 1155 }
    ],
    reputationRequirement: 2310
  },
  {
    id: 'lore_dialogue_0232',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #232...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0230', factionBonus: 'SilverGuard', repAmount: 1160 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0233', factionBonus: 'Scholars', repAmount: 1160 }
    ],
    reputationRequirement: 2320
  },
  {
    id: 'lore_dialogue_0233',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #233...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0231', factionBonus: 'SilverGuard', repAmount: 1165 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0234', factionBonus: 'Scholars', repAmount: 1165 }
    ],
    reputationRequirement: 2330
  },
  {
    id: 'lore_dialogue_0234',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #234...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0232', factionBonus: 'SilverGuard', repAmount: 1170 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0235', factionBonus: 'Scholars', repAmount: 1170 }
    ],
    reputationRequirement: 2340
  },
  {
    id: 'lore_dialogue_0235',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #235...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0233', factionBonus: 'SilverGuard', repAmount: 1175 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0236', factionBonus: 'Scholars', repAmount: 1175 }
    ],
    reputationRequirement: 2350
  },
  {
    id: 'lore_dialogue_0236',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #236...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0234', factionBonus: 'SilverGuard', repAmount: 1180 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0237', factionBonus: 'Scholars', repAmount: 1180 }
    ],
    reputationRequirement: 2360
  },
  {
    id: 'lore_dialogue_0237',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #237...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0235', factionBonus: 'SilverGuard', repAmount: 1185 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0238', factionBonus: 'Scholars', repAmount: 1185 }
    ],
    reputationRequirement: 2370
  },
  {
    id: 'lore_dialogue_0238',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #238...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0236', factionBonus: 'SilverGuard', repAmount: 1190 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0239', factionBonus: 'Scholars', repAmount: 1190 }
    ],
    reputationRequirement: 2380
  },
  {
    id: 'lore_dialogue_0239',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #239...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0237', factionBonus: 'SilverGuard', repAmount: 1195 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0240', factionBonus: 'Scholars', repAmount: 1195 }
    ],
    reputationRequirement: 2390
  },
  {
    id: 'lore_dialogue_0240',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #240...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0238', factionBonus: 'SilverGuard', repAmount: 1200 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0241', factionBonus: 'Scholars', repAmount: 1200 }
    ],
    reputationRequirement: 2400
  },
  {
    id: 'lore_dialogue_0241',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #241...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0239', factionBonus: 'SilverGuard', repAmount: 1205 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0242', factionBonus: 'Scholars', repAmount: 1205 }
    ],
    reputationRequirement: 2410
  },
  {
    id: 'lore_dialogue_0242',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #242...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0240', factionBonus: 'SilverGuard', repAmount: 1210 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0243', factionBonus: 'Scholars', repAmount: 1210 }
    ],
    reputationRequirement: 2420
  },
  {
    id: 'lore_dialogue_0243',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #243...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0241', factionBonus: 'SilverGuard', repAmount: 1215 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0244', factionBonus: 'Scholars', repAmount: 1215 }
    ],
    reputationRequirement: 2430
  },
  {
    id: 'lore_dialogue_0244',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #244...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0242', factionBonus: 'SilverGuard', repAmount: 1220 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0245', factionBonus: 'Scholars', repAmount: 1220 }
    ],
    reputationRequirement: 2440
  },
  {
    id: 'lore_dialogue_0245',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #245...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0243', factionBonus: 'SilverGuard', repAmount: 1225 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0246', factionBonus: 'Scholars', repAmount: 1225 }
    ],
    reputationRequirement: 2450
  },
  {
    id: 'lore_dialogue_0246',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #246...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0244', factionBonus: 'SilverGuard', repAmount: 1230 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0247', factionBonus: 'Scholars', repAmount: 1230 }
    ],
    reputationRequirement: 2460
  },
  {
    id: 'lore_dialogue_0247',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #247...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0245', factionBonus: 'SilverGuard', repAmount: 1235 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0248', factionBonus: 'Scholars', repAmount: 1235 }
    ],
    reputationRequirement: 2470
  },
  {
    id: 'lore_dialogue_0248',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #248...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0246', factionBonus: 'SilverGuard', repAmount: 1240 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0249', factionBonus: 'Scholars', repAmount: 1240 }
    ],
    reputationRequirement: 2480
  },
  {
    id: 'lore_dialogue_0249',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #249...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0247', factionBonus: 'SilverGuard', repAmount: 1245 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0250', factionBonus: 'Scholars', repAmount: 1245 }
    ],
    reputationRequirement: 2490
  },
  {
    id: 'lore_dialogue_0250',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #250...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0248', factionBonus: 'SilverGuard', repAmount: 1250 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0251', factionBonus: 'Scholars', repAmount: 1250 }
    ],
    reputationRequirement: 2500
  },
  {
    id: 'lore_dialogue_0251',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #251...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0249', factionBonus: 'SilverGuard', repAmount: 1255 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0252', factionBonus: 'Scholars', repAmount: 1255 }
    ],
    reputationRequirement: 2510
  },
  {
    id: 'lore_dialogue_0252',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #252...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0250', factionBonus: 'SilverGuard', repAmount: 1260 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0253', factionBonus: 'Scholars', repAmount: 1260 }
    ],
    reputationRequirement: 2520
  },
  {
    id: 'lore_dialogue_0253',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #253...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0251', factionBonus: 'SilverGuard', repAmount: 1265 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0254', factionBonus: 'Scholars', repAmount: 1265 }
    ],
    reputationRequirement: 2530
  },
  {
    id: 'lore_dialogue_0254',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #254...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0252', factionBonus: 'SilverGuard', repAmount: 1270 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0255', factionBonus: 'Scholars', repAmount: 1270 }
    ],
    reputationRequirement: 2540
  },
  {
    id: 'lore_dialogue_0255',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #255...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0253', factionBonus: 'SilverGuard', repAmount: 1275 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0256', factionBonus: 'Scholars', repAmount: 1275 }
    ],
    reputationRequirement: 2550
  },
  {
    id: 'lore_dialogue_0256',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #256...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0254', factionBonus: 'SilverGuard', repAmount: 1280 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0257', factionBonus: 'Scholars', repAmount: 1280 }
    ],
    reputationRequirement: 2560
  },
  {
    id: 'lore_dialogue_0257',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #257...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0255', factionBonus: 'SilverGuard', repAmount: 1285 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0258', factionBonus: 'Scholars', repAmount: 1285 }
    ],
    reputationRequirement: 2570
  },
  {
    id: 'lore_dialogue_0258',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #258...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0256', factionBonus: 'SilverGuard', repAmount: 1290 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0259', factionBonus: 'Scholars', repAmount: 1290 }
    ],
    reputationRequirement: 2580
  },
  {
    id: 'lore_dialogue_0259',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #259...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0257', factionBonus: 'SilverGuard', repAmount: 1295 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0260', factionBonus: 'Scholars', repAmount: 1295 }
    ],
    reputationRequirement: 2590
  },
  {
    id: 'lore_dialogue_0260',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #260...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0258', factionBonus: 'SilverGuard', repAmount: 1300 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0261', factionBonus: 'Scholars', repAmount: 1300 }
    ],
    reputationRequirement: 2600
  },
  {
    id: 'lore_dialogue_0261',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #261...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0259', factionBonus: 'SilverGuard', repAmount: 1305 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0262', factionBonus: 'Scholars', repAmount: 1305 }
    ],
    reputationRequirement: 2610
  },
  {
    id: 'lore_dialogue_0262',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #262...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0260', factionBonus: 'SilverGuard', repAmount: 1310 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0263', factionBonus: 'Scholars', repAmount: 1310 }
    ],
    reputationRequirement: 2620
  },
  {
    id: 'lore_dialogue_0263',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #263...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0261', factionBonus: 'SilverGuard', repAmount: 1315 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0264', factionBonus: 'Scholars', repAmount: 1315 }
    ],
    reputationRequirement: 2630
  },
  {
    id: 'lore_dialogue_0264',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #264...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0262', factionBonus: 'SilverGuard', repAmount: 1320 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0265', factionBonus: 'Scholars', repAmount: 1320 }
    ],
    reputationRequirement: 2640
  },
  {
    id: 'lore_dialogue_0265',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #265...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0263', factionBonus: 'SilverGuard', repAmount: 1325 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0266', factionBonus: 'Scholars', repAmount: 1325 }
    ],
    reputationRequirement: 2650
  },
  {
    id: 'lore_dialogue_0266',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #266...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0264', factionBonus: 'SilverGuard', repAmount: 1330 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0267', factionBonus: 'Scholars', repAmount: 1330 }
    ],
    reputationRequirement: 2660
  },
  {
    id: 'lore_dialogue_0267',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #267...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0265', factionBonus: 'SilverGuard', repAmount: 1335 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0268', factionBonus: 'Scholars', repAmount: 1335 }
    ],
    reputationRequirement: 2670
  },
  {
    id: 'lore_dialogue_0268',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #268...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0266', factionBonus: 'SilverGuard', repAmount: 1340 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0269', factionBonus: 'Scholars', repAmount: 1340 }
    ],
    reputationRequirement: 2680
  },
  {
    id: 'lore_dialogue_0269',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #269...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0267', factionBonus: 'SilverGuard', repAmount: 1345 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0270', factionBonus: 'Scholars', repAmount: 1345 }
    ],
    reputationRequirement: 2690
  },
  {
    id: 'lore_dialogue_0270',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #270...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0268', factionBonus: 'SilverGuard', repAmount: 1350 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0271', factionBonus: 'Scholars', repAmount: 1350 }
    ],
    reputationRequirement: 2700
  },
  {
    id: 'lore_dialogue_0271',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #271...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0269', factionBonus: 'SilverGuard', repAmount: 1355 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0272', factionBonus: 'Scholars', repAmount: 1355 }
    ],
    reputationRequirement: 2710
  },
  {
    id: 'lore_dialogue_0272',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #272...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0270', factionBonus: 'SilverGuard', repAmount: 1360 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0273', factionBonus: 'Scholars', repAmount: 1360 }
    ],
    reputationRequirement: 2720
  },
  {
    id: 'lore_dialogue_0273',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #273...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0271', factionBonus: 'SilverGuard', repAmount: 1365 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0274', factionBonus: 'Scholars', repAmount: 1365 }
    ],
    reputationRequirement: 2730
  },
  {
    id: 'lore_dialogue_0274',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #274...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0272', factionBonus: 'SilverGuard', repAmount: 1370 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0275', factionBonus: 'Scholars', repAmount: 1370 }
    ],
    reputationRequirement: 2740
  },
  {
    id: 'lore_dialogue_0275',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #275...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0273', factionBonus: 'SilverGuard', repAmount: 1375 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0276', factionBonus: 'Scholars', repAmount: 1375 }
    ],
    reputationRequirement: 2750
  },
  {
    id: 'lore_dialogue_0276',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #276...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0274', factionBonus: 'SilverGuard', repAmount: 1380 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0277', factionBonus: 'Scholars', repAmount: 1380 }
    ],
    reputationRequirement: 2760
  },
  {
    id: 'lore_dialogue_0277',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #277...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0275', factionBonus: 'SilverGuard', repAmount: 1385 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0278', factionBonus: 'Scholars', repAmount: 1385 }
    ],
    reputationRequirement: 2770
  },
  {
    id: 'lore_dialogue_0278',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #278...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0276', factionBonus: 'SilverGuard', repAmount: 1390 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0279', factionBonus: 'Scholars', repAmount: 1390 }
    ],
    reputationRequirement: 2780
  },
  {
    id: 'lore_dialogue_0279',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #279...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0277', factionBonus: 'SilverGuard', repAmount: 1395 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0280', factionBonus: 'Scholars', repAmount: 1395 }
    ],
    reputationRequirement: 2790
  },
  {
    id: 'lore_dialogue_0280',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #280...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0278', factionBonus: 'SilverGuard', repAmount: 1400 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0281', factionBonus: 'Scholars', repAmount: 1400 }
    ],
    reputationRequirement: 2800
  },
  {
    id: 'lore_dialogue_0281',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #281...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0279', factionBonus: 'SilverGuard', repAmount: 1405 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0282', factionBonus: 'Scholars', repAmount: 1405 }
    ],
    reputationRequirement: 2810
  },
  {
    id: 'lore_dialogue_0282',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #282...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0280', factionBonus: 'SilverGuard', repAmount: 1410 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0283', factionBonus: 'Scholars', repAmount: 1410 }
    ],
    reputationRequirement: 2820
  },
  {
    id: 'lore_dialogue_0283',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #283...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0281', factionBonus: 'SilverGuard', repAmount: 1415 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0284', factionBonus: 'Scholars', repAmount: 1415 }
    ],
    reputationRequirement: 2830
  },
  {
    id: 'lore_dialogue_0284',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #284...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0282', factionBonus: 'SilverGuard', repAmount: 1420 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0285', factionBonus: 'Scholars', repAmount: 1420 }
    ],
    reputationRequirement: 2840
  },
  {
    id: 'lore_dialogue_0285',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #285...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0283', factionBonus: 'SilverGuard', repAmount: 1425 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0286', factionBonus: 'Scholars', repAmount: 1425 }
    ],
    reputationRequirement: 2850
  },
  {
    id: 'lore_dialogue_0286',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #286...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0284', factionBonus: 'SilverGuard', repAmount: 1430 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0287', factionBonus: 'Scholars', repAmount: 1430 }
    ],
    reputationRequirement: 2860
  },
  {
    id: 'lore_dialogue_0287',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #287...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0285', factionBonus: 'SilverGuard', repAmount: 1435 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0288', factionBonus: 'Scholars', repAmount: 1435 }
    ],
    reputationRequirement: 2870
  },
  {
    id: 'lore_dialogue_0288',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #288...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0286', factionBonus: 'SilverGuard', repAmount: 1440 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0289', factionBonus: 'Scholars', repAmount: 1440 }
    ],
    reputationRequirement: 2880
  },
  {
    id: 'lore_dialogue_0289',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #289...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0287', factionBonus: 'SilverGuard', repAmount: 1445 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0290', factionBonus: 'Scholars', repAmount: 1445 }
    ],
    reputationRequirement: 2890
  },
  {
    id: 'lore_dialogue_0290',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #290...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0288', factionBonus: 'SilverGuard', repAmount: 1450 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0291', factionBonus: 'Scholars', repAmount: 1450 }
    ],
    reputationRequirement: 2900
  },
  {
    id: 'lore_dialogue_0291',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #291...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0289', factionBonus: 'SilverGuard', repAmount: 1455 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0292', factionBonus: 'Scholars', repAmount: 1455 }
    ],
    reputationRequirement: 2910
  },
  {
    id: 'lore_dialogue_0292',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #292...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0290', factionBonus: 'SilverGuard', repAmount: 1460 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0293', factionBonus: 'Scholars', repAmount: 1460 }
    ],
    reputationRequirement: 2920
  },
  {
    id: 'lore_dialogue_0293',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #293...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0291', factionBonus: 'SilverGuard', repAmount: 1465 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0294', factionBonus: 'Scholars', repAmount: 1465 }
    ],
    reputationRequirement: 2930
  },
  {
    id: 'lore_dialogue_0294',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #294...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0292', factionBonus: 'SilverGuard', repAmount: 1470 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0295', factionBonus: 'Scholars', repAmount: 1470 }
    ],
    reputationRequirement: 2940
  },
  {
    id: 'lore_dialogue_0295',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #295...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0293', factionBonus: 'SilverGuard', repAmount: 1475 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0296', factionBonus: 'Scholars', repAmount: 1475 }
    ],
    reputationRequirement: 2950
  },
  {
    id: 'lore_dialogue_0296',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #296...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0294', factionBonus: 'SilverGuard', repAmount: 1480 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0297', factionBonus: 'Scholars', repAmount: 1480 }
    ],
    reputationRequirement: 2960
  },
  {
    id: 'lore_dialogue_0297',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #297...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0295', factionBonus: 'SilverGuard', repAmount: 1485 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0298', factionBonus: 'Scholars', repAmount: 1485 }
    ],
    reputationRequirement: 2970
  },
  {
    id: 'lore_dialogue_0298',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #298...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0296', factionBonus: 'SilverGuard', repAmount: 1490 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0299', factionBonus: 'Scholars', repAmount: 1490 }
    ],
    reputationRequirement: 2980
  },
  {
    id: 'lore_dialogue_0299',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #299...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0297', factionBonus: 'SilverGuard', repAmount: 1495 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0300', factionBonus: 'Scholars', repAmount: 1495 }
    ],
    reputationRequirement: 2990
  },
  {
    id: 'lore_dialogue_0300',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #300...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0298', factionBonus: 'SilverGuard', repAmount: 1500 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0301', factionBonus: 'Scholars', repAmount: 1500 }
    ],
    reputationRequirement: 3000
  },
  {
    id: 'lore_dialogue_0301',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #301...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0299', factionBonus: 'SilverGuard', repAmount: 1505 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0302', factionBonus: 'Scholars', repAmount: 1505 }
    ],
    reputationRequirement: 3010
  },
  {
    id: 'lore_dialogue_0302',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #302...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0300', factionBonus: 'SilverGuard', repAmount: 1510 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0303', factionBonus: 'Scholars', repAmount: 1510 }
    ],
    reputationRequirement: 3020
  },
  {
    id: 'lore_dialogue_0303',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #303...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0301', factionBonus: 'SilverGuard', repAmount: 1515 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0304', factionBonus: 'Scholars', repAmount: 1515 }
    ],
    reputationRequirement: 3030
  },
  {
    id: 'lore_dialogue_0304',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #304...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0302', factionBonus: 'SilverGuard', repAmount: 1520 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0305', factionBonus: 'Scholars', repAmount: 1520 }
    ],
    reputationRequirement: 3040
  },
  {
    id: 'lore_dialogue_0305',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #305...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0303', factionBonus: 'SilverGuard', repAmount: 1525 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0306', factionBonus: 'Scholars', repAmount: 1525 }
    ],
    reputationRequirement: 3050
  },
  {
    id: 'lore_dialogue_0306',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #306...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0304', factionBonus: 'SilverGuard', repAmount: 1530 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0307', factionBonus: 'Scholars', repAmount: 1530 }
    ],
    reputationRequirement: 3060
  },
  {
    id: 'lore_dialogue_0307',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #307...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0305', factionBonus: 'SilverGuard', repAmount: 1535 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0308', factionBonus: 'Scholars', repAmount: 1535 }
    ],
    reputationRequirement: 3070
  },
  {
    id: 'lore_dialogue_0308',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #308...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0306', factionBonus: 'SilverGuard', repAmount: 1540 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0309', factionBonus: 'Scholars', repAmount: 1540 }
    ],
    reputationRequirement: 3080
  },
  {
    id: 'lore_dialogue_0309',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #309...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0307', factionBonus: 'SilverGuard', repAmount: 1545 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0310', factionBonus: 'Scholars', repAmount: 1545 }
    ],
    reputationRequirement: 3090
  },
  {
    id: 'lore_dialogue_0310',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #310...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0308', factionBonus: 'SilverGuard', repAmount: 1550 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0311', factionBonus: 'Scholars', repAmount: 1550 }
    ],
    reputationRequirement: 3100
  },
  {
    id: 'lore_dialogue_0311',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #311...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0309', factionBonus: 'SilverGuard', repAmount: 1555 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0312', factionBonus: 'Scholars', repAmount: 1555 }
    ],
    reputationRequirement: 3110
  },
  {
    id: 'lore_dialogue_0312',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #312...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0310', factionBonus: 'SilverGuard', repAmount: 1560 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0313', factionBonus: 'Scholars', repAmount: 1560 }
    ],
    reputationRequirement: 3120
  },
  {
    id: 'lore_dialogue_0313',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #313...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0311', factionBonus: 'SilverGuard', repAmount: 1565 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0314', factionBonus: 'Scholars', repAmount: 1565 }
    ],
    reputationRequirement: 3130
  },
  {
    id: 'lore_dialogue_0314',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #314...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0312', factionBonus: 'SilverGuard', repAmount: 1570 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0315', factionBonus: 'Scholars', repAmount: 1570 }
    ],
    reputationRequirement: 3140
  },
  {
    id: 'lore_dialogue_0315',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #315...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0313', factionBonus: 'SilverGuard', repAmount: 1575 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0316', factionBonus: 'Scholars', repAmount: 1575 }
    ],
    reputationRequirement: 3150
  },
  {
    id: 'lore_dialogue_0316',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #316...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0314', factionBonus: 'SilverGuard', repAmount: 1580 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0317', factionBonus: 'Scholars', repAmount: 1580 }
    ],
    reputationRequirement: 3160
  },
  {
    id: 'lore_dialogue_0317',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #317...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0315', factionBonus: 'SilverGuard', repAmount: 1585 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0318', factionBonus: 'Scholars', repAmount: 1585 }
    ],
    reputationRequirement: 3170
  },
  {
    id: 'lore_dialogue_0318',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #318...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0316', factionBonus: 'SilverGuard', repAmount: 1590 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0319', factionBonus: 'Scholars', repAmount: 1590 }
    ],
    reputationRequirement: 3180
  },
  {
    id: 'lore_dialogue_0319',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #319...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0317', factionBonus: 'SilverGuard', repAmount: 1595 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0320', factionBonus: 'Scholars', repAmount: 1595 }
    ],
    reputationRequirement: 3190
  },
  {
    id: 'lore_dialogue_0320',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #320...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0318', factionBonus: 'SilverGuard', repAmount: 1600 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0321', factionBonus: 'Scholars', repAmount: 1600 }
    ],
    reputationRequirement: 3200
  },
  {
    id: 'lore_dialogue_0321',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #321...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0319', factionBonus: 'SilverGuard', repAmount: 1605 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0322', factionBonus: 'Scholars', repAmount: 1605 }
    ],
    reputationRequirement: 3210
  },
  {
    id: 'lore_dialogue_0322',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #322...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0320', factionBonus: 'SilverGuard', repAmount: 1610 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0323', factionBonus: 'Scholars', repAmount: 1610 }
    ],
    reputationRequirement: 3220
  },
  {
    id: 'lore_dialogue_0323',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #323...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0321', factionBonus: 'SilverGuard', repAmount: 1615 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0324', factionBonus: 'Scholars', repAmount: 1615 }
    ],
    reputationRequirement: 3230
  },
  {
    id: 'lore_dialogue_0324',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #324...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0322', factionBonus: 'SilverGuard', repAmount: 1620 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0325', factionBonus: 'Scholars', repAmount: 1620 }
    ],
    reputationRequirement: 3240
  },
  {
    id: 'lore_dialogue_0325',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #325...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0323', factionBonus: 'SilverGuard', repAmount: 1625 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0326', factionBonus: 'Scholars', repAmount: 1625 }
    ],
    reputationRequirement: 3250
  },
  {
    id: 'lore_dialogue_0326',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #326...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0324', factionBonus: 'SilverGuard', repAmount: 1630 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0327', factionBonus: 'Scholars', repAmount: 1630 }
    ],
    reputationRequirement: 3260
  },
  {
    id: 'lore_dialogue_0327',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #327...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0325', factionBonus: 'SilverGuard', repAmount: 1635 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0328', factionBonus: 'Scholars', repAmount: 1635 }
    ],
    reputationRequirement: 3270
  },
  {
    id: 'lore_dialogue_0328',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #328...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0326', factionBonus: 'SilverGuard', repAmount: 1640 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0329', factionBonus: 'Scholars', repAmount: 1640 }
    ],
    reputationRequirement: 3280
  },
  {
    id: 'lore_dialogue_0329',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #329...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0327', factionBonus: 'SilverGuard', repAmount: 1645 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0330', factionBonus: 'Scholars', repAmount: 1645 }
    ],
    reputationRequirement: 3290
  },
  {
    id: 'lore_dialogue_0330',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #330...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0328', factionBonus: 'SilverGuard', repAmount: 1650 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0331', factionBonus: 'Scholars', repAmount: 1650 }
    ],
    reputationRequirement: 3300
  },
  {
    id: 'lore_dialogue_0331',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #331...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0329', factionBonus: 'SilverGuard', repAmount: 1655 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0332', factionBonus: 'Scholars', repAmount: 1655 }
    ],
    reputationRequirement: 3310
  },
  {
    id: 'lore_dialogue_0332',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #332...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0330', factionBonus: 'SilverGuard', repAmount: 1660 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0333', factionBonus: 'Scholars', repAmount: 1660 }
    ],
    reputationRequirement: 3320
  },
  {
    id: 'lore_dialogue_0333',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #333...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0331', factionBonus: 'SilverGuard', repAmount: 1665 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0334', factionBonus: 'Scholars', repAmount: 1665 }
    ],
    reputationRequirement: 3330
  },
  {
    id: 'lore_dialogue_0334',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #334...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0332', factionBonus: 'SilverGuard', repAmount: 1670 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0335', factionBonus: 'Scholars', repAmount: 1670 }
    ],
    reputationRequirement: 3340
  },
  {
    id: 'lore_dialogue_0335',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #335...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0333', factionBonus: 'SilverGuard', repAmount: 1675 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0336', factionBonus: 'Scholars', repAmount: 1675 }
    ],
    reputationRequirement: 3350
  },
  {
    id: 'lore_dialogue_0336',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #336...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0334', factionBonus: 'SilverGuard', repAmount: 1680 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0337', factionBonus: 'Scholars', repAmount: 1680 }
    ],
    reputationRequirement: 3360
  },
  {
    id: 'lore_dialogue_0337',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #337...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0335', factionBonus: 'SilverGuard', repAmount: 1685 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0338', factionBonus: 'Scholars', repAmount: 1685 }
    ],
    reputationRequirement: 3370
  },
  {
    id: 'lore_dialogue_0338',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #338...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0336', factionBonus: 'SilverGuard', repAmount: 1690 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0339', factionBonus: 'Scholars', repAmount: 1690 }
    ],
    reputationRequirement: 3380
  },
  {
    id: 'lore_dialogue_0339',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #339...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0337', factionBonus: 'SilverGuard', repAmount: 1695 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0340', factionBonus: 'Scholars', repAmount: 1695 }
    ],
    reputationRequirement: 3390
  },
  {
    id: 'lore_dialogue_0340',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #340...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0338', factionBonus: 'SilverGuard', repAmount: 1700 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0341', factionBonus: 'Scholars', repAmount: 1700 }
    ],
    reputationRequirement: 3400
  },
  {
    id: 'lore_dialogue_0341',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #341...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0339', factionBonus: 'SilverGuard', repAmount: 1705 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0342', factionBonus: 'Scholars', repAmount: 1705 }
    ],
    reputationRequirement: 3410
  },
  {
    id: 'lore_dialogue_0342',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #342...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0340', factionBonus: 'SilverGuard', repAmount: 1710 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0343', factionBonus: 'Scholars', repAmount: 1710 }
    ],
    reputationRequirement: 3420
  },
  {
    id: 'lore_dialogue_0343',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #343...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0341', factionBonus: 'SilverGuard', repAmount: 1715 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0344', factionBonus: 'Scholars', repAmount: 1715 }
    ],
    reputationRequirement: 3430
  },
  {
    id: 'lore_dialogue_0344',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #344...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0342', factionBonus: 'SilverGuard', repAmount: 1720 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0345', factionBonus: 'Scholars', repAmount: 1720 }
    ],
    reputationRequirement: 3440
  },
  {
    id: 'lore_dialogue_0345',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #345...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0343', factionBonus: 'SilverGuard', repAmount: 1725 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0346', factionBonus: 'Scholars', repAmount: 1725 }
    ],
    reputationRequirement: 3450
  },
  {
    id: 'lore_dialogue_0346',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #346...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0344', factionBonus: 'SilverGuard', repAmount: 1730 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0347', factionBonus: 'Scholars', repAmount: 1730 }
    ],
    reputationRequirement: 3460
  },
  {
    id: 'lore_dialogue_0347',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #347...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0345', factionBonus: 'SilverGuard', repAmount: 1735 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0348', factionBonus: 'Scholars', repAmount: 1735 }
    ],
    reputationRequirement: 3470
  },
  {
    id: 'lore_dialogue_0348',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #348...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0346', factionBonus: 'SilverGuard', repAmount: 1740 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0349', factionBonus: 'Scholars', repAmount: 1740 }
    ],
    reputationRequirement: 3480
  },
  {
    id: 'lore_dialogue_0349',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #349...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0347', factionBonus: 'SilverGuard', repAmount: 1745 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0350', factionBonus: 'Scholars', repAmount: 1745 }
    ],
    reputationRequirement: 3490
  },
  {
    id: 'lore_dialogue_0350',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #350...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0348', factionBonus: 'SilverGuard', repAmount: 1750 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0351', factionBonus: 'Scholars', repAmount: 1750 }
    ],
    reputationRequirement: 3500
  },
  {
    id: 'lore_dialogue_0351',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #351...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0349', factionBonus: 'SilverGuard', repAmount: 1755 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0352', factionBonus: 'Scholars', repAmount: 1755 }
    ],
    reputationRequirement: 3510
  },
  {
    id: 'lore_dialogue_0352',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #352...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0350', factionBonus: 'SilverGuard', repAmount: 1760 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0353', factionBonus: 'Scholars', repAmount: 1760 }
    ],
    reputationRequirement: 3520
  },
  {
    id: 'lore_dialogue_0353',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #353...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0351', factionBonus: 'SilverGuard', repAmount: 1765 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0354', factionBonus: 'Scholars', repAmount: 1765 }
    ],
    reputationRequirement: 3530
  },
  {
    id: 'lore_dialogue_0354',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #354...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0352', factionBonus: 'SilverGuard', repAmount: 1770 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0355', factionBonus: 'Scholars', repAmount: 1770 }
    ],
    reputationRequirement: 3540
  },
  {
    id: 'lore_dialogue_0355',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #355...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0353', factionBonus: 'SilverGuard', repAmount: 1775 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0356', factionBonus: 'Scholars', repAmount: 1775 }
    ],
    reputationRequirement: 3550
  },
  {
    id: 'lore_dialogue_0356',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #356...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0354', factionBonus: 'SilverGuard', repAmount: 1780 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0357', factionBonus: 'Scholars', repAmount: 1780 }
    ],
    reputationRequirement: 3560
  },
  {
    id: 'lore_dialogue_0357',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #357...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0355', factionBonus: 'SilverGuard', repAmount: 1785 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0358', factionBonus: 'Scholars', repAmount: 1785 }
    ],
    reputationRequirement: 3570
  },
  {
    id: 'lore_dialogue_0358',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #358...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0356', factionBonus: 'SilverGuard', repAmount: 1790 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0359', factionBonus: 'Scholars', repAmount: 1790 }
    ],
    reputationRequirement: 3580
  },
  {
    id: 'lore_dialogue_0359',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #359...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0357', factionBonus: 'SilverGuard', repAmount: 1795 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0360', factionBonus: 'Scholars', repAmount: 1795 }
    ],
    reputationRequirement: 3590
  },
  {
    id: 'lore_dialogue_0360',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #360...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0358', factionBonus: 'SilverGuard', repAmount: 1800 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0361', factionBonus: 'Scholars', repAmount: 1800 }
    ],
    reputationRequirement: 3600
  },
  {
    id: 'lore_dialogue_0361',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #361...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0359', factionBonus: 'SilverGuard', repAmount: 1805 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0362', factionBonus: 'Scholars', repAmount: 1805 }
    ],
    reputationRequirement: 3610
  },
  {
    id: 'lore_dialogue_0362',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #362...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0360', factionBonus: 'SilverGuard', repAmount: 1810 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0363', factionBonus: 'Scholars', repAmount: 1810 }
    ],
    reputationRequirement: 3620
  },
  {
    id: 'lore_dialogue_0363',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #363...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0361', factionBonus: 'SilverGuard', repAmount: 1815 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0364', factionBonus: 'Scholars', repAmount: 1815 }
    ],
    reputationRequirement: 3630
  },
  {
    id: 'lore_dialogue_0364',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #364...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0362', factionBonus: 'SilverGuard', repAmount: 1820 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0365', factionBonus: 'Scholars', repAmount: 1820 }
    ],
    reputationRequirement: 3640
  },
  {
    id: 'lore_dialogue_0365',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #365...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0363', factionBonus: 'SilverGuard', repAmount: 1825 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0366', factionBonus: 'Scholars', repAmount: 1825 }
    ],
    reputationRequirement: 3650
  },
  {
    id: 'lore_dialogue_0366',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #366...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0364', factionBonus: 'SilverGuard', repAmount: 1830 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0367', factionBonus: 'Scholars', repAmount: 1830 }
    ],
    reputationRequirement: 3660
  },
  {
    id: 'lore_dialogue_0367',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #367...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0365', factionBonus: 'SilverGuard', repAmount: 1835 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0368', factionBonus: 'Scholars', repAmount: 1835 }
    ],
    reputationRequirement: 3670
  },
  {
    id: 'lore_dialogue_0368',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #368...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0366', factionBonus: 'SilverGuard', repAmount: 1840 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0369', factionBonus: 'Scholars', repAmount: 1840 }
    ],
    reputationRequirement: 3680
  },
  {
    id: 'lore_dialogue_0369',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #369...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0367', factionBonus: 'SilverGuard', repAmount: 1845 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0370', factionBonus: 'Scholars', repAmount: 1845 }
    ],
    reputationRequirement: 3690
  },
  {
    id: 'lore_dialogue_0370',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #370...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0368', factionBonus: 'SilverGuard', repAmount: 1850 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0371', factionBonus: 'Scholars', repAmount: 1850 }
    ],
    reputationRequirement: 3700
  },
  {
    id: 'lore_dialogue_0371',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #371...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0369', factionBonus: 'SilverGuard', repAmount: 1855 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0372', factionBonus: 'Scholars', repAmount: 1855 }
    ],
    reputationRequirement: 3710
  },
  {
    id: 'lore_dialogue_0372',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #372...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0370', factionBonus: 'SilverGuard', repAmount: 1860 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0373', factionBonus: 'Scholars', repAmount: 1860 }
    ],
    reputationRequirement: 3720
  },
  {
    id: 'lore_dialogue_0373',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #373...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0371', factionBonus: 'SilverGuard', repAmount: 1865 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0374', factionBonus: 'Scholars', repAmount: 1865 }
    ],
    reputationRequirement: 3730
  },
  {
    id: 'lore_dialogue_0374',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #374...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0372', factionBonus: 'SilverGuard', repAmount: 1870 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0375', factionBonus: 'Scholars', repAmount: 1870 }
    ],
    reputationRequirement: 3740
  },
  {
    id: 'lore_dialogue_0375',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #375...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0373', factionBonus: 'SilverGuard', repAmount: 1875 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0376', factionBonus: 'Scholars', repAmount: 1875 }
    ],
    reputationRequirement: 3750
  },
  {
    id: 'lore_dialogue_0376',
    speaker: 'Vanguard Commander Valerie',
    chapter: 2,
    prompt: 'Regarding the Ancient Seals in Zone #376...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0374', factionBonus: 'SilverGuard', repAmount: 1880 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0377', factionBonus: 'Scholars', repAmount: 1880 }
    ],
    reputationRequirement: 3760
  },
  {
    id: 'lore_dialogue_0377',
    speaker: 'Shadow Broker Thorne',
    chapter: 3,
    prompt: 'Regarding the Ancient Seals in Zone #377...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0375', factionBonus: 'SilverGuard', repAmount: 1885 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0378', factionBonus: 'Scholars', repAmount: 1885 }
    ],
    reputationRequirement: 3770
  },
  {
    id: 'lore_dialogue_0378',
    speaker: 'High Priestess Lyra',
    chapter: 4,
    prompt: 'Regarding the Ancient Seals in Zone #378...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0376', factionBonus: 'SilverGuard', repAmount: 1890 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0379', factionBonus: 'Scholars', repAmount: 1890 }
    ],
    reputationRequirement: 3780
  },
  {
    id: 'lore_dialogue_0379',
    speaker: 'Blacksmith Torvin',
    chapter: 5,
    prompt: 'Regarding the Ancient Seals in Zone #379...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0377', factionBonus: 'SilverGuard', repAmount: 1895 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0380', factionBonus: 'Scholars', repAmount: 1895 }
    ],
    reputationRequirement: 3790
  },
  {
    id: 'lore_dialogue_0380',
    speaker: 'Archmage Kenneth',
    chapter: 6,
    prompt: 'Regarding the Ancient Seals in Zone #380...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0378', factionBonus: 'SilverGuard', repAmount: 1900 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0381', factionBonus: 'Scholars', repAmount: 1900 }
    ],
    reputationRequirement: 3800
  },
  {
    id: 'lore_dialogue_0381',
    speaker: 'Vanguard Commander Valerie',
    chapter: 7,
    prompt: 'Regarding the Ancient Seals in Zone #381...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0379', factionBonus: 'SilverGuard', repAmount: 1905 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0382', factionBonus: 'Scholars', repAmount: 1905 }
    ],
    reputationRequirement: 3810
  },
  {
    id: 'lore_dialogue_0382',
    speaker: 'Shadow Broker Thorne',
    chapter: 8,
    prompt: 'Regarding the Ancient Seals in Zone #382...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0380', factionBonus: 'SilverGuard', repAmount: 1910 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0383', factionBonus: 'Scholars', repAmount: 1910 }
    ],
    reputationRequirement: 3820
  },
  {
    id: 'lore_dialogue_0383',
    speaker: 'High Priestess Lyra',
    chapter: 9,
    prompt: 'Regarding the Ancient Seals in Zone #383...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0381', factionBonus: 'SilverGuard', repAmount: 1915 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0384', factionBonus: 'Scholars', repAmount: 1915 }
    ],
    reputationRequirement: 3830
  },
  {
    id: 'lore_dialogue_0384',
    speaker: 'Blacksmith Torvin',
    chapter: 10,
    prompt: 'Regarding the Ancient Seals in Zone #384...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0382', factionBonus: 'SilverGuard', repAmount: 1920 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0385', factionBonus: 'Scholars', repAmount: 1920 }
    ],
    reputationRequirement: 3840
  },
  {
    id: 'lore_dialogue_0385',
    speaker: 'Archmage Kenneth',
    chapter: 11,
    prompt: 'Regarding the Ancient Seals in Zone #385...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0383', factionBonus: 'SilverGuard', repAmount: 1925 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0386', factionBonus: 'Scholars', repAmount: 1925 }
    ],
    reputationRequirement: 3850
  },
  {
    id: 'lore_dialogue_0386',
    speaker: 'Vanguard Commander Valerie',
    chapter: 12,
    prompt: 'Regarding the Ancient Seals in Zone #386...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0384', factionBonus: 'SilverGuard', repAmount: 1930 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0387', factionBonus: 'Scholars', repAmount: 1930 }
    ],
    reputationRequirement: 3860
  },
  {
    id: 'lore_dialogue_0387',
    speaker: 'Shadow Broker Thorne',
    chapter: 13,
    prompt: 'Regarding the Ancient Seals in Zone #387...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0385', factionBonus: 'SilverGuard', repAmount: 1935 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0388', factionBonus: 'Scholars', repAmount: 1935 }
    ],
    reputationRequirement: 3870
  },
  {
    id: 'lore_dialogue_0388',
    speaker: 'High Priestess Lyra',
    chapter: 14,
    prompt: 'Regarding the Ancient Seals in Zone #388...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0386', factionBonus: 'SilverGuard', repAmount: 1940 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0389', factionBonus: 'Scholars', repAmount: 1940 }
    ],
    reputationRequirement: 3880
  },
  {
    id: 'lore_dialogue_0389',
    speaker: 'Blacksmith Torvin',
    chapter: 15,
    prompt: 'Regarding the Ancient Seals in Zone #389...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0387', factionBonus: 'SilverGuard', repAmount: 1945 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0390', factionBonus: 'Scholars', repAmount: 1945 }
    ],
    reputationRequirement: 3890
  },
  {
    id: 'lore_dialogue_0390',
    speaker: 'Archmage Kenneth',
    chapter: 16,
    prompt: 'Regarding the Ancient Seals in Zone #390...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0388', factionBonus: 'SilverGuard', repAmount: 1950 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0391', factionBonus: 'Scholars', repAmount: 1950 }
    ],
    reputationRequirement: 3900
  },
  {
    id: 'lore_dialogue_0391',
    speaker: 'Vanguard Commander Valerie',
    chapter: 17,
    prompt: 'Regarding the Ancient Seals in Zone #391...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0389', factionBonus: 'SilverGuard', repAmount: 1955 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0392', factionBonus: 'Scholars', repAmount: 1955 }
    ],
    reputationRequirement: 3910
  },
  {
    id: 'lore_dialogue_0392',
    speaker: 'Shadow Broker Thorne',
    chapter: 18,
    prompt: 'Regarding the Ancient Seals in Zone #392...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0390', factionBonus: 'SilverGuard', repAmount: 1960 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0393', factionBonus: 'Scholars', repAmount: 1960 }
    ],
    reputationRequirement: 3920
  },
  {
    id: 'lore_dialogue_0393',
    speaker: 'High Priestess Lyra',
    chapter: 19,
    prompt: 'Regarding the Ancient Seals in Zone #393...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0391', factionBonus: 'SilverGuard', repAmount: 1965 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0394', factionBonus: 'Scholars', repAmount: 1965 }
    ],
    reputationRequirement: 3930
  },
  {
    id: 'lore_dialogue_0394',
    speaker: 'Blacksmith Torvin',
    chapter: 20,
    prompt: 'Regarding the Ancient Seals in Zone #394...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0392', factionBonus: 'SilverGuard', repAmount: 1970 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0395', factionBonus: 'Scholars', repAmount: 1970 }
    ],
    reputationRequirement: 3940
  },
  {
    id: 'lore_dialogue_0395',
    speaker: 'Archmage Kenneth',
    chapter: 21,
    prompt: 'Regarding the Ancient Seals in Zone #395...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0393', factionBonus: 'SilverGuard', repAmount: 1975 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0396', factionBonus: 'Scholars', repAmount: 1975 }
    ],
    reputationRequirement: 3950
  },
  {
    id: 'lore_dialogue_0396',
    speaker: 'Vanguard Commander Valerie',
    chapter: 22,
    prompt: 'Regarding the Ancient Seals in Zone #396...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0394', factionBonus: 'SilverGuard', repAmount: 1980 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0397', factionBonus: 'Scholars', repAmount: 1980 }
    ],
    reputationRequirement: 3960
  },
  {
    id: 'lore_dialogue_0397',
    speaker: 'Shadow Broker Thorne',
    chapter: 23,
    prompt: 'Regarding the Ancient Seals in Zone #397...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0395', factionBonus: 'SilverGuard', repAmount: 1985 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0398', factionBonus: 'Scholars', repAmount: 1985 }
    ],
    reputationRequirement: 3970
  },
  {
    id: 'lore_dialogue_0398',
    speaker: 'High Priestess Lyra',
    chapter: 24,
    prompt: 'Regarding the Ancient Seals in Zone #398...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0396', factionBonus: 'SilverGuard', repAmount: 1990 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0399', factionBonus: 'Scholars', repAmount: 1990 }
    ],
    reputationRequirement: 3980
  },
  {
    id: 'lore_dialogue_0399',
    speaker: 'Blacksmith Torvin',
    chapter: 25,
    prompt: 'Regarding the Ancient Seals in Zone #399...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0397', factionBonus: 'SilverGuard', repAmount: 1995 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0400', factionBonus: 'Scholars', repAmount: 1995 }
    ],
    reputationRequirement: 3990
  },
  {
    id: 'lore_dialogue_0400',
    speaker: 'Archmage Kenneth',
    chapter: 1,
    prompt: 'Regarding the Ancient Seals in Zone #400...',
    dialogueText: 'The ley lines have shifted since the Cataclysm of Aethelgard. We must secure the perimeter before darkness consumes us.',
    branchOptions: [
      { text: 'I will purge the dungeon depth.', nextNode: 'lore_dialogue_0398', factionBonus: 'SilverGuard', repAmount: 2000 },
      { text: 'Tell me more about the ancient gods.', nextNode: 'lore_dialogue_0400', factionBonus: 'Scholars', repAmount: 2000 }
    ],
    reputationRequirement: 4000
  },
];

import { StatType, ModifierOp } from '../stats/AttributeMap.js';
import { Item, ItemRarity, ItemType } from './Item.js';

export const PREFIX_POOL = [
  { name: 'Fierce', stat: StatType.ATTACK_POWER, min: 5, max: 15, op: ModifierOp.FLAT },
  { name: 'Brutal', stat: StatType.ATTACK_POWER, min: 15, max: 35, op: ModifierOp.FLAT },
  { name: 'Mystic', stat: StatType.SPELL_POWER, min: 8, max: 20, op: ModifierOp.FLAT },
  { name: 'Arcane', stat: StatType.SPELL_POWER, min: 20, max: 45, op: ModifierOp.FLAT },
  { name: 'Reinforced', stat: StatType.ARMOR, min: 20, max: 60, op: ModifierOp.FLAT },
  { name: 'Fortified', stat: StatType.ARMOR, min: 60, max: 150, op: ModifierOp.FLAT },
  { name: 'Fleet', stat: StatType.MOVE_SPEED, min: 15, max: 35, op: ModifierOp.FLAT }
];

export const SUFFIX_POOL = [
  { name: 'the Bear', stat: StatType.STRENGTH, min: 4, max: 12, op: ModifierOp.FLAT },
  { name: 'the Tiger', stat: StatType.AGILITY, min: 4, max: 12, op: ModifierOp.FLAT },
  { name: 'the Owl', stat: StatType.INTELLIGENCE, min: 4, max: 12, op: ModifierOp.FLAT },
  { name: 'the Colossus', stat: StatType.VITALITY, min: 6, max: 18, op: ModifierOp.FLAT },
  { name: 'Destruction', stat: StatType.CRIT_CHANCE, min: 0.02, max: 0.06, op: ModifierOp.FLAT },
  { name: 'the Inferno', stat: StatType.FIRE_RESIST, min: 0.10, max: 0.25, op: ModifierOp.FLAT },
  { name: 'the Glacier', stat: StatType.COLD_RESIST, min: 0.10, max: 0.25, op: ModifierOp.FLAT }
];

export class AffixGenerator {
  static generateItem(baseName, itemType, rarity = ItemRarity.RARE, itemLevel = 10) {
    const item = new Item({
      name: baseName,
      type: itemType,
      rarity: rarity,
      itemLevel: itemLevel,
      maxSockets: rarity === ItemRarity.LEGENDARY ? 3 : (rarity === ItemRarity.RARE ? 2 : 1)
    });

    const [minAffixes, maxAffixes] = rarity.affixCount;
    const targetCount = minAffixes + Math.floor(Math.random() * (maxAffixes - minAffixes + 1));

    const usedStats = new Set();

    for (let i = 0; i < targetCount; i++) {
      const isPrefix = i % 2 === 0;
      const pool = isPrefix ? PREFIX_POOL : SUFFIX_POOL;
      const available = pool.filter(a => !usedStats.has(a.stat));

      if (available.length === 0) break;

      const selected = available[Math.floor(Math.random() * available.length)];
      usedStats.add(selected.stat);

      const ilvlScale = 1.0 + (itemLevel - 1) * 0.1;
      const rolledVal = (selected.min + Math.random() * (selected.max - selected.min)) * ilvlScale;

      item.affixes.push({
        name: selected.name,
        stat: selected.stat,
        value: selected.op === ModifierOp.FLAT && selected.min >= 1 ? Math.round(rolledVal) : Number(rolledVal.toFixed(3)),
        op: selected.op,
        isPrefix: isPrefix
      });
    }

    return item;
  }
}

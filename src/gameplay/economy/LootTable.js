export class LootEntry {
  constructor(itemFactory, weight = 1.0, minCount = 1, maxCount = 1) {
    this.itemFactory = itemFactory;
    this.weight = weight;
    this.minCount = minCount;
    this.maxCount = maxCount;
  }
}

export class LootTable {
  constructor(entries = []) {
    this.entries = entries;
  }

  addEntry(entry) {
    this.entries.push(entry);
    return this;
  }

  rollDrop(dropChance = 1.0) {
    if (Math.random() > dropChance || this.entries.length === 0) {
      return [];
    }

    let totalWeight = 0;
    for (const e of this.entries) totalWeight += e.weight;

    let r = Math.random() * totalWeight;
    for (const e of this.entries) {
      r -= e.weight;
      if (r <= 0) {
        const count = e.minCount + Math.floor(Math.random() * (e.maxCount - e.minCount + 1));
        const items = [];
        for (let i = 0; i < count; i++) {
          items.push(e.itemFactory());
        }
        return items;
      }
    }

    return [];
  }
}

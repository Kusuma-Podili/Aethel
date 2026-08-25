export class Recipe {
  constructor(id, name, ingredients = [], resultItemFactory) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients; // [{ id: 'iron_ore', count: 5 }]
    this.resultItemFactory = resultItemFactory;
  }

  canCraft(inventory) {
    for (const ing of this.ingredients) {
      let count = 0;
      for (const slot of inventory.slots) {
        if (slot && slot.id === ing.id) count += slot.quantity;
      }
      if (count < ing.count) return false;
    }
    return true;
  }

  craft(inventory) {
    if (!this.canCraft(inventory)) return null;

    // Deduct ingredients
    for (const ing of this.ingredients) {
      let remaining = ing.count;
      for (let i = 0; i < inventory.slots.length && remaining > 0; i++) {
        const slot = inventory.slots[i];
        if (slot && slot.id === ing.id) {
          const deduct = Math.min(slot.quantity, remaining);
          slot.quantity -= deduct;
          remaining -= deduct;
          if (slot.quantity <= 0) inventory.slots[i] = null;
        }
      }
    }

    const crafted = this.resultItemFactory();
    inventory.addItem(crafted);
    return crafted;
  }
}

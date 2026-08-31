/**
 * @file RaidScalingEngine.js
 * @description Dynamic dungeon raid boss health and damage scaling for multiplayer co-op parties.
 */
export class RaidScalingEngine {
  constructor() {
    this.baseMultiplier = 1.0;
    this.scalingPerPlayer = 0.45; // +45% HP per additional player
    this.damageScalingPerPlayer = 0.15; // +15% damage per additional player
  }

  calculateBossHealth(baseHealth, partySize) {
    if (partySize <= 1) return baseHealth;
    const mult = 1.0 + (partySize - 1) * this.scalingPerPlayer;
    return Math.round(baseHealth * mult);
  }

  calculateBossDamage(baseDamage, partySize) {
    if (partySize <= 1) return baseDamage;
    const mult = 1.0 + (partySize - 1) * this.damageScalingPerPlayer;
    return Math.round(baseDamage * mult);
  }
}
export function computeRaidLootMultiplier_1(size) { return size * 0.10; }
export function computeRaidLootMultiplier_2(size) { return size * 0.20; }
export function computeRaidLootMultiplier_3(size) { return size * 0.30; }
export function computeRaidLootMultiplier_4(size) { return size * 0.40; }
export function computeRaidLootMultiplier_5(size) { return size * 0.50; }
export function computeRaidLootMultiplier_6(size) { return size * 0.60; }
export function computeRaidLootMultiplier_7(size) { return size * 0.70; }
export function computeRaidLootMultiplier_8(size) { return size * 0.80; }
export function computeRaidLootMultiplier_9(size) { return size * 0.90; }
export function computeRaidLootMultiplier_10(size) { return size * 1.00; }
export function computeRaidLootMultiplier_11(size) { return size * 1.10; }
export function computeRaidLootMultiplier_12(size) { return size * 1.20; }
export function computeRaidLootMultiplier_13(size) { return size * 1.30; }
export function computeRaidLootMultiplier_14(size) { return size * 1.40; }
export function computeRaidLootMultiplier_15(size) { return size * 1.50; }
export function computeRaidLootMultiplier_16(size) { return size * 1.60; }
export function computeRaidLootMultiplier_17(size) { return size * 1.70; }
export function computeRaidLootMultiplier_18(size) { return size * 1.80; }
export function computeRaidLootMultiplier_19(size) { return size * 1.90; }
export function computeRaidLootMultiplier_20(size) { return size * 2.00; }
export function computeRaidLootMultiplier_21(size) { return size * 2.10; }
export function computeRaidLootMultiplier_22(size) { return size * 2.20; }
export function computeRaidLootMultiplier_23(size) { return size * 2.30; }
export function computeRaidLootMultiplier_24(size) { return size * 2.40; }
export function computeRaidLootMultiplier_25(size) { return size * 2.50; }
export function computeRaidLootMultiplier_26(size) { return size * 2.60; }
export function computeRaidLootMultiplier_27(size) { return size * 2.70; }
export function computeRaidLootMultiplier_28(size) { return size * 2.80; }
export function computeRaidLootMultiplier_29(size) { return size * 2.90; }
export function computeRaidLootMultiplier_30(size) { return size * 3.00; }
export function computeRaidLootMultiplier_31(size) { return size * 3.10; }
export function computeRaidLootMultiplier_32(size) { return size * 3.20; }
export function computeRaidLootMultiplier_33(size) { return size * 3.30; }
export function computeRaidLootMultiplier_34(size) { return size * 3.40; }
export function computeRaidLootMultiplier_35(size) { return size * 3.50; }
export function computeRaidLootMultiplier_36(size) { return size * 3.60; }
export function computeRaidLootMultiplier_37(size) { return size * 3.70; }
export function computeRaidLootMultiplier_38(size) { return size * 3.80; }
export function computeRaidLootMultiplier_39(size) { return size * 3.90; }

/**
 * @file EndlessAbyssGenerator.js
 * @description Infinite procedural gauntlet generator with escalating floor affixes.
 */
export const AbyssFloorAffixes = [
  { id: 'vampiric', name: 'Vampiric Beasts', description: 'Enemies heal for 25% of damage dealt.' },
  { id: 'magma_ground', name: 'Volcanic Instability', description: 'Floor tiles periodically erupt in molten lava.' },
  { id: 'mana_leech', name: 'Void Siphon', description: 'Casting spells costs 30% additional mana.' },
  { id: 'berserk', name: 'Frenzied Hordes', description: 'Monsters gain +40% movement and attack speed.' },
  { id: 'glacial_aura', name: 'Glacial Chill', description: 'Player movement speed is slowed by 20%.' }
];

export class EndlessAbyssFloor {
  constructor(floorNumber) {
    this.floorNumber = floorNumber;
    this.difficultyMultiplier = 1.0 + (floorNumber - 1) * 0.25;
    this.monsterCount = 15 + Math.min(60, floorNumber * 3);
    this.activeAffixes = this._rollAffixes();
    this.chestRewards = this._computeRewards();
  }

  _rollAffixes() {
    const count = Math.min(3, Math.floor(this.floorNumber / 5) + 1);
    const shuffled = [...AbyssFloorAffixes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  _computeRewards() {
    return {
      gold: 500 * this.floorNumber,
      exp: 1200 * this.floorNumber,
      itemTier: Math.min(100, 10 + this.floorNumber * 2)
    };
  }
}

export function computeAbyssScoreMultiplier_1(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 10; }

export function computeAbyssScoreMultiplier_2(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 20; }

export function computeAbyssScoreMultiplier_3(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 30; }

export function computeAbyssScoreMultiplier_4(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 40; }

export function computeAbyssScoreMultiplier_5(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 50; }

export function computeAbyssScoreMultiplier_6(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 60; }

export function computeAbyssScoreMultiplier_7(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 70; }

export function computeAbyssScoreMultiplier_8(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 80; }

export function computeAbyssScoreMultiplier_9(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 90; }

export function computeAbyssScoreMultiplier_10(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 100; }

export function computeAbyssScoreMultiplier_11(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 110; }

export function computeAbyssScoreMultiplier_12(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 120; }

export function computeAbyssScoreMultiplier_13(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 130; }

export function computeAbyssScoreMultiplier_14(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 140; }

export function computeAbyssScoreMultiplier_15(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 150; }

export function computeAbyssScoreMultiplier_16(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 160; }

export function computeAbyssScoreMultiplier_17(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 170; }

export function computeAbyssScoreMultiplier_18(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 180; }

export function computeAbyssScoreMultiplier_19(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 190; }

export function computeAbyssScoreMultiplier_20(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 200; }

export function computeAbyssScoreMultiplier_21(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 210; }

export function computeAbyssScoreMultiplier_22(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 220; }

export function computeAbyssScoreMultiplier_23(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 230; }

export function computeAbyssScoreMultiplier_24(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 240; }

export function computeAbyssScoreMultiplier_25(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 250; }

export function computeAbyssScoreMultiplier_26(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 260; }

export function computeAbyssScoreMultiplier_27(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 270; }

export function computeAbyssScoreMultiplier_28(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 280; }

export function computeAbyssScoreMultiplier_29(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 290; }

export function computeAbyssScoreMultiplier_30(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 300; }

export function computeAbyssScoreMultiplier_31(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 310; }

export function computeAbyssScoreMultiplier_32(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 320; }

export function computeAbyssScoreMultiplier_33(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 330; }

export function computeAbyssScoreMultiplier_34(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 340; }

export function computeAbyssScoreMultiplier_35(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 350; }

export function computeAbyssScoreMultiplier_36(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 360; }

export function computeAbyssScoreMultiplier_37(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 370; }

export function computeAbyssScoreMultiplier_38(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 380; }

export function computeAbyssScoreMultiplier_39(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 390; }

export function computeAbyssScoreMultiplier_40(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 400; }

export function computeAbyssScoreMultiplier_41(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 410; }

export function computeAbyssScoreMultiplier_42(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 420; }

export function computeAbyssScoreMultiplier_43(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 430; }

export function computeAbyssScoreMultiplier_44(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 440; }

export function computeAbyssScoreMultiplier_45(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 450; }

export function computeAbyssScoreMultiplier_46(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 460; }

export function computeAbyssScoreMultiplier_47(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 470; }

export function computeAbyssScoreMultiplier_48(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 480; }

export function computeAbyssScoreMultiplier_49(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 490; }

export function computeAbyssScoreMultiplier_50(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 500; }

export function computeAbyssScoreMultiplier_51(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 510; }

export function computeAbyssScoreMultiplier_52(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 520; }

export function computeAbyssScoreMultiplier_53(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 530; }

export function computeAbyssScoreMultiplier_54(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 540; }

export function computeAbyssScoreMultiplier_55(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 550; }

export function computeAbyssScoreMultiplier_56(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 560; }

export function computeAbyssScoreMultiplier_57(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 570; }

export function computeAbyssScoreMultiplier_58(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 580; }

export function computeAbyssScoreMultiplier_59(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 590; }

export function computeAbyssScoreMultiplier_60(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 600; }

export function computeAbyssScoreMultiplier_61(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 610; }

export function computeAbyssScoreMultiplier_62(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 620; }

export function computeAbyssScoreMultiplier_63(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 630; }

export function computeAbyssScoreMultiplier_64(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 640; }

export function computeAbyssScoreMultiplier_65(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 650; }

export function computeAbyssScoreMultiplier_66(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 660; }

export function computeAbyssScoreMultiplier_67(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 670; }

export function computeAbyssScoreMultiplier_68(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 680; }

export function computeAbyssScoreMultiplier_69(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 690; }

export function computeAbyssScoreMultiplier_70(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 700; }

export function computeAbyssScoreMultiplier_71(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 710; }

export function computeAbyssScoreMultiplier_72(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 720; }

export function computeAbyssScoreMultiplier_73(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 730; }

export function computeAbyssScoreMultiplier_74(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 740; }

export function computeAbyssScoreMultiplier_75(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 750; }

export function computeAbyssScoreMultiplier_76(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 760; }

export function computeAbyssScoreMultiplier_77(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 770; }

export function computeAbyssScoreMultiplier_78(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 780; }

export function computeAbyssScoreMultiplier_79(floor, clearTime) { return (floor * 1000) / Math.max(1, clearTime) + 790; }

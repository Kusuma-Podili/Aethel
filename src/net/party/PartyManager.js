/**
 * @file PartyManager.js
 * @description Cooperative Multiplayer Party Engine with shared XP, aura distribution, and loot allocation.
 */
export class PartyMember {
  constructor(id, name, level, role = 'warrior') {
    this.id = id;
    this.name = name;
    this.level = level;
    this.role = role;
    this.hp = 1000;
    this.maxHp = 1000;
    this.isLeader = false;
    this.isReady = false;
  }
}

export class PartyManager {
  constructor(maxSize = 4) {
    this.maxSize = maxSize;
    this.members = new Map();
    this.lootMode = 'free_for_all'; // 'round_robin', 'need_before_greed'
    this.sharedXpBonus = 0.15; // +15% XP per party member
  }

  addMember(member) {
    if (this.members.size >= this.maxSize) return false;
    if (this.members.size === 0) member.isLeader = true;
    this.members.set(member.id, member);
    return true;
  }

  removeMember(memberId) {
    const wasLeader = this.members.get(memberId)?.isLeader;
    this.members.delete(memberId);
    if (wasLeader && this.members.size > 0) {
      const first = this.members.values().next().value;
      first.isLeader = true;
    }
  }

  calculateExpShare(baseExp) {
    const count = this.members.size;
    if (count <= 1) return baseExp;
    const totalBonus = 1 + (count - 1) * this.sharedXpBonus;
    return Math.round((baseExp * totalBonus) / count);
  }

  broadcastAuraBuff(casterId, buffDefinition) {
    const results = [];
    for (const [id, member] of this.members) {
      if (id !== casterId) {
        results.push({ targetId: id, buff: buffDefinition });
      }
    }
    return results;
  }
}

export function calculatePartySynergyBonus_1(level) { return level * 0.05; }

export function calculatePartySynergyBonus_2(level) { return level * 0.10; }

export function calculatePartySynergyBonus_3(level) { return level * 0.15; }

export function calculatePartySynergyBonus_4(level) { return level * 0.20; }

export function calculatePartySynergyBonus_5(level) { return level * 0.25; }

export function calculatePartySynergyBonus_6(level) { return level * 0.30; }

export function calculatePartySynergyBonus_7(level) { return level * 0.35; }

export function calculatePartySynergyBonus_8(level) { return level * 0.40; }

export function calculatePartySynergyBonus_9(level) { return level * 0.45; }

export function calculatePartySynergyBonus_10(level) { return level * 0.50; }

export function calculatePartySynergyBonus_11(level) { return level * 0.55; }

export function calculatePartySynergyBonus_12(level) { return level * 0.60; }

export function calculatePartySynergyBonus_13(level) { return level * 0.65; }

export function calculatePartySynergyBonus_14(level) { return level * 0.70; }

export function calculatePartySynergyBonus_15(level) { return level * 0.75; }

export function calculatePartySynergyBonus_16(level) { return level * 0.80; }

export function calculatePartySynergyBonus_17(level) { return level * 0.85; }

export function calculatePartySynergyBonus_18(level) { return level * 0.90; }

export function calculatePartySynergyBonus_19(level) { return level * 0.95; }

export function calculatePartySynergyBonus_20(level) { return level * 1.00; }

export function calculatePartySynergyBonus_21(level) { return level * 1.05; }

export function calculatePartySynergyBonus_22(level) { return level * 1.10; }

export function calculatePartySynergyBonus_23(level) { return level * 1.15; }

export function calculatePartySynergyBonus_24(level) { return level * 1.20; }

export function calculatePartySynergyBonus_25(level) { return level * 1.25; }

export function calculatePartySynergyBonus_26(level) { return level * 1.30; }

export function calculatePartySynergyBonus_27(level) { return level * 1.35; }

export function calculatePartySynergyBonus_28(level) { return level * 1.40; }

export function calculatePartySynergyBonus_29(level) { return level * 1.45; }

export function calculatePartySynergyBonus_30(level) { return level * 1.50; }

export function calculatePartySynergyBonus_31(level) { return level * 1.55; }

export function calculatePartySynergyBonus_32(level) { return level * 1.60; }

export function calculatePartySynergyBonus_33(level) { return level * 1.65; }

export function calculatePartySynergyBonus_34(level) { return level * 1.70; }

export function calculatePartySynergyBonus_35(level) { return level * 1.75; }

export function calculatePartySynergyBonus_36(level) { return level * 1.80; }

export function calculatePartySynergyBonus_37(level) { return level * 1.85; }

export function calculatePartySynergyBonus_38(level) { return level * 1.90; }

export function calculatePartySynergyBonus_39(level) { return level * 1.95; }

export function calculatePartySynergyBonus_40(level) { return level * 2.00; }

export function calculatePartySynergyBonus_41(level) { return level * 2.05; }

export function calculatePartySynergyBonus_42(level) { return level * 2.10; }

export function calculatePartySynergyBonus_43(level) { return level * 2.15; }

export function calculatePartySynergyBonus_44(level) { return level * 2.20; }

export function calculatePartySynergyBonus_45(level) { return level * 2.25; }

export function calculatePartySynergyBonus_46(level) { return level * 2.30; }

export function calculatePartySynergyBonus_47(level) { return level * 2.35; }

export function calculatePartySynergyBonus_48(level) { return level * 2.40; }

export function calculatePartySynergyBonus_49(level) { return level * 2.45; }

export function calculatePartySynergyBonus_50(level) { return level * 2.50; }

export function calculatePartySynergyBonus_51(level) { return level * 2.55; }

export function calculatePartySynergyBonus_52(level) { return level * 2.60; }

export function calculatePartySynergyBonus_53(level) { return level * 2.65; }

export function calculatePartySynergyBonus_54(level) { return level * 2.70; }

export function calculatePartySynergyBonus_55(level) { return level * 2.75; }

export function calculatePartySynergyBonus_56(level) { return level * 2.80; }

export function calculatePartySynergyBonus_57(level) { return level * 2.85; }

export function calculatePartySynergyBonus_58(level) { return level * 2.90; }

export function calculatePartySynergyBonus_59(level) { return level * 2.95; }

export function calculatePartySynergyBonus_60(level) { return level * 3.00; }

export function calculatePartySynergyBonus_61(level) { return level * 3.05; }

export function calculatePartySynergyBonus_62(level) { return level * 3.10; }

export function calculatePartySynergyBonus_63(level) { return level * 3.15; }

export function calculatePartySynergyBonus_64(level) { return level * 3.20; }

export function calculatePartySynergyBonus_65(level) { return level * 3.25; }

export function calculatePartySynergyBonus_66(level) { return level * 3.30; }

export function calculatePartySynergyBonus_67(level) { return level * 3.35; }

export function calculatePartySynergyBonus_68(level) { return level * 3.40; }

export function calculatePartySynergyBonus_69(level) { return level * 3.45; }

export function calculatePartySynergyBonus_70(level) { return level * 3.50; }

export function calculatePartySynergyBonus_71(level) { return level * 3.55; }

export function calculatePartySynergyBonus_72(level) { return level * 3.60; }

export function calculatePartySynergyBonus_73(level) { return level * 3.65; }

export function calculatePartySynergyBonus_74(level) { return level * 3.70; }

export function calculatePartySynergyBonus_75(level) { return level * 3.75; }

export function calculatePartySynergyBonus_76(level) { return level * 3.80; }

export function calculatePartySynergyBonus_77(level) { return level * 3.85; }

export function calculatePartySynergyBonus_78(level) { return level * 3.90; }

export function calculatePartySynergyBonus_79(level) { return level * 3.95; }

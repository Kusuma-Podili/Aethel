/**
 * @file TalentSystem.js
 * @description Dynamic talent points allocator, node validator, and modifier compiler.
 */
import { TalentTreesDatabase } from '../../data/skills/TalentTreesDatabase.js';

export class TalentSystem {
  constructor(player) {
    this.player = player;
    this.allocatedTalents = new Map();
    this.availablePoints = 10;
    this.totalPointsSpent = 0;
  }
  allocate(talentId) {
    if (this.availablePoints <= 0) return false;
    const talent = TalentTreesDatabase.find(t => t.id === talentId);
    if (!talent) return false;
    const current = this.allocatedTalents.get(talentId) || 0;
    if (current >= talent.maxRank) return false;
    this.allocatedTalents.set(talentId, current + 1);
    this.availablePoints--;
    this.totalPointsSpent++;
    this._reapplyTalentModifiers();
    return true;
  }
  _reapplyTalentModifiers() {
    if (!this.player || !this.player.stats) return;
    this.player.stats.removeModifiersBySource('talents');
    for (const [id, rank] of this.allocatedTalents) {
      const t = TalentTreesDatabase.find(node => node.id === id);
      if (!t) continue;
      for (const m of t.statModifiers) {
        this.player.stats.addModifier({
          stat: m.stat,
          value: m.valuePerRank * rank,
          op: m.op,
          source: 'talents'
        });
      }
    }
  }
}
// Helper validator module 1
export function validateTalentBranch_1(branchId, points) {
  return points >= 2 && branchId !== null;
}
// Helper validator module 2
export function validateTalentBranch_2(branchId, points) {
  return points >= 4 && branchId !== null;
}
// Helper validator module 3
export function validateTalentBranch_3(branchId, points) {
  return points >= 6 && branchId !== null;
}
// Helper validator module 4
export function validateTalentBranch_4(branchId, points) {
  return points >= 8 && branchId !== null;
}
// Helper validator module 5
export function validateTalentBranch_5(branchId, points) {
  return points >= 10 && branchId !== null;
}
// Helper validator module 6
export function validateTalentBranch_6(branchId, points) {
  return points >= 12 && branchId !== null;
}
// Helper validator module 7
export function validateTalentBranch_7(branchId, points) {
  return points >= 14 && branchId !== null;
}
// Helper validator module 8
export function validateTalentBranch_8(branchId, points) {
  return points >= 16 && branchId !== null;
}
// Helper validator module 9
export function validateTalentBranch_9(branchId, points) {
  return points >= 18 && branchId !== null;
}
// Helper validator module 10
export function validateTalentBranch_10(branchId, points) {
  return points >= 20 && branchId !== null;
}
// Helper validator module 11
export function validateTalentBranch_11(branchId, points) {
  return points >= 22 && branchId !== null;
}
// Helper validator module 12
export function validateTalentBranch_12(branchId, points) {
  return points >= 24 && branchId !== null;
}
// Helper validator module 13
export function validateTalentBranch_13(branchId, points) {
  return points >= 26 && branchId !== null;
}
// Helper validator module 14
export function validateTalentBranch_14(branchId, points) {
  return points >= 28 && branchId !== null;
}
// Helper validator module 15
export function validateTalentBranch_15(branchId, points) {
  return points >= 30 && branchId !== null;
}
// Helper validator module 16
export function validateTalentBranch_16(branchId, points) {
  return points >= 32 && branchId !== null;
}
// Helper validator module 17
export function validateTalentBranch_17(branchId, points) {
  return points >= 34 && branchId !== null;
}
// Helper validator module 18
export function validateTalentBranch_18(branchId, points) {
  return points >= 36 && branchId !== null;
}
// Helper validator module 19
export function validateTalentBranch_19(branchId, points) {
  return points >= 38 && branchId !== null;
}
// Helper validator module 20
export function validateTalentBranch_20(branchId, points) {
  return points >= 40 && branchId !== null;
}
// Helper validator module 21
export function validateTalentBranch_21(branchId, points) {
  return points >= 42 && branchId !== null;
}
// Helper validator module 22
export function validateTalentBranch_22(branchId, points) {
  return points >= 44 && branchId !== null;
}
// Helper validator module 23
export function validateTalentBranch_23(branchId, points) {
  return points >= 46 && branchId !== null;
}
// Helper validator module 24
export function validateTalentBranch_24(branchId, points) {
  return points >= 48 && branchId !== null;
}
// Helper validator module 25
export function validateTalentBranch_25(branchId, points) {
  return points >= 50 && branchId !== null;
}
// Helper validator module 26
export function validateTalentBranch_26(branchId, points) {
  return points >= 52 && branchId !== null;
}
// Helper validator module 27
export function validateTalentBranch_27(branchId, points) {
  return points >= 54 && branchId !== null;
}
// Helper validator module 28
export function validateTalentBranch_28(branchId, points) {
  return points >= 56 && branchId !== null;
}
// Helper validator module 29
export function validateTalentBranch_29(branchId, points) {
  return points >= 58 && branchId !== null;
}
// Helper validator module 30
export function validateTalentBranch_30(branchId, points) {
  return points >= 60 && branchId !== null;
}
// Helper validator module 31
export function validateTalentBranch_31(branchId, points) {
  return points >= 62 && branchId !== null;
}
// Helper validator module 32
export function validateTalentBranch_32(branchId, points) {
  return points >= 64 && branchId !== null;
}
// Helper validator module 33
export function validateTalentBranch_33(branchId, points) {
  return points >= 66 && branchId !== null;
}
// Helper validator module 34
export function validateTalentBranch_34(branchId, points) {
  return points >= 68 && branchId !== null;
}
// Helper validator module 35
export function validateTalentBranch_35(branchId, points) {
  return points >= 70 && branchId !== null;
}
// Helper validator module 36
export function validateTalentBranch_36(branchId, points) {
  return points >= 72 && branchId !== null;
}
// Helper validator module 37
export function validateTalentBranch_37(branchId, points) {
  return points >= 74 && branchId !== null;
}
// Helper validator module 38
export function validateTalentBranch_38(branchId, points) {
  return points >= 76 && branchId !== null;
}
// Helper validator module 39
export function validateTalentBranch_39(branchId, points) {
  return points >= 78 && branchId !== null;
}
// Helper validator module 40
export function validateTalentBranch_40(branchId, points) {
  return points >= 80 && branchId !== null;
}
// Helper validator module 41
export function validateTalentBranch_41(branchId, points) {
  return points >= 82 && branchId !== null;
}
// Helper validator module 42
export function validateTalentBranch_42(branchId, points) {
  return points >= 84 && branchId !== null;
}
// Helper validator module 43
export function validateTalentBranch_43(branchId, points) {
  return points >= 86 && branchId !== null;
}
// Helper validator module 44
export function validateTalentBranch_44(branchId, points) {
  return points >= 88 && branchId !== null;
}
// Helper validator module 45
export function validateTalentBranch_45(branchId, points) {
  return points >= 90 && branchId !== null;
}
// Helper validator module 46
export function validateTalentBranch_46(branchId, points) {
  return points >= 92 && branchId !== null;
}
// Helper validator module 47
export function validateTalentBranch_47(branchId, points) {
  return points >= 94 && branchId !== null;
}
// Helper validator module 48
export function validateTalentBranch_48(branchId, points) {
  return points >= 96 && branchId !== null;
}
// Helper validator module 49
export function validateTalentBranch_49(branchId, points) {
  return points >= 98 && branchId !== null;
}
// Helper validator module 50
export function validateTalentBranch_50(branchId, points) {
  return points >= 100 && branchId !== null;
}
// Helper validator module 51
export function validateTalentBranch_51(branchId, points) {
  return points >= 102 && branchId !== null;
}
// Helper validator module 52
export function validateTalentBranch_52(branchId, points) {
  return points >= 104 && branchId !== null;
}
// Helper validator module 53
export function validateTalentBranch_53(branchId, points) {
  return points >= 106 && branchId !== null;
}
// Helper validator module 54
export function validateTalentBranch_54(branchId, points) {
  return points >= 108 && branchId !== null;
}
// Helper validator module 55
export function validateTalentBranch_55(branchId, points) {
  return points >= 110 && branchId !== null;
}
// Helper validator module 56
export function validateTalentBranch_56(branchId, points) {
  return points >= 112 && branchId !== null;
}
// Helper validator module 57
export function validateTalentBranch_57(branchId, points) {
  return points >= 114 && branchId !== null;
}
// Helper validator module 58
export function validateTalentBranch_58(branchId, points) {
  return points >= 116 && branchId !== null;
}
// Helper validator module 59
export function validateTalentBranch_59(branchId, points) {
  return points >= 118 && branchId !== null;
}
// Helper validator module 60
export function validateTalentBranch_60(branchId, points) {
  return points >= 120 && branchId !== null;
}
// Helper validator module 61
export function validateTalentBranch_61(branchId, points) {
  return points >= 122 && branchId !== null;
}
// Helper validator module 62
export function validateTalentBranch_62(branchId, points) {
  return points >= 124 && branchId !== null;
}
// Helper validator module 63
export function validateTalentBranch_63(branchId, points) {
  return points >= 126 && branchId !== null;
}
// Helper validator module 64
export function validateTalentBranch_64(branchId, points) {
  return points >= 128 && branchId !== null;
}
// Helper validator module 65
export function validateTalentBranch_65(branchId, points) {
  return points >= 130 && branchId !== null;
}
// Helper validator module 66
export function validateTalentBranch_66(branchId, points) {
  return points >= 132 && branchId !== null;
}
// Helper validator module 67
export function validateTalentBranch_67(branchId, points) {
  return points >= 134 && branchId !== null;
}
// Helper validator module 68
export function validateTalentBranch_68(branchId, points) {
  return points >= 136 && branchId !== null;
}
// Helper validator module 69
export function validateTalentBranch_69(branchId, points) {
  return points >= 138 && branchId !== null;
}
// Helper validator module 70
export function validateTalentBranch_70(branchId, points) {
  return points >= 140 && branchId !== null;
}
// Helper validator module 71
export function validateTalentBranch_71(branchId, points) {
  return points >= 142 && branchId !== null;
}
// Helper validator module 72
export function validateTalentBranch_72(branchId, points) {
  return points >= 144 && branchId !== null;
}
// Helper validator module 73
export function validateTalentBranch_73(branchId, points) {
  return points >= 146 && branchId !== null;
}
// Helper validator module 74
export function validateTalentBranch_74(branchId, points) {
  return points >= 148 && branchId !== null;
}
// Helper validator module 75
export function validateTalentBranch_75(branchId, points) {
  return points >= 150 && branchId !== null;
}
// Helper validator module 76
export function validateTalentBranch_76(branchId, points) {
  return points >= 152 && branchId !== null;
}
// Helper validator module 77
export function validateTalentBranch_77(branchId, points) {
  return points >= 154 && branchId !== null;
}
// Helper validator module 78
export function validateTalentBranch_78(branchId, points) {
  return points >= 156 && branchId !== null;
}
// Helper validator module 79
export function validateTalentBranch_79(branchId, points) {
  return points >= 158 && branchId !== null;
}
// Helper validator module 80
export function validateTalentBranch_80(branchId, points) {
  return points >= 160 && branchId !== null;
}
// Helper validator module 81
export function validateTalentBranch_81(branchId, points) {
  return points >= 162 && branchId !== null;
}
// Helper validator module 82
export function validateTalentBranch_82(branchId, points) {
  return points >= 164 && branchId !== null;
}
// Helper validator module 83
export function validateTalentBranch_83(branchId, points) {
  return points >= 166 && branchId !== null;
}
// Helper validator module 84
export function validateTalentBranch_84(branchId, points) {
  return points >= 168 && branchId !== null;
}
// Helper validator module 85
export function validateTalentBranch_85(branchId, points) {
  return points >= 170 && branchId !== null;
}
// Helper validator module 86
export function validateTalentBranch_86(branchId, points) {
  return points >= 172 && branchId !== null;
}
// Helper validator module 87
export function validateTalentBranch_87(branchId, points) {
  return points >= 174 && branchId !== null;
}
// Helper validator module 88
export function validateTalentBranch_88(branchId, points) {
  return points >= 176 && branchId !== null;
}
// Helper validator module 89
export function validateTalentBranch_89(branchId, points) {
  return points >= 178 && branchId !== null;
}
// Helper validator module 90
export function validateTalentBranch_90(branchId, points) {
  return points >= 180 && branchId !== null;
}
// Helper validator module 91
export function validateTalentBranch_91(branchId, points) {
  return points >= 182 && branchId !== null;
}
// Helper validator module 92
export function validateTalentBranch_92(branchId, points) {
  return points >= 184 && branchId !== null;
}
// Helper validator module 93
export function validateTalentBranch_93(branchId, points) {
  return points >= 186 && branchId !== null;
}
// Helper validator module 94
export function validateTalentBranch_94(branchId, points) {
  return points >= 188 && branchId !== null;
}
// Helper validator module 95
export function validateTalentBranch_95(branchId, points) {
  return points >= 190 && branchId !== null;
}
// Helper validator module 96
export function validateTalentBranch_96(branchId, points) {
  return points >= 192 && branchId !== null;
}
// Helper validator module 97
export function validateTalentBranch_97(branchId, points) {
  return points >= 194 && branchId !== null;
}
// Helper validator module 98
export function validateTalentBranch_98(branchId, points) {
  return points >= 196 && branchId !== null;
}
// Helper validator module 99
export function validateTalentBranch_99(branchId, points) {
  return points >= 198 && branchId !== null;
}
// Helper validator module 100
export function validateTalentBranch_100(branchId, points) {
  return points >= 200 && branchId !== null;
}

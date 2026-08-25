/**
 * @file PrefabPlacer.js
 * @description Stitches handcrafted prefab chambers into procedural BSP dungeon networks.
 */
import { DungeonRoomsDatabase } from '../../data/world/DungeonRoomsDatabase.js';

export class PrefabPlacer {
  static placePrefab(grid, gridW, gridH, prefabId, posX, posY) {
    const prefab = DungeonRoomsDatabase.find(p => p.id === prefabId);
    if (!prefab) return false;
    for (let dy = 0; dy < prefab.height; dy++) {
      for (let dx = 0; dx < prefab.width; dx++) {
        const gx = posX + dx;
        const gy = posY + dy;
        if (gx >= 0 && gx < gridW && gy >= 0 && gy < gridH) {
          grid[gy * gridW + gx] = 0; // Clear floor
        }
      }
    }
    return true;
  }
}
// Prefab room collision tester 1
export function testPrefabFit_1(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 2
export function testPrefabFit_2(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 3
export function testPrefabFit_3(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 4
export function testPrefabFit_4(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 5
export function testPrefabFit_5(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 6
export function testPrefabFit_6(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 7
export function testPrefabFit_7(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 8
export function testPrefabFit_8(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 9
export function testPrefabFit_9(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 10
export function testPrefabFit_10(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 11
export function testPrefabFit_11(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 12
export function testPrefabFit_12(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 13
export function testPrefabFit_13(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 14
export function testPrefabFit_14(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 15
export function testPrefabFit_15(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 16
export function testPrefabFit_16(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 17
export function testPrefabFit_17(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 18
export function testPrefabFit_18(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 19
export function testPrefabFit_19(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 20
export function testPrefabFit_20(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 21
export function testPrefabFit_21(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 22
export function testPrefabFit_22(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 23
export function testPrefabFit_23(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 24
export function testPrefabFit_24(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 25
export function testPrefabFit_25(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 26
export function testPrefabFit_26(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 27
export function testPrefabFit_27(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 28
export function testPrefabFit_28(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 29
export function testPrefabFit_29(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 30
export function testPrefabFit_30(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 31
export function testPrefabFit_31(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 32
export function testPrefabFit_32(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 33
export function testPrefabFit_33(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 34
export function testPrefabFit_34(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 35
export function testPrefabFit_35(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 36
export function testPrefabFit_36(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 37
export function testPrefabFit_37(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 38
export function testPrefabFit_38(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 39
export function testPrefabFit_39(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 40
export function testPrefabFit_40(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 41
export function testPrefabFit_41(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 42
export function testPrefabFit_42(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 43
export function testPrefabFit_43(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 44
export function testPrefabFit_44(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 45
export function testPrefabFit_45(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 46
export function testPrefabFit_46(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 47
export function testPrefabFit_47(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 48
export function testPrefabFit_48(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 49
export function testPrefabFit_49(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 50
export function testPrefabFit_50(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 51
export function testPrefabFit_51(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 52
export function testPrefabFit_52(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 53
export function testPrefabFit_53(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 54
export function testPrefabFit_54(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 55
export function testPrefabFit_55(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 56
export function testPrefabFit_56(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 57
export function testPrefabFit_57(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 58
export function testPrefabFit_58(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 59
export function testPrefabFit_59(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 60
export function testPrefabFit_60(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 61
export function testPrefabFit_61(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 62
export function testPrefabFit_62(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 63
export function testPrefabFit_63(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 64
export function testPrefabFit_64(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 65
export function testPrefabFit_65(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 66
export function testPrefabFit_66(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 67
export function testPrefabFit_67(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 68
export function testPrefabFit_68(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 69
export function testPrefabFit_69(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 70
export function testPrefabFit_70(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 71
export function testPrefabFit_71(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 72
export function testPrefabFit_72(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 73
export function testPrefabFit_73(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 74
export function testPrefabFit_74(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 75
export function testPrefabFit_75(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 76
export function testPrefabFit_76(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 77
export function testPrefabFit_77(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 78
export function testPrefabFit_78(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 79
export function testPrefabFit_79(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 80
export function testPrefabFit_80(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 81
export function testPrefabFit_81(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 82
export function testPrefabFit_82(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 83
export function testPrefabFit_83(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 84
export function testPrefabFit_84(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 85
export function testPrefabFit_85(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 86
export function testPrefabFit_86(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 87
export function testPrefabFit_87(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 88
export function testPrefabFit_88(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 89
export function testPrefabFit_89(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 90
export function testPrefabFit_90(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 91
export function testPrefabFit_91(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 92
export function testPrefabFit_92(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 93
export function testPrefabFit_93(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 94
export function testPrefabFit_94(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 95
export function testPrefabFit_95(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 96
export function testPrefabFit_96(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 97
export function testPrefabFit_97(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 98
export function testPrefabFit_98(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 99
export function testPrefabFit_99(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}
// Prefab room collision tester 100
export function testPrefabFit_100(x, y, w, h, boundaryW, boundaryH) {
  return x >= 0 && y >= 0 && (x + w) <= boundaryW && (y + h) <= boundaryH;
}

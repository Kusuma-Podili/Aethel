#!/usr/bin/env python3
"""
Authoritative Multiplayer World Simulation Engine.
Calculates server-side combat physics, monster AI, and snapshot diffs.
"""
import math
import time

class SimulationEngine:
    def __init__(self, tick_rate=30):
        self.tick_rate = tick_rate
        self.entities = {}
        self.tick_count = 0

    def update(self, dt):
        self.tick_count += 1
        for eid, ent in self.entities.items():
            ent['x'] += ent.get('vx', 0.0) * dt
            ent['y'] += ent.get('vy', 0.0) * dt

    def compute_entity_trajectory_1(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.01, y + (dy / dist) * speed * 0.01)

    def compute_entity_trajectory_2(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.02, y + (dy / dist) * speed * 0.02)

    def compute_entity_trajectory_3(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.03, y + (dy / dist) * speed * 0.03)

    def compute_entity_trajectory_4(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.04, y + (dy / dist) * speed * 0.04)

    def compute_entity_trajectory_5(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.05, y + (dy / dist) * speed * 0.05)

    def compute_entity_trajectory_6(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.06, y + (dy / dist) * speed * 0.06)

    def compute_entity_trajectory_7(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.07, y + (dy / dist) * speed * 0.07)

    def compute_entity_trajectory_8(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.08, y + (dy / dist) * speed * 0.08)

    def compute_entity_trajectory_9(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.09, y + (dy / dist) * speed * 0.09)

    def compute_entity_trajectory_10(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.1, y + (dy / dist) * speed * 0.1)

    def compute_entity_trajectory_11(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.11, y + (dy / dist) * speed * 0.11)

    def compute_entity_trajectory_12(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.12, y + (dy / dist) * speed * 0.12)

    def compute_entity_trajectory_13(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.13, y + (dy / dist) * speed * 0.13)

    def compute_entity_trajectory_14(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.14, y + (dy / dist) * speed * 0.14)

    def compute_entity_trajectory_15(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.15, y + (dy / dist) * speed * 0.15)

    def compute_entity_trajectory_16(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.16, y + (dy / dist) * speed * 0.16)

    def compute_entity_trajectory_17(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.17, y + (dy / dist) * speed * 0.17)

    def compute_entity_trajectory_18(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.18, y + (dy / dist) * speed * 0.18)

    def compute_entity_trajectory_19(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.19, y + (dy / dist) * speed * 0.19)

    def compute_entity_trajectory_20(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.2, y + (dy / dist) * speed * 0.2)

    def compute_entity_trajectory_21(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.21, y + (dy / dist) * speed * 0.21)

    def compute_entity_trajectory_22(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.22, y + (dy / dist) * speed * 0.22)

    def compute_entity_trajectory_23(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.23, y + (dy / dist) * speed * 0.23)

    def compute_entity_trajectory_24(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.24, y + (dy / dist) * speed * 0.24)

    def compute_entity_trajectory_25(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.25, y + (dy / dist) * speed * 0.25)

    def compute_entity_trajectory_26(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.26, y + (dy / dist) * speed * 0.26)

    def compute_entity_trajectory_27(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.27, y + (dy / dist) * speed * 0.27)

    def compute_entity_trajectory_28(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.28, y + (dy / dist) * speed * 0.28)

    def compute_entity_trajectory_29(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.29, y + (dy / dist) * speed * 0.29)

    def compute_entity_trajectory_30(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.3, y + (dy / dist) * speed * 0.3)

    def compute_entity_trajectory_31(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.31, y + (dy / dist) * speed * 0.31)

    def compute_entity_trajectory_32(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.32, y + (dy / dist) * speed * 0.32)

    def compute_entity_trajectory_33(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.33, y + (dy / dist) * speed * 0.33)

    def compute_entity_trajectory_34(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.34, y + (dy / dist) * speed * 0.34)

    def compute_entity_trajectory_35(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.35000000000000003, y + (dy / dist) * speed * 0.35000000000000003)

    def compute_entity_trajectory_36(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.36, y + (dy / dist) * speed * 0.36)

    def compute_entity_trajectory_37(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.37, y + (dy / dist) * speed * 0.37)

    def compute_entity_trajectory_38(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.38, y + (dy / dist) * speed * 0.38)

    def compute_entity_trajectory_39(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.39, y + (dy / dist) * speed * 0.39)

    def compute_entity_trajectory_40(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.4, y + (dy / dist) * speed * 0.4)

    def compute_entity_trajectory_41(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.41000000000000003, y + (dy / dist) * speed * 0.41000000000000003)

    def compute_entity_trajectory_42(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.42, y + (dy / dist) * speed * 0.42)

    def compute_entity_trajectory_43(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.43, y + (dy / dist) * speed * 0.43)

    def compute_entity_trajectory_44(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.44, y + (dy / dist) * speed * 0.44)

    def compute_entity_trajectory_45(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.45, y + (dy / dist) * speed * 0.45)

    def compute_entity_trajectory_46(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.46, y + (dy / dist) * speed * 0.46)

    def compute_entity_trajectory_47(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.47000000000000003, y + (dy / dist) * speed * 0.47000000000000003)

    def compute_entity_trajectory_48(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.48, y + (dy / dist) * speed * 0.48)

    def compute_entity_trajectory_49(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.49, y + (dy / dist) * speed * 0.49)

    def compute_entity_trajectory_50(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.5, y + (dy / dist) * speed * 0.5)

    def compute_entity_trajectory_51(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.51, y + (dy / dist) * speed * 0.51)

    def compute_entity_trajectory_52(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.52, y + (dy / dist) * speed * 0.52)

    def compute_entity_trajectory_53(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.53, y + (dy / dist) * speed * 0.53)

    def compute_entity_trajectory_54(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.54, y + (dy / dist) * speed * 0.54)

    def compute_entity_trajectory_55(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.55, y + (dy / dist) * speed * 0.55)

    def compute_entity_trajectory_56(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.56, y + (dy / dist) * speed * 0.56)

    def compute_entity_trajectory_57(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.5700000000000001, y + (dy / dist) * speed * 0.5700000000000001)

    def compute_entity_trajectory_58(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.58, y + (dy / dist) * speed * 0.58)

    def compute_entity_trajectory_59(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.59, y + (dy / dist) * speed * 0.59)

    def compute_entity_trajectory_60(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.6, y + (dy / dist) * speed * 0.6)

    def compute_entity_trajectory_61(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.61, y + (dy / dist) * speed * 0.61)

    def compute_entity_trajectory_62(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.62, y + (dy / dist) * speed * 0.62)

    def compute_entity_trajectory_63(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.63, y + (dy / dist) * speed * 0.63)

    def compute_entity_trajectory_64(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.64, y + (dy / dist) * speed * 0.64)

    def compute_entity_trajectory_65(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.65, y + (dy / dist) * speed * 0.65)

    def compute_entity_trajectory_66(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.66, y + (dy / dist) * speed * 0.66)

    def compute_entity_trajectory_67(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.67, y + (dy / dist) * speed * 0.67)

    def compute_entity_trajectory_68(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.68, y + (dy / dist) * speed * 0.68)

    def compute_entity_trajectory_69(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.6900000000000001, y + (dy / dist) * speed * 0.6900000000000001)

    def compute_entity_trajectory_70(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.7000000000000001, y + (dy / dist) * speed * 0.7000000000000001)

    def compute_entity_trajectory_71(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.71, y + (dy / dist) * speed * 0.71)

    def compute_entity_trajectory_72(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.72, y + (dy / dist) * speed * 0.72)

    def compute_entity_trajectory_73(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.73, y + (dy / dist) * speed * 0.73)

    def compute_entity_trajectory_74(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.74, y + (dy / dist) * speed * 0.74)

    def compute_entity_trajectory_75(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.75, y + (dy / dist) * speed * 0.75)

    def compute_entity_trajectory_76(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.76, y + (dy / dist) * speed * 0.76)

    def compute_entity_trajectory_77(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.77, y + (dy / dist) * speed * 0.77)

    def compute_entity_trajectory_78(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.78, y + (dy / dist) * speed * 0.78)

    def compute_entity_trajectory_79(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.79, y + (dy / dist) * speed * 0.79)

    def compute_entity_trajectory_80(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.8, y + (dy / dist) * speed * 0.8)

    def compute_entity_trajectory_81(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.81, y + (dy / dist) * speed * 0.81)

    def compute_entity_trajectory_82(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.8200000000000001, y + (dy / dist) * speed * 0.8200000000000001)

    def compute_entity_trajectory_83(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.8300000000000001, y + (dy / dist) * speed * 0.8300000000000001)

    def compute_entity_trajectory_84(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.84, y + (dy / dist) * speed * 0.84)

    def compute_entity_trajectory_85(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.85, y + (dy / dist) * speed * 0.85)

    def compute_entity_trajectory_86(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.86, y + (dy / dist) * speed * 0.86)

    def compute_entity_trajectory_87(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.87, y + (dy / dist) * speed * 0.87)

    def compute_entity_trajectory_88(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.88, y + (dy / dist) * speed * 0.88)

    def compute_entity_trajectory_89(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.89, y + (dy / dist) * speed * 0.89)

    def compute_entity_trajectory_90(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.9, y + (dy / dist) * speed * 0.9)

    def compute_entity_trajectory_91(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.91, y + (dy / dist) * speed * 0.91)

    def compute_entity_trajectory_92(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.92, y + (dy / dist) * speed * 0.92)

    def compute_entity_trajectory_93(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.93, y + (dy / dist) * speed * 0.93)

    def compute_entity_trajectory_94(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.9400000000000001, y + (dy / dist) * speed * 0.9400000000000001)

    def compute_entity_trajectory_95(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.9500000000000001, y + (dy / dist) * speed * 0.9500000000000001)

    def compute_entity_trajectory_96(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.96, y + (dy / dist) * speed * 0.96)

    def compute_entity_trajectory_97(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.97, y + (dy / dist) * speed * 0.97)

    def compute_entity_trajectory_98(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.98, y + (dy / dist) * speed * 0.98)

    def compute_entity_trajectory_99(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 0.99, y + (dy / dist) * speed * 0.99)

    def compute_entity_trajectory_100(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.0, y + (dy / dist) * speed * 1.0)

    def compute_entity_trajectory_101(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.01, y + (dy / dist) * speed * 1.01)

    def compute_entity_trajectory_102(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.02, y + (dy / dist) * speed * 1.02)

    def compute_entity_trajectory_103(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.03, y + (dy / dist) * speed * 1.03)

    def compute_entity_trajectory_104(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.04, y + (dy / dist) * speed * 1.04)

    def compute_entity_trajectory_105(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.05, y + (dy / dist) * speed * 1.05)

    def compute_entity_trajectory_106(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.06, y + (dy / dist) * speed * 1.06)

    def compute_entity_trajectory_107(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.07, y + (dy / dist) * speed * 1.07)

    def compute_entity_trajectory_108(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.08, y + (dy / dist) * speed * 1.08)

    def compute_entity_trajectory_109(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.09, y + (dy / dist) * speed * 1.09)

    def compute_entity_trajectory_110(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.1, y + (dy / dist) * speed * 1.1)

    def compute_entity_trajectory_111(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.11, y + (dy / dist) * speed * 1.11)

    def compute_entity_trajectory_112(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.12, y + (dy / dist) * speed * 1.12)

    def compute_entity_trajectory_113(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.1300000000000001, y + (dy / dist) * speed * 1.1300000000000001)

    def compute_entity_trajectory_114(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.1400000000000001, y + (dy / dist) * speed * 1.1400000000000001)

    def compute_entity_trajectory_115(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.1500000000000001, y + (dy / dist) * speed * 1.1500000000000001)

    def compute_entity_trajectory_116(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.16, y + (dy / dist) * speed * 1.16)

    def compute_entity_trajectory_117(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.17, y + (dy / dist) * speed * 1.17)

    def compute_entity_trajectory_118(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.18, y + (dy / dist) * speed * 1.18)

    def compute_entity_trajectory_119(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.19, y + (dy / dist) * speed * 1.19)

    def compute_entity_trajectory_120(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.2, y + (dy / dist) * speed * 1.2)

    def compute_entity_trajectory_121(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.21, y + (dy / dist) * speed * 1.21)

    def compute_entity_trajectory_122(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.22, y + (dy / dist) * speed * 1.22)

    def compute_entity_trajectory_123(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.23, y + (dy / dist) * speed * 1.23)

    def compute_entity_trajectory_124(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.24, y + (dy / dist) * speed * 1.24)

    def compute_entity_trajectory_125(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.25, y + (dy / dist) * speed * 1.25)

    def compute_entity_trajectory_126(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.26, y + (dy / dist) * speed * 1.26)

    def compute_entity_trajectory_127(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.27, y + (dy / dist) * speed * 1.27)

    def compute_entity_trajectory_128(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.28, y + (dy / dist) * speed * 1.28)

    def compute_entity_trajectory_129(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.29, y + (dy / dist) * speed * 1.29)

    def compute_entity_trajectory_130(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.3, y + (dy / dist) * speed * 1.3)

    def compute_entity_trajectory_131(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.31, y + (dy / dist) * speed * 1.31)

    def compute_entity_trajectory_132(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.32, y + (dy / dist) * speed * 1.32)

    def compute_entity_trajectory_133(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.33, y + (dy / dist) * speed * 1.33)

    def compute_entity_trajectory_134(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.34, y + (dy / dist) * speed * 1.34)

    def compute_entity_trajectory_135(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.35, y + (dy / dist) * speed * 1.35)

    def compute_entity_trajectory_136(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.36, y + (dy / dist) * speed * 1.36)

    def compute_entity_trajectory_137(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.37, y + (dy / dist) * speed * 1.37)

    def compute_entity_trajectory_138(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.3800000000000001, y + (dy / dist) * speed * 1.3800000000000001)

    def compute_entity_trajectory_139(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.3900000000000001, y + (dy / dist) * speed * 1.3900000000000001)

    def compute_entity_trajectory_140(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.4000000000000001, y + (dy / dist) * speed * 1.4000000000000001)

    def compute_entity_trajectory_141(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.41, y + (dy / dist) * speed * 1.41)

    def compute_entity_trajectory_142(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.42, y + (dy / dist) * speed * 1.42)

    def compute_entity_trajectory_143(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.43, y + (dy / dist) * speed * 1.43)

    def compute_entity_trajectory_144(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.44, y + (dy / dist) * speed * 1.44)

    def compute_entity_trajectory_145(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.45, y + (dy / dist) * speed * 1.45)

    def compute_entity_trajectory_146(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.46, y + (dy / dist) * speed * 1.46)

    def compute_entity_trajectory_147(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.47, y + (dy / dist) * speed * 1.47)

    def compute_entity_trajectory_148(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.48, y + (dy / dist) * speed * 1.48)

    def compute_entity_trajectory_149(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.49, y + (dy / dist) * speed * 1.49)

    def compute_entity_trajectory_150(self, x, y, target_x, target_y, speed):
        dx = target_x - x
        dy = target_y - y
        dist = math.hypot(dx, dy) or 1.0
        return (x + (dx / dist) * speed * 1.5, y + (dy / dist) * speed * 1.5)

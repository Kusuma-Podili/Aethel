# 🎮 Chronicles of Aethelgard: Complete Game Design Document (GDD)

## 1. Game Overview & Pillars
- **Visceral Real-time Action Combat**: Skill-based projectile dodging, cooldown management, animation cancels, and dynamic hitbox collisions.
- **Infinite Procedural Dungeons**: Every descent into the catacombs yields unique layouts generated via Wave Function Collapse and BSP partitioning.
- **Deep Itemization & Theorycrafting**: Multi-tier affixes, socketed rune gems, crafting forges, and elemental damage matrices.
- **Rich Narrative Campaign**: Branching dialogues, faction reputation systems, dynamic NPC schedules, and multi-act storyline.

---

## System Design Section 1: Combat Mechanics & Progression Tier 1
Detailed balancing rules for tier 1 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 1.1 Specification
Balancing tables for level 3:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.2 Specification
Balancing tables for level 4:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.3 Specification
Balancing tables for level 5:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.4 Specification
Balancing tables for level 6:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.5 Specification
Balancing tables for level 7:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.6 Specification
Balancing tables for level 8:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.7 Specification
Balancing tables for level 9:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.8 Specification
Balancing tables for level 10:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.9 Specification
Balancing tables for level 11:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.10 Specification
Balancing tables for level 12:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

### Progression Curve 1.11 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1200 | 1850 | 100,000 |
| Mana Pool | 600 | 950 | 50,000 |
| Armor Rating | 300 | 620 | 10,000 (85% DR) |

## System Design Section 2: Combat Mechanics & Progression Tier 2
Detailed balancing rules for tier 2 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 2.1 Specification
Balancing tables for level 5:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.2 Specification
Balancing tables for level 6:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.3 Specification
Balancing tables for level 7:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.4 Specification
Balancing tables for level 8:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.5 Specification
Balancing tables for level 9:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.6 Specification
Balancing tables for level 10:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.7 Specification
Balancing tables for level 11:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.8 Specification
Balancing tables for level 12:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.9 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.10 Specification
Balancing tables for level 14:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

### Progression Curve 2.11 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1400 | 2200 | 100,000 |
| Mana Pool | 700 | 1100 | 50,000 |
| Armor Rating | 350 | 740 | 10,000 (85% DR) |

## System Design Section 3: Combat Mechanics & Progression Tier 3
Detailed balancing rules for tier 3 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 3.1 Specification
Balancing tables for level 7:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.2 Specification
Balancing tables for level 8:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.3 Specification
Balancing tables for level 9:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.4 Specification
Balancing tables for level 10:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.5 Specification
Balancing tables for level 11:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.6 Specification
Balancing tables for level 12:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.7 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.8 Specification
Balancing tables for level 14:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.9 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.10 Specification
Balancing tables for level 16:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

### Progression Curve 3.11 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1600 | 2550 | 100,000 |
| Mana Pool | 800 | 1250 | 50,000 |
| Armor Rating | 400 | 860 | 10,000 (85% DR) |

## System Design Section 4: Combat Mechanics & Progression Tier 4
Detailed balancing rules for tier 4 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 4.1 Specification
Balancing tables for level 9:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.2 Specification
Balancing tables for level 10:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.3 Specification
Balancing tables for level 11:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.4 Specification
Balancing tables for level 12:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.5 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.6 Specification
Balancing tables for level 14:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.7 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.8 Specification
Balancing tables for level 16:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.9 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.10 Specification
Balancing tables for level 18:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

### Progression Curve 4.11 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 1800 | 2900 | 100,000 |
| Mana Pool | 900 | 1400 | 50,000 |
| Armor Rating | 450 | 980 | 10,000 (85% DR) |

## System Design Section 5: Combat Mechanics & Progression Tier 5
Detailed balancing rules for tier 5 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 5.1 Specification
Balancing tables for level 11:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.2 Specification
Balancing tables for level 12:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.3 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.4 Specification
Balancing tables for level 14:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.5 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.6 Specification
Balancing tables for level 16:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.7 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.8 Specification
Balancing tables for level 18:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.9 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.10 Specification
Balancing tables for level 20:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

### Progression Curve 5.11 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2000 | 3250 | 100,000 |
| Mana Pool | 1000 | 1550 | 50,000 |
| Armor Rating | 500 | 1100 | 10,000 (85% DR) |

## System Design Section 6: Combat Mechanics & Progression Tier 6
Detailed balancing rules for tier 6 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 6.1 Specification
Balancing tables for level 13:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.2 Specification
Balancing tables for level 14:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.3 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.4 Specification
Balancing tables for level 16:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.5 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.6 Specification
Balancing tables for level 18:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.7 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.8 Specification
Balancing tables for level 20:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.9 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.10 Specification
Balancing tables for level 22:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

### Progression Curve 6.11 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2200 | 3600 | 100,000 |
| Mana Pool | 1100 | 1700 | 50,000 |
| Armor Rating | 550 | 1220 | 10,000 (85% DR) |

## System Design Section 7: Combat Mechanics & Progression Tier 7
Detailed balancing rules for tier 7 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 7.1 Specification
Balancing tables for level 15:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.2 Specification
Balancing tables for level 16:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.3 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.4 Specification
Balancing tables for level 18:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.5 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.6 Specification
Balancing tables for level 20:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.7 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.8 Specification
Balancing tables for level 22:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.9 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.10 Specification
Balancing tables for level 24:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

### Progression Curve 7.11 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2400 | 3950 | 100,000 |
| Mana Pool | 1200 | 1850 | 50,000 |
| Armor Rating | 600 | 1340 | 10,000 (85% DR) |

## System Design Section 8: Combat Mechanics & Progression Tier 8
Detailed balancing rules for tier 8 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 8.1 Specification
Balancing tables for level 17:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.2 Specification
Balancing tables for level 18:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.3 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.4 Specification
Balancing tables for level 20:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.5 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.6 Specification
Balancing tables for level 22:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.7 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.8 Specification
Balancing tables for level 24:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.9 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.10 Specification
Balancing tables for level 26:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

### Progression Curve 8.11 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2600 | 4300 | 100,000 |
| Mana Pool | 1300 | 2000 | 50,000 |
| Armor Rating | 650 | 1460 | 10,000 (85% DR) |

## System Design Section 9: Combat Mechanics & Progression Tier 9
Detailed balancing rules for tier 9 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 9.1 Specification
Balancing tables for level 19:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.2 Specification
Balancing tables for level 20:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.3 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.4 Specification
Balancing tables for level 22:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.5 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.6 Specification
Balancing tables for level 24:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.7 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.8 Specification
Balancing tables for level 26:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.9 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.10 Specification
Balancing tables for level 28:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

### Progression Curve 9.11 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 2800 | 4650 | 100,000 |
| Mana Pool | 1400 | 2150 | 50,000 |
| Armor Rating | 700 | 1580 | 10,000 (85% DR) |

## System Design Section 10: Combat Mechanics & Progression Tier 10
Detailed balancing rules for tier 10 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 10.1 Specification
Balancing tables for level 21:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.2 Specification
Balancing tables for level 22:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.3 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.4 Specification
Balancing tables for level 24:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.5 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.6 Specification
Balancing tables for level 26:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.7 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.8 Specification
Balancing tables for level 28:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.9 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.10 Specification
Balancing tables for level 30:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

### Progression Curve 10.11 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3000 | 5000 | 100,000 |
| Mana Pool | 1500 | 2300 | 50,000 |
| Armor Rating | 750 | 1700 | 10,000 (85% DR) |

## System Design Section 11: Combat Mechanics & Progression Tier 11
Detailed balancing rules for tier 11 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 11.1 Specification
Balancing tables for level 23:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.2 Specification
Balancing tables for level 24:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.3 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.4 Specification
Balancing tables for level 26:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.5 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.6 Specification
Balancing tables for level 28:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.7 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.8 Specification
Balancing tables for level 30:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.9 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.10 Specification
Balancing tables for level 32:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

### Progression Curve 11.11 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3200 | 5350 | 100,000 |
| Mana Pool | 1600 | 2450 | 50,000 |
| Armor Rating | 800 | 1820 | 10,000 (85% DR) |

## System Design Section 12: Combat Mechanics & Progression Tier 12
Detailed balancing rules for tier 12 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 12.1 Specification
Balancing tables for level 25:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.2 Specification
Balancing tables for level 26:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.3 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.4 Specification
Balancing tables for level 28:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.5 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.6 Specification
Balancing tables for level 30:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.7 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.8 Specification
Balancing tables for level 32:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.9 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.10 Specification
Balancing tables for level 34:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

### Progression Curve 12.11 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3400 | 5700 | 100,000 |
| Mana Pool | 1700 | 2600 | 50,000 |
| Armor Rating | 850 | 1940 | 10,000 (85% DR) |

## System Design Section 13: Combat Mechanics & Progression Tier 13
Detailed balancing rules for tier 13 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 13.1 Specification
Balancing tables for level 27:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.2 Specification
Balancing tables for level 28:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.3 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.4 Specification
Balancing tables for level 30:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.5 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.6 Specification
Balancing tables for level 32:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.7 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.8 Specification
Balancing tables for level 34:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.9 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.10 Specification
Balancing tables for level 36:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

### Progression Curve 13.11 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3600 | 6050 | 100,000 |
| Mana Pool | 1800 | 2750 | 50,000 |
| Armor Rating | 900 | 2060 | 10,000 (85% DR) |

## System Design Section 14: Combat Mechanics & Progression Tier 14
Detailed balancing rules for tier 14 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 14.1 Specification
Balancing tables for level 29:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.2 Specification
Balancing tables for level 30:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.3 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.4 Specification
Balancing tables for level 32:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.5 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.6 Specification
Balancing tables for level 34:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.7 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.8 Specification
Balancing tables for level 36:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.9 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.10 Specification
Balancing tables for level 38:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

### Progression Curve 14.11 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 3800 | 6400 | 100,000 |
| Mana Pool | 1900 | 2900 | 50,000 |
| Armor Rating | 950 | 2180 | 10,000 (85% DR) |

## System Design Section 15: Combat Mechanics & Progression Tier 15
Detailed balancing rules for tier 15 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 15.1 Specification
Balancing tables for level 31:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.2 Specification
Balancing tables for level 32:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.3 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.4 Specification
Balancing tables for level 34:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.5 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.6 Specification
Balancing tables for level 36:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.7 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.8 Specification
Balancing tables for level 38:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.9 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.10 Specification
Balancing tables for level 40:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

### Progression Curve 15.11 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4000 | 6750 | 100,000 |
| Mana Pool | 2000 | 3050 | 50,000 |
| Armor Rating | 1000 | 2300 | 10,000 (85% DR) |

## System Design Section 16: Combat Mechanics & Progression Tier 16
Detailed balancing rules for tier 16 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 16.1 Specification
Balancing tables for level 33:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.2 Specification
Balancing tables for level 34:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.3 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.4 Specification
Balancing tables for level 36:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.5 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.6 Specification
Balancing tables for level 38:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.7 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.8 Specification
Balancing tables for level 40:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.9 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.10 Specification
Balancing tables for level 42:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

### Progression Curve 16.11 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4200 | 7100 | 100,000 |
| Mana Pool | 2100 | 3200 | 50,000 |
| Armor Rating | 1050 | 2420 | 10,000 (85% DR) |

## System Design Section 17: Combat Mechanics & Progression Tier 17
Detailed balancing rules for tier 17 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 17.1 Specification
Balancing tables for level 35:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.2 Specification
Balancing tables for level 36:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.3 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.4 Specification
Balancing tables for level 38:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.5 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.6 Specification
Balancing tables for level 40:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.7 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.8 Specification
Balancing tables for level 42:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.9 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.10 Specification
Balancing tables for level 44:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

### Progression Curve 17.11 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4400 | 7450 | 100,000 |
| Mana Pool | 2200 | 3350 | 50,000 |
| Armor Rating | 1100 | 2540 | 10,000 (85% DR) |

## System Design Section 18: Combat Mechanics & Progression Tier 18
Detailed balancing rules for tier 18 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 18.1 Specification
Balancing tables for level 37:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.2 Specification
Balancing tables for level 38:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.3 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.4 Specification
Balancing tables for level 40:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.5 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.6 Specification
Balancing tables for level 42:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.7 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.8 Specification
Balancing tables for level 44:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.9 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.10 Specification
Balancing tables for level 46:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

### Progression Curve 18.11 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4600 | 7800 | 100,000 |
| Mana Pool | 2300 | 3500 | 50,000 |
| Armor Rating | 1150 | 2660 | 10,000 (85% DR) |

## System Design Section 19: Combat Mechanics & Progression Tier 19
Detailed balancing rules for tier 19 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 19.1 Specification
Balancing tables for level 39:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.2 Specification
Balancing tables for level 40:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.3 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.4 Specification
Balancing tables for level 42:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.5 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.6 Specification
Balancing tables for level 44:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.7 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.8 Specification
Balancing tables for level 46:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.9 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.10 Specification
Balancing tables for level 48:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

### Progression Curve 19.11 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 4800 | 8150 | 100,000 |
| Mana Pool | 2400 | 3650 | 50,000 |
| Armor Rating | 1200 | 2780 | 10,000 (85% DR) |

## System Design Section 20: Combat Mechanics & Progression Tier 20
Detailed balancing rules for tier 20 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 20.1 Specification
Balancing tables for level 41:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.2 Specification
Balancing tables for level 42:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.3 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.4 Specification
Balancing tables for level 44:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.5 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.6 Specification
Balancing tables for level 46:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.7 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.8 Specification
Balancing tables for level 48:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.9 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.10 Specification
Balancing tables for level 50:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

### Progression Curve 20.11 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5000 | 8500 | 100,000 |
| Mana Pool | 2500 | 3800 | 50,000 |
| Armor Rating | 1250 | 2900 | 10,000 (85% DR) |

## System Design Section 21: Combat Mechanics & Progression Tier 21
Detailed balancing rules for tier 21 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 21.1 Specification
Balancing tables for level 43:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.2 Specification
Balancing tables for level 44:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.3 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.4 Specification
Balancing tables for level 46:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.5 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.6 Specification
Balancing tables for level 48:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.7 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.8 Specification
Balancing tables for level 50:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.9 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.10 Specification
Balancing tables for level 52:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

### Progression Curve 21.11 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5200 | 8850 | 100,000 |
| Mana Pool | 2600 | 3950 | 50,000 |
| Armor Rating | 1300 | 3020 | 10,000 (85% DR) |

## System Design Section 22: Combat Mechanics & Progression Tier 22
Detailed balancing rules for tier 22 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 22.1 Specification
Balancing tables for level 45:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.2 Specification
Balancing tables for level 46:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.3 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.4 Specification
Balancing tables for level 48:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.5 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.6 Specification
Balancing tables for level 50:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.7 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.8 Specification
Balancing tables for level 52:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.9 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.10 Specification
Balancing tables for level 54:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

### Progression Curve 22.11 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5400 | 9200 | 100,000 |
| Mana Pool | 2700 | 4100 | 50,000 |
| Armor Rating | 1350 | 3140 | 10,000 (85% DR) |

## System Design Section 23: Combat Mechanics & Progression Tier 23
Detailed balancing rules for tier 23 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 23.1 Specification
Balancing tables for level 47:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.2 Specification
Balancing tables for level 48:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.3 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.4 Specification
Balancing tables for level 50:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.5 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.6 Specification
Balancing tables for level 52:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.7 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.8 Specification
Balancing tables for level 54:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.9 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.10 Specification
Balancing tables for level 56:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

### Progression Curve 23.11 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5600 | 9550 | 100,000 |
| Mana Pool | 2800 | 4250 | 50,000 |
| Armor Rating | 1400 | 3260 | 10,000 (85% DR) |

## System Design Section 24: Combat Mechanics & Progression Tier 24
Detailed balancing rules for tier 24 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 24.1 Specification
Balancing tables for level 49:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.2 Specification
Balancing tables for level 50:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.3 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.4 Specification
Balancing tables for level 52:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.5 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.6 Specification
Balancing tables for level 54:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.7 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.8 Specification
Balancing tables for level 56:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.9 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.10 Specification
Balancing tables for level 58:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

### Progression Curve 24.11 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 5800 | 9900 | 100,000 |
| Mana Pool | 2900 | 4400 | 50,000 |
| Armor Rating | 1450 | 3380 | 10,000 (85% DR) |

## System Design Section 25: Combat Mechanics & Progression Tier 25
Detailed balancing rules for tier 25 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 25.1 Specification
Balancing tables for level 51:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.2 Specification
Balancing tables for level 52:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.3 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.4 Specification
Balancing tables for level 54:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.5 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.6 Specification
Balancing tables for level 56:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.7 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.8 Specification
Balancing tables for level 58:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.9 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.10 Specification
Balancing tables for level 60:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

### Progression Curve 25.11 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6000 | 10250 | 100,000 |
| Mana Pool | 3000 | 4550 | 50,000 |
| Armor Rating | 1500 | 3500 | 10,000 (85% DR) |

## System Design Section 26: Combat Mechanics & Progression Tier 26
Detailed balancing rules for tier 26 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 26.1 Specification
Balancing tables for level 53:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.2 Specification
Balancing tables for level 54:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.3 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.4 Specification
Balancing tables for level 56:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.5 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.6 Specification
Balancing tables for level 58:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.7 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.8 Specification
Balancing tables for level 60:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.9 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.10 Specification
Balancing tables for level 62:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

### Progression Curve 26.11 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6200 | 10600 | 100,000 |
| Mana Pool | 3100 | 4700 | 50,000 |
| Armor Rating | 1550 | 3620 | 10,000 (85% DR) |

## System Design Section 27: Combat Mechanics & Progression Tier 27
Detailed balancing rules for tier 27 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 27.1 Specification
Balancing tables for level 55:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.2 Specification
Balancing tables for level 56:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.3 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.4 Specification
Balancing tables for level 58:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.5 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.6 Specification
Balancing tables for level 60:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.7 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.8 Specification
Balancing tables for level 62:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.9 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.10 Specification
Balancing tables for level 64:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

### Progression Curve 27.11 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6400 | 10950 | 100,000 |
| Mana Pool | 3200 | 4850 | 50,000 |
| Armor Rating | 1600 | 3740 | 10,000 (85% DR) |

## System Design Section 28: Combat Mechanics & Progression Tier 28
Detailed balancing rules for tier 28 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 28.1 Specification
Balancing tables for level 57:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.2 Specification
Balancing tables for level 58:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.3 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.4 Specification
Balancing tables for level 60:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.5 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.6 Specification
Balancing tables for level 62:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.7 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.8 Specification
Balancing tables for level 64:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.9 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.10 Specification
Balancing tables for level 66:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

### Progression Curve 28.11 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6600 | 11300 | 100,000 |
| Mana Pool | 3300 | 5000 | 50,000 |
| Armor Rating | 1650 | 3860 | 10,000 (85% DR) |

## System Design Section 29: Combat Mechanics & Progression Tier 29
Detailed balancing rules for tier 29 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 29.1 Specification
Balancing tables for level 59:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.2 Specification
Balancing tables for level 60:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.3 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.4 Specification
Balancing tables for level 62:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.5 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.6 Specification
Balancing tables for level 64:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.7 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.8 Specification
Balancing tables for level 66:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.9 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.10 Specification
Balancing tables for level 68:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

### Progression Curve 29.11 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 6800 | 11650 | 100,000 |
| Mana Pool | 3400 | 5150 | 50,000 |
| Armor Rating | 1700 | 3980 | 10,000 (85% DR) |

## System Design Section 30: Combat Mechanics & Progression Tier 30
Detailed balancing rules for tier 30 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 30.1 Specification
Balancing tables for level 61:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.2 Specification
Balancing tables for level 62:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.3 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.4 Specification
Balancing tables for level 64:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.5 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.6 Specification
Balancing tables for level 66:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.7 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.8 Specification
Balancing tables for level 68:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.9 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.10 Specification
Balancing tables for level 70:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

### Progression Curve 30.11 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7000 | 12000 | 100,000 |
| Mana Pool | 3500 | 5300 | 50,000 |
| Armor Rating | 1750 | 4100 | 10,000 (85% DR) |

## System Design Section 31: Combat Mechanics & Progression Tier 31
Detailed balancing rules for tier 31 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 31.1 Specification
Balancing tables for level 63:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.2 Specification
Balancing tables for level 64:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.3 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.4 Specification
Balancing tables for level 66:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.5 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.6 Specification
Balancing tables for level 68:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.7 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.8 Specification
Balancing tables for level 70:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.9 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.10 Specification
Balancing tables for level 72:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

### Progression Curve 31.11 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7200 | 12350 | 100,000 |
| Mana Pool | 3600 | 5450 | 50,000 |
| Armor Rating | 1800 | 4220 | 10,000 (85% DR) |

## System Design Section 32: Combat Mechanics & Progression Tier 32
Detailed balancing rules for tier 32 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 32.1 Specification
Balancing tables for level 65:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.2 Specification
Balancing tables for level 66:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.3 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.4 Specification
Balancing tables for level 68:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.5 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.6 Specification
Balancing tables for level 70:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.7 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.8 Specification
Balancing tables for level 72:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.9 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.10 Specification
Balancing tables for level 74:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

### Progression Curve 32.11 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7400 | 12700 | 100,000 |
| Mana Pool | 3700 | 5600 | 50,000 |
| Armor Rating | 1850 | 4340 | 10,000 (85% DR) |

## System Design Section 33: Combat Mechanics & Progression Tier 33
Detailed balancing rules for tier 33 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 33.1 Specification
Balancing tables for level 67:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.2 Specification
Balancing tables for level 68:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.3 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.4 Specification
Balancing tables for level 70:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.5 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.6 Specification
Balancing tables for level 72:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.7 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.8 Specification
Balancing tables for level 74:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.9 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.10 Specification
Balancing tables for level 76:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

### Progression Curve 33.11 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7600 | 13050 | 100,000 |
| Mana Pool | 3800 | 5750 | 50,000 |
| Armor Rating | 1900 | 4460 | 10,000 (85% DR) |

## System Design Section 34: Combat Mechanics & Progression Tier 34
Detailed balancing rules for tier 34 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 34.1 Specification
Balancing tables for level 69:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.2 Specification
Balancing tables for level 70:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.3 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.4 Specification
Balancing tables for level 72:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.5 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.6 Specification
Balancing tables for level 74:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.7 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.8 Specification
Balancing tables for level 76:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.9 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.10 Specification
Balancing tables for level 78:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

### Progression Curve 34.11 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 7800 | 13400 | 100,000 |
| Mana Pool | 3900 | 5900 | 50,000 |
| Armor Rating | 1950 | 4580 | 10,000 (85% DR) |

## System Design Section 35: Combat Mechanics & Progression Tier 35
Detailed balancing rules for tier 35 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 35.1 Specification
Balancing tables for level 71:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.2 Specification
Balancing tables for level 72:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.3 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.4 Specification
Balancing tables for level 74:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.5 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.6 Specification
Balancing tables for level 76:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.7 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.8 Specification
Balancing tables for level 78:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.9 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.10 Specification
Balancing tables for level 80:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

### Progression Curve 35.11 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8000 | 13750 | 100,000 |
| Mana Pool | 4000 | 6050 | 50,000 |
| Armor Rating | 2000 | 4700 | 10,000 (85% DR) |

## System Design Section 36: Combat Mechanics & Progression Tier 36
Detailed balancing rules for tier 36 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 36.1 Specification
Balancing tables for level 73:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.2 Specification
Balancing tables for level 74:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.3 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.4 Specification
Balancing tables for level 76:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.5 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.6 Specification
Balancing tables for level 78:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.7 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.8 Specification
Balancing tables for level 80:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.9 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.10 Specification
Balancing tables for level 82:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

### Progression Curve 36.11 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8200 | 14100 | 100,000 |
| Mana Pool | 4100 | 6200 | 50,000 |
| Armor Rating | 2050 | 4820 | 10,000 (85% DR) |

## System Design Section 37: Combat Mechanics & Progression Tier 37
Detailed balancing rules for tier 37 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 37.1 Specification
Balancing tables for level 75:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.2 Specification
Balancing tables for level 76:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.3 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.4 Specification
Balancing tables for level 78:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.5 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.6 Specification
Balancing tables for level 80:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.7 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.8 Specification
Balancing tables for level 82:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.9 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.10 Specification
Balancing tables for level 84:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

### Progression Curve 37.11 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8400 | 14450 | 100,000 |
| Mana Pool | 4200 | 6350 | 50,000 |
| Armor Rating | 2100 | 4940 | 10,000 (85% DR) |

## System Design Section 38: Combat Mechanics & Progression Tier 38
Detailed balancing rules for tier 38 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 38.1 Specification
Balancing tables for level 77:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.2 Specification
Balancing tables for level 78:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.3 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.4 Specification
Balancing tables for level 80:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.5 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.6 Specification
Balancing tables for level 82:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.7 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.8 Specification
Balancing tables for level 84:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.9 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.10 Specification
Balancing tables for level 86:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

### Progression Curve 38.11 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8600 | 14800 | 100,000 |
| Mana Pool | 4300 | 6500 | 50,000 |
| Armor Rating | 2150 | 5060 | 10,000 (85% DR) |

## System Design Section 39: Combat Mechanics & Progression Tier 39
Detailed balancing rules for tier 39 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 39.1 Specification
Balancing tables for level 79:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.2 Specification
Balancing tables for level 80:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.3 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.4 Specification
Balancing tables for level 82:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.5 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.6 Specification
Balancing tables for level 84:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.7 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.8 Specification
Balancing tables for level 86:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.9 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.10 Specification
Balancing tables for level 88:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

### Progression Curve 39.11 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 8800 | 15150 | 100,000 |
| Mana Pool | 4400 | 6650 | 50,000 |
| Armor Rating | 2200 | 5180 | 10,000 (85% DR) |

## System Design Section 40: Combat Mechanics & Progression Tier 40
Detailed balancing rules for tier 40 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 40.1 Specification
Balancing tables for level 81:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.2 Specification
Balancing tables for level 82:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.3 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.4 Specification
Balancing tables for level 84:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.5 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.6 Specification
Balancing tables for level 86:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.7 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.8 Specification
Balancing tables for level 88:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.9 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.10 Specification
Balancing tables for level 90:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

### Progression Curve 40.11 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9000 | 15500 | 100,000 |
| Mana Pool | 4500 | 6800 | 50,000 |
| Armor Rating | 2250 | 5300 | 10,000 (85% DR) |

## System Design Section 41: Combat Mechanics & Progression Tier 41
Detailed balancing rules for tier 41 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 41.1 Specification
Balancing tables for level 83:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.2 Specification
Balancing tables for level 84:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.3 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.4 Specification
Balancing tables for level 86:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.5 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.6 Specification
Balancing tables for level 88:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.7 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.8 Specification
Balancing tables for level 90:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.9 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.10 Specification
Balancing tables for level 92:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

### Progression Curve 41.11 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9200 | 15850 | 100,000 |
| Mana Pool | 4600 | 6950 | 50,000 |
| Armor Rating | 2300 | 5420 | 10,000 (85% DR) |

## System Design Section 42: Combat Mechanics & Progression Tier 42
Detailed balancing rules for tier 42 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 42.1 Specification
Balancing tables for level 85:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.2 Specification
Balancing tables for level 86:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.3 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.4 Specification
Balancing tables for level 88:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.5 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.6 Specification
Balancing tables for level 90:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.7 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.8 Specification
Balancing tables for level 92:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.9 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.10 Specification
Balancing tables for level 94:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

### Progression Curve 42.11 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9400 | 16200 | 100,000 |
| Mana Pool | 4700 | 7100 | 50,000 |
| Armor Rating | 2350 | 5540 | 10,000 (85% DR) |

## System Design Section 43: Combat Mechanics & Progression Tier 43
Detailed balancing rules for tier 43 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 43.1 Specification
Balancing tables for level 87:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.2 Specification
Balancing tables for level 88:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.3 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.4 Specification
Balancing tables for level 90:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.5 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.6 Specification
Balancing tables for level 92:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.7 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.8 Specification
Balancing tables for level 94:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.9 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.10 Specification
Balancing tables for level 96:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

### Progression Curve 43.11 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9600 | 16550 | 100,000 |
| Mana Pool | 4800 | 7250 | 50,000 |
| Armor Rating | 2400 | 5660 | 10,000 (85% DR) |

## System Design Section 44: Combat Mechanics & Progression Tier 44
Detailed balancing rules for tier 44 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 44.1 Specification
Balancing tables for level 89:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.2 Specification
Balancing tables for level 90:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.3 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.4 Specification
Balancing tables for level 92:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.5 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.6 Specification
Balancing tables for level 94:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.7 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.8 Specification
Balancing tables for level 96:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.9 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.10 Specification
Balancing tables for level 98:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

### Progression Curve 44.11 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 9800 | 16900 | 100,000 |
| Mana Pool | 4900 | 7400 | 50,000 |
| Armor Rating | 2450 | 5780 | 10,000 (85% DR) |

## System Design Section 45: Combat Mechanics & Progression Tier 45
Detailed balancing rules for tier 45 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 45.1 Specification
Balancing tables for level 91:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.2 Specification
Balancing tables for level 92:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.3 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.4 Specification
Balancing tables for level 94:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.5 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.6 Specification
Balancing tables for level 96:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.7 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.8 Specification
Balancing tables for level 98:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.9 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.10 Specification
Balancing tables for level 100:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

### Progression Curve 45.11 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10000 | 17250 | 100,000 |
| Mana Pool | 5000 | 7550 | 50,000 |
| Armor Rating | 2500 | 5900 | 10,000 (85% DR) |

## System Design Section 46: Combat Mechanics & Progression Tier 46
Detailed balancing rules for tier 46 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 46.1 Specification
Balancing tables for level 93:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.2 Specification
Balancing tables for level 94:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.3 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.4 Specification
Balancing tables for level 96:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.5 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.6 Specification
Balancing tables for level 98:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.7 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.8 Specification
Balancing tables for level 100:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.9 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.10 Specification
Balancing tables for level 102:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

### Progression Curve 46.11 Specification
Balancing tables for level 103:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10200 | 17600 | 100,000 |
| Mana Pool | 5100 | 7700 | 50,000 |
| Armor Rating | 2550 | 6020 | 10,000 (85% DR) |

## System Design Section 47: Combat Mechanics & Progression Tier 47
Detailed balancing rules for tier 47 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 47.1 Specification
Balancing tables for level 95:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.2 Specification
Balancing tables for level 96:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.3 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.4 Specification
Balancing tables for level 98:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.5 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.6 Specification
Balancing tables for level 100:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.7 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.8 Specification
Balancing tables for level 102:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.9 Specification
Balancing tables for level 103:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.10 Specification
Balancing tables for level 104:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

### Progression Curve 47.11 Specification
Balancing tables for level 105:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10400 | 17950 | 100,000 |
| Mana Pool | 5200 | 7850 | 50,000 |
| Armor Rating | 2600 | 6140 | 10,000 (85% DR) |

## System Design Section 48: Combat Mechanics & Progression Tier 48
Detailed balancing rules for tier 48 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 48.1 Specification
Balancing tables for level 97:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.2 Specification
Balancing tables for level 98:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.3 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.4 Specification
Balancing tables for level 100:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.5 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.6 Specification
Balancing tables for level 102:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.7 Specification
Balancing tables for level 103:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.8 Specification
Balancing tables for level 104:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.9 Specification
Balancing tables for level 105:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.10 Specification
Balancing tables for level 106:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

### Progression Curve 48.11 Specification
Balancing tables for level 107:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10600 | 18300 | 100,000 |
| Mana Pool | 5300 | 8000 | 50,000 |
| Armor Rating | 2650 | 6260 | 10,000 (85% DR) |

## System Design Section 49: Combat Mechanics & Progression Tier 49
Detailed balancing rules for tier 49 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 49.1 Specification
Balancing tables for level 99:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.2 Specification
Balancing tables for level 100:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.3 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.4 Specification
Balancing tables for level 102:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.5 Specification
Balancing tables for level 103:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.6 Specification
Balancing tables for level 104:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.7 Specification
Balancing tables for level 105:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.8 Specification
Balancing tables for level 106:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.9 Specification
Balancing tables for level 107:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.10 Specification
Balancing tables for level 108:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

### Progression Curve 49.11 Specification
Balancing tables for level 109:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 10800 | 18650 | 100,000 |
| Mana Pool | 5400 | 8150 | 50,000 |
| Armor Rating | 2700 | 6380 | 10,000 (85% DR) |

## System Design Section 50: Combat Mechanics & Progression Tier 50
Detailed balancing rules for tier 50 gameplay:
- Damage curves: Scaling equations follow quadratic progression $D(L) = A \cdot L^2 + B \cdot L + C$.
- Enemy density scaling: Dungeon depths 1-10 spawn 15-40 enemies per chunk; depths 11-20 spawn elite champion packs.
- Elemental synergy matrix: Fire + Cold triggers Thermal Shock (200% true damage); Lightning + Water triggers Chain Shock.
- Economy pacing: Gold sinks distributed across masterwork enchanting, socket drilling, and black market auctions.

### Progression Curve 50.1 Specification
Balancing tables for level 101:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.2 Specification
Balancing tables for level 102:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.3 Specification
Balancing tables for level 103:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.4 Specification
Balancing tables for level 104:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.5 Specification
Balancing tables for level 105:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.6 Specification
Balancing tables for level 106:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.7 Specification
Balancing tables for level 107:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.8 Specification
Balancing tables for level 108:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.9 Specification
Balancing tables for level 109:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.10 Specification
Balancing tables for level 110:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

### Progression Curve 50.11 Specification
Balancing tables for level 111:
| Stat Parameter | Base Value | Scaled Value | Max Cap |
| :--- | :--- | :--- | :--- |
| Health Pool | 11000 | 19000 | 100,000 |
| Mana Pool | 5500 | 8300 | 50,000 |
| Armor Rating | 2750 | 6500 | 10,000 (85% DR) |

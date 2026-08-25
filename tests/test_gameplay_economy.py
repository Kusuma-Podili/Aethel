import unittest

class TestGameplayEconomy(unittest.TestCase):
    def test_damage_mitigation_armor_formula(self):
        # Armor reduction: armor / (armor + 500)
        armor = 500
        dr = armor / (armor + 500)
        self.assertAlmostEqual(dr, 0.50, places=4) # 50% damage reduction

        raw_damage = 200
        mitigated = raw_damage * (1.0 - dr)
        self.assertEqual(mitigated, 100)

    def test_stat_modifier_calculation_order(self):
        # Base: 100, Flat +20, Additive % +50% (0.5), Multiplicative % * 1.2
        # Expected: (100 + 20) * (1 + 0.5) * 1.2 = 120 * 1.5 * 1.2 = 216
        base = 100
        flat = 20
        pct_add = 0.5
        pct_mult = 1.2

        final_stat = (base + flat) * (1.0 + pct_add) * pct_mult
        self.assertEqual(final_stat, 216.0)

    def test_inventory_stacking_limits(self):
        # Max stack = 20. Adding 15 to existing 10 -> stack filled to 20, remainder 5
        slot_qty = 10
        max_stack = 20
        incoming = 15

        space = max_stack - slot_qty
        to_add = min(space, incoming)
        slot_qty += to_add
        remainder = incoming - to_add

        self.assertEqual(slot_qty, 20)
        self.assertEqual(remainder, 5)

if __name__ == '__main__':
    unittest.main()

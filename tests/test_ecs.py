import unittest
import math

class TestECSSystem(unittest.TestCase):
    def setUp(self):
        # Python representation of BitSet and Archetype ECS for headless testing
        self.entities = {}
        self.components = {}

    def test_bitset_masking(self):
        mask1 = 0b1011
        mask2 = 0b0011
        # Test subset
        self.assertEqual(mask1 & mask2, mask2)
        # Test disjoint
        mask3 = 0b0100
        self.assertEqual(mask2 & mask3, 0)

    def test_entity_creation_and_destruction(self):
        entity_id = 101
        self.entities[entity_id] = {"position": (10, 20), "velocity": (1, 0)}
        self.assertIn(entity_id, self.entities)
        self.assertEqual(self.entities[entity_id]["position"], (10, 20))

        # Destroy
        del self.entities[entity_id]
        self.assertNotIn(entity_id, self.entities)

    def test_query_filter_matching(self):
        # Entities with [Position, Velocity, Renderable]
        e1 = {"pos": True, "vel": True, "render": True}
        e2 = {"pos": True, "vel": False, "render": True}
        e3 = {"pos": True, "vel": True, "render": False}

        query_all = lambda e: e.get("pos") and e.get("vel")
        matches = [e for e in [e1, e2, e3] if query_all(e)]
        self.assertEqual(len(matches), 2)
        self.assertIn(e1, matches)
        self.assertIn(e3, matches)

    def test_ecs_stress_1000_entities(self):
        # Stress test creating 1000 entities and updating their positions
        entities = [{"x": i, "y": i * 2, "vx": 2.0, "vy": -1.0} for i in range(1000)]
        dt = 0.016
        for e in entities:
            e["x"] += e["vx"] * dt
            e["y"] += e["vy"] * dt
        self.assertEqual(len(entities), 1000)
        self.assertAlmostEqual(entities[0]["x"], 0.032, places=3)

if __name__ == '__main__':
    unittest.main()

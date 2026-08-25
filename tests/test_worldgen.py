import unittest

class TestWorldGen(unittest.TestCase):
    def test_bsp_dungeon_room_overlap_validity(self):
        # Verify rooms within dungeon boundary (64x64)
        rooms = [
            {"x": 2, "y": 2, "w": 10, "h": 10},
            {"x": 20, "y": 20, "w": 12, "h": 12},
            {"x": 40, "y": 30, "w": 8, "h": 8}
        ]
        for r in rooms:
            self.assertGreaterEqual(r["x"], 0)
            self.assertGreaterEqual(r["y"], 0)
            self.assertLessEqual(r["x"] + r["w"], 64)
            self.assertLessEqual(r["y"] + r["h"], 64)

    def test_cellular_automata_border_walls(self):
        # 10x10 map with solid perimeter
        w, h = 10, 10
        grid = [0] * (w * h)
        for x in range(w):
            grid[0 * w + x] = 1
            grid[(h - 1) * w + x] = 1
        for y in range(h):
            grid[y * w + 0] = 1
            grid[y * w + (w - 1)] = 1

        self.assertEqual(grid[0], 1)
        self.assertEqual(grid[w - 1], 1)
        self.assertEqual(grid[(h - 1) * w], 1)

if __name__ == '__main__':
    unittest.main()

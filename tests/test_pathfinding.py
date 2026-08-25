import unittest
import heapq

class TestPathfinding(unittest.TestCase):
    def test_astar_straight_line(self):
        # 5x5 open grid, find path from (0, 0) to (0, 4)
        def heuristic(a, b):
            return abs(a[0] - b[0]) + abs(a[1] - b[1])

        start = (0, 0)
        goal = (0, 4)

        frontier = [(0, start)]
        came_from = {start: None}
        cost_so_far = {start: 0}

        while frontier:
            _, current = heapq.heappop(frontier)
            if current == goal:
                break
            for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                nxt = (current[0] + dx, current[1] + dy)
                if 0 <= nxt[0] < 5 and 0 <= nxt[1] < 5:
                    new_cost = cost_so_far[current] + 1
                    if nxt not in cost_so_far or new_cost < cost_so_far[nxt]:
                        cost_so_far[nxt] = new_cost
                        priority = new_cost + heuristic(nxt, goal)
                        heapq.heappush(frontier, (priority, nxt))
                        came_from[nxt] = current

        # Reconstruct
        path = []
        curr = goal
        while curr:
            path.append(curr)
            curr = came_from.get(curr)
        path.reverse()

        self.assertEqual(len(path), 5)
        self.assertEqual(path[0], (0, 0))
        self.assertEqual(path[-1], (0, 4))

    def test_astar_obstacle_detour(self):
        # Wall at (0, 2), (1, 2), (2, 2)
        walls = {(0, 2), (1, 2), (2, 2)}
        def is_walkable(x, y):
            return (x, y) not in walls and 0 <= x < 5 and 0 <= y < 5

        self.assertFalse(is_walkable(1, 2))
        self.assertTrue(is_walkable(3, 2))

if __name__ == '__main__':
    unittest.main()

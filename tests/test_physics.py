import unittest
import math

class TestPhysicsEngine(unittest.TestCase):
    def test_circle_circle_collision(self):
        # Circle A: (0, 0), r = 10
        # Circle B: (15, 0), r = 10
        # Distance = 15, rSum = 20 -> Colliding with depth 5
        posA = (0.0, 0.0)
        posB = (15.0, 0.0)
        rA, rB = 10.0, 10.0
        dist = math.hypot(posB[0] - posA[0], posB[1] - posA[1])
        rSum = rA + rB
        is_colliding = dist < rSum
        penetration = rSum - dist

        self.assertTrue(is_colliding)
        self.assertAlmostEqual(penetration, 5.0, places=4)

    def test_circle_circle_separation(self):
        # Circle A: (0, 0), r = 10
        # Circle B: (30, 0), r = 10
        # Distance = 30, rSum = 20 -> Not colliding
        dist = 30.0
        rSum = 20.0
        self.assertFalse(dist < rSum)

    def test_sat_box_box_overlap(self):
        # Box A: min(-5, -5), max(5, 5)
        # Box B: min(3, 3), max(10, 10)
        # Overlap in X: [3, 5] = 2, Overlap in Y: [3, 5] = 2 -> Colliding
        boxA = (-5, -5, 5, 5)
        boxB = (3, 3, 10, 10)
        intersects = not (boxB[2] < boxA[0] or boxB[0] > boxA[2] or boxB[3] < boxA[1] or boxB[1] > boxA[3])
        self.assertTrue(intersects)

    def test_raycast_circle_intersection(self):
        # Ray from (-20, 0) direction (1, 0) towards circle at (0, 0) r = 10
        origin = (-20.0, 0.0)
        direction = (1.0, 0.0)
        center = (0.0, 0.0)
        radius = 10.0

        # Math formula: d = origin - center
        dx = origin[0] - center[0]
        b = dx * direction[0]
        c = dx * dx - radius * radius
        discr = b * b - c

        self.assertGreaterEqual(discr, 0)
        t = -b - math.sqrt(discr)
        self.assertAlmostEqual(t, 10.0, places=4) # Hits circle perimeter at x = -10 (distance 10 from -20)

    def test_impulse_velocity_change(self):
        # Body mass = 2.0, velocity = (0, 0), impulse = (10, 0) -> new velocity = (5, 0)
        mass = 2.0
        inv_mass = 1.0 / mass
        vx, vy = 0.0, 0.0
        impulse_x, impulse_y = 10.0, 0.0

        vx += impulse_x * inv_mass
        vy += impulse_y * inv_mass

        self.assertEqual(vx, 5.0)
        self.assertEqual(vy, 0.0)

if __name__ == '__main__':
    unittest.main()

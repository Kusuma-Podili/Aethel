import unittest
import json

class TestStorageSerialization(unittest.TestCase):
    def test_json_save_state_integrity(self):
        game_state = {
            "version": "1.0.0",
            "player": {
                "level": 5,
                "gold": 1250,
                "position": {"x": 240.5, "y": 180.0}
            }
        }

        serialized = json.dumps(game_state)
        restored = json.loads(serialized)

        self.assertEqual(restored["version"], "1.0.0")
        self.assertEqual(restored["player"]["level"], 5)
        self.assertEqual(restored["player"]["gold"], 1250)
        self.assertEqual(restored["player"]["position"]["x"], 240.5)

if __name__ == '__main__':
    unittest.main()

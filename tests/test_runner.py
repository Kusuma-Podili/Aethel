#!/usr/bin/env python3
"""
Master Test Runner for Chronicles of Aethelgard.
Executes all 6 test suites and provides summary report.
"""

import unittest
import sys
import os

import unittest
import sys
import os

def run_all_tests():
    print("=========================================================")
    print("[TEST RUNNER] Running Chronicles of Aethelgard Automated Test Suites")
    print("=========================================================")

    loader = unittest.TestLoader()
    suite = loader.discover(start_dir=os.path.dirname(__file__), pattern="test_*.py")

    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)

    print("=========================================================")
    if result.wasSuccessful():
        print(f"[SUCCESS] ALL {result.testsRun} TEST CASES PASSED SUCCESSFULLY!")
        print("=========================================================")
        sys.exit(0)
    else:
        print(f"[FAILURE] TEST SUITE FAILED with {len(result.failures)} failure(s) and {len(result.errors)} error(s).")
        print("=========================================================")
        sys.exit(1)

if __name__ == "__main__":
    run_all_tests()

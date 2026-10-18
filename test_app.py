
import unittest

from app import calculate_churn_rate


class TestChurnRate(unittest.TestCase):
    def test_calculates_churn_rate(self):
        self.assertEqual(calculate_churn_rate(1000, 90), 9.0)

    def test_zero_churn(self):
        self.assertEqual(calculate_churn_rate(100, 0), 0.0)

    def test_rejects_zero_customers(self):
        with self.assertRaises(ValueError):
            calculate_churn_rate(0, 0)


if __name__ == "__main__":
    unittest.main()

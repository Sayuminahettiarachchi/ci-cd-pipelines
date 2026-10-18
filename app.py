
def calculate_churn_rate(total_customers: int, churned_customers: int) -> float:
    """Calculate the percentage of customers who churned."""
    if total_customers <= 0:
        raise ValueError("Total customers must be greater than zero.")

    if churned_customers < 0 or churned_customers > total_customers:
        raise ValueError("Churned customers must be between zero and total customers.")

    return round((churned_customers / total_customers) * 100, 2)


if __name__ == "__main__":
    rate = calculate_churn_rate(1000, 90)
    print(f"Customer churn rate: {rate}%")

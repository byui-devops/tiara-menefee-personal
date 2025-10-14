def sort_numbers(numbers):
    return sorted(numbers)

def test_sort_numbers_order():
    result = sort_numbers([5, 2, 9, 1])
    assert result == [1, 2, 5, 9]
    print("Collection-Order Pattern passed!")

if __name__ == "__main__":
    test_sort_numbers_order()

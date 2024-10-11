def quick_sort(arr):
    
    # Base case: if the array is empty or has one element, it is already sorted
    if len(arr) <= 1:
        return arr
    
    # Choosing the pivot (you can choose the first, last, or a random element)
    pivot = arr[len(arr) // 2]  # Choosing the middle element as pivot
    left = []  # Elements less than the pivot
    middle = []  # Elements equal to the pivot
    right = []  # Elements greater than the pivot
    
    # Partitioning the array into left, middle, and right lists
    for x in arr:
        if x < pivot:
            left.append(x)  # Append to left if less than pivot
        elif x == pivot:
            middle.append(x)  # Append to middle if equal to pivot
        else:
            right.append(x)  # Append to right if greater than pivot

    # Recursively sorting the left and right sub-arrays and combining
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [3, 6, 8, 10, 1, 2, 1]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = quick_sort(sample_array)
    print("Sorted array:", sorted_array)

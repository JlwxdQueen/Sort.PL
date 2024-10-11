def optimized_bubble_sort(arr):
    
    n = len(arr)  # Get the length of the array
    
    # Traverse through all elements in the array
    for i in range(n):
        # Flag to check if any swapping occurs
        swapped = False
        
        # Last i elements are already sorted, so we don't need to check them
        for j in range(0, n - i - 1):
            # Compare the adjacent elements
            if arr[j] > arr[j + 1]:
                # If they are in the wrong order, swap them
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True  # Mark that a swap has occurred

        # If no two elements were swapped by inner loop, then the array is sorted
        if not swapped:
            break

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = optimized_bubble_sort(sample_array)
    print("Sorted array:", sorted_array)

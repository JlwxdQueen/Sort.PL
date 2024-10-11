def shell_sort(arr):
    
    n = len(arr)  # Get the length of the array
    gap = n // 2  # Initialize gap size, starting with half the array length

    # Keep reducing the gap until it becomes zero
    while gap > 0:
        # Perform a gapped insertion sort for this gap size
        for i in range(gap, n):
            temp = arr[i]  # Store the current element
            j = i  # Start with the current position
            
            # Shift earlier gap-sorted elements up until the correct location for temp is found
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]  # Move the larger element to the current position
                j -= gap  # Move to the previous position with the same gap
            
            arr[j] = temp  # Insert the element into its correct position
            
        gap //= 2  # Reduce the gap size

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [12, 34, 54, 2, 3]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = shell_sort(sample_array)
    print("Sorted array:", sorted_array)

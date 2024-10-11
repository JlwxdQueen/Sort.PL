def shaker_sort(arr):
    
    n = len(arr)  # Get the length of the array
    # Initialize the start and end pointers for the current pass
    start = 0
    end = n - 1
    swapped = True  # Flag to check if any swapping occurred

    while swapped:
        swapped = False
        
        # Traverse the array from left to right
        for i in range(start, end):
            if arr[i] > arr[i + 1]:  # If the current element is greater than the next
                arr[i], arr[i + 1] = arr[i + 1], arr[i]  # Swap them
                swapped = True  # Mark that a swap occurred
        
        # If nothing was swapped, the array is sorted
        if not swapped:
            break

        # We can reduce the end pointer since the last element is in place
        end -= 1
        
        swapped = False  # Reset the swapped flag for the next pass
        
        # Traverse the array from right to left
        for i in range(end, start, -1):
            if arr[i] < arr[i - 1]:  # If the current element is less than the previous
                arr[i], arr[i - 1] = arr[i - 1], arr[i]  # Swap them
                swapped = True  # Mark that a swap occurred
        
        # We can increase the start pointer since the first element is in place
        start += 1

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [5, 1, 4, 2, 8, 3]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = shaker_sort(sample_array)
    print("Sorted array:", sorted_array)

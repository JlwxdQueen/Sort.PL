def insertion_sort(arr):
    
    # Traverse through 1 to the length of the array
    for i in range(1, len(arr)):
        key = arr[i]  # The current element to be inserted
        j = i - 1  # The last index of the sorted portion
        
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]  # Shift the element to the right
            j -= 1  # Move to the left in the sorted portion
        
        arr[j + 1] = key  # Place the key in its correct position

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [12, 11, 13, 5, 6]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = insertion_sort(sample_array)
    print("Sorted array:", sorted_array)

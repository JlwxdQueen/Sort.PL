def selection_sort(arr):
    
    # Traverse through the entire array
    for i in range(len(arr)):
        # Assume the minimum is the first element in the unsorted section
        min_index = i
        
        # Check the element to find the minimum in the remaining unsorted section
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:  # If a smaller element is found
                min_index = j  # Update the index of the minimum element
        
        # Swap the found minimum element with the first unsorted element
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [64, 25, 12, 22, 11]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = selection_sort(sample_array)
    print("Sorted array:", sorted_array)

def binary_search(arr, val, start, end):

    while start <= end:
        mid = (start + end) // 2  # Calculate the mid index

        # If the value is found at mid, return mid
        if arr[mid] == val:
            return mid
        
        # If the value is less than the middle element, search the left half
        elif arr[mid] > val:
            end = mid - 1
        
        # If the value is greater than the middle element, search the right half
        else:
            start = mid + 1

    return start  # The position where val should be inserted

def binary_insertion_sort(arr):
    
    # Traverse from the second element to the end of the array
    for i in range(1, len(arr)):
        key = arr[i]  # Current value to be inserted
        # Find the position where key should be inserted
        j = binary_search(arr, key, 0, i - 1)

        # Shift elements to the right to make space for the key
        arr = arr[:j] + [key] + arr[j:i] + arr[i + 1:]

    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [5, 2, 9, 1, 5, 6]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = binary_insertion_sort(sample_array)
    print("Sorted array:", sorted_array)

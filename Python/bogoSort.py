import random

def is_sorted(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:  # Compare each element with the next
            return False  # If any pair is out of order, return False
    return True  # If no pairs are out of order, return True

def bogo_sort(arr):
    while not is_sorted(arr):  # Continue until the array is sorted
        random.shuffle(arr)  # Randomly shuffle the array
    return arr  # Return the sorted array

# Example usage
if __name__ == "__main__":
    # Sample array to sort
    sample_array = [3, 1, 4, 2, 5]
    print("Original array:", sample_array)
    
    # Sorting the array
    sorted_array = bogo_sort(sample_array)
    print("Sorted array:", sorted_array)

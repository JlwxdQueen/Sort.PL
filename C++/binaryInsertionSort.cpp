#include <iostream>
#include <vector>

// Function for binary search to find the correct position to insert an element
// We search in the range from 'low' to 'high'
int binarySearch(const std::vector<int>& arr, int item, int low, int high) {
    // Loop to repeatedly narrow the search range
    while (low <= high) {
        // Calculate the middle index of the current search range
        int mid = low + (high - low) / 2;

        // If the item is equal to the middle element, we return the next position
        if (item == arr[mid]) {
            return mid + 1; // Place it right after the same element
        }

        // If the item is greater than the middle element, it belongs to the right half
        if (item > arr[mid]) {
            low = mid + 1; // Adjust the lower bound
        } else {
            // Otherwise, it belongs to the left half
            high = mid - 1; // Adjust the upper bound
        }
    }
    // If not found, return the position where it should be inserted (in sorted order)
    return low;
}

// Function that implements the binary insertion sort algorithm
void binaryInsertionSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Start from the second element (index 1) and move through the array
    for (int i = 1; i < n; ++i) {
        int current = arr[i]; // Store the current element to be inserted
        int j = i - 1; // j tracks the sorted portion of the array (on the left)

        // Use binary search to find the position where 'current' should be inserted
        int pos = binarySearch(arr, current, 0, j);

        // Shift all elements that are greater than 'current' one position to the right
        while (j >= pos) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move left to check the next element
        }

        // Insert 'current' into its correct position
        arr[pos] = current;
    }
}

// Helper function to print the elements of the array
void printArray(const std::vector<int>& arr) {
    for (int i = 0; i < arr.size(); ++i) {
        std::cout << arr[i] << " "; // Print each element followed by a space
    }
    std::cout << std::endl; // Print a newline at the end
}

// Main function
int main() {
    // Example array to sort
    std::vector<int> arr = {37, 23, 17, 5, 88, 61, 9};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the binary insertion sort function
    binaryInsertionSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

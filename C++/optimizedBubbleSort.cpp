#include <iostream>
#include <vector>

// Function to implement Optimized Bubble Sort
void optimizedBubbleSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Outer loop - each pass moves the largest unsorted element to its correct position
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false; // Track if any elements were swapped in the current pass

        // Inner loop - compares adjacent elements and swaps if necessary
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]); // Swap elements if they are in the wrong order
                swapped = true;                // Set flag to true indicating a swap occurred
            }
        }

        // If no elements were swapped, the array is already sorted, so we can terminate early
        if (!swapped) {
            break;
        }
    }
}

// Helper function to print the array
void printArray(const std::vector<int>& arr) {
    for (int i = 0; i < arr.size(); ++i) {
        std::cout << arr[i] << " "; // Print each element followed by a space
    }
    std::cout << std::endl; // New line after printing the array
}

// Main function
int main() {
    // Example array to sort
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the optimized bubble sort function
    optimizedBubbleSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

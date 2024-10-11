#include <iostream>
#include <vector>

// Function to implement Bubble Sort
void bubbleSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Outer loop - runs 'n-1' times because the last element is always sorted after each pass
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false; // A flag to track if a swap was made in this pass

        // Inner loop - compares adjacent elements and swaps if they are in the wrong order
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                // If the current element is greater than the next one, swap them
                std::swap(arr[j], arr[j + 1]);
                swapped = true; // Set the flag to true indicating that a swap was made
            }
        }

        // If no elements were swapped during the inner loop, the array is already sorted
        if (!swapped) {
            break; // Exit the loop early, improving performance in already sorted arrays
        }
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
    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the bubble sort function
    bubbleSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

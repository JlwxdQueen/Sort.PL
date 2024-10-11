#include <iostream>
#include <vector>

// Function to implement Shaker Sort
void shakerSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array
    bool swapped = true; // Flag to indicate if any swaps were made
    int start = 0;       // Starting index for the current pass
    int end = n - 1;     // Ending index for the current pass

    while (swapped) {
        swapped = false; // Reset the swapped flag for the current pass

        // Forward pass (left to right)
        for (int i = start; i < end; ++i) {
            if (arr[i] > arr[i + 1]) {
                std::swap(arr[i], arr[i + 1]); // Swap if the current element is greater than the next
                swapped = true;                 // Set the flag indicating a swap occurred
            }
        }

        // If no swaps were made, the array is sorted
        if (!swapped) {
            break;
        }

        // Reduce the end index since the last element is now in its correct position
        end--;

        // Reset the swapped flag for the backward pass
        swapped = false;

        // Backward pass (right to left)
        for (int i = end; i > start; --i) {
            if (arr[i] < arr[i - 1]) {
                std::swap(arr[i], arr[i - 1]); // Swap if the current element is less than the previous
                swapped = true;                 // Set the flag indicating a swap occurred
            }
        }

        // Increase the start index since the first element is now in its correct position
        start++;
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
    std::vector<int> arr = {5, 3, 8, 4, 2};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the shaker sort function
    shakerSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

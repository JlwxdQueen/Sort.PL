#include <iostream>
#include <vector>

// Function to implement Selection Sort
void selectionSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Outer loop to iterate over the unsorted portion of the array
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i; // Assume the first element is the minimum

        // Inner loop to find the minimum element in the unsorted portion of the array
        for (int j = i + 1; j < n; ++j) {
            // If a smaller element is found, update minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element found with the first element of the unsorted portion
        if (minIndex != i) {
            std::swap(arr[i], arr[minIndex]);
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
    std::vector<int> arr = {64, 25, 12, 22, 11};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the selection sort function
    selectionSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

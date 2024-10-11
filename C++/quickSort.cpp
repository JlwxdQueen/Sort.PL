#include <iostream>
#include <vector>

// Function to partition the array and return the pivot index
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Select the last element as the pivot
    int i = low - 1;       // Index of the smaller element

    // Loop to reorder the elements based on the pivot
    for (int j = low; j < high; ++j) {
        if (arr[j] <= pivot) {
            i++; // Increment the index of the smaller element
            std::swap(arr[i], arr[j]); // Swap elements that are smaller than or equal to pivot
        }
    }

    // Swap the pivot element with the element at i+1 (its correct sorted position)
    std::swap(arr[i + 1], arr[high]);

    // Return the index of the pivot element
    return i + 1;
}

// Quick Sort function
void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        // Partition the array, and get the pivot index
        int pi = partition(arr, low, high);

        // Recursively sort elements before and after the partition
        quickSort(arr, low, pi - 1);  // Sort the left subarray
        quickSort(arr, pi + 1, high); // Sort the right subarray
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
    std::vector<int> arr = {10, 7, 8, 9, 1, 5};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the quick sort function
    quickSort(arr, 0, arr.size() - 1);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

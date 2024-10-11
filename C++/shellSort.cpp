#include <iostream>
#include <vector>

// Function to implement Shell Sort
void shellSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Start with a big gap, then reduce the gap
    for (int gap = n / 2; gap > 0; gap /= 2) {
        // Perform a gapped insertion sort for this gap size
        for (int i = gap; i < n; i++) {
            int temp = arr[i]; // The current element to be compared
            int j; // Index for comparison

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]; // Shift elements to make room for temp
            }
            arr[j] = temp; // Insert the element at its correct position
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
    std::vector<int> arr = {12, 34, 54, 2, 3};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the shell sort function
    shellSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

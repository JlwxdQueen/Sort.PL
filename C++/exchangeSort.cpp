#include <iostream>
#include <vector>

// Function to implement Exchange Sort
void exchangeSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Outer loop - picks the element at index i
    for (int i = 0; i < n - 1; ++i) {
        // Inner loop - compares the element at index i with each element that comes after it
        for (int j = i + 1; j < n; ++j) {
            // If the element at index i is greater than the element at index j, swap them
            if (arr[i] > arr[j]) {
                std::swap(arr[i], arr[j]); // Swap the two elements
            }
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
    std::vector<int> arr = {29, 10, 14, 37, 13};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the exchange sort function
    exchangeSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

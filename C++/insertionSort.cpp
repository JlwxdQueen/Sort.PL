#include <iostream>
#include <vector>

// Function to implement Insertion Sort
void insertionSort(std::vector<int>& arr) {
    int n = arr.size(); // Get the size of the array

    // Start from the second element (index 1), because the first element is trivially sorted
    for (int i = 1; i < n; ++i) {
        int key = arr[i]; // The current element to be inserted into the sorted part
        int j = i - 1;    // Start comparing with the element before the current one

        // Move elements of the sorted part that are greater than 'key' to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--;                 // Move to the next element on the left
        }

        // Insert the current element ('key') at its correct position in the sorted part
        arr[j + 1] = key;
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
    std::vector<int> arr = {12, 11, 13, 5, 6};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the insertion sort function
    insertionSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

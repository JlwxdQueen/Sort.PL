#include <iostream>
#include <vector>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For seeding the random number generator

// Function to check if the array is sorted
bool isSorted(const std::vector<int>& arr) {
    // Loop through the array and check if every pair of elements is in order
    for (int i = 0; i < arr.size() - 1; ++i) {
        if (arr[i] > arr[i + 1]) {
            return false; // Return false if an unsorted pair is found
        }
    }
    return true; // If no unsorted pairs are found, the array is sorted
}

// Function to shuffle the array randomly
void shuffle(std::vector<int>& arr) {
    // Loop through the array and swap each element with a randomly chosen element
    for (int i = 0; i < arr.size(); ++i) {
        int randomIndex = rand() % arr.size(); // Generate a random index
        std::swap(arr[i], arr[randomIndex]);   // Swap the current element with the random one
    }
}

// Bogo Sort function
void bogoSort(std::vector<int>& arr) {
    // Keep shuffling the array until it is sorted
    while (!isSorted(arr)) {
        shuffle(arr); // Randomly shuffle the array
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
    // Seed the random number generator
    srand(static_cast<unsigned int>(time(0)));

    // Example array to sort
    std::vector<int> arr = {3, 2, 5, 1, 4};

    // Output the original array
    std::cout << "Original array: ";
    printArray(arr);

    // Call the bogo sort function
    bogoSort(arr);

    // Output the sorted array
    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}

package main

import (
	"fmt"
)

// insertionSort sorts an array using the insertion sort algorithm.
func insertionSort(arr []int) {
	// Loop through each element starting from the second element (index 1)
	for i := 1; i < len(arr); i++ {
		key := arr[i] // The current element to be inserted
		j := i - 1    // The last index of the sorted part of the array

		// Shift elements of the sorted part to the right to make space for the key
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j] // Shift the larger element to the right
			j--               // Move to the previous index
		}
		arr[j+1] = key // Insert the key at its correct position
	}
}

// main function to test the insertionSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	insertionSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

package main

import (
	"fmt"
)

// bubbleSort sorts an array using the bubble sort algorithm.
func bubbleSort(arr []int) {
	n := len(arr) // Get the length of the array

	// Loop through each element in the array
	for i := 0; i < n-1; i++ {
		// Track if a swap was made in this iteration
		swapped := false

		// Compare adjacent elements
		for j := 0; j < n-i-1; j++ {
			// If the current element is greater than the next, swap them
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j] // Swap elements
				swapped = true // Mark that a swap occurred
			}
		}

		// If no swaps were made, the array is already sorted
		if !swapped {
			break // Exit the loop early
		}
	}
}

// main function to test the bubbleSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	bubbleSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

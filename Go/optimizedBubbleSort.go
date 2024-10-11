package main

import (
	"fmt"
)

// optimizedBubbleSort sorts an array using an optimized bubble sort algorithm.
// The optimization checks if any swaps were made in an iteration and stops early if none were.
func optimizedBubbleSort(arr []int) {
	n := len(arr) // Get the length of the array

	// Loop through each element in the array
	for i := 0; i < n-1; i++ {
		swapped := false // Track if a swap was made during this iteration

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

// main function to test the optimizedBubbleSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	optimizedBubbleSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

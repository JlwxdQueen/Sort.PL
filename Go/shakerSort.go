package main

import (
	"fmt"
)

// shakerSort sorts an array using the shaker sort algorithm.
func shakerSort(arr []int) {
	n := len(arr)      // Get the length of the array
	start := 0         // Starting index for the left to right pass
	end := n - 1       // Ending index for the right to left pass
	swapped := true     // Flag to check if a swap occurred

	for swapped {      // Continue until no swaps are made
		swapped = false // Reset the swapped flag for this pass

		// Left to right pass
		for i := start; i < end; i++ {
			// If the current element is greater than the next, swap them
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i] // Swap elements
				swapped = true                      // Mark that a swap occurred
			}
		}

		// If no swaps were made, the array is sorted
		if !swapped {
			break // Exit if the array is already sorted
		}

		// Decrease the end index since the last element is sorted
		end--

		swapped = false // Reset the swapped flag for the next pass

		// Right to left pass
		for i := end; i > start; i-- {
			// If the current element is less than the previous, swap them
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i] // Swap elements
				swapped = true                       // Mark that a swap occurred
			}
		}

		// Increase the start index since the first element is sorted
		start++
	}
}

// main function to test the shakerSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	shakerSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

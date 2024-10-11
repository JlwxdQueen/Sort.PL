package main

import (
	"fmt"
)

// shellSort sorts an array using the Shell sort algorithm.
func shellSort(arr []int) {
	n := len(arr) // Get the length of the array

	// Start with a big gap, then reduce the gap
	for gap := n / 2; gap > 0; gap /= 2 {
		// Do a gapped insertion sort for this gap size
		for i := gap; i < n; i++ {
			temp := arr[i] // Store the current element to be positioned
			j := i

			// Shift earlier gap-sorted elements up until the correct location for temp is found
			for j >= gap && arr[j-gap] > temp {
				arr[j] = arr[j-gap] // Move the element at j-gap to the current position
				j -= gap           // Move to the next element in the gap-sorted list
			}
			arr[j] = temp // Place the temp value at its correct position
		}
	}
}

// main function to test the shellSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	shellSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

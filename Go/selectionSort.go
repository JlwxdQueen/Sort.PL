package main

import (
	"fmt"
)

// selectionSort sorts an array using the selection sort algorithm.
func selectionSort(arr []int) {
	n := len(arr) // Get the length of the array

	// Loop through each element in the array
	for i := 0; i < n-1; i++ {
		minIndex := i // Assume the minimum is the first element in the unsorted part

		// Find the index of the minimum element in the unsorted part
		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j // Update minIndex if a smaller element is found
			}
		}

		// Swap the found minimum element with the first element of the unsorted part
		if minIndex != i {
			arr[i], arr[minIndex] = arr[minIndex], arr[i] // Swap elements
		}
	}
}

// main function to test the selectionSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	selectionSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

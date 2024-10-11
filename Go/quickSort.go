package main

import (
	"fmt"
)

// partition rearranges the array by placing the pivot in the correct position,
// such that elements less than the pivot are on the left and elements greater than
// the pivot are on the right. It returns the index of the pivot.
func partition(arr []int, low, high int) int {
	pivot := arr[high] // Choose the last element as the pivot
	i := low - 1       // Pointer for the smaller element

	// Loop through each element in the array
	for j := low; j < high; j++ {
		// If the current element is smaller than or equal to the pivot
		if arr[j] <= pivot {
			i++                   // Move the pointer for the smaller element
			arr[i], arr[j] = arr[j], arr[i] // Swap elements
		}
	}
	// Place the pivot in its correct position
	arr[i+1], arr[high] = arr[high], arr[i+1]
	return i + 1 // Return the index of the pivot
}

// quickSort sorts an array using the quick sort algorithm.
func quickSort(arr []int, low, high int) {
	if low < high {
		// Get the partitioning index
		pi := partition(arr, low, high)

		// Recursively sort elements before and after partition
		quickSort(arr, low, pi-1)  // Sort the left part
		quickSort(arr, pi+1, high) // Sort the right part
	}
}

// main function to test the quickSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	quickSort(arr, 0, len(arr)-1) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

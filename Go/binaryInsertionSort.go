package main

import (
	"fmt"
)

// binarySearch is a helper function that finds the index to insert a given element in a sorted slice
// using binary search algorithm. It returns the index at which the element should be inserted.
func binarySearch(arr []int, item int, low int, high int) int {
	for low <= high {
		mid := low + (high-low)/2 // Find the mid-point to reduce the search space
		if arr[mid] < item {
			low = mid + 1 // Move to the right half if the mid-value is less than the item
		} else {
			high = mid - 1 // Move to the left half if the mid-value is greater than or equal to the item
		}
	}
	return low // Return the index where the item should be inserted
}

// binaryInsertionSort sorts an array using the binary insertion sort algorithm.
func binaryInsertionSort(arr []int) {
	// Loop through each element starting from the second element (index 1)
	for i := 1; i < len(arr); i++ {
		key := arr[i] // The current element to be positioned
		j := i - 1    // The last index of the sorted part of the array

		// Find the location where the key should be inserted using binary search
		insertPos := binarySearch(arr, key, 0, j)

		// Shift elements to the right to make space for the key
		for j >= insertPos {
			arr[j+1] = arr[j] // Shift the element at j to the right
			j--               // Move to the previous index
		}
		arr[insertPos] = key // Insert the key at its correct position
	}
}

// main function to test the binaryInsertionSort
func main() {
	arr := []int{12, 11, 13, 5, 6} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	binaryInsertionSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

package main

import (
	"fmt"
)

// exchangeSort sorts an array using the exchange sort algorithm.
func exchangeSort(arr []int) {
	n := len(arr) // Get the length of the array

	// Loop through each element in the array
	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			// If the current element is greater than the next, swap them
			if arr[i] > arr[j] {
				arr[i], arr[j] = arr[j], arr[i] // Swap elements
			}
		}
	}
}

// main function to test the exchangeSort
func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	exchangeSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

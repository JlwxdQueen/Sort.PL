package main

import (
	"fmt"
	"math/rand"
	"time"
)

// isSorted checks if the array is sorted in ascending order.
func isSorted(arr []int) bool {
	for i := 1; i < len(arr); i++ {
		if arr[i-1] > arr[i] {
			return false // Return false if any element is greater than the next
		}
	}
	return true // Return true if the array is sorted
}

// shuffle randomly shuffles the elements of the array.
func shuffle(arr []int) {
	rand.Seed(time.Now().UnixNano()) // Seed the random number generator
	for i := range arr {
		j := rand.Intn(len(arr)) // Generate a random index
		arr[i], arr[j] = arr[j], arr[i] // Swap elements at indices i and j
	}
}

// bogoSort repeatedly shuffles the array until it is sorted.
func bogoSort(arr []int) {
	for !isSorted(arr) { // Continue until the array is sorted
		shuffle(arr) // Shuffle the array
	}
}

// main function to test the bogoSort
func main() {
	arr := []int{3, 2, 5, 1, 4} // Sample array to be sorted
	fmt.Println("Original array:", arr)

	bogoSort(arr) // Call the sorting function

	fmt.Println("Sorted array:", arr) // Print the sorted array
}

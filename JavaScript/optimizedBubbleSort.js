/**
 * Function to perform Optimized Bubble Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function optimizedBubbleSort(arr) {
    let n = arr.length; // Get the length of the array

    // Outer loop to traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Flag to track if any swaps were made

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set the flag to true if a swap occurred
            }
        }

        // If no swaps were made, the array is already sorted
        if (!swapped) {
            break; // Exit the loop early
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = optimizedBubbleSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

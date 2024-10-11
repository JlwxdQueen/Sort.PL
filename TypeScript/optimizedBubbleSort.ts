/**
 * Function to perform Optimized Bubble Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function optimizedBubbleSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array

    // Outer loop for each pass through the array
    for (let i = 0; i < n - 1; i++) {
        let swapped: boolean = false; // Flag to check if a swap occurred during this pass

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            // If the current element is greater than the next one, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set the flag to true since a swap occurred
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) {
            break; // Exit the loop early
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = optimizedBubbleSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

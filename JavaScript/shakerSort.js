/**
 * Function to perform Shaker Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function shakerSort(arr) {
    let n = arr.length; // Get the length of the array
    let swapped; // Variable to track if a swap occurred
    let start = 0; // Starting index for the forward pass
    let end = n - 1; // Ending index for the backward pass

    do {
        swapped = false; // Reset swapped to false at the start of each pass

        // Forward pass: Move largest element to the end
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap if elements are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Set swapped to true
            }
        }

        // If no swaps occurred, the array is sorted
        if (!swapped) break;

        // Decrease end since the last element is sorted
        end--;

        // Backward pass: Move smallest element to the beginning
        for (let i = end; i > start; i--) {
            if (arr[i] < arr[i - 1]) {
                // Swap if elements are in the wrong order
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true; // Set swapped to true
            }
        }

        // Increase start since the first element is sorted
        start++;

    } while (swapped); // Continue if any swaps were made

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = shakerSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

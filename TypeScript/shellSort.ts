/**
 * Function to perform Shell Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function shellSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array

    // Start with a large gap and reduce it
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            const temp: number = arr[i]; // Store the current element
            let j: number; // Initialize the index for shifting elements

            // Shift earlier gap-sorted elements up until the correct location for temp is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]; // Shift the element to the right
            }

            arr[j] = temp; // Place the temp (current element) in its correct position
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = shellSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

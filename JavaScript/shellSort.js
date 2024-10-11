/**
 * Function to perform Shell Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function shellSort(arr) {
    let n = arr.length; // Get the length of the array

    // Start with a gap equal to half the length of the array
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            let temp = arr[i]; // Store the current element
            let j; // Initialize the index for comparison

            // Shift earlier gap-sorted elements up until the correct location is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]; // Move the larger element to the current index
            }

            // Put the stored element into its correct location
            arr[j] = temp;
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = shellSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

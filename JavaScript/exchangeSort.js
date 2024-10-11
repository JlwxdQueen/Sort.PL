/**
 * Function to perform Exchange Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function exchangeSort(arr) {
    let n = arr.length; // Get the length of the array

    // Outer loop to traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Inner loop to compare the current element with the rest of the array
        for (let j = i + 1; j < n; j++) {
            // Compare the current element with the next element
            if (arr[i] > arr[j]) {
                // Swap if they are in the wrong order
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = exchangeSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

/**
 * Function to perform Selection Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {
    let n = arr.length; // Get the length of the array

    // Outer loop to traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the current index is the minimum

        // Inner loop to find the minimum element in the unsorted sublist
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap using destructuring
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

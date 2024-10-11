/**
 * Function to perform Insertion Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function insertionSort(arr) {
    let n = arr.length; // Get the length of the array

    // Iterate through the array starting from the second element
    for (let i = 1; i < n; i++) {
        let currentElement = arr[i]; // The current element to be positioned
        let j = i - 1; // Start comparing with the last sorted element

        // Shift elements of arr[0..i-1], that are greater than currentElement,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; // Shift the larger element to the right
            j--; // Move to the next element on the left
        }

        // Place the current element at its correct position
        arr[j + 1] = currentElement;
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

/**
 * Function to perform Quick Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @param {number} left - The starting index of the array/subarray.
 * @param {number} right - The ending index of the array/subarray.
 * @returns {number[]} - The sorted array.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case: If the array has one or no elements, it is already sorted
    if (left < right) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, left, right);
        // Recursively sort the elements before and after partition
        quickSort(arr, left, pivotIndex - 1);  // Sort the left part
        quickSort(arr, pivotIndex + 1, right); // Sort the right part
    }
    return arr; // Return the sorted array
}

/**
 * Function to partition the array around a pivot.
 * @param {number[]} arr - The array to be partitioned.
 * @param {number} left - The starting index of the array/subarray.
 * @param {number} right - The ending index of the array/subarray.
 * @returns {number} - The index of the pivot after partitioning.
 */
function partition(arr, left, right) {
    const pivot = arr[right]; // Choose the last element as the pivot
    let i = left - 1; // Pointer for the smaller element

    // Iterate over the elements
    for (let j = left; j < right; j++) {
        // If the current element is less than or equal to the pivot
        if (arr[j] <= pivot) {
            i++; // Increment the index of the smaller element
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    // Swap the pivot element with the element at i+1
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1; // Return the index of the pivot
}

// Example usage
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

/**
 * Function to partition the array and rearrange elements based on the pivot.
 * 
 * @param arr - An array of numbers to be sorted.
 * @param low - The starting index of the array/sub-array.
 * @param high - The ending index of the array/sub-array.
 * @returns The index of the pivot after partitioning.
 */
function partition(arr: number[], low: number, high: number): number {
    const pivot: number = arr[high]; // Choose the last element as the pivot
    let i: number = low - 1; // Index of the smaller element

    // Loop through the array and rearrange elements
    for (let j = low; j < high; j++) {
        // If the current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap the pivot element with the element at i + 1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partitioning index
}

/**
 * Function to perform Quick Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @param low - The starting index of the array/sub-array.
 * @param high - The ending index of the array/sub-array.
 */
function quickSort(arr: number[], low: number, high: number): void {
    if (low < high) {
        // Get the partitioning index
        const pi: number = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);  // Sort the left sub-array
        quickSort(arr, pi + 1, high); // Sort the right sub-array
    }
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
quickSort(arrayToSort, 0, arrayToSort.length - 1);
console.log(arrayToSort); // Output: [11, 12, 22, 25, 34, 64, 90]

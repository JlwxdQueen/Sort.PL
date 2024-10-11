/**
 * Function to perform Exchange Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function exchangeSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array

    // Outer loop for each element in the array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing elements
        for (let j = i + 1; j < n; j++) {
            // If the current element is greater than the next one, swap them
            if (arr[i] > arr[j]) {
                // Swap elements
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = exchangeSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

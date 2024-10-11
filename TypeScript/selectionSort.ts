/**
 * Function to perform Selection Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function selectionSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array

    // Loop through each element in the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex: number = i; // Assume the minimum is the first element in the unsorted part

        // Inner loop to find the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
        }
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = selectionSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

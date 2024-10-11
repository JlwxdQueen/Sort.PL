/**
 * Function to perform Insertion Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function insertionSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array

    // Loop through each element in the array starting from the second element
    for (let i = 1; i < n; i++) {
        const key: number = arr[i]; // Store the current element to be inserted
        let j: number = i - 1; // Start comparing with the previous element

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }

        // Insert the key at the correct position
        arr[j + 1] = key; // Place key in its correct location
    }

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = insertionSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

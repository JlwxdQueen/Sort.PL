/**
 * Function to perform Binary Insertion Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function binaryInsertionSort(arr: number[]): number[] {
    // Get the length of the array
    const n: number = arr.length;

    // Loop through each element in the array starting from the second element
    for (let i = 1; i < n; i++) {
        // Store the current element to be inserted
        const key: number = arr[i];
        
        // Find the location where the key should be inserted
        let left: number = 0;
        let right: number = i - 1;

        // Perform binary search to find the correct index for the key
        while (left <= right) {
            // Calculate the mid index
            const mid: number = Math.floor((left + right) / 2);
            
            // If the key is greater than the mid element, ignore the left half
            if (key > arr[mid]) {
                left = mid + 1;
            } else {
                // If the key is less than or equal to the mid element, ignore the right half
                right = mid - 1;
            }
        }

        // The position 'left' is where the key should be inserted
        // Shift all elements to the right to create space for the key
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }

        // Insert the key at the correct position
        arr[left] = key;
    }

    // Return the sorted array
    return arr;
}

// Example usage
const arrayToSort: number[] = [5, 2, 9, 1, 5, 6];
const sortedArray: number[] = binaryInsertionSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]

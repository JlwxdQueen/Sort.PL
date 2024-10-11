/**
 * Function to perform Shaker Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function shakerSort(arr: number[]): number[] {
    const n: number = arr.length; // Get the length of the array
    let left: number = 0; // Initialize the left pointer
    let right: number = n - 1; // Initialize the right pointer
    let swapped: boolean; // Flag to check if a swap occurred

    do {
        swapped = false; // Reset the swap flag for this pass

        // Pass from left to right
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap if the current element is greater than the next
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Set the swap flag to true
            }
        }
        
        // Decrease the right pointer after completing the left-to-right pass
        right--;

        // If no elements were swapped, the array is sorted
        if (!swapped) break;

        swapped = false; // Reset the swap flag for the right-to-left pass

        // Pass from right to left
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                // Swap if the current element is less than the previous
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true; // Set the swap flag to true
            }
        }
        
        // Increase the left pointer after completing the right-to-left pass
        left++;
    } while (left <= right); // Continue until the pointers cross

    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = shakerSort(arrayToSort);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

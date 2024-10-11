/**
 * Function to check if an array is sorted in ascending order.
 * 
 * @param arr - An array of numbers to check.
 * @returns True if the array is sorted, otherwise false.
 */
function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false; // Return false if the previous element is greater than the current one
        }
    }
    return true; // Return true if no unsorted pairs were found
}

/**
 * Function to shuffle an array randomly.
 * 
 * @param arr - An array of numbers to shuffle.
 * @returns A new array that is a shuffled version of the input array.
 */
function shuffleArray(arr: number[]): number[] {
    // Create a copy of the array to avoid modifying the original
    const shuffled: number[] = [...arr];

    // Loop through the array in reverse order
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j: number = Math.floor(Math.random() * (i + 1));

        // Swap the elements at index i and j
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled; // Return the shuffled array
}

/**
 * Function to perform Bogo Sort on an array.
 * 
 * @param arr - An array of numbers to be sorted.
 * @returns The sorted array.
 */
function bogoSort(arr: number[]): number[] {
    // Keep shuffling and checking until the array is sorted
    while (!isSorted(arr)) {
        arr = shuffleArray(arr); // Shuffle the array
    }
    
    return arr; // Return the sorted array
}

// Example usage
const arrayToSort: number[] = [5, 2, 9, 1, 5, 6];
const sortedArray: number[] = bogoSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]

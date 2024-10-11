/**
 * Function to check if the array is sorted in ascending order.
 * @param {number[]} arr - The array to check.
 * @returns {boolean} - True if the array is sorted, false otherwise.
 */
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false; // If any element is less than the previous one, return false
        }
    }
    return true; // Array is sorted
}

/**
 * Function to shuffle the array randomly.
 * @param {number[]} arr - The array to shuffle.
 * @returns {number[]} - The shuffled array.
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at indices i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Function to perform Bogo Sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function bogoSort(arr) {
    // Repeat until the array is sorted
    while (!isSorted(arr)) {
        shuffle(arr); // Shuffle the array randomly
    }
    return arr; // Return the sorted array
}

// Example usage
const arrayToSort = [3, 1, 4, 2, 5];
const sortedArray = bogoSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

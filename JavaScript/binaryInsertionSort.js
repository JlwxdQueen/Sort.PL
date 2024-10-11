/**
 * Function to perform binary insertion sort on an array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function binaryInsertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be positioned
        let currentElement = arr[i];
        // Use binary search to find the correct position for the current element
        let position = binarySearch(arr, currentElement, 0, i - 1);
        
        // Move all elements after position one step to the right
        for (let j = i - 1; j >= position; j--) {
            arr[j + 1] = arr[j];
        }
        
        // Place the current element at its correct position
        arr[position] = currentElement;
    }
    
    // Return the sorted array
    return arr;
}

/**
 * Function to perform binary search to find the index 
 * where the current element should be inserted.
 * @param {number[]} arr - The array to search within.
 * @param {number} target - The element to find the position for.
 * @param {number} left - The left index of the current sub-array.
 * @param {number} right - The right index of the current sub-array.
 * @returns {number} - The index where the target should be inserted.
 */
function binarySearch(arr, target, left, right) {
    while (left <= right) {
        // Calculate the mid-point of the current sub-array
        let mid = Math.floor((left + right) / 2);
        
        // If the target is found, return the mid index
        if (arr[mid] === target) {
            return mid;
        }
        
        // If the target is less than the mid element, search the left half
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            // If the target is greater than the mid element, search the right half
            left = mid + 1;
        }
    }
    
    // The target should be inserted at the left index position
    return left;
}

// Example usage
const arrayToSort = [37, 23, 0, 17, 12, 72, 31, 46];
const sortedArray = binaryInsertionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

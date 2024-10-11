public class ShakerSort {

    // Method to perform Shaker Sort
    public static void shakerSort(int[] array) {
        int n = array.length; // Get the length of the array
        boolean swapped; // Flag to check if a swap has occurred
        int start = 0; // Starting index
        int end = n - 1; // Ending index

        // Repeat until the entire array is sorted
        do {
            swapped = false;

            // Pass from left to right
            for (int i = start; i < end; i++) {
                // If the current element is greater than the next element
                if (array[i] > array[i + 1]) {
                    // Swap the elements
                    int temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true; // Set swapped to true
                }
            }

            // If no swaps occurred, the array is sorted
            if (!swapped) {
                break;
            }

            // Reduce the end index for the next pass
            end--;

            swapped = false; // Reset the flag for the next pass

            // Pass from right to left
            for (int i = end; i > start; i--) {
                // If the current element is less than the previous element
                if (array[i] < array[i - 1]) {
                    // Swap the elements
                    int temp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = temp;
                    swapped = true; // Set swapped to true
                }
            }

            // Increase the start index for the next pass
            start++;

        } while (swapped); // Continue until no swaps occur
    }

    // Method to print the array
    public static void printArray(int[] array) {
        // Iterate through the array and print each element
        for (int value : array) {
            System.out.print(value + " ");
        }
        System.out.println();
    }

    // Main method to test the sorting algorithm
    public static void main(String[] args) {
        // Sample array to be sorted
        int[] array = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(array); // Print the original array

        // Call the shaker sort method
        shakerSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

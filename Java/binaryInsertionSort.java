public class BinaryInsertionSort {
    
    // Method to perform binary insertion sort
    public static void binaryInsertionSort(int[] array) {
        // Traverse through the array starting from the second element
        for (int i = 1; i < array.length; i++) {
            // The current element to be positioned
            int key = array[i];
            // Find the position to insert the key
            int position = binarySearch(array, key, 0, i - 1);

            // Shift elements to the right to make space for the key
            for (int j = i - 1; j >= position; j--) {
                array[j + 1] = array[j];
            }
            // Place the key at its correct position
            array[position] = key;
        }
    }

    // Method to perform binary search to find the correct position of the key
    private static int binarySearch(int[] array, int key, int low, int high) {
        // If the low index is greater than high, return the low index
        if (low > high) {
            return low;
        }

        // Calculate the mid index
        int mid = (low + high) / 2;

        // If key is less than the mid element, search in the left half
        if (key < array[mid]) {
            return binarySearch(array, key, low, mid - 1);
        }
        // If key is greater than the mid element, search in the right half
        else {
            return binarySearch(array, key, mid + 1, high);
        }
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
        int[] array = {12, 11, 13, 5, 6};

        System.out.println("Original array:");
        printArray(array); // Print the original array

        // Call the binary insertion sort method
        binaryInsertionSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

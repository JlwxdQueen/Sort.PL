public class InsertionSort {

    // Method to perform Insertion Sort
    public static void insertionSort(int[] array) {
        int n = array.length; // Get the length of the array

        // Traverse through all elements starting from the second element
        for (int i = 1; i < n; i++) {
            // Current element to be inserted in the sorted part
            int key = array[i];
            // Initialize the index of the last element in the sorted part
            int j = i - 1;

            // Move elements of the sorted part that are greater than the key
            // to one position ahead of their current position
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j]; // Shift element to the right
                j--; // Move to the previous element
            }
            // Place the key at its correct position
            array[j + 1] = key;
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
        int[] array = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(array); // Print the original array

        // Call the insertion sort method
        insertionSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

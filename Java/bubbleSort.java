public class BubbleSort {

    // Method to perform Bubble Sort
    public static void bubbleSort(int[] array) {
        int n = array.length; // Get the length of the array

        // Outer loop to traverse through all elements
        for (int i = 0; i < n - 1; i++) {
            // Inner loop for comparing adjacent elements
            boolean swapped = false; // Flag to check if any swapping occurs
            for (int j = 0; j < n - 1 - i; j++) {
                // If the current element is greater than the next element
                if (array[j] > array[j + 1]) {
                    // Swap the elements
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true; // Set flag to true indicating a swap occurred
                }
            }
            // If no two elements were swapped in the inner loop, the array is sorted
            if (!swapped) {
                break; // Exit the loop early
            }
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

        // Call the bubble sort method
        bubbleSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

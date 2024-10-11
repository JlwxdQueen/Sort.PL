public class SelectionSort {

    // Method to perform Selection Sort
    public static void selectionSort(int[] array) {
        int n = array.length; // Get the length of the array

        // Traverse through all elements in the array
        for (int i = 0; i < n - 1; i++) {
            // Assume the first element of the unsorted part is the minimum
            int minIndex = i;

            // Check the rest of the array for a smaller element
            for (int j = i + 1; j < n; j++) {
                // Update minIndex if a smaller element is found
                if (array[j] < array[minIndex]) {
                    minIndex = j; // Update the index of the minimum element
                }
            }

            // Swap the found minimum element with the first element of the unsorted part
            if (minIndex != i) {
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
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

        // Call the selection sort method
        selectionSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

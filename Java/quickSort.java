public class QuickSort {

    // Method to perform Quick Sort
    public static void quickSort(int[] array, int low, int high) {
        // Check if low index is less than high index
        if (low < high) {
            // Partition the array and get the pivot index
            int pivotIndex = partition(array, low, high);

            // Recursively sort elements before and after partition
            quickSort(array, low, pivotIndex - 1); // Sort left sub-array
            quickSort(array, pivotIndex + 1, high); // Sort right sub-array
        }
    }

    // Method to partition the array
    private static int partition(int[] array, int low, int high) {
        // Choose the rightmost element as the pivot
        int pivot = array[high];
        int i = low - 1; // Index of the smaller element

        // Iterate through the array
        for (int j = low; j < high; j++) {
            // If the current element is smaller than or equal to the pivot
            if (array[j] <= pivot) {
                i++; // Increment index of smaller element
                // Swap array[i] and array[j]
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // Swap the pivot element with the element at index i + 1
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;

        return i + 1; // Return the pivot index
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

        // Call the quick sort method
        quickSort(array, 0, array.length - 1);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

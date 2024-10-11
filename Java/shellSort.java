public class ShellSort {

    // Method to perform Shell Sort
    public static void shellSort(int[] array) {
        int n = array.length; // Get the length of the array

        // Start with a large gap and reduce it until it becomes 0
        for (int gap = n / 2; gap > 0; gap /= 2) {
            // Perform a gapped insertion sort for this gap size
            for (int i = gap; i < n; i++) {
                // Save the current element to be inserted
                int temp = array[i];
                int j; // Index for comparing with the elements in the sorted part

                // Shift earlier gap-sorted elements up until the correct location for array[i] is found
                for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                    array[j] = array[j - gap]; // Shift element down
                }

                // Put the temp (the original array[i]) in its correct location
                array[j] = temp;
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

        // Call the shell sort method
        shellSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

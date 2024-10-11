public class ExchangeSort {

    // Method to perform Exchange Sort
    public static void exchangeSort(int[] array) {
        int n = array.length; // Get the length of the array

        // Outer loop to traverse through all elements
        for (int i = 0; i < n - 1; i++) {
            // Inner loop for comparing adjacent elements
            for (int j = i + 1; j < n; j++) {
                // If the current element is greater than the next element
                if (array[i] > array[j]) {
                    // Swap the elements
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
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

        // Call the exchange sort method
        exchangeSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

import java.util.Random;

public class BogoSort {

    // Method to perform Bogo Sort
    public static void bogoSort(int[] array) {
        // Keep shuffling the array until it is sorted
        while (!isSorted(array)) {
            shuffle(array); // Randomly shuffle the array
        }
    }

    // Method to check if the array is sorted
    private static boolean isSorted(int[] array) {
        // Iterate through the array and check if each element is less than or equal to the next one
        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                return false; // Return false if any element is greater than the next
            }
        }
        return true; // Return true if the array is sorted
    }

    // Method to randomly shuffle the array
    private static void shuffle(int[] array) {
        Random random = new Random();
        // Iterate over the array
        for (int i = 0; i < array.length; i++) {
            // Generate a random index
            int randomIndex = random.nextInt(array.length);
            // Swap the current element with the randomly chosen element
            int temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
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
        int[] array = {3, 2, 5, 1, 4};

        System.out.println("Original array:");
        printArray(array); // Print the original array

        // Call the bogo sort method
        bogoSort(array);

        System.out.println("Sorted array:");
        printArray(array); // Print the sorted array
    }
}

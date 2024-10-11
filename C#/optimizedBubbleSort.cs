using System;

class OptimizedBubbleSort
{
    // Method to perform Optimized Bubble Sort on an array
    public static void Sort(int[] array)
    {
        int n = array.Length; // Get the length of the array

        // Outer loop for the number of passes
        for (int i = 0; i < n - 1; i++)
        {
            bool swapped = false; // Flag to track if a swap occurred during this pass

            // Inner loop to compare adjacent elements
            for (int j = 0; j < n - i - 1; j++)
            {
                // Compare adjacent elements and swap if they are in the wrong order
                if (array[j] > array[j + 1])
                {
                    Swap(array, j, j + 1); // Swap the elements
                    swapped = true; // Set flag to true since a swap occurred
                }
            }

            // If no swaps occurred, the array is already sorted
            if (!swapped)
                break; // Exit the loop early
        }
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA]; // Store the value at indexA
        array[indexA] = array[indexB]; // Move the value at indexB to indexA
        array[indexB] = temp; // Assign the stored value to indexB
    }

    // Main method to test the Optimized Bubble Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 64, 34, 25, 12, 22, 11, 90 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Optimized Bubble Sort

        Console.WriteLine("Sorted array:");
        PrintArray(array); // Print the sorted array
    }

    // Method to print the elements of the array
    private static void PrintArray(int[] array)
    {
        foreach (int item in array)
        {
            Console.Write(item + " "); // Print each item followed by a space
        }
        Console.WriteLine(); // Print a new line after the array
    }
}

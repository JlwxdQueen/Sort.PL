using System;

class ShellSort
{
    // Method to perform Shell Sort on an array
    public static void Sort(int[] array)
    {
        int n = array.Length; // Get the length of the array

        // Start with a large gap, then reduce the gap
        for (int gap = n / 2; gap > 0; gap /= 2) // Set initial gap size
        {
            // Perform a gapped insertion sort for this gap size
            for (int i = gap; i < n; i++)
            {
                // Save the current element to insert into the correct position
                int temp = array[i];
                int j; // Initialize the index for comparing and shifting elements

                // Shift earlier gap-sorted elements up until the correct location for array[i] is found
                for (j = i; j >= gap && array[j - gap] > temp; j -= gap)
                {
                    array[j] = array[j - gap]; // Shift the element to the right
                }
                array[j] = temp; // Insert the element at its correct location
            }
        }
    }

    // Main method to test the Shell Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 64, 34, 25, 12, 22, 11, 90 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Shell Sort

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

using System;

class InsertionSort
{
    // Method to perform Insertion Sort on an array
    public static void Sort(int[] array)
    {
        int n = array.Length; // Get the length of the array

        // Iterate through the array starting from the second element
        for (int i = 1; i < n; i++)
        {
            // Store the current element to be inserted
            int key = array[i];
            int j = i - 1; // Start comparing with the previous element

            // Move elements that are greater than the key to one position ahead
            while (j >= 0 && array[j] > key)
            {
                array[j + 1] = array[j]; // Shift element to the right
                j--; // Move to the previous element
            }

            // Insert the key at its correct position
            array[j + 1] = key;
        }
    }

    // Main method to test the Insertion Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 12, 11, 13, 5, 6 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Insertion Sort

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

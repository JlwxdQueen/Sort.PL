using System;

class ExchangeSort
{
    // Method to perform Exchange Sort on an array
    public static void Sort(int[] array)
    {
        int n = array.Length; // Get the length of the array

        // Outer loop iterates over each element
        for (int i = 0; i < n - 1; i++)
        {
            // Inner loop compares the current element (array[i]) with all subsequent elements
            for (int j = i + 1; j < n; j++)
            {
                // If the current element is greater than the compared element, swap them
                if (array[i] > array[j])
                {
                    Swap(array, i, j); // Swap the elements
                }
            }
        }
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA];  // Store the value at indexA
        array[indexA] = array[indexB]; // Move the value at indexB to indexA
        array[indexB] = temp;  // Assign the stored value to indexB
    }

    // Main method to test the Exchange Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 29, 10, 14, 37, 14 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Exchange Sort

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

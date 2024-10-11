using System;

class SelectionSort
{
    // Method to perform Selection Sort on an array
    public static void Sort(int[] array)
    {
        int n = array.Length; // Get the length of the array

        // Outer loop to iterate through each element in the array
        for (int i = 0; i < n - 1; i++)
        {
            int minIndex = i; // Assume the first element is the minimum

            // Inner loop to find the index of the minimum element
            for (int j = i + 1; j < n; j++)
            {
                // Update minIndex if a smaller element is found
                if (array[j] < array[minIndex])
                {
                    minIndex = j; // Update minIndex to the new minimum
                }
            }

            // Swap the found minimum element with the first element of the unsorted part
            if (minIndex != i) // Only swap if minIndex has changed
            {
                Swap(array, i, minIndex); // Swap the elements
            }
        }
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA]; // Store the value at indexA
        array[indexA] = array[indexB]; // Move the value at indexB to indexA
        array[indexB] = temp; // Assign the stored value to indexB
    }

    // Main method to test the Selection Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 64, 25, 12, 22, 11 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Selection Sort

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

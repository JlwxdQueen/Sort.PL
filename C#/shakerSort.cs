using System;

class ShakerSort
{
    // Method to perform Shaker Sort on an array
    public static void Sort(int[] array)
    {
        int left = 0; // Starting index of the unsorted portion
        int right = array.Length - 1; // Ending index of the unsorted portion
        bool swapped; // Flag to check if a swap occurred

        do
        {
            swapped = false; // Reset the swap flag for this pass

            // Forward pass: Move the largest element to the right
            for (int i = left; i < right; i++)
            {
                // Compare adjacent elements and swap if they are in the wrong order
                if (array[i] > array[i + 1])
                {
                    Swap(array, i, i + 1); // Swap the elements
                    swapped = true; // Set flag to true since a swap occurred
                }
            }
            right--; // Decrease the right boundary since the last element is sorted

            // Backward pass: Move the smallest element to the left
            for (int i = right; i > left; i--)
            {
                // Compare adjacent elements and swap if they are in the wrong order
                if (array[i] < array[i - 1])
                {
                    Swap(array, i, i - 1); // Swap the elements
                    swapped = true; // Set flag to true since a swap occurred
                }
            }
            left++; // Increase the left boundary since the first element is sorted

        } while (swapped); // Continue until no swaps occur
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA]; // Store the value at indexA
        array[indexA] = array[indexB]; // Move the value at indexB to indexA
        array[indexB] = temp; // Assign the stored value to indexB
    }

    // Main method to test the Shaker Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 64, 34, 25, 12, 22, 11, 90 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Shaker Sort

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

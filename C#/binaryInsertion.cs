using System;

class BinaryInsertionSort
{
    // Method to perform binary insertion sort
    public static void Sort(int[] array)
    {
        // Iterate through the array starting from the second element
        for (int i = 1; i < array.Length; i++)
        {
            // Store the current element to be inserted
            int key = array[i];
            // Find the index where the key should be inserted using binary search
            int index = FindInsertPosition(array, key, 0, i - 1);

            // Move all elements after index to one position ahead
            for (int j = i - 1; j >= index; j--)
            {
                array[j + 1] = array[j];
            }

            // Insert the key at its correct position
            array[index] = key;
        }
    }

    // Method to perform binary search to find the correct position for insertion
    private static int FindInsertPosition(int[] array, int key, int low, int high)
    {
        while (low <= high)
        {
            // Calculate the mid index
            int mid = low + (high - low) / 2;

            // If key is less than the mid element, search in the left half
            if (key < array[mid])
            {
                high = mid - 1;
            }
            // If key is greater than the mid element, search in the right half
            else
            {
                low = mid + 1;
            }
        }

        // Return the position where the key should be inserted
        return low;
    }

    // Main method to test the sorting algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 5, 2, 9, 1, 5, 6 };

        Console.WriteLine("Original array:");
        PrintArray(array);

        // Call the sort method
        Sort(array);

        Console.WriteLine("Sorted array:");
        PrintArray(array);
    }

    // Method to print the array elements
    private static void PrintArray(int[] array)
    {
        foreach (int item in array)
        {
            Console.Write(item + " ");
        }
        Console.WriteLine();
    }
}

using System;

class QuickSort
{
    // Main method to perform Quick Sort
    public static void Sort(int[] array)
    {
        QuickSortRecursive(array, 0, array.Length - 1); // Call the recursive QuickSort function
    }

    // Recursive method to perform Quick Sort
    private static void QuickSortRecursive(int[] array, int low, int high)
    {
        if (low < high) // Check if there are elements to be sorted
        {
            // Partition the array and get the pivot index
            int pivotIndex = Partition(array, low, high);

            // Recursively apply Quick Sort to the left and right sub-arrays
            QuickSortRecursive(array, low, pivotIndex - 1); // Sort the left part
            QuickSortRecursive(array, pivotIndex + 1, high); // Sort the right part
        }
    }

    // Method to partition the array and choose the pivot
    private static int Partition(int[] array, int low, int high)
    {
        int pivot = array[high]; // Choose the last element as pivot
        int i = low - 1; // Index of the smaller element

        // Iterate through the array and rearrange elements based on the pivot
        for (int j = low; j < high; j++)
        {
            // If current element is smaller than or equal to pivot
            if (array[j] <= pivot)
            {
                i++; // Increment index of smaller element
                Swap(array, i, j); // Swap the elements
            }
        }

        // Swap the pivot element with the element at index i + 1
        Swap(array, i + 1, high);
        return i + 1; // Return the partitioning index
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA]; // Store the value at indexA
        array[indexA] = array[indexB]; // Move the value at indexB to indexA
        array[indexB] = temp; // Assign the stored value to indexB
    }

    // Main method to test the Quick Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 64, 34, 25, 12, 22, 11, 90 };

        Console.WriteLine("Original array:");
        PrintArray(array); // Print the original array

        // Call the sort method
        Sort(array); // Sort the array using Quick Sort

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

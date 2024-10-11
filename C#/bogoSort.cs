using System;

class BogoSort
{
    // Method to perform Bogo Sort
    public static void Sort(int[] array)
    {
        // Continue shuffling the array until it is sorted
        while (!IsSorted(array))
        {
            Shuffle(array);
        }
    }

    // Method to check if the array is sorted
    private static bool IsSorted(int[] array)
    {
        // Iterate through the array and check if each element is less than or equal to the next
        for (int i = 0; i < array.Length - 1; i++)
        {
            if (array[i] > array[i + 1])
            {
                return false; // If any element is greater than the next, the array is not sorted
            }
        }
        return true; // If all elements are in order, return true
    }

    // Method to shuffle the elements of the array randomly
    private static void Shuffle(int[] array)
    {
        Random random = new Random(); // Create a new instance of Random

        // Iterate through the array and swap each element with a randomly chosen one
        for (int i = 0; i < array.Length; i++)
        {
            // Generate a random index to swap with
            int randomIndex = random.Next(0, array.Length);
            // Swap the elements at index i and randomIndex
            Swap(array, i, randomIndex);
        }
    }

    // Method to swap two elements in the array
    private static void Swap(int[] array, int indexA, int indexB)
    {
        int temp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = temp;
    }

    // Main method to test the Bogo Sort algorithm
    static void Main()
    {
        // Example array to be sorted
        int[] array = { 3, 2, 5, 1, 4 };

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

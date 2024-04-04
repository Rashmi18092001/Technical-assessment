**Choice Techlabs Technical Assessment**
1)	Binary search – implement the binary search algorithm to find the index of a given element in a sorted array. If the element is not present, return -1.
   In this program, to find the number the provided array is first sorted using sort method.
   Then it is divided into two parts, left and right finding middle element using floor method.
   First comapared middle element with the number to find in array, if found then print index number.
   If not, procedding to left part of divided array. If found then print its index number.
   If not, procedding to right part of the array. If found then print its index number.
   If the number is not found in the array, it will return -1.

   Output: 
   
   ![Binary Search](https://github.com/Rashmi18092001/Technical-assessment/assets/117255309/d9e6da0b-a5e4-429e-ae34-b64431e089b0)

2)	Write a function to reverse a string without using any built-in reverse function.
   In this program, an empty string is defined which will store the reversed string.
   In the function the for loop is used to iterate in the reverse order of the string. It will store the letters in order in the variable which is declared previously.
   Then the variable is returned from the function.
   Function is called provided with the string to reverse.

   Output:
   
   ![Reverse String](https://github.com/Rashmi18092001/Technical-assessment/assets/117255309/254c054e-44e5-468b-8c06-5fcc3efa3759)

3)	FizzBuzz: A classic question to test programming logic. Write a program that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. For numbers that are multiples of both three and five, print “FizzBuzz”.
   In this program a function is made which will iterate 100 times to print numbers from 1 to 100.
   If in the loop, number found is multiple of 3 and 5 it will print "FizzBuzz".
   If the number found is multiple of 3 it will print "Fizz" and if number found is multiple of 5 it will print "Buzz".
   Then calling function to execute.

   Output:
   
   ![FizzBuzz](https://github.com/Rashmi18092001/Technical-assessment/assets/117255309/37cd773c-336d-46ad-8dcd-8328a6f0a5d6)

4) Design a simple class hierarchy for a library management system, including classes for books, authors, and library patrons.
   In this program, first Author class is defined. In author class, constructor is called which stores name and nationality of author.
   Second Book class is defined which stores details of book such as name, author, ISBN, genre.
   Third Patron class is defined which stores details of the person who is borrowing the book such as name of patron and membership they hold.
   Then Library class is defined which includes constructor to store books and patrons details.
   Under Library class some methods are defined to  adda and remove a book as well as add and remove a patron from their arrays.
   Then variables are declared which holds some value to pass as as parameter to the instance of class.
   Library instance of library class is called after adding a book. Also, it is called after removing book to show the library status after removing book by providing ISBN of the book to remove.

   Output:
   Before removing a book and patron
   ![Not Remove](https://github.com/Rashmi18092001/Technical-assessment/assets/117255309/f2cacea1-0a74-4374-844d-96239043b49b)

   After removing a book and patron
   ![Removed](https://github.com/Rashmi18092001/Technical-assessment/assets/117255309/282a1043-ab48-433f-964f-16e35bf63273)


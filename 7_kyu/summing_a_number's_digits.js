/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values. */

function sumDigits(number) {
    let arr = Math.abs(number).toString().split('');
     let sum = 0;
     for(let i =0; i< arr.length; i++){
       sum += parseInt(arr[i]);
     }
     return sum
   }
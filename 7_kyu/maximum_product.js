/* Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array. */

function adjacentElementsProduct(array) {
    let arr=[]
    for(let i =0; i<array.length-1; i++){
      arr.push(array[i]*array[i+1])
      }
    arr.sort((a,b) => b-a)
    return arr[0]
  }
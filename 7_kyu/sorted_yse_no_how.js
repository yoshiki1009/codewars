/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise */

function isSortedAndHow(array) {
    const a = array.join('')
    let ascending = array.sort((a,b) =>a-b)
    const asce = ascending.join('')
    let descending = array.sort((a,b) =>b-a)
    const desce = descending.join('')
      if(a == asce){
         return "yes, ascending"
        }else if(a == desce){
        return"yes, descending"
      }else return 'no'

    }
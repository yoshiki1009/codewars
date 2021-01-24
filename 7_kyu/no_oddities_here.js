/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ) */

function noOdds( values ){
    // Return all non-odd values
    let arr =[]
    for(let i = 0; i < values.length; i++){
      if(values[i]%2 === 0){
        arr.push(values[i])
      }
    }
    return arr
  }

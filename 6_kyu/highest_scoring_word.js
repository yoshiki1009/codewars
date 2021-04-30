/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x){
    let arr = x.split(' '), numArr = []

    for(let i = 0; i < arr.length; i++) {
      let total = 0
      let letters = arr[i].split('')

      for(let j = 0; j < letters.length; j++) {
        total += letters[j].charCodeAt()-96
      }
      numArr.push(total)
    }
  //   console.log(numArr)

    return arr[numArr.indexOf(Math.max.apply(null, numArr))]
  }
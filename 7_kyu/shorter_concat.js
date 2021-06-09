/* Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b */

function shorter_reverse_longer(a, b) {
  return a.length >= b.length
    ? b + a.split('').reverse().join('') + b
    : a + b.split('').reverse().join('') + a;
}

// function shorter_reverse_longer(a,b){
//   let arr =[]
//  if(b.length > a.length){
//    arr.push(a)
//    const reversed = b.split('')
//                      .reverse()
//                      .join('');
//    arr.push(reversed)
//    arr.push(a)
//   return arr.join('')
//  }else{
//    arr.push(b)
//    const reversed = a.split('')
//                     .reverse().join('')
//    arr.push(reversed)
//    arr.push(b)
//    return arr.join('')
//  }
// }

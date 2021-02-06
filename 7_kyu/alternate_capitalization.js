/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';

    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }

    return [a, b];
  };
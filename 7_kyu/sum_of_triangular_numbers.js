/* Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21] */

function sumTriangularNumbers(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++)
    {
    sum += (i*(i+1))/2;
    }
    return sum;
    }
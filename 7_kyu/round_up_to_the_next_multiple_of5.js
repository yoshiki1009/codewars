/* Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc. */

function roundToNext5(n){
    // ...
    if(n%5 == 0){
      return n
    }else if((n+1)%5 == 0){
      return n+1
    }else if((n+2)%5 == 0){
      return n+2
    }else if((n+3)%5 == 0){
      return n+3
    }else {
      return n+4
    }
  }
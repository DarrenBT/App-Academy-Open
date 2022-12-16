/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
function sumToN(num) {
  //base case
  if (num === 0) {
    return 0;
  }
  //if positive, make recursive call with num - 1 until 0
  if (num > 0) {
    return num + sumToN(num - 1);
  } else { // if negative, return null
    return null;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

// Write a binary search solution for an array that can hold all positive integers.
// The only method you have is elementAt(index) which returns the value at that index, or -1.
// In other words, you cannot determine the length. What will you do?


BINARY SEARCH FUNCTION WHERE LENGTH IS KNOWN

function findNum(arr, num){
  var min = 0
  var max = arr.length - 1;
  var guess;
  var temp;
  while (min<=max){
    guess = Math.floor((min+max)/2);
    temp = arr[guess];
    if (temp < num){
      min = guess + 1;
    } else if (temp > num){
      max = guess - 1;
    } else {
      return temp;
    }
  }
}




// function search(num){
//
//   min = 1;
//   max = min*2;
//
//   function elementAt(max) {
//     if (array[max] === undefined) {
//       max = -1
//       return max;
//     } else {
//       max = array[max]
//       return max;
//     }
//   }
//
//   var guess;
//   var temp;
//   while (min<=max){
//     guess = Math.floor((min+max)/2);
//     temp = arr[guess];
//     if (temp < num){
//       min = guess + 1;
//     } else if (temp > num){
//       max = guess - 1;
//     } else {
//       return temp;
//     }
//   }
// }


figure this out. 
start at 1 and double it unitl max is undefined
once it is undefined go back to the last value that was defined as your min use the first undefined as your max
run a binary search until you hone in on the number for max
then run a binary search for the number itslef

//EXERCISE 2
// this solution uses a recursive function to go deep into nested arrays

var myArrTwo = [1, [2, [3, [4, [5]]], 6, [7]]];
var flattened = [];

var flatten = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length) {
        flatten(arr[i]);
      } else {
        flattened.push(arr[i]);
      }
    }
};

flatten(myArrTwo)
console.log(flattened);

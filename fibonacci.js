// Write a function that will print an array of fibonacci numbers to a specified length.
//
// Ex: fibonacci(10)
// output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] - the first 10 numbers of the fibonacci sequence
//
// Hint:
// You may start your array like this:
// arr = [0, 1]


var arr = [];

function fibonacci(count) {
  var start = 1
  arr.push(start)
  var next = start
  arr.push(next)
  for (var i = 2; i <= count; i++){
    arr[i] = arr[i-2] + arr[i-1]
  }
};

fibonacci(10);
// output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] - the first 10 numbers of the fibonacci sequence

console.log(arr)

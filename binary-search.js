

BINARY SEARCH FUNCTION

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







//makes an array
//
// function makeTestCase(size){
//   var arr = [];
//   for (var i = 0; i < size; i ++){
//     arr.push(i+1);
//   }
//   return arr;
// }

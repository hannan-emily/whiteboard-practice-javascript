// array to sort
var numbers = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// this selects the first element as the pivot
function quickSort(array) {
  //stops spliting the array when it is down to 1 element
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  //this runs recursive quicksorts on the samller and smaller arrays while joining them back at the pivot
  return quickSort(lesser).concat(pivot, quickSort(greater));
}


quickSort(numbers);
// [1,2,3,4,5,6,7,8,10]

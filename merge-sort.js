
var numbers = [87,5,78,43,1,74,37,57,44,13,31,62,22]

// this runs second it compares and concats the arrays
function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  //combine the parts
  return result.concat(left.slice(l)).concat(right.slice(r));
}

//this runs first and divides the arrays
function mergeSort(arr){
   if(arr.length <2)
      return arr;
   var mid = Math.floor(arr.length/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send the two halves back into mergesort
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}


mergeSort(numbers);
// [ 1, 5, 13, 22, 31, 37, 43, 44, 57, 62, 74, 78, 87 ]

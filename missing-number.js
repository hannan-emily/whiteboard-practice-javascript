//array size n - n+1
//array starts at 1 not 0
//one number is missing
//array is sorted --> huge clue
//find missing number


var numbers = [1,2,4,5,6]

//binary search method
function find(arr){
  var min = 0;
  var max = arr.length-1;
  var guess = Math.floor((min+max)/2);

  while( (max-min) !== 1 ){
    if(arr[guess] === guess + 1){
      min = guess;
    } else if (arr[guess] === guess + 2){
      max = guess;
    }
    guess = Math.floor( (min+max)/2 );
  }

  return arr[min] + 1;
}

find(numbers);


//brute force method
function find(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== i+1){
      return arr[i]-1;
    }
  }
  return -1; //or it does not exist
}

find(numbers);

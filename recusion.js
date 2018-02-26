//recursion


function recurse(n) {
  if (n<=0){
    return 0;
  } esle {
    return 1 + recurse(n-1);
  }
}




//the "base case" is the one time that the function does not call itself
// the base case here is n<=0


//when reating a recurseive function to solve a problem

//create your base case first
if (n <= 0 ){
  return 0;
}

//create your recursive case
if (n > 0 ){
  return n + the recursive call
}

Create a function that utilizes both

function sum(n){
  if (n <= 0 ){
    return 0;
  } else {
    return n + sum(n+1);
  }
}


//using recursion to test for a pallendrome in a string
//since a string of 0 or 1 is true that is our base case here.

function isPallendrome(str){
  str = str.replace(/\s/g,''); // if you want to remove white spaces from a sentence pallendrome use this regex
  if (str.length < 2) {
    return true;
  } else {
    var first = str.charAt(0);
    var last = str.charAt(str.length - 1);

    if ( first !== last ) {
      return false;
    } else {
      var middle = str.substr(1, str.length - 2);
      return isPallendrome(middle);
    }
  }
}


isPallendrome("tacocat")



// you can also make your string an array and test that way

var str = "tacocat";
// turn the string into an array outside of the recursive function or it will try to make it an array
var arr = str.split('');
//now you can use this array and any array the function returns to run the function again

function isPallendrome(arr){
  if (arr.length < 2) {
    return true;
  } else {
    var first = arr[0];
    var last = arr[arr.length - 1];

    if ( first !== last ) {
      return false;
    } else {
      var middle = arr.slice(1, arr.length - 1); //take off the first and the last each time
      return isPallendrome(middle);
    }
  }
}

isPallendrome(arr)



//exercise:
//accepts a number greater than 0 and returns the nth fibanaci number


function fib(n){
  //base cases
  if (n <= 0){
    return 0;
  } else if (n === 1){
    return 1;
  } else if ( n === 2){
    return 1;
  } else if ( n > 2 ){
    return fib(n-2) + fib(n-1);
  }
}

fib(5)

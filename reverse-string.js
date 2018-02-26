var str = "hello"



//from the back unsing CharAt instead of an Array

function reverse(str){
  var newString= '';
  for (var i = str.length-1; i >= 0; i--){
    newString = newString + str.charAt(i)
  }
  return newString;
};



//from the front

function reverse(str){
  var newString = '';
  for (var i = 0; i <= str.length; i++){
    newString = newString + str.charAt(str.length-i)
  }
  return newString;
}




//Using Arrays

function reverseString(str){
  var tempArray = str.split("");
  var revArray = [];
  for(var i = tempArray.length; i >=0; i--){
    revArray.push(tempArray[i]);
  }
  var newString = revArray.join("");
  return newString;
}

reverseString("Lauren is a developer now!");

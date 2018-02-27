//EXERCISE 1

//PART 1
//this is a solution using loops

var myArr = [1, 2,[3, 4], [5, 6], 7];
//flatten this array to [1,2,3,4,5,6,7]


var flattened = [];


var flatten = function(myArr) {
    for (var i = 0; i < myArr.length; i++) {
      if (myArr[i].length) {
        for (var j = 0; j < myArr[i].length; j++) {
          flattened.push(myArr[i][j]);
        }
      } else {
      flattened.push(myArr[i]);
    }
  }
};

flatten(myArr);
console.log(flattened);
//output: [1, 2, 3, 4, 5, 6, 7]




//PART 2
//this is a solution using reduce

var myArr = [1, 2,[3, 4], [5, 6], 7];
//flatten this array to [1,2,3,4,5,6,7]

var myArr = [1, 2,[3, 4], [5, 6], 7].reduce(function(a, b) {
  return a.concat(b);
}, []);


console.log(myArr);
//output: [1, 2, 3, 4, 5, 6, 7]

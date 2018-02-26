
//counting sort

function countLetters(str) {
  var counts = {};
  var arr = str.split('');
  arr.forEach(function(item) {
    if (counts.hasOwnProperty(item)) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  });
  return counts;
}
console.log(countLetters("A man a plan a canal panama"));

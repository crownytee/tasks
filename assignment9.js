// create a function that will take a number argument as to the amount
// of element that should be in the array returned.

function myNumber(num) {
  var array = [];
  for (i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
}
console.log(myNumber(10));

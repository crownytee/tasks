// Create a function that takes in 2 arguments.
// The first argument is an array and the second argument
// takes in a value. The function should push whatever
// value from the 2nd arguments into the array and return
// the modified array.

function myArray(arg1, arg2) {
  arg1.push(arg2);
  return arg1;
}
console.log(myArray([1, 2, 3, 4], 5));

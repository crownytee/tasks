// Create a function that takes in an array of numbers.
// The function should multiply all elements of the array by
// 2 and return the modified array

function multiplyAll(arr) {
  var myArray = [];
  var product = 2;
  for (i = 0; i < arr.length; i++) {
    myArray.push(product * arr[i]);
  }
  return myArray;
}
console.log(multiplyAll([1, 2, 3, 4]));

// function multiplyAll(arr) {
//     var myArray = [];
//     for (i = 0; i < arr; i++) {
//         myArray.push(i * 2);
//     }
//     return myArray;
// }
// console.log(multiplyAll(5));

// There are two arrays with individual values, write a JavaScript function
// to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var array3 = [];
function SumTwoArrays() {
  for (var i = 0; i < array2.length; i++) {
    if (array1[i] == undefined) {
      array1[i] = 0;
    }
    var sum = array1[i] + array2[i];
    array3.push(sum);
  }
  //array3.push(sum[i]);
  return array3;
}
console.log(SumTwoArrays());

// var total = 0;
// function getSum(num) {
//   for (var i = 0; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(getSum(3));

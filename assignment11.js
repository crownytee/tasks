// Write a function that takes one parameter (a whole number/integer)
// and checks if numbers from 1 to the given parameter (inclusive) are
//divisible by 2,3,5 while replacing with the appropriate words as specified below.

// Numbers divisible by 2 are replaced by "yu"
// Numbers divisible by 3 are replaced by "gi"
// Numbers divisible by 5 are replaced by "oh"
// Numbers are unchanged if not divisible by any of the above

// If a number is divisible by more than one of the above, replace
//and join the words representing their divisors, separating by hyphen (-).

// NB: "divisible" in this case means no remainder after division.

// Return an array containing all numbers from 1 to the passed
//argument(inclusive) where all divisible numbers have been replaced as specified above.

//  	Call the function and pass 100 as an argument.

// Call the function and pass it a random number of your choice
// Examples:
// 4 is only divisible by 2. It would be replaced by "yu"
// 6 is divisible by 2 and 3. It would be replaced by "yu-gi"
// 30 is divisible by 2,3,and 5, so it would be replaced by "yu-gi-oh"
// 49 is not divisible by 2,3 or 5

function divisibleNumber(wholeNumber) {
  var result = " ";
  var numberArray = [];
  for (var i = 1; i <= wholeNumber; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      result = "yu-gi-oh";
    } else if (i % 3 == 0 && i % 5 == 0) {
      result = "gi-oh";
    } else if (i % 2 == 0 && i % 5 == 0) {
      result = "yu-oh";
    } else if (i % 2 == 0 && i % 3 == 0) {
      result = "yu-gi";
    } else if (i % 5 == 0) {
      result = "oh";
    } else if (i % 3 == 0) {
      result = "gi";
    } else if (i % 2 == 0) {
      result = "yu";
    } else {
      result = i;
    }
    numberArray.push(result);
  }
  return numberArray;
}
console.log(divisibleNumber(30));

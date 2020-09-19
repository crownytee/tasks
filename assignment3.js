// Create a function that takes in 2 arguments which are numbers.
// If the first argument is greater than the 2nd, 
// it should return a string 'First number is greater than second number'.
// Else if the second argument is greater than the 1st, it should return a string 
// 'Second number is greater than the first number'. 
// Else it should return a string 'The numbers are the same'

function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber){
        return "First number is greater than second number";
    } else if (secondNumber > firstNumber) {
        return "Second number is greater than first number";
    } else {
        return "The numbers are the same" 
    }
}
console.log(compareNumbers(2, 6));

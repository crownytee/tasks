// Create a function that takes in 1 argument which is a string.
// If the string length is greater than or equal to 5, return the string 
// 'This word is long'. If the string length is lesser than 5, 
// return the string 'This word is short'

function wordChecker(word) {
    if (word.length >= 5) {
        return "The word is long";    
    } 
    if (word.length < 5) {
        return "The word is Short"; 
    }
}
console.log(wordChecker("Mentorship"));

function wordChecker(word) {
    if (word.length >= 5) {
        return "The word is long";    
    } 
    return "The word is Short"; 
} 
console.log(wordChecker("Mentorship"));

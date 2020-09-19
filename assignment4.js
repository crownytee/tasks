// Create a function that takes in 2 arguments. 
// The first argument is the name and 2nd argument is the age. 
// This function should return a string that interpolates the 2 arguments in such a way 'The name of the user is __ and their age is ___'

// e.g. Arguments are Shehu and 23. Result: 
// The name of the user is Shehu and their age is 23

function profileInfo(name, age) {
    return "The name of the user is " + name + ", and their age is " + age + ".";
}
console.log(profileInfo("Shehu", 23));

function profileInfo(name, age) {
    var nameSentence = "The name of the user is ";
    var ageSentence = ", and their age is ";
    return nameSentence + name + ageSentence + age + ".";  
}
console.log(profileInfo("Shehu", 23));

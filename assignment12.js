// Given the array color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// Write a JavaScript function to print to console the colors in the following way:
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
function mycolor() {
  for (var i = 0; i < color.length; i++) {
    if (color[i] == "Blue") {
      console.log("1st choice is Blue");
    } else if (color[i] == "Green") {
      console.log("2nd choice is Green");
    } else if (color[i] == "Red") {
      console.log("3rd choice is Red");
    } else if (color[i] == "Orange") {
      console.log("4th choice is Orange");
    } else if (color[i] == "Violet") {
      console.log("5th choice is Violet");
    } else if (color[i] == "Indigo") {
      console.log("6th choice is Indigo");
    } else {
      console.log("7th choice is Yellow");
    }
  }
}
mycolor();

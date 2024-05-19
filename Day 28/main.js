"use strict";
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
// find the lenght of string
function findTheLenght(num) {
    return num.length;
}
console.log(findTheLenght("MuhammadTahir"));
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// convert to uppercase and lowercase
function myName(name) {
    return name.toUpperCase() + "\n" + name.toLowerCase();
}
console.log(myName("Muhammad Hassan"));
console.log(myName("Ayeisha Tahir"));
function convertCase(name) {
    let upperStr = name.toUpperCase();
    let lowerStr = name.toLowerCase();
    console.log("Upppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Muhammad Ilyas");
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces 
// all instances of the word "JavaScript" with "TypeScript".
// Return the modified sentence.
function replaceText(name) {
    return name.replace("JavaScript", "TypeScript");
}
console.log(replaceText("JavaScript is a programming language!"));

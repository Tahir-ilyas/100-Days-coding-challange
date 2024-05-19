// Question 85: Finding the Position of a Substring: Write a function that locates the 
// first occurrence of the word "code" within any given string and returns its position.
// finiding position of a substring
function findingPosition(name) {
    let position = name.indexOf("Typescript");
    console.log(position);
}
findingPosition("I love Typescript");
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present 
// in a given string. It should return true if found, otherwise false.
// checking for text presence
function checkingThePresence(name) {
    return name.includes("Typescript");
}
console.log(checkingThePresence("I love typescript!"));
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// extracting a substring
function extractingSubstring(name) {
    return name.substring(0, 10);
}
console.log(extractingSubstring("hello, typescript"));
export {};

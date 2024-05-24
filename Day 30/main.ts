// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as 
// input and returns the number rounded to the nearest integer.

// Rounding the nearest integer
function roundTONearestInteger(num: number): number {
  return Math.round(num);
}
// round the decimal number
console.log(roundTONearestInteger(4.8));
console.log(roundTONearestInteger(7.4));

// Question 89: Converting Strings to Numbers: Create a function that takes a 
// string representing a number (like "123") and converts it into an actual number type.

// convert string to number
function convertStringToNumber(str: string): number {
    return parseFloat(str);
}
// example: turning a nmeric string into a real number 
console.log(convertStringToNumber("654.25"));
console.log(convertStringToNumber("150"));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's 
// value is NaN (Not a Number) and return a boolean result.

// check if a value is NaN
function checkIfValueIsNaN(value: any): boolean {
    return isNaN(value);
}
// example: checking different value
console.log(checkIfValueIsNaN(NaN));
console.log(checkIfValueIsNaN(75));



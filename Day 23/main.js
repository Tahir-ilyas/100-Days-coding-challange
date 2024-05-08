// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that 
// represents a number (e.g., "5"). Return their sum as a number. 
// arithmatic mixed types
function arithmaticMixedType(number1, numberString) {
    return number1 + parseInt(numberString);
}
console.log(arithmaticMixedType(12, "5"));
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.
// multiplying decimals
function multiplyingDecimals(number1, number2) {
    return Math.round((number1 * number2) * 100) / 100;
}
console.log(multiplyingDecimals(10.5, 6.5));
//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns 
//both the quotient and the remainder. Use an object to return both values.
// dividing and finding the remainder
function dividingFindingReminder(divident, divisor) {
    // calculate qoutient and reminder
    let qoutient = Math.floor(divident / divisor);
    let reminder = divident % divisor;
    return { qoutient, reminder };
}
console.log(dividingFindingReminder(15, 2));
export {};

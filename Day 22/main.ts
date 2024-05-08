// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
//  if provided with "Age: " and 30, it should give back "Age: 30".

// combine string and number
function combineString(age:string,number:number):string{
    return age + number;
}
console.log(combineString("age: ", 30))

// ?Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing
//  them using the % sign. For example, remainder(5, 2) should give 1.

// determine the remainder
function remainder(number:number,number2:number):number{
    return number % number2
}
console.log(remainder(5,2))
console.log(remainder(10,4))
console.log(remainder(42, 5))

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. 
// It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

// logical and verification
function checkBothTrue(value1:boolean,value2:boolean):boolean{
    return value1 && value2
}
console.log(checkBothTrue(true, false))
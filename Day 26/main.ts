// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, 
// adds them together, and returns the result. Show how you can call this function and log the result.

// function parameters return

function addNumber(a:number,b:number):number {
    // caculate the sum of a and b
    return a + b;
    
}
// calling the function with two numbers
console.log(addNumber(5, 10));

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello.
//  If no name is given, it should greet an anonymous user.

// function with default parameter
function greet(name:string ="anonymouse"): string{
    return `Hello ${name}`;
}
console.log(greet());
console.log(greet("Muhammad Tahir"))

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each 
// that performs the same task, such as squaring a number.

// compare function declaration of squaring number
function squareDeclaration(num:number):number{
    return num * num;
}
// compare function expression of squaring number
const squareExpression = function(num:number):number{
    return num * num;
}
 console.log(squareDeclaration(5));
 console.log(squareExpression(4));   


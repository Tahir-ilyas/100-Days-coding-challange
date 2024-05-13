// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. 
// Then, update its value within the same function and log both the initial and updated values.

function updateVariable() {
    let myNumber = 15
    console.log(myNumber);
    // update the value
    myNumber = 25
    console.log(myNumber);

    }
    updateVariable()

    // Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, 
    // then swap their values so that a becomes 10 and b becomes 5.

 function swapValues() {
    let a = 5 , b = 10;
    console.log("Before swap: a = ", a, "b" , b );

    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a = ", a, "b", b);
    
 }
  swapValues()  

//   Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. 
// Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.


// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);

    x += 2;
    console.log("x after addition:", x); // x is now 6
    x -= 2;
    console.log("after subtraction :", x ); // x is now 4
    x *= 4;
    console.log("after multiplication:", x); // x is now 16
    x /= 8;
    console.log("after division:", x); // x is now 2
    }
    useCompoundOperators()
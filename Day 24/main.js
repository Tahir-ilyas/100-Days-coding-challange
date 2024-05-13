"use strict";
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
//  Explain how the let keyword affects the visibility of the loop variable.
Object.defineProperty(exports, "__esModule", { value: true });
function printNmber() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNmber();
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. 
// Try to reassign a const-declared variable and catch the error.
// compare let and const
let studentName = "Muhammad thair";
console.log(studentName);
studentName = "Muhammad Ali";
console.log(studentName);
// const the reassign the data
const myData = "Pakistan won the match";
console.log(myData);
// myData = "Pakistan lost the match";
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. 
// Show how variables declared inside the block are not accessible outside of it.
const myBioData = () => {
    let myName = "Muhammad Hassan";
    console.log(myName);
};
myBioData();
{
    let myHistory = "My name is Muhmmad Tahir and my age is 35 years old";
    const myEducation = "I am a student of Software Engineering";
    console.log(myHistory);
    console.log(myEducation);
}
// console.log(myHistory); // this will be fail
// console.log(myEducation); // this will be fail

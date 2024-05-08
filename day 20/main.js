//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// average calculator
let scores = [10, 22, 38, 45, 58, 62, 75, 90];
let average = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log(average);
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any 
// other number you give them later.add a special num
function addValue(adders) {
    return (num) => num + adders;
}
let addFive = addValue(5);
console.log(addFive(10));
console.log(addFive(20));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// creat user profile
function userProfile(name, age) {
    return (`my name is ${name} and age is ${age}`);
}
console.log(userProfile("Muhammad Tahir", 39));
export {};

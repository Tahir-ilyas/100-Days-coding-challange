// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby 
// with a statement saying you enjoy that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs 
// gracefully.

function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}.`);
    })
}
logHobbies("Cricket","Footbal","Reading Book","General knowledge");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include
// at least three different activities.

// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that 
//incorporate variables and expressions.

let activities: string = `I have completed the my first project that day is my ideal day.
1: I am palying cricket daily in the morning.
2: I am studing in Governor House.
3: I read daily news paper at the time of Break fast. `;
console.log(activities)

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

function calculateArea (width:number,height:number):number{

    return width * height
}
const width = 10
const height = 5
const area = calculateArea(width,height);
console.log("The area of rectangle is width", width,"and height is",height,"area is",area);
 
// Refactored into an arrow function
let calculateAreaArrow = (width:number, height:number):number => width * height
 console.log(calculateAreaArrow(5,8));

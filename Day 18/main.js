//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other 
//key features like how much storage it has, the size of its screen, and how long its battery lasts.
function smartphone(brand, model, storage, size, screen, battery) {
    return {
        brand,
        model,
        storage,
        size,
        screen,
        battery
    };
}
const features = smartphone("Samsung", "S21", "128GB", "6.7\"", "6.7\"", "4hrs");
console.log(features);
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let programmer = {
    languages: ["JavaScript", "Python", "Laraval"],
    tools: ["VS Code", "Git", "GitHub"],
    frameworks: ["React", "next.js", "Angular"]
};
let { languages, tools, frameworks } = programmer;
console.log(`The best programming languages are ${languages[0]}, ${languages[1]}, and ${languages[2]}. 
 and tolls are ${tools[0]}, ${tools[1]},${tools[2]}. and frameworks are ${frameworks[0]}, ${frameworks[1]}, ${frameworks[2]}.`);
//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at 
//that moment, like adjusting labels based on user choices.
// way for flexible object
function flexibleObjectKeys(key, value) {
    let dynamicObject = {};
    // using dynamic object to set key value
    dynamicObject[key] = value;
    return dynamicObject;
}
//using flexible list setup for use preference
let flexibleObject = flexibleObjectKeys("theme", "Dark");
console.log(flexibleObject);
export {};

"use strict";
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties 
// for make, model, and year. Then, show how you can access the model property of the car.
// creating and accessing object properties:
let car = {
    make: "suzuki",
    model: "swift",
    year: 2022
};
// accessing the model property of the car:
console.log(`the car make ${car.make} and model is ${car.model} and year ${car.year} `);
console.log(car.model);
// Question 80: Updating Object Properties: Add a property named color to the existing car object, 
// and then update the year property to 2021. Show how to perform these operations.
// updating object properties:
let car1 = {
    make: "suzuki",
    model: "swift",
    year: 2022,
    color: "White",
};
// update year property and color
car1.color = "White";
car1.year = 2023;
console.log(car1);
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
// iterating over object properties:
function objectProperties(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
    ;
}
;
objectProperties({ make: "suzuki", model: "swift", year: 2023, color: "white" });
function myBioData(name) {
    for (let data in name) {
        console.log(`${data}: ${name[data]}`);
    }
}
myBioData({ name: "muhammad Tahir", age: 35, gender: "male", education: "Graduation", hobby: "Cricket" });

// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

// Create an enum for vehicle categories
enum VehicleCategory {
    Car,
    Truck,
    Motorcycle
}
console.log(VehicleCategory);

// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes 
// they're taking, and then fill in this blueprint with an example student.

// Create a blueprint for student information
interface Student {
    name: string;
    age: number;
    classes: string[];
}
// Fill in the blueprint with an example student
const information:Student ={
    name:"Muhammad Tahir",
    age:35,
    classes:["Typescrit","next.js","Angular"]
}
console.log(information);
console.log(information.classes[0]);
console.log(information.classes[1]);
console.log(information.classes[2]);

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// called Shape, that describes the shape's properties.

// creat shape shifter
type Shape = Circle | Rectangle;
interface Circle {
    type: 'circle';
    radius: number;
}

interface Rectangle {
    type: 'rectangle';
    width: number;
    height: number;
}
const circle:Circle = { type:"circle", radius:5}
const rectangle:Rectangle = { type:"rectangle", width:5, height:10}
console.log(circle);
console.log(rectangle);


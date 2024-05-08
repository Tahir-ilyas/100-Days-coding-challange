// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Create an enum for vehicle categories
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory[VehicleCategory["Car"] = 0] = "Car";
    VehicleCategory[VehicleCategory["Truck"] = 1] = "Truck";
    VehicleCategory[VehicleCategory["Motorcycle"] = 2] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
console.log(VehicleCategory);
// Fill in the blueprint with an example student
const information = {
    name: "Muhammad Tahir",
    age: 35,
    classes: ["Typescrit", "next.js", "Angular"]
};
console.log(information);
console.log(information.classes[0]);
console.log(information.classes[1]);
console.log(information.classes[2]);
const circle = { type: "circle", radius: 5 };
const rectangle = { type: "rectangle", width: 5, height: 10 };
console.log(circle);
console.log(rectangle);
export {};

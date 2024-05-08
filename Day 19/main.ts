//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// start with a list number
let doubleNumbers = [1, 2, 3, 4, 5, 6, 7, 8,];
// double each number in the list
doubleNumbers = doubleNumbers.map(a => a * 2);
// print the new list
console.log(doubleNumbers);

//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// start with a mixed list
let mixedList =[1,"Karachi", 2 ,"Islamabad","Lahore", false, "Pakistan","Canada", 12345 ,"Dubai"]
// filter the list to only have words
mixedList = mixedList.filter(a => typeof a === "string");
// print the new list
console.log(mixedList);

//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [75, 82, 65, 95, 52, 60];
// calculate the average grade
let averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
console.log(averageGrade);


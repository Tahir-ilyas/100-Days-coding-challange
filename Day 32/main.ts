// Question 94: Use the .map() method to create a new array that contains the length 
// of each word from an array of words.

// creat a new array 
let lengthOfEachWord: string [] =['Karachi','Islamabad','Fasislabad','Abtabad']
// use the .map() method to create a new array that contains the length of each word
let length: number[] =lengthOfEachWord.map(lengthOfEachWord => lengthOfEachWord.length)
console.log(length)

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// creat a function using filter method
function greaterThan10(num: number[]){
    return num.filter(num => num > 10)
}
// call the function
let num: number[] = [1, 5, 8, 10, 15, 20]
console.log(greaterThan10(num))

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// calculate the sum of all numbers
let demonstrate: number []=[5, 10, 20, 35, 40, 50, 65,]
const sumOfNumbers = demonstrate.reduce((addition , current)=> addition + current, 0,);
console.log(sumOfNumbers)


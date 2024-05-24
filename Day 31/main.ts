// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let fruitsName: string [] = ['Apple','Banana','Strawbery']
fruitsName.push('Orange')
console.log(fruitsName)

// Question 92: Write a function to remove the last element from an array and return the removed element.

// remove element from array
function removeLastElement<T>(arr:T[]):T| undefined {
  return arr.pop();
}
const fruitsName2: string [] = ['Apple','Banana','Strawbery']
console.log(removeLastElement(fruitsName2))
console.log(fruitsName2)

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// find index of element

function replaceBananaWithmango(fruit:string[]):void{
    const index = fruit.indexOf('Banana');
    if(index !== -1){
        fruit[index] = 'Mango';
    }
}
const fruitsName3: string []=['Apple','Banana','Strawbery']
replaceBananaWithmango(fruitsName3)
console.log(fruitsName3)




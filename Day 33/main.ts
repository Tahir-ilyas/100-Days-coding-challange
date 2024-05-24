// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// current date in format
function currentDateFormated():string{
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
    }
    console.log(currentDateFormated());

    // Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

    // calculate how many days are left new year
    function daysUntillNewYear():number{
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1)
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntillNewYear()  +   "days untill new year!")

// Question 99: Generate a date object representing your next birthday and log it to the console.

// Generate a date representing your next birthday

function representingNextBirthDay(month:number,day:number):Date{
    const today = new Date();
    let year = today.getFullYear()
    const birthday = new Date(year, month -1, day);
    if(birthday < today){
        birthday.setFullYear(year +1);
    }
    return birthday
}
const nextBirthDay = representingNextBirthDay(12, 25);
console.log("Next birthDay on:", nextBirthDay.toLocaleDateString());




    
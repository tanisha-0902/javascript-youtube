const score = 400
const balance = new Number(100)
console.log(score);//400
console.log(balance);//[Number:100]
console.log(balance.toString());//"100"
//now the number is string so now you can use any string methods to it
console.log(balance.toFixed(2));//to fix the number of decimal numbers

const hundreds = 1000000
console.log(hundreds.toLocaleString());// add commas//us standard
console.log(hundreds.toLocaleString('en-IN'))//acc to indian number system

//++++++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math); // Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5 // changes to +ve
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10 + 1); // random number between 1 and 10
console.log(Math.round(4.6)); // 5 // rounds to nearest integer
console.log(Math.ceil(4.2)); // 5 // rounds up
console.log(Math.floor(4.8)); // 4 // rounds down

//random numb btw an interval
const min = 5;
const max = 15;
console.log(Math.random() * (max - min + 1) + min);
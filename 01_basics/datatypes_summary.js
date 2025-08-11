// #PRIMITIVE DATA TYPES
// 7 categories
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. undefined
// 6. null
// 7. Symbol//used to make any value unique


//REFERENCE DATA TYPES(NON-PRIMITIVE)
// 1. Objects
// 2. Array
// 3. Functions

//in javascript we dont need to define data types explicitly
//it is dynamically typed language

//Primitives

const score=100
const scoreValue=100.3
const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id === anotherId); // false, because symbols are unique 

const bigNumber=34525235842967289995719n//n is used to define BigInt


//Non-Primitives
const heros=["Shiva","Krishna","Rama"]
let myObj={
    name:"Hitesh",
    age:30,   
}
//function declaration
const myFunction=function(){
    console.log("Hello World");
}

//how to find data type
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean  
console.log(typeof outsideTemp); // object (null is considered an object in JS)
console.log(typeof userEmail); // undefined
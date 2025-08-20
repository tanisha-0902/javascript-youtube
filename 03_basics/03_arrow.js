const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function()
    {
        console.log(`Welcome ${this.username} to our website.`)//this keyword is used to access variables in same scope
    }
}
user.welcomeMessage()//Welcome hitesh to our website.
user.username="sam"//here we changed the variable name so this will reflect in the welcome message
user.welcomeMessage()//Welcome sam to our website.

console.log(this);//{}

function chai()
{
    let username="hitesh"
    console.log(this.username);//undefined because this is not defined in global scope
}
chai()//undefined


const chai = function()
{
    let username="hitesh"
    console.log(this.username);//undefined because this is not defined in global scope
}
chai()//undefined

// right way
const chai2 = () => {
    let username="hitesh"
    console.log(this.username);//undefined because this is not defined in global scope
}
chai2()//undefined

//arrow function
const addtwo =(num1,num2)=>{//basic
    return num1+num2//curly braces be return keyword likhna padega
}
console.log(addtwo(5,10))

//const addtwo2=(num1,num2)=> num1+num2//implicit return 
const addtwo2=(num1,num2)=> (num1+num2)//parenthesis me return nahi likhna 

//for arrays
const myArray=[1,2,3,4,5]
myArray.forEach((element) => {
    console.log(element);
});
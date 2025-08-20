

function sayMyName() {//function defination
console.log("T")
console.log("A")
console.log("N")
console.log("I")
console.log("S")
console.log("H")
console.log("A")
}

//sayMyName()//function calling

//function to add two numbers

function addTwoNumbers(num1, num2) {//num1 and num2 are parameters
    console.log(num1+num2)
}
addTwoNumbers(3,7)//passing arguments is must// 3,7 are arguments
addTwoNumbers(3,"4")//will also take 3 as string
addTwoNumbers(3,"a")//problem may occur here
addTwoNumbers(3,null);

//can be stored in variale also
const result=addTwoNumbers(3,5)
console.log("result:", result)//undefined//the console log in the funtion gives the ans 8 but it doesent returns the value to result
//other ways

function addTwoNumbers2(num1, num2) {
    let result=num1+num2
    return result; //returning the value
    return num1+num2//simplest way
    console.log("This will not be executed") //this will not be executed because return will exit the function
}

function loginUserMessage(username="sam") {// here we gave a default value so that no error occurs if username is not provided means we dont get undefined
    if(username===undefined)// or you can write !username
    {
        console.log("Username is required");
        return;
    }
    return "User " + username + " logged in successfully.";
    return  `${username} logged in successfully.  `//alternative
}
console.log(loginUserMessage("Tanisha"))
// if you dont pass a username then it will return undefined

//functions for when you dont know the number of argumets

function calculateCartPrice(...num1)//... refers rest or spread operator// rest operator converts all the values to an array
{
    return num1
}
console.log(calculateCartPrice(100,400,300))//[100,400,300]
//creating an object to pass it in the function
const user={
    username:"tanisha",
    price:199
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({ username: "john", price: 299 });//directly passing an object as an argument

//passing arrays
const myNewArray = [1, 2, 3, 4, 5];
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 2
console.log(returnSecondValue([10, 20, 30])); // 20
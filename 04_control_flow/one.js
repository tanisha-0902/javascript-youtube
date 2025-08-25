// if statement
if(condition==true)
{
    // code to be executed if condition is true
}
if(false)
{
    // code to be executed if condition is false
}
//examples

const isUserLoggedIn=true;
const temperature=41
if(temperature<50)
{
    console.log("less than 50");
}
else{
console.log("temperature is greater than 50");
}
if(isUserLoggedIn)
{

}
if(2=="2")
{
    console.log(executed)//will give ans
}
if(2==="2")
{
    console.log(executed)//will not print execute because int is not string
}

// <, >, <=, >=, ==, !=, ===(checks type also), !==

//score of varis completely global
const score=200
if(score>100)
{
    const power="fly"
    console.log(`user power: ${power}`);
}

//short hand notation
const balance=1000
if(balance>500) console.log("you are rich");//you can write only one line

if(balance>500){
    console.log("you are rich");
}
else if(balance>200){
    console.log("you are middle class");
}
else{
    console.log("you are poor");
}

const UserLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(UserLoggedIn && debitCard)//true
{
    console.log("Allow user to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
let a=300//global scope

if(true)//block scope
{
let a=10
const b=20
var c=30
//console.log("INNER",a);//10
}
console.log(a); // 300 //error because a is defined inside if block
//console.log(b); // 20 //error because b is defined inside if block
//console.log(c); // 30 // no error because c is defined with var(var not used in block scope)
//jitni baar curly braces aayega utni baar scope alag hoga


//nested scope
function one()
{
    const username="tanisha"
    function two()//two can access variables of one i.e username
    {
        const website="youtube"
        console.log(username)
    }
    //console.log(website)//one cannot access variables of two
    two()//returns username
}
one()// if two is not called then username will not be logged

if(true)
{
    const username="tanisha"
    if(username==="tanisha")
    {
        const website="youtube"
        //console.log(username+website) 
    }
    //console.log(website)//error
}
//console.log(username) //error because username is defined inside if block

//+++++++++++++++interesting++++++++++++

function addone(value)
{
    return value+1
}
addone(5)//can be written above function

const addtwo=function(num)//can be called expression also but is also a function
{
    return num+2
}
addtwo(5)//cannot be written above function because it is defined as a function expression(variable) and not a function declaration
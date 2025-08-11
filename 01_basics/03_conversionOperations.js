let score="33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNUmber=Number(score)
console.log(typeof valueInNUmber)
console.log(valueInNUmber);
//"33"=> 33
//"33abc"= NaN
//null=0
//true=1
//false=0
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1=true
//0=false
//""=false
//"hitesh"=true
let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber)

//*********************operations******************/
let value=3
let negVal=-value
console.log(negVal);


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1="hello"
let str2=" tanisha"
let str3=str1+str2
console.log(str3)

console.log("1"+2);//gives 12
console.log(1+"2");//gives 12
console.log("1"+2+2);//gives 122
console.log(1+2+"2");//gives 32
console.log(+true)//returns 1
console.log(+"")//returns 0
let num1,num2,num3
num1=num2=num3=2+2//canbe written but not good

let counter=100
counter++;//101
++counter;//101 differently
console.log(counter)

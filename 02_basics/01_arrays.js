//array
const myArr=[0,1,2,3,4,5]
//can take different types of datatypes
const myArr2=[0,"1",2,"3",4,"5"]

console.log(myArr[0]);
const arr=new Array(10); //creates an array of 10 undefined elements    
// Array methods
//myArr.push(6); //adds 6 to the end
//myArr.pop(); //removes the last element
//myArr.shift(); //removes the first element
//myArr.unshift(0); //adds 0 to the beginning

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr); // converts array to string

//slice, splice
console.log("A",myArr.slice(0,3));//3 not included 
console.log("B",myArr.splice(0,3));//3 will be included
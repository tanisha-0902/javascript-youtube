//for of
//array specific loops
["","",""]
[{},{},{}]
const arr=[1,2,3,4,5]
for (const element of arr) {
//console.log(element);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()//has unique values//maintains insertion order
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//hasent been added


//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//  for (const [key, value] of myObject) {//not iterateable
//     console.log(key, ':-', value);
    
//  }
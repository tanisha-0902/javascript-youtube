let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // object
let myCreatedDate = new Date(2020, 0, 1);
console.log(myCreatedDate.toDateString());

let date2 = new Date("2020-01-01");
console.log(date2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
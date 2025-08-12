const name = "John";
const repoCount = 50;
//console.log(name + repoCount + " Value");//outdated syntax

console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`);//string interpolation

const gameName = new String("The Last of Us");
console.log(gameName[0]);
console.log(gameName.__proto__); // String.prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne = "   hello world    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://example%20com";
console.log(url.replace('%20', "."));

console.log(url.includes("example")); // true
console.log(url.includes("foo")); // false

//string to array
const stringArray = gameName.split(" ");
console.log(stringArray);

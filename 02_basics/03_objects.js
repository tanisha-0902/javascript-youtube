//you can define objects in JavaScript using object literals or constructors
//not singleton
const mySym=Symbol("key1")//taking a symbol 
const person = {
  name: "John",
  [mySym]:"mykey1",//to represent it as a symbol use square brackets otherwise its type will be string not symbol
  age: 30,
}

console.log(person.name); // John
console.log(person["name"])
console.log(person[mySym])
person.name = "Doe"; // updating property
//Object.freeze(person); // freezing the object//now the changes will not be reflected like it fixes all the values

person.greeting = function() {
  console.log("Hello, my name is " + this.name);
};
console.log(person.greeting()); // Hello, my name is Doe
//other way
person.greeting2 = function() {
  console.log(`Hello, my name is ${this.name}`);
};
console.log(person.greeting2()); // Hello, my name is Doe

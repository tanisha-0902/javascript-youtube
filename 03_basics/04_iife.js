//immediately invoked function expression
//these are used to execute a function immediately after defining it because global scope pollution can cause issues sometimes
(function(){//named iife
    console.log("Hello World");
})();//this is the way use brackets before the function

((name) => {
    console.log(`hello ${name}`);
})("Hitesh");//can be done in arrow function also
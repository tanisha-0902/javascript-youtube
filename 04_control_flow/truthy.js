
const userEmail = []// if there is string then true if empty string then false

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null,undefined

let val1;
// val1 = 5 ?? 10// ans=5
// val1 = null ?? 10// ans=10
// val1 = undefined ?? 15// ans=15
val1 = null ?? 10 ?? 20// ans=10
//if first value is null or undefined then consider first defined value therwise first non-null value


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const marvel_heros =["thor","Iron Man","Hulk"]
const dc_heros =["Batman","Superman","Wonder Woman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); // ["thor","Iron Man","Hulk",["Batman","Superman","Wonder Woman"]]
//this means that the second array will come inside the first

marvel_heros.concat(dc_heros); // this will not change the original array, it will return a new array

const all_heros = [...marvel_heros, ...dc_heros]; // this will merge both arrays into a new array

console.log(Array.isArray("tanisha"))
console.log(Array.from("tanisha"))//changes string to array

let score1=100
let score2=200
let score3=300
//returns a new array from set of elements
console.log(Array.of(score1, score2, score3))
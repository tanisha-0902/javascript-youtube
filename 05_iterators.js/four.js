//for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for in loop used for objects
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//can for in loop be used in array?
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);//prints only keys i.e 0 1 2 3 4
    // console.log(programming[key]);//prints values
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//map is not iterable using for in loop
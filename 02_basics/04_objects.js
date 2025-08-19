//singleton
// You can also define objects using constructors
//Object.create method can also be used
//const tinderUser=new Object()

const tinderUser={}
tinderUser.id=12345
tinderUser.name="John Doe"
tinderUser.age=30
tinderUser.location="New York"

//console.log(tinderUser);
//basic 
//nesting of objects
const regularUser={
    email:"johndoe@example.com",
    fullname:{
        userFullName:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}
// console.log(regularUser.fullname); 
// console.log(regularUser.fullname.userFullName); // John Doe
// console.log(regularUser.fullname?.userFullName.firstname); // John //? is used to check if that objects exists or not
//using key and values
const obj1={1: "one", 2: "two"}
const obj2={3: "three", 4: "four"}

const obj3={obj1,obj2}
const obj4=Object.assign({}, obj1, obj2) // merges obj1 and obj2 into a new object
const obj5={...obj1,...obj2} // another way to merge objects
console.log(obj3);

const users=[
    {
     id: 1,
     name: "John Doe", 
     age: 30
    },
]
users[1].name
console.log(tinderUser);
//printing keys and values
console.log(Object.keys(tinderUser)); // ['id', 'name', 'age', 'location']
console.log(Object.values(tinderUser)); // [12345, 'John Doe', 30, 'New York']
console.log(Object.entries(tinderUser)); // [['id', 12345], ['name', 'John Doe'], ['age', 30], ['location', 'New York']]

//check if some property exists
console.log(tinderUser.hasOwnProperty('name')); // true

//destructure
const course={
    coursename: "JavaScript Basics",
    price:"999",
    courseInstructor:"tanisha"
}
//course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor);
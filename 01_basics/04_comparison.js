console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2 ==1);
console.log(2 != 1);
//comparion with same type
//cant be used but javascript will convert it to integer
console.log("2">1);
console.log("02">1);

console.log(null>0);//false
console.log(null>=0);//true
console.log(null==0);//false

//undefined will always be false
console.log(undefined>0);//false 
console.log(undefined>=0);//false
console.log(undefined==0);//false

// strict check ===
console.log("2" === 2);//false//no conversion
//// Falsey Value 
//// fase, 0, -0 BigInt 0n, "" , null, undefined, NaN  //// Metion these are falsey value other all are truthy value
//// Truthy Value 
//// Mention some truthy value : "0", "false", " ", [], {}, function(){},
//// function(){} : Empty function

const userArr = []
if (userArr.length === 0){
    console.log("Array is empty")
}

const userObj = {}
if (Object.keys(userObj).length === 0){
    console.log("Object is empty")
}

//// Nullish coalescing Operater (??) : null undefined
//// if getting null or undefined with another value then getting anoher value in result
let val1  = 3 ?? 5;
console.log(val1); // 3
let val2  = null ?? 5;
console.log(val2); // 5
let val3  = undefined ?? 5;
console.log(val3); // 5
let val4  = null ?? undefined;
console.log(val4); // undefined
let val5  = null ?? undefined ?? 11;
console.log(val5); // 11

//// Terniary Operater :> consdition ? true : false
// const val = ""; //false
// const val = null; //false
// const val = undefined; //false
// const val = "Ram"; //true
const val = 10; //true

if(val){
    console.log("value is avaiable")
}
else{
    console.log("value is not avaiable")
}

val?console.log("value is here"):console.log("value is not here");


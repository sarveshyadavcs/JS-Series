// Datatype: 2type 
// Primtive  ---- String, Number, Boolean, Null, BigInt, undefined, Symbol 
// NonPrimtive -- Array, Objects, functions


/* Primtive */
// const id1 = Symbol("abc");
// const id2 = Symbol("abc");
// console.log(id1);
// console.log(id2);
// console.log(id1 === id2); //false

// let id = Symbol("id");
// let user = {
//   name: "John",
//   id: 123, // not "id": 123 //id: 123
//   [id]: 123, // not "id": 123  //[Symbol(id)]: 123
// };
// console.log(user);

// const bigNum = 312312431254345232345n; //bigInt
// console.log(bigNum);
// console.log(typeof bigNum);

/* Non Primtive */
//Array 
// const hero = ["ram", "shyam", "narayan"];
// console.log(hero);

// //Object
// let myObj = {name: "Rma", age: 22};
// console.log(myObj)

//function
// const myfunction = function(){
//     return console.log("Hi...")
// }
// myfunction()

// console.log(typeof myfunction);//function


//Official doc url for study purpose
//https://262.ecma-international.org/13.0/#sec-typeof-operator

//Memory for datatype
//Primtive for use Stack: copy value
//Non-Primtive for use Heap: reference value

let myName = "SarvUttam";
let newName = myName; //Copy original value here So that do not change in original value
newName = "SarvGun"
console.log(myName); //SarvUttam
console.log(newName); //SarvGun 

let myStu = ["ram", "kumar", "yadav"];
let newStu = myStu; //reference here So that will change in original value
newStu[0] = "shyam";
console.log(myStu); //[ 'shyam', 'kumar', 'yadav' ]
console.log(newStu); //[ 'shyam', 'kumar', 'yadav' ]


let obj = {name:"Krishna", age:22};
let newObj = obj;
newObj.name = "Kanhai";
console.log(obj); //{ name: 'Kanhai', age: 22 }
console.log(newObj); //{ name: 'Kanhai', age: 22 }
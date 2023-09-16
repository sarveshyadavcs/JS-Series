// Datatype: 2type 
// Primtive  ---- String, Number, Boolean, Null, BigInt, undefined, Symbol 
// NonPrimtive -- Array, Objects, functions


/* Primtive */
const id1 = Symbol("abc");
const id2 = Symbol("abc");
console.log(id1);
console.log(id2);
console.log(id1 === id2); //false

let id = Symbol("id");
let user = {
  name: "John",
  id: 123, // not "id": 123 //id: 123
  [id]: 123, // not "id": 123  //[Symbol(id)]: 123
};
console.log(user);

const bigNum = 312312431254345232345n; //bigInt
console.log(bigNum);
console.log(typeof bigNum);

/* Non Primtive */
//Array 
const hero = ["ram", "shyam", "narayan"];
console.log(hero);

//Object
let myObj = {name: "Rma", age: 22};
console.log(myObj)

//function
const myfunction = function(){
    return console.log("Hi...")
}
myfunction()

console.log(typeof myfunction);//function


//Official doc url for study purpose
//https://262.ecma-international.org/13.0/#sec-typeof-operator
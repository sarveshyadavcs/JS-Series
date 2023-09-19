const mbHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

mbHeros.push(dcHeros);
console.log(mbHeros[3][1]); //flash

// const allHeros = mbHeros.concat(dcHeros); //After push work here mbHeros = ["thor", "ironman", "spiderman",[ 'superman', 'flash', 'batman' ]]
// console.log(allHeros); //So return here a long result: ['thor','ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
//Concat operation
const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const array4 = [array1, array2, array3];
console.log(array4); //[[ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'a', 'b', 'c', 'd', 'e', 'f' ]]
console.log(array4[1]); //[ 'd', 'e', 'f' ]
//spread operater
const array5 = [...array1, ...array2, ...array3];
console.log(array5); //["a","b","c","d","e","f","a","b","c","d","e","f"]
console.log(array5[1]); //b
//Concat operation
console.log(array1.concat(array2, array3)) //["a","b","c","d","e","f","a","b","c","d","e","f"]

//Nested Array
const nstdArray = [1,4,5,6,[3,4,5,[9,5,[3]]]]
const flatArray = nstdArray.flat(Infinity) // Instead of infinity we can pass 1,2,3 or another value as per nested array depth
console.log(flatArray); //[1, 4, 5, 6, 3, 4, 5, 9, 5, 3]


let score1 = 100;
let score2 = 200;
let score3 = 30;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 30 ]

console.log(Array.isArray("Sarvendra")); //false :this is not a array
console.log(Array.from("Sarvendra")); // ['S', 'a', 'r', 'v', 'e', 'n', 'd', 'r', 'a']
console.log(Array.from({name: "Surya"})) //[] :intresting case for interview because need to point key or value for creating array

//Object can cover in array using object method
const obj1 = {name: "Surya", age: 25, address: "noida"}
console.log(Object.keys(obj1)); //[ 'name', 'age', 'address' ]
console.log(Object.values(obj1)); //[ 'Surya', 25, 'noida' ]





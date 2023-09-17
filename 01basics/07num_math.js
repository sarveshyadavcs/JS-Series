const num = 400; // Value getting 400 but it not confirm that it would be always number
console.log(num);

const balance = new Number(4000); //Fixed here value would be number always only will change when perform any operation here.
console.log(balance);

/* Number method avaiable below */
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 4000

console.log(balance.toString().length) //4 because 4000 have 4 char
console.log(balance.toFixed(2)) //
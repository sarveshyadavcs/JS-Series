// const num = 400; // Value getting 400 but it not confirm that it would be always number
// console.log(num);

// const balance = new Number(4000); //Fixed here value would be number always only will change when perform any operation here.
// console.log(balance);

// /* Number method avaiable below */
// // [[Prototype]]: Number
// // constructor: ƒ Number()
// // toExponential: ƒ toExponential()
// // toFixed: ƒ toFixed()
// // toLocaleString: ƒ toLocaleString()
// // toPrecision: ƒ toPrecision()
// // toString: ƒ toString()
// // valueOf: ƒ valueOf()
// // [[Prototype]]: Object
// // [[PrimitiveValue]]: 0
// // [[PrimitiveValue]]: 4000

// console.log(balance.toString().length) //4 because 4000 have 4 char
// console.log(balance.toFixed(2)) //

// const otherNum = 345.897;
// console.log(otherNum.toPrecision(2)); //3.5e+2
// console.log(otherNum.toPrecision(3)); //346
// console.log(otherNum.toPrecision(4)); //345.9
// console.log(otherNum.toPrecision(5)); //345.90
// console.log(otherNum.toPrecision(6)); //345.897
// const valueNum = 4000000;
// console.log(valueNum.toLocaleString()); //4,000,000 Added "," as per the us number format
// console.log(valueNum.toLocaleString("en-IN")); //40,00,000 Added "," as per the india number format


/* ***********Math************* */
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// E:2.718281828459045
// LN2:0.6931471805599453
// LN10:2.302585092994046
// LOG2E:1.4426950408889634
// LOG10E:0.4342944819032518
// PI:3.141592653589793
// SQRT1_2:0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: ƒ abs()
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// floor: ƒ floor()
// fround: ƒ fround()
// hypot: ƒ hypot()
// imul: ƒ imul()
// log: ƒ log()
// log1p: ƒ log1p()
// log2: ƒ log2()
// log10: ƒ log10()
// max: ƒ max()
// min: ƒ min()
// pow: ƒ pow()
// random: ƒ random()
// round: ƒ round()
// sign: ƒ sign()
// sin: ƒ sin()
// sinh: ƒ sinh()
// sqrt: ƒ sqrt()
// tan: ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()
// Symbol(Symbol.toStringTag): "Math"
// [[Prototype]]: Object

// console.log(Math.abs(4)); //4 
// console.log(Math.abs(-4)); //4 it converted -ve value to +ve value only
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.6)) //5
// console.log(Math.floor(4.6)) //4
// console.log(Math.min(4,6,2,7,8)); //2
// console.log(Math.max(4,6,2,7,8)); //8


console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

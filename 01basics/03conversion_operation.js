let score = "33"; 
//console.log(typeof score);
//console.log(typeof (score));

score = "33abc"; //NaN
score = null; //0
score = undefined; //NaN
score = true; //1
score = "Sarvesh";//Nan

let valInNumber = Number(score);
//console.log(typeof (valInNumber));
//console.log(valInNumber);

let isLoggedIn = 1; //true
isLoggedIn = 0; //false
isLoggedIn = "ASAp"; //true
//console.log(isLoggedIn) 
let valInBoolean = Boolean(isLoggedIn)
//console.log(valInBoolean)


let isString = 1; //Number  string
isString = "ram"; //string  string
isString = true; //boolean  string

//console.log(typeof isString) 
let valInString = String(isString)
//console.log(typeof valInString)

/********
let myValue = 4;
let negValue = -myValue;
console.log(negValue); //-4
console.log(2*5) //10
console.log(2**6) //64
console.log(2%4) //2
console.log(2/8) //0.25

console.log(2+2) //4
console.log(2-2) //0
console.log(2+"2") //22
console.log("2"+"2") //22
console.log("2"-2) //0
console.log(2-"2") //0
console.log("2"-"2") //0

console.log(2+4+"2") //62
console.log("2"+ 3 +"2") //232
console.log("2"-2-1) //-1
console.log(2-1-"2") //-1
console.log("2"-1-"2") //-1


let str1 = "Ram";
let str2 = "Narayan"
console.log(str1 + " " + str2)

console.log(2+3-4*5/3%3); // use proper parenthesis like this ((2+3)-(4*(5/3)))
console.log(2+3-4*5/3%3); // use this ((2+3)-(4*(5/3))%3)
*/

console.log(+ true); // 1
//console.log(true +); // Error
console.log(+"")

let num1, num2, num3;
console.log(num1 = num2 = num3 = 2+2) // 4 but not a good way  these are only for check mathmetical knownledge 

let myCounter = 100;
++myCounter;
console.log(myCounter); //101 Prefix/Postfix exercise  you can study on mdn or javascriptinfo

//Study work https://tc39.es/ecma262/#sec-abstract-operations
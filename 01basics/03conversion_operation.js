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

console.log(typeof isString) 
let valInString = String(isString)
console.log(typeof valInString)
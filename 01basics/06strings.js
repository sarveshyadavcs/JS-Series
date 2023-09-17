// const myName = "Sarvenddra"
// console.log(myName); //Sarvenddra


// console.log(`My name is ${myName} and this is my childhood name`) //template litral

// const newName = new String(myName);
// console.log(newName); //[String: 'Sarvenddra']
// console.log(newName[3]); //v
// console.log(newName.__proto__); //{}

// console.log(newName.length); //10

// console.log(newName.toLowerCase()); //sarvenddra
// console.log(newName.toUpperCase()); //SARVENDDRA
// console.log(newName.toString()); //Sarvenddra
// console.log(newName.charAt(4)); //e
// console.log(newName.indexOf("d")); //6

const uName = "Sarvenddra-su";

console.log(uName.substring(0,4)); //Sarv
console.log(uName.slice(-8,10)); //nddra  --We can use -ve value here only

const uName1 = "    Sarvenddra    ";
console.log(uName1.trim()); //Sarvenddra

const url = "https://github.com/sarveshyadavcs/JS-Series/sarvesh%20yadav";
console.log(url.replace('%20','-')); //https://github.com/sarveshyadavcs/JS-Series/sarvesh-yadav

const uName2 = " Sarvenddra-surya ";
console.log(uName2.split('')); //[' ', 'S', 'a', 'r', 'v','e', 'n', 'd', 'd', 'r','a', '-', 's', 'u', 'r','y', 'a', ' ']

/* Read about below string methods */
// String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
// anchor:ƒ anchor()
// at:ƒ at()
// big:ƒ big()
// blink:ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""
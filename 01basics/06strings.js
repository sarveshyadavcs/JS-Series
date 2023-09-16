const myName = "Sarvenddra"
console.log(myName); //Sarvenddra


//template litral
console.log(`My name is ${myName} and this is my childhood name`)

const newName = new String(myName);
console.log(newName); //[String: 'Sarvenddra']
console.log(newName[3]); //v
console.log(newName.__proto__); //{}

console.log(newName.length); //10
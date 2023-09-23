// const user = {
//     uName : "Surya",
//     free : "999",
//     welcomeMessages : function(){
//         console.log(` Hi ${this.uName} welcome to on my page...`)
//         //console.log(this) // Always refer to current contaxt 
//     }
// }
// user.welcomeMessages() //Hi Surya welcome to on my page...
// user.uName ="shyam";
// user.welcomeMessages() //Hi shyam welcome to on my page... :above we are using this so because of contaxt value updated

// console.log(this) //{} 

// function one(){
//     console.log(this)
// }
// one()
/* ////////// O/P /////////
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}
*/


// function two(){
//     const userName = "Suresh"
//     console.log(this.userName);
// }
// two(); //undefined :becasue, we can not use this here..

// const three = function(){
//     const userName = "Suresh"
//     console.log(this.userName);
// }
// three() //undefined :becasue, we can not use this here..

// const four = () => {
//     const userName = "Suresh"
//     console.log(this.userName);
// }
// four() //undefined :becasue, we can not use this here..


///// Basic arrow function ///// explicit  return Example
const addTwoNum = (num1, num2) =>{
    return num1+num2
}
console.log(addTwoNum(3, 4)); //7

///// implicit  return Example
const addTwoValue = (num1, num2) => (num1+num2) // 8: when writen conde in one line the not using {} and return keyword
//const addTwoValue = (num1, num2) => {num1+num2} // undefined: when writen conde in one line the not using {} and return keyword
console.log(addTwoValue(4, 4)); 

//const uName = () => {user:"Sarvesh"} //undefined :we can not write object without () here
const uName = () => ({user:"Sarvesh"}) //{ user: 'Sarvesh' } :We are writing the code in proper format
console.log(uName()) //{ user: 'Sarvesh' }
console.log(uName().user) // Sarvesh

const myArray = [30,40,50];
myArray.forEach(() =>{})
myArray.forEach(function(){})
//immediately invoked function expression in javascript  (IIFE)
//self invoking function expression in javascript  (SIFE)

function login(){
    console.log("You are login")
}
login(); //normal function as useal we are using

(function signup(){ // this is named IIFE
        console.log("You are signup")
})(); //this is self invoking function

(() =>{ // this is unnamed IIFE
    console.log("you are connected")
})(); //this is also self invoking function using arrow function

((Statement) =>{ // this IIFE is with parameter
    return(Statement)
    //console.log(Statement) // after retun nothing will be run
})("ending is necessary in self invoing function"); // when not using ; and writen another IIFE then giving error because self invoking function needed end command ; always





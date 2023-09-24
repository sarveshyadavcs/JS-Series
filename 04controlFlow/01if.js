//Condition if

let islogin = true;
if(islogin == true){
    console.log("Login successfully")
}
///////* operators *///////
// a<b     : a less than b
// a<=b    : a less or equal than b
// b>a     : b greater than b
// a>=b    : a greater or equal than b
// a!=b    : a is not equals to b
// a!==b   : a is not equals to strictly means data type as well
// a=b     : a assign value b
// a==b    : a equals to b
// a===b   : a equals to b strictly means data type as well


const temp = 30;
if(temp <= 45){
    console.log(`temp is equals or less than to 45 degree`);
}
else{
    console.log(`temp is greater than 45 degree`);
}


const score = "200";
if(score > 100){
    let power = "fly";
    console.log(`The power is : ${power}`);
}
//// console.log(`The power is : ${power}`) //:when above line power declear using let then give error "Power is no define"
//// :if power declear using var keyword then giving the result but that is not a good for professinal work

const balance = 1000;
if (balance > 500) console.log("balance is grater than 500") // this is explicit scope

if (balance > 500) console.log("balance is grater than 500"), // for write multiple statement we can use , as a seprater
console.log("test");


if(balance < 500 ){
    console.log(`${balance} is less then 500`)
}else if(balance < 1000){
    console.log(`${balance} is less then 1000`)
}else{
    console.log(`${balance} is grater then or equal to 1000`)
}

const loggedIn = true;
const verfiy = true;
if (loggedIn && verfiy && 5==5){
    console.log(`user login successfully`)
}else{
    console.log(`something is wrong`)
}

const googleResitration = false;
const emailResitration = true;
if (googleResitration || emailResitration || 0<1) {
    console.log(`Logged in here... you are registerd user`)
}else{
    console.log(`please registere first then try to login here`)
}
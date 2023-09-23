// function name(){   //here name(funtion name) 
//     console.log("H")
//     console.log("J")
//     console.log("I")
//     console.log("P")
//     console.log("U")
// }
// name(); //Calling the function

// function addNum (num1, num2){ //(num1, num2):parameters
//     console.log(num1+num2);
// }
// addNum(3,5); //(3,5): arguments

// function addNum1 (num1, num2){ 
//     console.log(num1+num2);
// }
// const result1 = addNum1(3,5);
// console.log(result1); // O/p: 8 undefined

// function addNum2 (num1, num2){ 
//     // const result = num1 + num2
//     // return result //8
//     return(num1+num2);
// }
// const result2 = addNum2(3,5);
// console.log(result2); //8

// function addUser(uName){
//     if (uName === undefined){
//     //if (!uName){
//         return `Please enter the user name`
//     }
//     return `${uName} just added here`
// }
// //console.log(addUser("Sarvesh")); //result: Sarvesh just added here
// console.log(addUser()); //result: undefined just added here

// function addUser(uName = "Shiv"){
//     if (!uName){
//         return `Please enter the user name`
//     } //When already passed the default value in parameter then never will not true this condition
//     return `${uName} just added here`
// }
// console.log(addUser()); //result: Shiv just added here
// console.log(addUser("Sarvendra")); //result: Sarvendra just added here :Overwrite value here


/******/
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(10,40,50)) //[ 10, 40, 50 ]

const UserName = {
    uname : "Sarvesh",
    price : "199"
}

function handelObject(anyObj){
    console.log( `User name is ${anyObj.uname} and Price value is ${anyObj.price}`)
}
//handelObject(UserName) // User name is Sarvesh and Price value is 199
handelObject({uname: "Samir", price: 10}) //User name is Samir and Price value is 10

function handelObject1(anyObj){
    return( `User name is ${anyObj.uname} and Price value is ${anyObj.price}`)
}
//console.log(handelObject1(UserName)) // User name is Sarvesh and Price value is 199
const res1 = handelObject1(UserName);
console.log(res1); // User name is Sarvesh and Price value is 199


const arr1 = [10,34,22,13,56]
function return2ndValue(getArray){
    return getArray[1];
}
console.log(return2ndValue(arr1)) //34

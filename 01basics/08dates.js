let myDate = Date();
console.log(myDate); //Sun Sep 17 2023 18:25:58 GMT+0000 (Coordinated Universal Time)
let newMyDate = new Date();
console.log(newMyDate); //2023-09-17T18:25:58.943Z
console.log(newMyDate.toString()); //Sun Sep 17 2023 18:25:58 GMT+0000 (Coordinated Universal Time)
console.log(newMyDate.toDateString()); //Sun Sep 17 2023
console.log(newMyDate.toLocaleString()); //9/17/2023, 6:25:58 PM
console.log(newMyDate.toLocaleDateString()); //9/17/2023

console.log(typeof myDate); //string
console.log(typeof newMyDate); //object


let createDate = new Date(2023, 0, 20);
console.log(createDate.toDateString()); //Fri Jan 20 2023
console.log(createDate.toLocaleString()); //1/20/2023, 12:00:00 AM
let createDate1 = new Date(2023, 0, 20, 2, 33);
console.log(createDate1.toLocaleString()); //1/20/2023, 2:33:00 AM
let createDate2 = new Date("2023-01-19");
console.log(createDate2.toLocaleString()); //1/19/2023, 12:00:00 AM

console.log(createDate2.getTime()); //1674086400000
console.log(Date.now()) //1694977096743
console.log(Date.now()/1000) //1694977134.486
console.log(Math.floor((Date.now()/1000))) //1694977134

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1694976835653

let myNewDate = new Date();
console.log(myNewDate); //2023-09-17T19:02:27.646Z
console.log(myNewDate.getMonth()); //8 : because month count started from 0 so need to add +1 here
console.log(myNewDate.getMonth() + 1); //9
console.log(myNewDate.getDay()); //0 : means monday

// `${newDate.getDay()} and the time`

const myDateWork = myNewDate.toLocaleString('default', {
    weekday : "long"
})
console.log(myDateWork)//Sunday
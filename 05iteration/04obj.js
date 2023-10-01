const myObj = {
    gm1 : "slot",
    gm2 : "pokemon",
    gm3 : "poker"
}

/////////for of loop not worked here for object iteration
for (const key in myObj) {
    //console.log(key) //// :Keys
    //console.log(myObj[key]) //// :Values
    console.log(`${key} value is ${myObj[key]}`)
}

const arr = ["js", "java", "c++"];
for (const key in arr){
    //console.log(key)//key: 0 1 2
    console.log(arr[key])// value
}


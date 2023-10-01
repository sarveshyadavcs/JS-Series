//// forEach loop :Array specific loop\
// array.forEach(element => {
    
// });

//// for of
// for (const iterator of object) {
    
// }

//// for in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

//// ["","",""] :array with string values
//// [{},{},{}] :array with object values

//// for of
const arr1 = [11,12,13,14,1]
for (const num of arr1) {
    console.log(num); //: 11 12 13 14 15
}

//// for in
for (const key in arr1) {
    console.log(key); //: 0 1 2 3 4
}

//// map
const map = new Map();
map.set("in", "india")
map.set("pk", "pakistan")
map.set("np", "nepal")
map.set("sl", "shree lanka")
map.set("pk", "pakistan")
map.set("np", "nepal")
console.log(map) //Map only consider a unique value on the basis of keys

for (const [key, value] of map) {
    console.log(`${key} keyOf ${value}`)
}

//for In loop will not work for itration 
// for(const key in map){
//     console.log(key);
// }

map.forEach((val,key)=>{
    // console.log(val)
    // console.log(key)
    console.log(val, key)
})

const myArray = ["dd", "cc", "ee"]
myArray.forEach((val, key, newArray)=>{
    // console.log(val)
    // console.log(key)
    // console.log(newArray[0])
    console.log(val, key, newArray[0])
})

function print(item){console.log(item)};

myArray.forEach(print) //o/p: dd cc ee


const mySub = [
    {
        langName: "JS",
        langFile: "js"
    },
    {
        langName: "JAVA",
        langFile: "java"
    },
    {
        langName: "PYTHON",
        langFile: "python"
    }
]

mySub.forEach((item, key, arr)=>{
    console.log(item.langName); //o/p: JS JAVA PYTHON
})
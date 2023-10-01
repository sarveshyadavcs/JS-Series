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

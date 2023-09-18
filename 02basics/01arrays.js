//Array

// const arr = new Array(5,4,3,2,1,4,true,"ram");
// console.log(arr[2]); //[5,4,3,2,1,4,true,"ram"] : 3

// const myArr = ["Ram", "Shyam", "Krishn"];
// console.log(myArr[4]); //[ 'Ram', 'Shyam', 'Krishn' ] :undefined

// const number = [1,3,4,5,6];
// console.log(number[3]); //[ 1, 3, 4, 5, 6 ] : 5

//Array Methods---\
// const newArray = [0,1,2,3,4,5,6,7,8,9];
// console.log(newArray); //[0,1,2,3,4,5,6,7,8,9]

// newArray.push(11);
// console.log(newArray); //[0,1,2,3,4,5,6,7,8,9,11]
// newArray.pop();
// newArray.pop();
// console.log(newArray); //[0,1,2,3,4,5,6,7,8]
// newArray.unshift(75);
// console.log(newArray); //[75,0,1,2,3,4,5,6,7,8]
// newArray.shift();
// newArray.shift();
// console.log(newArray); //[1,2,3,4,5,6,7,8]
// console.log(newArray.includes(6)); //true
// console.log(newArray.includes(11)); //false
// console.log(newArray.entries().next().value); //[ 0, 1 ]
// console.log(newArray.indexOf(4)); //3

// const updateArray = newArray.join();
// console.log(newArray); //[1,2,3,4,5,6,7,8]
// console.log(updateArray); //1,2,3,4,5,6,7,8
// console.log(typeof updateArray); //string


//Slice & Splice
const arr1 = [0,1,2,3,4,5]
console.log("A ", arr1); //A  [ 0, 1, 2, 3, 4, 5 ]

const arr2 = arr1.slice(1,3);
console.log(arr2) //[ 1, 2 ] :Slice consider all value form starting to end-1 value
console.log("B", arr1) //B [ 0, 1, 2, 3, 4, 5 ] : Slice will not manuplated the original array

const arr3 = arr1.splice(1,3);
console.log(arr3) //[ 1, 2, 3 ] :Splice cosider all value form starting to end value
console.log("C", arr1) //C [ 0, 4, 5 ] :Splice will manuplated the original array
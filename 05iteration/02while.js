//While loop
// while (condition) {
//     console.log("statement will be Here...")
// }

let index = 0
while (index < 10) {
    console.log(index = index + 2); // O/P: 2 4 6 8 10
}

let arr = ["ram", "kumar", "singhaniya"];

let arrIndex = 0;
while (arrIndex < arr.length) {
    console.log(`this is array data ${arr} with ${arr[arrIndex]} index value`)
    arrIndex = arrIndex + 1;
}

//DoWhile
// do {
    
// } while (condition);

let j = 0;
do {
    j = j+3; 
    console.log(j)   // O?P: 3 6 9 12
} while (j<10);

let score = 0;
do {
    console.log(score);
    score++
} while (score < 10);



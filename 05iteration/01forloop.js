////For Loop 
// for(let index = 0; index < index.length; index++){
//     "Satement Comes Here..."
// }

// for (let i = 0; i<=10; i++){
//     const element = i;
//     console.log(element);
// } ////O/P: 0 1 2 3 4 5 6 7 8 9 10

for (let i = 0; i<=10; i++){
    const element = i;
    if(element === 5)
    console.log("5 is the best number");
    //console.log(i);
} ////O/P: 0 1 2 3 4 5 is the best number 5 6 7 8 9 10

// for (let i = 0; i<=10; i++){
//     console.log(`outer value ${i}`)
//     for (let j = 0; j<=10; j++){
//         console.log(`inver value ${j} with outer value ${i}`)
//     }
// }

const arr = ["ram", "shyam", "narayan"];
console.log(arr.length) //3
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element + " " + index);
}
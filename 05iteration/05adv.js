const coding = ["Js", "C++", "Java", "Python"]

const myCoding = coding.forEach((item)=>{
    //console.log(item)
    return item;
})
console.log(myCoding) //o/p:undefined ::Notes: forEach function never return anything

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter((item)=>{
    //let newItem = item * 2;
    //return newItem > 7;
    return item>4;
})
console.log(newNum); //o/p: [1,2,3...10] ::Notes: filter will return the value 


const newNums = [];
myNum.forEach((item)=>{
    if(item>4){
        console.log(item)
    }
})
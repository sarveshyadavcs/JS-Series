const num = [1,2,3,4,5,6,7,8,9];
const newNum = num.map((item)=>{
    return item+10;
})
//console.log(newNum)

const myNum = num.map((item)=> item*10).map((item) => item + 1)
//console.log(myNum)

const myNum1 = num.map((item1)=> {
    console.log("1st value " + item1) //// o/p:1st value 1  1st value 2    1st value 3     1st value 4    1st value 5     1st value 6    1st value 7    1st value 8    1st value 9
    return item1*10
}).map((item2) => {
    console.log("2nd value " + item2) //// o/p:2nd value 10  2nd value 20    2nd value 30     2nd value 40    2nd value 50     2nd value 60    2nd value 70    2nd value 80    2nd value 90
    return item2 + 1
}).filter((num)=>{
    if(num>40){
        return num; 
    }
})
console.log(myNum1) 
////o/p after 2nd map: [ 11, 21, 31, 41, 51, 61, 71, 81, 91] 
////o/p after filter: [ 41, 51, 61, 71, 81, 91 ]


/** Reduce **/
// const arr = [];
// arr.reduce((prevValue, currValue, indValue, arr1)=>{return value})

const myArr = [2,4,6,7];

const myNewArr = myArr.reduce((prevValue, currValue, indValue, arr1)=>{
    console.log(`${prevValue} and ${currValue} nad ${indValue} dna ${arr1}`)
    //return prevValue + currValue
    return currValue
},0)
console.log(myNewArr)
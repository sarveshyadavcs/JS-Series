// let abc = 10
// const xyz = 30
// var klm = 20
// console.log(abc); //10
// console.log(xyz); //30
// console.log(klm); //20
// console.log([ abc, xyz, klm ]) // : [ 10, 30, 20 ]

if (true){
    let a = 10
    const b = 30
    var c = 20
}
//console.log(a); //a is not defined
//console.log(b); //b is not defined
console.log(c); //20

var aa = 500;
if (true){
    var aa = 50
}
console.log(aa); //50

let bb = 800;
if (true){
    //var bb = 80 //Identifier 'bb' has already been declared
    let bb = 80;
}
console.log(bb); //800

function one(){
    const uName = "Sarvesh";
    function two(){
        const website = "youtube"
        console.log(uName);
    }
    //console.log(website); //website is not defined
    two(); 
}
one();
////O/P :Sarvesh (when call two and one both then getting o/p)

if(true){
    const userName = "sarvesh"
    if (userName === "sarvesh"){
        const website = "facebook.com"
        console.log(userName + " & " + website) //sarvesh & facebook.com
    }
    //console.log(website) //website is not defined
}
//console.log(userName) //userName is not defined


/////////////////// Intresting Example //////////////////////

console.log(addOne(5))  //6  : this can call because of the hoisting 
function addOne(num){
    return num + 1;
}
//console.log(addOne(5)); //6

console.log(addtwo(5))  //Cannot access 'addtwo' before initialization : hoisting not worked here because function hold in a variable 
const addtwo = function(num){
    return num + 2;
}
//console.log(addtwo(5)); //7
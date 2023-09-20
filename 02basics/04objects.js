//Non-Singleton method
const twitteruser = new Object(); 
console.log(twitteruser); //{} : o/p Same as Singleton, just different is the way of code writing and use

//Singleton method
const fbuser = new Object(); 
console.log(fbuser); //{} : o/p Same as NonSingleton, Here just a constructer method follw here

fbuser.name = "Sarvesh Kumar Yadav"
fbuser.id = 9867
fbuser.isLoggedIn = false
console.log(fbuser) //{ name: 'Sarvesh Kumar Yadav', id: 9867, isLoggedIn: false }

//Nested Object
const regularUser = {
    email : "myemailid@gmail.com",
    fullname : {
        username : "suryathecommonman",
        userFullName : {
            firstName : "SuryVeer",
            lastName : "Vikram Singh" 
        }
    }
}
console.log(regularUser.fullname.username) //suryathecommonman
console.log(regularUser.fullname.userFullName) // { firstName: 'SuryVeer', lastName: 'Vikram Singh' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = ({obj1, obj2}) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } : this is not merge so will do something different
//const obj3 = Object.assign(obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } :Here getting which we want but we will follow proper syntax
const obj3 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } :Here getting also same as above but here define a empty {} for store the object
//Actually above things follow to the assign syntax that is Object.assign(target, source);

console.log(obj3);

console.log({...obj1, ...obj2}); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(fbuser); //{ name: 'Sarvesh Kumar Yadav', id: 9867, isLoggedIn: false }
console.log(Object.keys(fbuser)) //[ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(fbuser)) //[ 'Sarvesh Kumar Yadav', 9867, false ]
console.log(Object.entries(fbuser))

console.log(fbuser.hasOwnProperty("isLoggedIn")) //true
console.log(fbuser.hasOwnProperty("isLogged")) //false

const user = [
    {id1: 1, name1: "shiv", aga1: 24},
    {id2: 2, name2: "surya", aga2: 12},
    {id3: 3, name3: "veeru", aga3: 34},
    {id4: 4, name4: "ramnayan", aga4: 45}
]
console.log(user); //Wiil return same which is mention in user
//User is the just like collection of object and we are writing json in this way.


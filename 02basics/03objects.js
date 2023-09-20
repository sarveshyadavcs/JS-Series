//Singleton
//Object.create

//Object Literals :

const newUser = {
    name : "hitesh",
    age : 18,
    location: "Noida",
    email: "hiteshnoida@gmail.com",
    isLoggedIn : false,
    lastLogin : ["monday", "friday"]
}

console.log(newUser.email); //hiteshnoida@gmail.com
console.log(newUser["email"]); //hiteshnoida@gmail.com

const mySymbol = Symbol("key")
const myUser = {
    name : "ram",
    "full name" : "ram kumar yadav", // when we are facing like this then we can put key in "key" as per syntax
    [mySymbol] : "New Symbol" // always key placed in brakets because that is syntax 
}
console.log(myUser["name"]) //ram : we can access this type symple key and value with both methods
console.log(myUser["full name"]) //ram kumar yadav : we can not this value without array notation because space between in key
console.log(myUser["mySymbol"]) //New Symbol : we can't get this value with .key method 
//When will print whole object then in result showing like this [Symbol(key)]: 'New Symbol' & when not using [] then value will same but typeOf will not symbol 

//If want to update the value then we can use below 
myUser.name = "Radhe Shyam Narang"
console.log(myUser.name) // Radhe Shyam Narang
myUser["full name"] = "Radhe Shyam Narang kumar bramh"
console.log(myUser["full name"]) // Radhe Shyam Narang kumar bramh

Object.freeze(myUser); //Can freeze object easily so no can updated this object
myUser.name = "Radha Krishna Yadav"
console.log(myUser["name"]) // Radhe Shyam Narang : we can not update because we have freeze this object

//Object.freeze(newUser);
newUser.greeting = function(){
    console.log("Hello user...");
}
newUser.greeting(); //Hello user... 
//When your object/newUser will be freez then will show below type error
//TypeError: newUser.greeting is not a function
console.log(newUser.greeting); //[Function (anonymous)] : this is alerting that some function avaiable here

newUser.newGreeting = function(){
    console.log(`Hi ${this.name}... here we are greeting to you!`);
}
newUser.newGreeting(); //Hi hitesh... here we are greeting to you!
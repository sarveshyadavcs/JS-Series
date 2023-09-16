const accountId = 1234;
let accountEmail = "sarvesh@gmail.com";
var accountPass = "5678";
accountCity = "Noida";
let accountState;

//console.log(`${accountId} , ${accountEmail}, ${accountPass},  ${accountCity}, ${accountState}`);

//accountId = 5; // not allowed because variable type is const
accountEmail = "main@gmail.com";
accountPass = "abce";
accountCity = "Gkp";

/*
Prefer not to use var because of var will create issue regarding block and functional scope.
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);

//console.warn(accountId,accountEmail,accountPass,accountCity,accountState);
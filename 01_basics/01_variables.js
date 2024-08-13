//there are three ways to define var in js
//using 1. var keywords
//2. using const 
//3. using let keywords
//let and const was introduced in ES6 version of js
//Which uses BlockScope becs VAR was using GlobaleScope
const date = 35;

let userId = 234;
var userPassword = 657;

userId = 43;
console.log(date);
console.log(userId);
console.log(userPassword);

userEmail = 'rix6262@gmail.com';
console.log(userEmail);
// we can declare a var without using var keywords also.

console.table([date, userId, userPassword, userEmail]);

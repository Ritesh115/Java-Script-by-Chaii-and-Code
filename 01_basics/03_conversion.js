let score = "33";

let numberIs = Number(score);
//we are typecasting string into Number..
console.log(typeof score);
console.log(numberIs);
console.log(typeof numberIs);

//if score = 33abc then the o/p will be NAN.

let isScore = 12;

let isNumber = Boolean(isScore);
console.log(isNumber);

let str = "";
let isBoolean = Boolean(str)
console.log(isBoolean);

//empty string is false.

//***************************OPERATION************//

console.log('1' + 2);
console.log(2 + "6");
console.log('8' + "6");
console.log(1 + 2 + '5');
console.log(1 + 2 + '5' + 1 + 9);
//all these are typecoersion in which JS treat everything a string after a stringValue.

console.log("" + 1);//" " is treated as 0;


// console.log('function');
//FUNCTION is basically a peice of code which perform some specific task   also know as package.
const fun = (a = 4) => { //we can give a default values to parameter also .
  console.log("sum is : ", a);
}

console.log(fun()); // this is returning undefined means value define nahi kiya hai.


///Shopping  cart me er dont know how many values are going to came
//se we use REST operator just like spread operator but this combine the values and give in array format..

function calculateCartprice(...num) {
  return num;
}

console.log(calculateCartprice(100, 200, 300));


// we can pass array and obj in function by only passing the name itslef.
//O/P = [ 100, 200, 300 ]

//SCOPE in FUNCTION

let a = 10;
let b = 11;
let c = 13;
console.table({ a, b, c });

// if we are running js through node , the global scope is the editor only.

console.log('br');


print();
function print(num) {
  console.log('i am number');
}

val();   // here function hoisting is not performed
let val = function () {
  console.log("i am function expression..");
}








let name = 'Ritesh'
let score = 10;

//insted of using string concatenation  in modern days we use STRINGINTERPOLATION method using backtrick....
console.log(`Hello my name is ${name} and my score is ${score}`);

/***************************CREATING STRING WITH new KEYWORDS */
const str = new String('hello_world');
//here new keywords creates an empty object and all the properties and function are copied into new object. of string class or object..

console.log(str);
console.log(typeof str);


console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(4));
console.log(str.indexOf('_'));

let newStirng = str.substring(0, 4);//4 is not included.
console.log(newStirng);

let anotherString = str.slice(-8, 6);
console.log(anotherString);

const url = "https://google.com";
const newUrl = url.replace('google', 'ritesh');

console.log(newUrl);
console.log(url);

let localStr = 'hello-i-am-fine';
//we will use split function  to split them on - 
console.log(localStr.split('-'));
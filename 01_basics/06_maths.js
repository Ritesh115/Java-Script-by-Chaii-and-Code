let str = new String('hello');
console.log(str);
console.log(typeof str);
console.log(str.toString());

let newStr = [1, 2, 3, 4, 5];
let newString = newStr.toString(newStr);
console.log(typeof newString);//TO convert anything to string

//TO CONVERT A VALUE INTO PRECISEVALUE WE USE toPrescision function.
let num = 123.865;
console.log(num.toPrecision(4));//upto which places tak chiya.

let number = 1000000;
console.log(number.toLocaleString('en-IN'));

/********************MATHS **********/
console.log(Math);

console.log(Math.abs(-4));//cconvert -ve to positive.
console.log(Math.round(4.2));//round to nearest integer
console.log(Math.ceil(4.2));//top value
console.log(Math.floor(4.2));



console.log(Math.random());///gives rrandom value
console.log((Math.random() * 10));//WILL give number but not 0.something
console.log((Math.random() * 10) + 1);//becs of 0.014 so thats why +1;

//BUT I WANT ANYNUMBER BETWEEN 1 and 6;
const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// know i will get number in 1 to 6 range only.
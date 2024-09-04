/**************************************ARRAY **************************/

let arr = [1,2,3,4,5];
//here elements can be anythings number , object , string etc.
// console.log(typeof arr);

const arr2 = new Array(1,2,3,4);
// console.log(typeof arr2);
// console.log(arr2);
// console.log(arr2.length);

arr2.push('a');
console.log(arr2);

// arr2.pop();
// console.log(arr2);

// arr2.shift('hello');
// console.log(arr2);

arr2.unshift('array');
console.log(arr2);

console.log(arr2.indexOf(2));

//ARRAY always make SHALLOW  copies .....

/**************************************ARRAY **************************/

let arr = [1,2,3,4,5];
//here elements can be anythings number , object , string etc.
// console.log(typeof arr);

const arr2 = new Array(1,2,3,4);
// console.log(typeof arr2);
// console.log(arr2);
// console.log(arr2.length);

//METHODS          

arr2.push('a');
console.log(arr2);

// arr2.pop();
// console.log(arr2);

// arr2.shift('hello');      to remove the first elements from array.
// console.log(arr2);

arr2.unshift('array');  //to add the elements on first place of array.
console.log(arr2);

console.log(arr2.includes(12));  //returns the boolean values as a results.

console.log(arr2.indexOf('a')); //tells the index of elemnts if present if not returns 0;


//SLICE and SPLICE

let br = [5,6,7,8,9,10,11];
const results = br.slice(1,5);  //last  index is not included in slice()
console.log(results);
console.log('original array after slice', br);
// console.log('original array', br);

// let br2 = [5,6,7,8,9,10,11];
const results2 = br.splice(1,5);  //last index is included in splice() and the parent array is also changed..
console.log('RESULTS OF SPLICE ',results2);
console.log('original array after splice', br);

      
/////////

let marvel_heros = ['spiderman','hulk','ironman'];
//JOIN is used to convert array into string and bind it ..
const newArr = marvel_heros.join();
console.log(newArr);


















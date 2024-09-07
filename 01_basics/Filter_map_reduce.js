//for Each function never returns a values;

let heros = ['superman','batman','flash'];
const val = heros.forEach( (iteam) => {    //array ke under har ak //elements ko item bol diya.
  // console.log(iteam);
        return iteam;
} )
console.log(val); //O/P is undefined 
//when ham item pe koi kam karna chate hai to ham callback function me kar lete hai but bahr us value ko access karna hai we cant do it. so we use FILTER function.

// 1. The filter() method creates a new array filled with elements that pass a test (based on certain condition) provided by a function.

//2. The filter() method does not execute the function for empty elements.

//3.The filter() method does not change the original array.

//4. TRUE FALSE wala kam hai
 
const newArr = [1,2,3,4,5,6,7,8,9];

// const newVal = newArr.filter( (item) => item>4 ); //explicit return of function.

// console.log(newVal);



//Description
//1. map() creates a new array from calling a function for every array element.

//2. map() does not execute the function for empty elements.

//3.map() does not change the original array.

const myNumber = [1,2,3,4,5,6,7,8,9,10];
const Val2 = myNumber.map( (item) => item +10 );
console.log('hello',Val2);

//Return a new array with the square root of all element values:
const v = [4,9,16,25];
const ab = v.map( (item) => item>10);
console.log(ab);

//CHANNING

const ch = myNumber
         .map( (num)=> num * 10 )
         .map(  (num)=> num+1 )
         .filter( (num)=> num>=40 )

console.log(ch);


















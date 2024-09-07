//ARRAY always make SHALLOW  copies .....

//becs we know array is referential type datastructure ....

let arr1 = [1,2,3,4,5];
let arr2 = arr1;

console.log(arr2);

arr2[2] = 'hello'

console.log(arr2);
console.log(arr1);
 
let newArr1 = new Array('a','e','i');
let  newArr2 = newArr1;
console.log(newArr2);




//IMPORTANT

const addTwo1 = (num1 , num2) =>  num1 + num2 ; //THIS is explicit return of function..
const addTwo2= (num1 , num2) =>  (num1 + num2) ;

const addTwo3 = (num1 , num2) =>  ( {1 : num1 , 2 : 'two'} );


//IMPLICIT RETURN OF FUNCTION we use scope of function {} , so we have to mention return keywords.
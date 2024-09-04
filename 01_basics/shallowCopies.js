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
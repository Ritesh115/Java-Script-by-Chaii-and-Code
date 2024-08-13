console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// JS treats null as 0 ;

//undefined is always 0; no matter wt.
console.log('h');
console.log('1' === 1); //=== strict ekual  dont do typeCoersion.

console.log('1' == 1);//typeCoersion is done by JS


//***************************** *//

//Reference type datatypes
//1. ARRAY 2. OBJECT 3. FUNCTIONS  ALL have type object..

//BIGINT

let isval = 541154644454685468n;//by postfixing n at last becames bigint
console.log(typeof isval);


/***************************************** */

// STACK   ,  HEAP are two types of memory
//stack is used in premitive
//heap in reference type
// if we give access to any other variable it will get the address of the heap same address..
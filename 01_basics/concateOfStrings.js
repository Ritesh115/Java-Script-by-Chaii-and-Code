const marvel_heros = ['spiderman','hulk','ironman'];
const dc_heros = ['batman','superman','flash'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// SPREAD OPERATOR  glass tha use thod diya pura spread ho giya
// ALL elements have become individuals...

const newArr = [...marvel_heros,...dc_heros];
console.log(newArr);

//FLAT function returns new array used in arry having multiple subarry

const another_array = [1,2,3,['a','e','i'],5,[7,8,['h','b']]];

const real_array = another_array.flat(Infinity); // infinity repr depth kitna depth hai 
console.log(real_array);



 console.log(Array.isArray(newArr)); // used to check kii given array is array or not

 console.log(Array.from('RITESH')); // Array.from() function returns the new array.







///MAKE ARRAY FROM KEYS OR VALUES 
console.log(Array.from({name: 'ritesh'}));//we have to specify make array from keys or values ..


//how to Single Array form Multiple variables 

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1,score2,score3));















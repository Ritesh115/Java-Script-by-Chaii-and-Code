console.log("LOOPS");
//while loop , for loop , do-while loop , forEach() loop , for-of loop

const arr = [1, 2, 3, 4, 5]

//for-of loop
for (const num of arr) {
  console.log(num);
}
const str = "ritesh";
for (const st of str) {
  console.log('each char is : ', st);
}

//MAPS  => is used to store unikue values;

const map = new Map(); //MAP() is object

map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');
map.set(4, 'four');
map.set(1, 'one');

console.log(map);


//in-case of map or object we DEstructure it.

for (let [key, value] of map) {
  console.log(key, '-', value);
}

const obj = {
  1: 'one',
  2: 'two',
  3: 'three',
}
/*for (const [keys,values] of obj) {
  console.log(keys ,'-', values);   // obj is not iterable
}*/


// will use for in loop

for (const key in obj) {
  console.log(obj[key]);
}


//forEach loop

const dc_heros = ['batman', 'superman', 'flash'];

dc_heros.forEach(function (item) {
  console.log(item);
}); // accepts callback function as argumrnts.  which has no name. and call back function go and bring every elements from array so we will  put it  in item do wt ever you want to do. with value.

//(item , index , arr ) in parameter.


const myCoding = [{
  languageName : 'javascript',
  languageFileName : 'JS'
} ];

myCoding.forEach( (iteam , index) => {
  console.log(iteam , ' ' ,index);
  console.log("br");
  console.log(iteam.languageName);
} );
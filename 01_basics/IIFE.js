
//if function is returning a line answer so we can do this;
const addTwo = (num1,num2) => ([1,2,3,4,5])
//USING () bracket we can return anything an [], object or some value
console.log(addTwo(2,3));


console.log("iife");
//immediatly invoked function expression


(function chaii(){ // named iife
   console.log("DB CONNECTED");
}) (); // we wrap function in () bracket and then call it immediatly  by ().

//GLOBAL VAR ke pollution se bachna ke liya we use iife.


((name) => { //unnamed iife
  console.log("DB2 CONNECTED",name);
}) ('ritesh')

















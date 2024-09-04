console.log('object');

//objects is a collection of key value pair
//key is name or number and value can be anythings

const obj =  {
  name : 'Ritesh',
  'age' : 24,
  gender : 'male',
  mood : 'positive',
  greeting : ()=>{
         console.log("hello Good afternoon");
  },
  lastLoginDays : ['Monday','Friday'],
  fullName : {
    firstName : 'Ritesh',
    lastName : 'Kumar',
  }
};

console.log(obj.greeting()); 
// console.log(obj.age);

console.log(obj['age']);//we have to pass as a STRINGS and the keys which are in "" can only be accessed by []

console.log(obj.fullName.firstName);


/*******HOW TO CREATE A SYMBOL************ */

const mySum = Symbol('key1');

let obj2 = {
  [mySum ]: 'mykey1',
}
console.log(typeof obj2[mySum]);///to convert into symbol enclosed key into []. and is accessed by [] brackets
console.log(obj2);

//obj.greetings ,,, it means we are getting functions reference  , yet function is not executed..


//THIS jab bhii same object ko refer karna hai we use this ...   put obj.in front

 obj.hello = function(){
   console.log(`see ya ${this.fullName.firstName}`);
}

console.log(obj.hello());
console.log(obj);



  
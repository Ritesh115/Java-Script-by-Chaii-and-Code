console.log('objects 2');

const obj = new Object();
obj.name = 'RItesh';
obj.age = 24;
obj.gender = 'Male';
obj.greeting = () => {
  console.log('hello there ...');
}

console.log(obj);

// how to merge to objects

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };

// const obj3 = {obj1,obj2};
// console.log(obj3)

//we use assign function

// const obj3 = Object.assign( {}, obj1 , obj2); // it assign the results in obj1 to handle this we use {} empty object all values assign in it.
// console.log(obj3);



const obj3 = { ...obj1, ...obj2 }
console.log(obj3);



//WE CAN FIND KEYS AND VALUES Also  imp

console.log(Object.keys(obj1));
console.log(Object.values(obj2));



let arr = [
  {
    1: 'a',
    2: 'b',
  },
  { 3: 'c' },
  { 4: 'd' }
];

// console.log(Object.keys(arr[0]));


//
const obj = {
  name: "c++",
  price: 120,
  courseInstructor: "hitesh",
}

// console.log(obj.price);

///INSTEAD OF USING obj.price AGAIN AND AGAIN  we destructure it ;

const { price } = obj; // const curly braces phir kha se value extract karna hai.  
//{which value need to be destructure}

console.log(price);



//API => jab hame apna kam dusra ke sar pe dalna hai we use API
// JSON => {}  which returns multi obj or array of objects 
//we decode it using ONJECT destructure







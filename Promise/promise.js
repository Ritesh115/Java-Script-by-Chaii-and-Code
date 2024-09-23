//PROMISE

//create a promise

const promiseOne = new Promise(function(resolve , reject){
     setTimeout(function(){
      console.log('async code executed');
      resolve();
     },1000)
});

promiseOne.then(function(){
  console.log("async completed");
})



//2 method

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async code 2 execyted');
    resolve({'name' : 'ritesh',
      age : 22,
    } )
  },1000);
}).then( (data) => {
  console.log(data);
})


//3 method
new Promise((resolve, reject) => {
  setTimeout( () => {
    let error = true;
    if(!error){
      resolve({ysername: 'ritesh' , password: 123})
    }
    else{
      reject('ERROR : something went wrong')
    }
  },1000)
}).then( function(user){
    console.log(user);
})
   
 
// then() and catch() method are ysed to read the resolve and reject state that ie 1.then() method is used to handle the resolved value of a Promise  ...
// It takes two arguments:
//  A function to execute when the Promise is resolved (success).
// 2.catch() method is used to handle rejected Promises.










// EXTERNAL WAY TO DEFINE CONSTRUCTOR



// class user {
//    constructor(username , email , password){
//     this.username = username
//     this.email = email
//     this.password = password
//    }

//    encryptPassword(){
//      return `${this.password}abc`
//    }
    
//    changeUsername(){
//     return `${this.username.toUpperCase()}`
//    }
// }

// const user1 = new user('ritesh' , 'abc@123gmail.coom' , 123);
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


//BEHIND THE SCENE 

function username(username , email , password){
  this.username = username
  this.email = email
  this.password = password
  console.log(this);
 }

 username.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
 }
// console.log(username());
 const yser1 = new username('hell' , 'hell@gmail.com' , 123)
 console.log(yser1);
 console.log(yser1.changeUsername());


 
//THIS refer to currnet contex ....
const user = {
  usrename: "ritesh",
  age: 24,
  welcomeMessage: function () {
    console.log(`${this.usrename}, welcome home`); // this refer to currnrt contex. ie the objects curly braces.
    console.log(this); // this refre to user
  }
}
user.welcomeMessage(); //welcomeMessage is method

console.log(this); // here this refer to the node context thats why empty {} is returned.

function fun() {
  console.log(this);
}
fun(); // in function this refer to GLOBAL context.

// function log() {
//   const user = "ritesh";   ==>> O/P will be undefined becs this is not used.  
//   console.log(this.user);
// }

// log()
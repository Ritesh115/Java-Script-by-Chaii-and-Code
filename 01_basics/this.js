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

console.log(this); // here this refre to the window object
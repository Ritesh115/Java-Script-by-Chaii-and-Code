class user{
  constructor(username){
    this.username = username;
  }

  logMe(){
console.log(`username: ${this.username}`);
  }

  static createId(){
    return `123`
  }
  //STATIC keywords it make the method private no one can access. neither we nor child class... 1. static keywords goes to user class then constryctor fynction and add valyes and retyrn its always a new instance.
}


const hitesh = new user('hitesh')
console.log(hitesh.createId())


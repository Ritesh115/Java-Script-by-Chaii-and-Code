class user {
  constructor(username){
  this.username = username ;
  }

  logMe(){
    console.log(`username is ${this.username}`);
  }
}

//EXTENDS keywords inherit all property from user class.
class Teacher extends user{
  constructor( username , email , password){
   super(username) //byt to access and assign the valye we need super keywords.. or syperConstryctor.
   this.email = email;
   this.password = password;
  }
  
  addCoyrse(){
    console.log(`A new coyrse was added by ${this.username}`);
  }
}

const user1 = new Teacher('ritesh' , 'abc@gmail.com' , 123);
user1.addCoyrse()

const user2 = new user('devesh');
user2.logMe()
user1.logMe()
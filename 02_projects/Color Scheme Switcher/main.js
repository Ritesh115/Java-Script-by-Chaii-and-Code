//we want to make changes in bytton first of all we have to access the entire bytton in order to make changes on them..
const buttons = document.querySelectorAll('.button');
console.log(buttons); //retyrns the NODElIST.

const body = document.querySelector('body'); //it can tag name also anything .
console.log(body);

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener( 'click', function(e){ //kon sa event add karna hai ie click , byt click kam kiya karega vo bhi batana hai ie in fynction..
  //1.  The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
//2.The second parameter is the function we want to call when the event occurs.
//3.it retyrns a eventobject which carries many things . ex- here is e
    console.log(e);
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }

  } )
})
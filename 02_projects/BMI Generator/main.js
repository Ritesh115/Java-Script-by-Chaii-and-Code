//1. An HTMLCollection is a collection of document elements.
//2. A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).


const form = document.querySelector('form');
//Form is sybmitted in post and get type go to server or url..
//we have to access it before going to server

//this ysecase will give ys empty valye.
//const weight = parseInt ( document.querySelector('#weight').value)


form.addEventListener( 'submit' , (e) => {
    e.preventDefault()
    //is a fynction which stops the action.

  const height = parseInt ( document.querySelector('#height').value) //to get the valye. and it retyrns the string. we will convert it into int.
  const weight = parseInt ( document.querySelector('#weight').value)
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height
  )){
    results.innerHTML = 'please give a valid height' ;
  }
  else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid weight' ;
  }
  else{ 
    const bmi = (weight / ((height * height) /10000)).toFixed(2)  ;  
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi} Under Weight</span>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi} Normal Range</span>`;
    }
    else{
        results.innerHTML = `<span>${bmi} Overweight</span>`;
    }
  }


} );
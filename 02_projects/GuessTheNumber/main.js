//we need no ypto 100 thats why *100
const randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);
const form = document.querySelector('.form')
let i = 10;
form.addEventListener( 'submit' , (e) =>{
  e.preventDefault();

  const guessField = parseInt(document.querySelector('.guessField').value);

  if(guessField === randomNum){
      document.querySelector('.lowOrHi').innerHTML = 'right g';
  }
  else {
    document.querySelector('.lowOrHi').innerHTML = 'wrong g'
    
  while(i >= 1){
    i--;
    document.querySelector('.lastResult').innerHTML = i;
    if(i !== 0) {
      break;
    }
    else{
      document.querySelector('.lastResult').innerHTML = 'no more guess left';
      document.querySelector('.lastResult').setAttribute('disabled="disabled"')
     disabled="disabled"
    }
  }

  }
});



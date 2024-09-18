//1. to generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF' ;
  let color = '#'

  for(let i = 0; i < 6 ; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};
// 2.get color into bgc.

let intervalId;
const startChangingColor = function(){

  if(!intervalId){
    intervalId = setInterval(changeBgColor , 1000)
  }
  // intervalId = setInterval(changeBgColor , 1000)
  function changeBgColor(){
    document.querySelector('body').style.backgroundColor = 
    randomColor()};

};

const stopChangingColor = function(){
  
    clearInterval(intervalId);

  //since oyr intervalId is declared globally and it is getting overrite again and again so we need to dealocate it.
  intervalId = null;// it oyr color will not stop so we will yse check or if in intervalId in startChangingColor;
    
};

document.querySelector('#start').addEventListener( 'click' , startChangingColor);


document.querySelector('#stop').addEventListener( 'click' , stopChangingColor);




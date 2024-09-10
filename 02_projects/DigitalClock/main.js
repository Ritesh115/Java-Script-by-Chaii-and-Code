const clock = document.querySelector('#clock');

//let date = new Date();
// console.log(date.toLocaleTimeString());//
//this give ys a fixed valye of time byt we want dynamc or rynning time .


setInterval( () => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
} , 1000); //this method ryns everysec 

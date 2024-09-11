const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

const form = document.querySelector('.form')

form.addEventListener( submit , (e) =>{
  console.log(e);
  console.log(e.target);
}  );
let trail = document.getElementById('trail')
let body = document.querySelector('body')
let logo = document.querySelector('.logo')
let a = document.querySelectorAll('li a')
let img = document.querySelector('.github-icon')
let btn  = document.querySelectorAll('.btn')


trail.addEventListener('click', ()=> {
  trail.classList.toggle('light')
  body.classList.toggle('light')
  logo.classList.toggle('light')
  a.forEach(a => {
    a.classList.toggle('light');
  });
  btn.forEach(btn => {
    btn.classList.toggle('light');
  });
  img.classList.toggle('light')
})
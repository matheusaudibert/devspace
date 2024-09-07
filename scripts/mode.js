let trail = document.getElementById('trail')
let body = document.querySelector('body')
let a = document.querySelectorAll('li a')
let search = document.querySelector('.search')
let box = document.querySelector('.search-box')
let icon = document.querySelector('.fa-magnifying-glass')
let btn  = document.querySelector('.btn')

trail.addEventListener('click', ()=> {
  trail.classList.toggle('light')
  body.classList.toggle('light')
  a.forEach(a => {
    a.classList.toggle('light');
  });
  search.classList.toggle('light')
  box.classList.toggle('light')
  icon.classList.toggle('light')
  btn.classList.toggle('light');
})
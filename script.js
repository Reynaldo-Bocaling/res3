let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let title = document.querySelector('.title');



menu.addEventListener('click', function(){
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
   title.classList.toggle('active');
})
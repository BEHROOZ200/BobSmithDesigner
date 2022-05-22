 const hambergur = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav ul');

 hambergur.addEventListener('click', function(){
     navbar.classList.toggle('active');
 });
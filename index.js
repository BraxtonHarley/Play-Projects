// const menuBtn = document.querySelector('.hamburger');
// const menu = document.querySelector('#menu');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('is-active');
//   menu.classList.toggle('is-active');
// });

const toggleMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.toggle("show-menu")
}
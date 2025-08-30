const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

hamburguer.addEventListener('click', () => {
  menu.classList.add('active');
  hamburguer.classList.remove('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
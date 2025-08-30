const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

// Abre o menu
hamburguer.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

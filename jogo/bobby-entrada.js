const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

hamburguer.addEventListener('click', () => {
  menu.classList.add('active');  
  hamburguer.style.color = '#137299'
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburguer.style.color = '#fff'
});

hamburguer.addEventListener('click', () => {  
  hamburguer.display = "none";   // Esconde o hamburguer
});
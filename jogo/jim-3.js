function verificarResposta(opcao) {
 
  if (opcao === 'C') {
    
    window.location.href = "jim-4.html";
  } else {
    abrirPopupErro();
  }
}

function abrirPopupErro() {
  document.getElementById("popupErro").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popupErro").style.display = "none";
}
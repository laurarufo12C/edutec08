function verificarResposta(opcao) {
  
  if (opcao === 'A') {
    
     window.location.href = "Glob-3.html";
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
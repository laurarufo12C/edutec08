
function verificarResposta(opcao) {
  // resposta correta = B
  if (opcao === 'B') {
    
    window.location.href = "Bobby-2.html";
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

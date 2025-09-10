function verificarResposta(opcao) {
  // resposta correta = B
  if (opcao === 'C') {
    
    // aqui você pode redirecionar para a próxima pergunta
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
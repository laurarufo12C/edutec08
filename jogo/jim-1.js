
  function verificarResposta(opcao) {
    // resposta correta = B
    if (opcao === 'B') {
      
      window.location.href = "jim-2.html";
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

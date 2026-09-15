
  function mostrarMensagem(redeSocial) {
    console.log("Redirecionando para: " + redeSocial);

    const toast = document.getElementById('toast');
    toast.textContent = '→ Redirecionando para o meu ' + redeSocial + '...';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }
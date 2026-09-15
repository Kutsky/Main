function mostrarMensagem(redeSocial) {
  console.log("Redirecionando para: " + redeSocial);

  const toast = document.getElementById('toast');
  toast.textContent = '> ABRINDO ' + redeSocial.toUpperCase() + '...';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

function atualizarRelogio() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  const agora = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  clock.textContent = pad(agora.getHours()) + ':' + pad(agora.getMinutes()) + ':' + pad(agora.getSeconds());
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

const buttons = document.querySelectorAll("button.saiba-mais");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("showModal");
    abrirModal(modalId);
  });
});

function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.showModal();
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  modal.close();
}
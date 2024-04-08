document.addEventListener('DOMContentLoaded', function() {
    var limparBtn = document.getElementById('limpar-btn');
    limparBtn.addEventListener('click', limparFormulario);
  });


function limparFormulario() {
    document.getElementById("form-contato").reset();
    console.log('apagou')
  }



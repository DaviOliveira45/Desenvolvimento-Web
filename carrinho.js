
let valorContador = 0;

function atualizarContador() {
  document.getElementById('contador').innerText = valorContador;
}

function aumentar() {
  valorContador++;
  atualizarContador();
}


function diminuir() {
    if (valorContador > 0) {
      valorContador--;
      atualizarContador();
    }
  }

  function adicionarItem(nomeItem) {
    // Criação de um elemento de linha para o carrinho
    var linha = document.createElement('div');
    linha.className = 'item-carrinho';
    linha.textContent = nomeItem;

    // Adiciona a linha ao carrinho
    document.getElementById('carrinho').appendChild(linha);
  }


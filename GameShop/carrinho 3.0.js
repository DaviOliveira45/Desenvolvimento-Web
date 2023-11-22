
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

  let valorContador1 = 0;

function atualizarContador1() {
  document.getElementById('contador1').innerText = valorContador1;
}

function aumentar1() {
  valorContador1++;
  atualizarContador1();
}


function diminuir1() {
    if (valorContador1 > 0) {
      valorContador1--;
      atualizarContador1();
    }
  }

   let valorContador2 = 0;

function atualizarContador2() {
  document.getElementById('contador2').innerText = valorContador2;
}

function aumentar2() {
  valorContador2++;
  atualizarContador2();
}


function diminuir2() {
    if (valorContador2 > 0) {
      valorContador2--;
      atualizarContador2();
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


import './App.css';

function App(){
document.getElementById('gerar').addEventListener('click', function() {

    let numerosEscolhidos = obterNumerosEscolhidos();
    
    if (numerosEscolhidos.length !== 6) {
        alert("Por favor, insira 6 números válidos.");
        return;
    }

    let numerosSorteados = gerarNumerosSorteados();

    let acertos = verificarAcertos(numerosEscolhidos, numerosSorteados);

    exibirResultado(numerosSorteados, acertos);
});

// ui.js

// Função para obter os números escolhidos pelo usuário
function obterNumerosEscolhidos() {
  let numerosEscolhidos = [];
  for (let i = 1; i <= 6; i++) {
      let num = parseInt(document.getElementById('num' + i).value);
      if (num >= 1 && num <= 60 && !numerosEscolhidos.includes(num)) {
          numerosEscolhidos.push(num);
      }
  }
  return numerosEscolhidos;
}

// lottery.js

// Função para gerar os números sorteados aleatórios
function gerarNumerosSorteados() {
  let numerosSorteados = [];
  while (numerosSorteados.length < 6) {
      let numSorteado = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numSorteado)) {
          numerosSorteados.push(numSorteado);
      }
  }
  return numerosSorteados;
}

// Função para verificar quantos acertos o usuário teve
function verificarAcertos(numerosEscolhidos, numerosSorteados) {
  return numerosEscolhidos.filter(num => numerosSorteados.includes(num)).length;
}


// Função para exibir o resultado na tela
function exibirResultado(numerosSorteados, acertos) {
  document.getElementById('numerosSorteados').textContent = numerosSorteados.join(", ");
  
  let resultadoMensagem = '';
  if (acertos === 6) {
      resultadoMensagem = 'Parabéns! Você acertou todos os números!';
  } else if (acertos >= 3) {
      resultadoMensagem = `Você acertou ${acertos} números.`;
  } else {
      resultadoMensagem = `Você acertou ${acertos} números. Tente novamente!`;
  }

  document.getElementById('resultadoMensagem').textContent = resultadoMensagem;
}

}



export default App;

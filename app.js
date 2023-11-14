let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirtextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
     exibirtextoNaTela('h1', 'Jogo do número secreto');
     exibirtextoNaTela('p', 'Escolha um númeror entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
     let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
          exibirtextoNaTela('h1', 'acertou!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
          exibirtextoNaTela('p', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          if (chute > numeroSecreto) {
               exibirtextoNaTela('p', 'o número secreto é menor');
          } else {
               exibirtextoNaTela('p', 'o número secreto é maior');
          }

          tentativas++;
          limparCampo();
     }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLIsta = listaDeNumerosSorteados.length;

     if(quantidadeDeElementosNaLIsta == numeroLimite) {
          listaDeNumerosSorteados = [];
     }

     if(listaDeNumerosSorteados.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
     } else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          return numeroEscolhido;
     }
}

function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}
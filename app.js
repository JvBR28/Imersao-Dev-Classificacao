var joao = {
    nome: "João",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = `
          <tr>
            <td>${joao.nome}</td>
            <td>${joao.vitoria}</td>
            <td>${joao.empate}</td>
            <td>${joao.derrota}</td>
            <td>${joao.pontos}</td>
            <td><button onClick="adicionarVitoria(joao)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(joao)">Empate</button></td>
            <td><button onClick="adicionarDerrota(joao)">Derrota</button></td>
          </tr>
          `;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }
  
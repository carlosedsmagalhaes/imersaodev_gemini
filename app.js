function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos e o campo de pesquisa.
    let section = document.querySelector("#resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Limpa espaços em branco no início e no final do termo de pesquisa.
    campoPesquisa = campoPesquisa.trim();
  
    // Verifica se o usuário digitou algum termo de pesquisa.
    if (!campoPesquisa) {
      // Se não digitou, exibe uma mensagem informando que nada foi encontrado.
      section.innerHTML =
        '<p class="resultado-pesquisa-vazia">Nada foi encontrado. Você não digitou nenhuma informação para que a busca fosse realizada.</p>';
      return; // Encerra a função.
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada item nos dados da pesquisa.
    dados.forEach((dado) => {
      // Converte todos os textos para maiúsculas para uma comparação case-insensitive.
      const termoPesquisaMaiusculo = campoPesquisa.toUpperCase();
      const tituloMaiusculo = dado.titulo.toUpperCase();
      const descricaoMaiusculo = dado.descricao.toUpperCase();
      const palavraChaveMaiusculo = dado.palavraChave.toUpperCase();
  
      // Verifica se o termo de pesquisa está presente em algum dos campos do item.
      if (
        tituloMaiusculo.includes(termoPesquisaMaiusculo) ||
        descricaoMaiusculo.includes(termoPesquisaMaiusculo) ||
        palavraChaveMaiusculo.includes(termoPesquisaMaiusculo)
      ) {
        // Se encontrar uma correspondência, cria o HTML para exibir o resultado.
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }
    });
  
    // Verifica se foram encontrados resultados.
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando.
      resultados = '<p class="resultado-pesquisa-vazia">Nada foi encontrado.</p>';
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa.
    section.innerHTML = resultados;
  }
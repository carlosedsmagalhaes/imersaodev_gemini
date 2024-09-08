function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.querySelector("#resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa.trim()) {
    section.innerHTML =
      '<p class="resultado-pesquisa-vazia">Nada foi encontrado. você não digitou nenhuma informação para que a busca fosse realizada.</p>';
    return;
  }
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Seleciona o elemento de entrada da pesquisa

  // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
  dados.forEach((dado) => {
    if (
      dado.titulo.toUpperCase().includes(campoPesquisa.toUpperCase()) ||
      dado.descricao.toUpperCase().includes(campoPesquisa.toUpperCase()) ||
      dado.palavraChave.toUpperCase().includes(campoPesquisa.toUpperCase())
    ) {
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  });

  if (!resultados) {
    resultados = '<p class="resultado-pesquisa-vazia">Nada foi encontrado.</p>';
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}

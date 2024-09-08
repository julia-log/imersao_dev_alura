function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada, não mostrar nenhum dado
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Resultado não encontrado</p>" 
    return
  }
   
  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.tags.toLowerCase().includes(campoPesquisa.toLowerCase())) {
      // ... (cria um novo elemento)
      resultados += `
      <div class="item-resultado">
          <h2>
            <a href="#" target"_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
          `;
    }
  }

  if (!resultados){
      resultados = "<p> Resultado não encontrado</p>"
  }

  // Insere o HTML construído na seção
  section.innerHTML = resultados;
}



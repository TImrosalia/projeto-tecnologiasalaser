function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    // se campoPesquisa for uma string sem nada, não quero mostrar nada
    if (!campoPesquisa) {
    section.innerHTML = "<p>Sem resultados busque por tecnologia ou equipamento.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase().split(" ")
      //Se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
                        <h2>
                          <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">Saber mais</a>
                      </div>
                      `;
      }         
    }
  
    if (!resultados) {
        resultados = "<p>Sem resultados.</p>"
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }





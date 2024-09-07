function apresentar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    for (let banco of bancos) {
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/databases/${banco.image}" class="lang-img" alt=${banco.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${banco.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${banco.description}
              </h2>
              <a target="_blank" href=${banco.website} class="lang-link">Website</a>
            </div>
        `;
      
        
    }
    // Cria um novo elemento HTML para cada resultado
    div.innerHTML = resultados;
}

function pesquisar(){
  // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira algum banco!</h1>"
      return
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";

    for (let banco of bancos) {
      
      nome = banco.name.toLowerCase()

      if (nome.includes(input)){
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/databases/${banco.image}" class="lang-img" alt=${banco.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${banco.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${banco.description}
              </h2>
              <a target="_blank" href=${banco.website} class="lang-link">Website</a>
            </div>
        `;
      } 
        
    }

    if(resultados == "") {
        div.innerHTML = "<h1 style='text-align: center;'>Nenhum banco de dado encontrado!</h1>"
        return
      }
    // Cria um novo elemento HTML para cada resultado
    div.innerHTML = resultados;

}
function apresentar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    for (let framework of frameworks) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/frameworks/${framework.image}" class="lang-img" alt=${framework.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${framework.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${framework.description}
              </h2>
              <a target="_blank" href=${framework.website} class="lang-link">Website</a>
            </div>
        `;
    }
    div.innerHTML = resultados;
}

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira algum framework!</h1>"
      return
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";

    for (let framework of frameworks) {

      nome = framework.name.toLowerCase()

        if (nome.includes(input)){
          resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/frameworks/${framework.image}" class="lang-img" alt=${framework.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${framework.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${framework.description}
              </h2>
              <a target="_blank" href=${framework.website} class="lang-link">Website</a>
            </div>
        `;
    }
  }

    if(resultados == "") {
        div.innerHTML = "<h1 style='text-align: center;'>Nada foi encontrado!</h1>"
        return
    }

    div.innerHTML = resultados;

}

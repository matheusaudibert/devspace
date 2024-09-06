function apresentar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    for (let linguagem of Linguagens) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/langs/${linguagem.image}" class="lang-img" alt=${linguagem.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${linguagem.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${linguagem.description}
              </h2>
              <p class="lang-year">Ano de Lançamento: <span class="year">${linguagem.releaseYear}</span></p>
              <a target="_blank" href=${linguagem.website} class="lang-link">Website</a>
            </div>
        `;
    }
    div.innerHTML = resultados;
}

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value;

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira alguma linguagem!</h1>"
      return
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";

    for (let linguagem of Linguagens) {
      
      nome = linguagem.name.toLowerCase()

        if (nome.includes(input)){

        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/langs/${linguagem.image}" class="lang-img" alt=${linguagem.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${linguagem.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${linguagem.description}
              </h2>
              <p class="lang-year">Ano de Lançamento: <span class="year">${linguagem.releaseYear}</span></p>
              <a target="_blank" href=${linguagem.website} class="lang-link">Website</a>
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
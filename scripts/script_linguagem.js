function apresentar() {
    
    let div = document.getElementById("lang-cards");

    
    let resultados = "";

    for (let linguagem of Linguagens) {
        
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
  
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira alguma linguagem!</h1>"
      return
    }

    
    let resultados = "";
    let nome = "";

    for (let linguagem of Linguagens) {
      
      nome = linguagem.name.toLowerCase()

        if (nome.includes(input)){

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
          div.innerHTML = "<h1 style='text-align: center;'>Nenhuma linguagem encontrada!</h1>"
          return
    }

    div.innerHTML = resultados;
}

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      pesquisar();
    }
  });
function apresentar() {
    
    let div = document.getElementById("lang-cards");

    
    let resultados = "";

    for (let framework of frameworks) {
        
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

    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira algum framework!</h1>"
      return
    }

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
        div.innerHTML = "<h1 style='text-align: center;'>Nenhum framework encontrado!</h1>"
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
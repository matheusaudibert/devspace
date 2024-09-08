function apresentar() {
    
    let div = document.getElementById("lang-cards");

    
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
    div.innerHTML = resultados;
}

function pesquisar(){

    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira algum banco!</h1>"
      return
    }

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

    div.innerHTML = resultados;
}


document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    pesquisar();
  }
});

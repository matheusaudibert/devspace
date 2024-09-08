function apresentar() {
    
    let div = document.getElementById("lang-cards");

    
    let resultados = "";

    for (let ia of ias) {
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/ias/${ia.image}" class="lang-img" alt=${ia.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${ia.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${ia.description}
              </h2>
              <a target="_blank" href=${ia.website} class="lang-link">Acesse aqui</a>
            </div>
        `;
      
        
    }
    
    div.innerHTML = resultados;
}

function pesquisar(){
  
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira alguma IA!</h1>"
      return
    }

    
    let resultados = "";
    let nome = "";

    for (let ia of ias) {
      
      nome = ia.name.toLowerCase()

      if (nome.includes(input)){
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/ias/${ia.image}" class="lang-img" alt=${ia.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${ia.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${ia.description}
              </h2>
              <a target="_blank" href=${ia.website} class="lang-link">Website</a>
            </div>
        `;
      } 
        
    }

    if(resultados == "") {
        div.innerHTML = "<h1 style='text-align: center;'>Nehuma IA encontrada!</h1>"
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
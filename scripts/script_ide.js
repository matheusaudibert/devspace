function apresentar() {
    
    let div = document.getElementById("lang-cards");

    
    let resultados = "";

    for (let ide of ides) {
      
        resultados += `
            <div class="lang-card">
              <div class="card-initial">
                <img src="/assets/ides/${ide.image}" class="lang-img" alt=${ide.name} />
                <div class="lang-info">
                  <label class="lang-label">Nome</label>
                  <h2 class="lang-name">${ide.name}</h2>
                </div>
              </div>
              <label class="lang-label">Descrição</label>
              <br />
              <h2 class="lang-desc">
                ${ide.description}
              </h2>
              <a target="_blank" href=${ide.download_link} class="lang-link">Baixe aqui</a>
            </div>
        `;
    }
    div.innerHTML = resultados;
}

function pesquisar(){
  
    let div = document.getElementById("lang-cards");

    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
      div.innerHTML = "<h1 style='text-align: center;'>Insira alguma IDE!</h1>"
      return
    }

    
    let resultados = "";
    let nome = "";

    for (let ide of ides) {
        

        nome = ide.name.toLowerCase()

        if (nome.includes(input)){

          resultados += `
              <div class="lang-card">
                <div class="card-initial">
                  <img src="/assets/ides/${ide.image}" class="lang-img" alt=${ide.name} />
                  <div class="lang-info">
                    <label class="lang-label">Nome</label>
                    <h2 class="lang-name">${ide.name}</h2>
                  </div>
                </div>
                <label class="lang-label">Descrição</label>
                <br />
                <h2 class="lang-desc">
                  ${ide.description}
                </h2>
                <a target="_blank" href=${ide.download_link} class="lang-link">Baixe aqui</a>
              </div>
          `;
    }
  }

  if(resultados == "") {
        div.innerHTML = "<h1 style='text-align: center;'>Nehuma IDE encontrada!</h1>"
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
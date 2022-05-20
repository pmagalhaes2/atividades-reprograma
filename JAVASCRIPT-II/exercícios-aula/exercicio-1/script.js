onst primeiraDiv = document.querySelector("#primeira-div");
const segundaDiv = document.querySelector("#segunda-div");
const terceiraDiv = document.querySelector("#terceira-div");
const paragrafo = document.querySelector("p");

// Imprimindo parágrafo
console.log(paragrafo);

// Alterando conteúdo parágrafo
paragrafo.innerHTML = "Alterando valor do parágrafo";

// Alterando o estilo das divs para que cada uma seja uma caixa com uma cor diferente

primeiraDiv.style.backgroundColor = "green";
primeiraDiv.style.width = "150px";
primeiraDiv.style.height = "150px";
primeiraDiv.style.margin = "20px";

segundaDiv.style.backgroundColor = "yellow";
segundaDiv.style.width = "150px";
segundaDiv.style.height = "150px";
segundaDiv.style.margin = "20px";

terceiraDiv.style.backgroundColor = "blue";
terceiraDiv.style.width = "150px";
terceiraDiv.style.height = "150px";
terceiraDiv.style.margin = "20px";

// Adicionando pelo javascript uma classe para o paragrafo
paragrafo.setAttribute("class", "paragrafo");

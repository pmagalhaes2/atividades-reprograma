const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const primeiroParagrafo = document.querySelector(".primeiro-paragrafo");
const segundoParagrafo = document.querySelector(".segundo-paragrafo");
const terceiroParagrafo = document.querySelector(".terceiro-paragrafo");
const div1 = document.querySelector(".primeira-div");
const div2 = document.querySelector(".segunda-div");
const link = document.querySelector(".link");

// Item removido pelo DOM
segundoParagrafo.remove();

// Item adicionado pelo DOM
const imagem = document.createElement("img");
imagem.setAttribute(
  "src",
  "https://miro.medium.com/max/1400/0*bQ2s1lDGEYzGjWVU"
);
imagem.setAttribute("alt", "imagem código javascript");
imagem.style.width = "350px";
imagem.style.height = "300px";
div1.appendChild(imagem);

// Adicionando evento ao 3° elemento
link.addEventListener("mouseover", alteraCorFundo);

function alteraCorFundo() {
  link.style.color = "#FFFFFF";
  link.style.backgroundColor = "black";
}


// Tornando o 5º elemento filho do 4º elemento
div1.appendChild(terceiroParagrafo);
div1.style.backgroundColor = "#F1F2F4";

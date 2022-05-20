//##### PARTE 1:
const section = document.querySelector(".blog_posts");
const title = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const paragrafo = document.querySelector("p");
const imagem = document.querySelector("img");
const link = document.querySelector("a");
const footer = document.querySelector("footer");

//Estilizando HTML
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.textAlign = "center";
section.style.padding = "10px 50px";

//Adicionando classe no parágrafo
paragrafo.classList.add("paragrafo");
paragrafo.style.textAlign = "justify";
paragrafo.style.padding = "20px 120px";

//Modificando estilo da imagem
imagem.style.width = "250px";
imagem.style.marginBottom = "20px";

//Alterando o href do link
link.setAttribute(
  "href",
  "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/article"
);

//Criando novo elemento
let footerText = document.createElement("p");
footerText.innerHTML =
  "Copyright © 2022 MDN Web Docs - Todos os direitos reservados";
footer.appendChild(footerText);

//##### PARTE 2:

//Elemento pai/mãe da tag article
let article = document.querySelector("article");
console.log(
  `O elemento pai/mãe da tag article é: ${article.parentElement.nodeName.toLowerCase()}`
);

//Elementos filhes da tag article
let children = article.childNodes;
let childrenList = [];
for (let i = 0; i < children.length; i++) {
  if (children[i].nodeName != "#text") {
    childrenList.push(children[i].nodeName.toLowerCase());
  }
}
console.log(`Os elementos filhes da tag article são: ${childrenList}`);

//Elementos mais pŕoximo da tag p
console.log(
  `O elemento mais próximo do parágrafo é: ${paragrafo.nextElementSibling.nodeName.toLowerCase()}`
);

//##### PARTE 3:

//Função altera comportamento imagem

imagem.addEventListener("mouseover", (event) => {
  imagem.style.width = "270px";
});

imagem.addEventListener("mouseout", (event) => {
  imagem.style.width = "250px";
});


/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

let JSON = [
  {
    imagem: "./images/Pose.jpg",
    titulo: "Pose",
    ano: "2018",
    diretor: "Ryan Murphy",
    generos: ["Drama"],
    elenco: [
      "Dominique Jackson",
      "Indya Moore",
      "Mj Rodriguez",
      "Angelica Ross",
      "Hailie Sahar",
    ],
    instagram: "https://www.instagram.com/poseonfx/",
  },
  {
    imagem: "./images/manhas.jpg",
    titulo: "Manhãs de Setembro",
    ano: "2021",
    diretor: "Luis Pinheiro",
    generos: ["Drama"],
    elenco: ["Liniker", "Linn da Quebrada"],
    instagram: "https://www.instagram.com/explore/tags/manhasdesetembroserie/",
  },
  {
    imagem: "./images/euphoria.jpg",
    titulo: "Euphoria",
    ano: "2019",
    diretor: "Sam Levinson",
    generos: ["Drama"],
    elenco: ["Hunter Schafer", "Ron Leshem", "Daphna Levin"],
    instagram: "https://www.instagram.com/euphoria/",
  },
  {
    imagem: "./images/veneno.jpeg",
    titulo: "Veneno",
    ano: "2020",
    diretor: "Javier Ambrossi",
    generos: ["Drama", "Biografia"],
    elenco: [
      "Daniela Santiago",
      "Jedet Sánchez",
      "Isabel Torres",
      "Lola Rodríguez",
      "Paca La Piraña",
    ],
    instagram: "https://www.instagram.com/venenolaserie/",
  },
  {
    imagem: "./images/legendary.jpg",
    titulo: "Legendary",
    ano: "2020",
    diretor: "Rik Reinholdtsen",
    generos: ["Reality Show", "Competição"],
    elenco: ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"],
    instagram: "https://www.instagram.com/legendarymax/",
  },
];

const cardsContainer = document.querySelector(".cardsContainer");

const teste = JSON.forEach((el) => {
  let cards = document.createElement("div");
  cards.classList.add("cards");
  cardsContainer.appendChild(cards);

  let image = document.createElement("img");
  image.setAttribute("src", el.imagem);
  cards.appendChild(image);

  let title = document.createElement("h3");
  title.innerHTML = el.titulo;
  cards.appendChild(title);

  let ano = document.createElement("p");
  ano.innerHTML = `<b>Ano</b>: ${el.ano}`;
  cards.appendChild(ano);

  let diretor = document.createElement("p");
  diretor.innerHTML = `<b>Diretor</b>: ${el.diretor}`;
  cards.appendChild(diretor);

  let generos = document.createElement("p");
  generos.innerHTML = `<b>Gêneros</b>: ${el.generos.join(' - ')}`;
  cards.appendChild(generos);

  let elenco = document.createElement("p");
  elenco.innerHTML = `<b>Elenco</b>: ${el.elenco.join(", ")}`;
  cards.appendChild(elenco);

  let instagram = document.createElement("span");
  instagram.innerHTML = `<b>Instagram</b>: ${el.instagram}`;
  cards.appendChild(instagram);
});

//Selecionar campos e input e botão
const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("button");


//Criando um novo elemento HTML, e setando o valor: `Sem permissão ` para ele
const form = document.querySelector("form");
const paragrafo = document.createElement("p");
paragrafo.innerText = "Sem permissão";
form.appendChild(paragrafo);


//Alterando o texto após clique no botão enviar
button.addEventListener("click", mensagem);

function mensagem(event) {
  event.preventDefault();
  const nome = inputName.value;
  if (nome) {
    paragrafo.innerText = `Olá, ${nome}!`;
  } else {
    alert("Favor preencher o campo nome");
  }
}

let formulario = document.querySelector(".formulario");
let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let buttonSubmit = document.querySelector(".buttonSubmit");
let div = document.querySelector(".main");

formulario.style.width = "250px";
formulario.style.height = "250px";
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.justifyContent = "center";
formulario.style.margin = "100px auto";
formulario.style.padding = "20px";
formulario.style.color = "#F0F7EE";
formulario.style.backgroundColor = "#25273E";
formulario.style.border = "2px solid #EE3A57";

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";

// background: #25273E;
// color: #F0F7EE;

labels.forEach((label) => (label.style.margin = "10px 0"));
inputs.forEach((input) => {
  input.style.color = "#F0F7EE";
  input.style.backgroundColor = "#25273E";
  input.style.border = "2px solid #EE3A57";
  input.style.borderRadius = "5px";
  input.style.height = "20px";
});

buttonSubmit.style.color = "#F0F7EE";
buttonSubmit.style.backgroundColor = "#EE3A57";
buttonSubmit.style.marginTop = "20px";
buttonSubmit.style.borderRadius = "5px";
buttonSubmit.style.height = "40px";

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let imagem = document.createElement("img");
  imagem.setAttribute(
    "src",
    "https://raw.githubusercontent.com/pmagalhaes2/siginform/main/assets/image.PNG"
  );
  imagem.style.width = "300px";
  imagem.style.height = "300px";
  imagem.style.margin = "auto";
  div.appendChild(imagem);
  let texto = document.createElement("p");
  texto.innerHTML = "Formulário desenvolvimento com HTML e CSS"
  div.appendChild(texto);
  texto.style.margin = "10px auto";
});


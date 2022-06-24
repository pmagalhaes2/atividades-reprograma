const input = document.getElementById("digimonInput");
const digimonImage = document.getElementById("digimonImg");
const digimonName = document.getElementById("digimonName");
const digimonLevel = document.getElementById("digimonLevel");

async function getDigimonByName(digimonInputValue) {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon/name/${digimonInputValue}`
    );
    const digimon = await response.data;
    renderCard(digimon);
  } catch (err) {
    alert("Não encontramos esse digimon, tente novamente!");
    document.location.reload(true);
  }
}

async function renderCard(digimon) {
  document.querySelector(".card").style.setProperty("display", "flex");
  digimonImage.setAttribute("src", digimon[0].img);
  digimonName.innerHTML = `<b>Name</b>: ${digimon[0].name}`;
  digimonLevel.innerHTML = `<b>Level</b>: ${digimon[0].level}`;
}

function resetInputValue() {
  input.value = "";
}

const button = document.querySelector("button");

button.addEventListener("click", function () {
  const digimonInputValue = input.value;
  getDigimonByName(digimonInputValue);
  resetInputValue();
});

document.addEventListener("keypress", function () {
  if (event.keyCode == 13) {
    const digimonInputValue = input.value;
    getDigimonByName(digimonInputValue);
    resetInputValue();
  }
});

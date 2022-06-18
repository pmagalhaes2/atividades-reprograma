const main = document.querySelector(".main");
const list = document.querySelector("ul");

async function listDigimon() {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`
    );
    const digimons = await response.data;
    addDigimonToList(digimons);
  } catch (err) {
    console.error(err);
  }
}

async function addDigimonToList(digimons) {
  digimons.map((digimon) => {
    const itemList = document.createElement("li");
    const digimonImage = document.createElement("img");
    digimonImage.setAttribute("src", digimon.img);
    const digimonName = document.createElement("p");
    digimonName.innerHTML = digimon.name;
    itemList.appendChild(digimonImage);
    itemList.appendChild(digimonName);
    list.appendChild(itemList);
  });

}

listDigimon();

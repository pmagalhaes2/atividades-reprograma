const input = document.querySelector(".input");
const button = document.querySelector(".search-button");
const section = document.querySelector("section");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = input.value.trim();
  userName ? getGitHubData(userName) : alert("Please enter a valid username");
  input.value = "";
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const userName = input.value.trim();
    userName ? getGitHubData(userName) : alert("Please enter a valid username");
    input.value = "";
  }
});

async function getGitHubData(user) {
  const url = `https://api.github.com/users/${user}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      createCard(data);
    } else {
      handleUserNotFound();
    }
  } catch (err) {
    console.error("Request was not successful", err);
  }
}

async function createCard(user) {
  const { name, avatar_url, bio, public_repos, login, followers } = user;
  section.innerHTML = `
  <div class="card">
  <img class="profile-img" src="${avatar_url}" alt="foto do avatar do github">
  <h2 class="title-green">${name}</h2>
  <h3>${login}</h3>
  <br>
  <p>${bio ? bio : ""}</p>
  <div class="line-empty"></div>
  <div class="profile-informations">
  <img class="icons" src="images/followers.png">
  <p><b>${followers}</b> followers</p>
  <a class="repositories-link"><img class="icons" src="images/repository.png"></a>
  <p><b>${public_repos}</b> repositories</p>
  </div>
  </div>
  `;

  const repositoriesLink = document.querySelector(".repositories-link");

  repositoriesLink.addEventListener("click", (event) => {
    getRepositories(login);
  });
}

function handleUserNotFound() {
  return (section.innerHTML = `
  <img class="not-found-img" src="./images/not-found.png">
`);
}

async function getRepositories(login) {
  const url = `https://api.github.com/users/${login}/repos`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      createRepositoriesCards(data);
    } else {
      handleNotFoundRepositories(login);
    }
  } catch (err) {
    console.error("Request was not successful", err);
  }
}

async function createRepositoriesCards(repositories) {
  const { name, description, language, stargazers_count } = repositories;

  const repositoriesList = document.createElement("div");
  repositoriesList.setAttribute("class", "repositories-list");
  section.appendChild(repositoriesList);

  repositories.map((repository) => {
    return (repositoriesList.innerHTML += `
    <div class="repository">
    <h2 class="title-green">${repository.name}</h2>
    <h3 class="repository-description">${
      repository.description ? repository.description : ""
    }</h3>
    <div class="informations">
    <p>${repository.language}</p>
    <p><img src="./images/star_border.png"> ${repository.stargazers_count}</p>
    </div>
    </div>
    `);
  });
}

function handleNotFoundRepositories(login) {
  section.innerHTML += `<h2 class="not-found-repositories">${login} doesn’t have any public repositories yet.</h2>
`;
}

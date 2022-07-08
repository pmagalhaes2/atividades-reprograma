import { useEffect, useState } from "react";

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/pmagalhaes2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <>
      {repositories.map((repository) => {
        return (
          <div className="repository-card">
            <h3>{repository.name}</h3>
            <br></br>
            <p>{repository.description}</p>
            <br></br>
            <a href={repository.html_url} target="_blank">
              <img src="/src/images/icon-arrow-white.png" alt="icon" />
            </a>
          </div>
        );
      })}
    </>
  );
}

export default Repositories;

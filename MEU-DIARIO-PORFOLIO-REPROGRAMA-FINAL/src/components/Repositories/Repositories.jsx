import { useEffect, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import "./repositories.css";

function Repositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/pmagalhaes2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  // Utilizando axios:
  //   const baseURL = "https://api.github.com/users/pmagalhaes2/repos";
  //   useEffect(() => {
  //     axios.get(baseURL).then((response) => setRepositories(response.data));
  //   }, []);

  return (
    <div className="repositories-container">
      {repositories.map((repository) => {
        return (
          <div className="repository-card" key={repository.id}>
            <h3>{repository.name}</h3>
            <br></br>
            <p>{repository.description}</p>
            <br></br>
            <a href={repository.html_url} target="_blank">
              <BsArrowReturnRight siz={16} color="#fff" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Repositories;

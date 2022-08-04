import projects from "../../data";
import "./projects.css";
import { BsArrowReturnRight } from "react-icons/bs";

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return (
          <div className="project-card" key={project.id}>
            <h2 className="project-title">{project.name}</h2>
            <img
              className="project-gif"
              src={project.gif}
              alt={`gif do projeto: ${project.name}`}
            />
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="enter-repo" target="_blank">
              <BsArrowReturnRight siz={16} color="#111" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

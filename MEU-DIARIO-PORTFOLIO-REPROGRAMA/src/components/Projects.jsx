import projects from "../data";
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
              alt="gif do projeto"
            />
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank">
              <img src="/src/images/icon-arrow-black.png" alt="icon" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

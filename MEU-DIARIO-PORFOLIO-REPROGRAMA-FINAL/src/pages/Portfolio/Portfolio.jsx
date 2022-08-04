import Header from "../../components/Header/Header";
import Repositories from "../../components/Repositories/Repositories";
import image from "../../assets/portfolio-image.svg";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

function Portfolio() {
  return (
    <>
      <Header image={image} description="imagem mulher organizando projetos">
        Meus projetos
      </Header>
      <Skills title="4 projetos feitos na Reprograma" />
      <Projects />
      <Skills title="Outros projetos no meu GitHub" />
      <Repositories />
    </>
  );
}

export default Portfolio;

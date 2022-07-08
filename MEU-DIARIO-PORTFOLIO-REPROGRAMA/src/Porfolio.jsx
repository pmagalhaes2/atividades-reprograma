import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function Porfolio() {
  return (
    <div className="main">
      <Header title="Meu Portfólio da Reprograma" />
      <About
        image="./src/images/profile.png"
        title="Prazer, Patricia"
        text="Aluna da turma On17 de Front-End da Reprograma e atualmente sou desenvolvedora
            Back-End na Creditas. Adoro aprender coisas novas e compartilhar
            conhecimento com outras pessoas."
      />
      <hr></hr>
      <Skills title="4 projetos feitos na reprograma" />
      <Projects />
      <Skills title="Outros projetos no meu GitHub" />
      <div className="repositories-container">
        <Repositories />
      </div>
      <Footer text="Feito com amor por Patricia" />
    </div>
  );
}

export default Porfolio;

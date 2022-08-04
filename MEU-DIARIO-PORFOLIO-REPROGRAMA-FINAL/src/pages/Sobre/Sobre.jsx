import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import profile_image from "../../assets/profile.png";
import about_me_image from "../../assets/about-me-image.svg";

function Sobre() {
  return (
    <>
      <Header
        image={about_me_image}
        description="imagem mulher com informações pessoais"
      >
        Sobre mim
      </Header>
      <About
        image={profile_image}
        title="Prazer, Patricia"
        text="Aluna da turma On17 de Front-End da Reprograma e atualmente sou desenvolvedora
      Back-End na Creditas. Adoro aprender coisas novas e compartilhar
      conhecimento com outras pessoas."
      />
    </>
  );
}

export default Sobre;

import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import Learning from "../../components/Learning/Learning";
import learning_image from "../../assets/learning-image.svg";

function Diario() {
  return (
    <>
      <Header
        image={learning_image}
        description="imagem mulher lendo diário"
      >
        Diário da Reprograma
      </Header>
      <Skills title="4 aprendizados na reprograma" />
      <Learning
        subtitle="Git"
        gif="https://66.media.tumblr.com/ba4a4fbea44e5a204ac2caec822aa934/tumblr_pu4kbqlg5o1w3diaio1_640.gif"
        text="Git é um sistema de controle de versão de código aberto
        distribuído que permite armazenar código, rastrear histórico de
        versão, mesclar alterações no código e reverter para versões de
        código anteriores quando necessário. Dentre seus inúmeros de
        benefícios está: controle e histórico de alterações, trabalho em
        equipe e melhora a velocidade e produtividade em equipe."
      />
      <Learning
        subtitle="HTML"
        gif="https://64.media.tumblr.com/1e6a2e7363d3df0f38e551cc032b552e/tumblr_pwnoawVj6K1qgpaguo1_540.gifv"
        text="HTML é uma linguagem de marcação de texto, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, 
        que são utilizados para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça 
        ou atue de determinada maneira. As tags anexas podem transformar uma palavra ou imagem num 
        hiperlink, pode colocar palavras em itálico e assim por diante."
      />
      <Learning
        subtitle="CSS"
        gif="https://64.media.tumblr.com/59f978705e7d1e166c5ed8f88c6322a3/tumblr_pu6akibOzd1v65ieho2_540.gifv"
        text="CSS é a abreviação de Cascading Style Sheet (folha em estilo cascata). É um mecanismo para adicionar estilo a um documento web. É aqui que conseguimos dar cor e fazer a maioria das animações dos nossos projetos. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível criar um link para um arquivo CSS externo que contém os estilos."
      />
      <Learning
        subtitle="JavaScript"
        gif="https://data.whicdn.com/images/328171925/original.gif"
        text="JavaScript é uma linguagem de programação que adiciona movimento às páginas web, além de permitir o processamento e transformação de dados enviados e recebidos. Ele permite criar conteúdos que se atualizam de forma dinâmica e animada, dando vida às aplicações que antes eram apenas estruturadas com HTML de forma estática."
      />
    </>
  );
}

export default Diario;

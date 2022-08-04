import Header from "../../components/Header/Header";
import contact_image from "../../assets/contact-image.svg";
import Form from "../../components/Form/Form";

function Contato() {
  return (
    <>
      <Header image={contact_image} description="imagem contato">
        Dúvidas? Entre em contato!
      </Header>
      <Form />
    </>
  );
}

export default Contato;

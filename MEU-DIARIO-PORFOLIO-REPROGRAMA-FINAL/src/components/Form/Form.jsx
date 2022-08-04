import "./form.css";

function Form() {
  return (
    <form>
      <div className="form-container">
        <div className="campo">
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="nome" id="nome" />
        </div>

        <div className="campo">
          <label htmlFor="sobrenome">Sobrenome: </label>
          <input type="text" name="sobrenome" id="sobrenome" required />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail: </label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="campo">
          <label htmlFor="telefone">Telefone: </label>
          <input type="tel" name="telefone" id="telefone" />
        </div>

        <div class="campo">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea rows="5" id="mensagem" nome="mensagem"></textarea>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;

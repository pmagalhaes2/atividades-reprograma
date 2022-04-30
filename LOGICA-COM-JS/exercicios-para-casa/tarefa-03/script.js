/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNasc = Number(prompt("Informe seu ano de nascimento: "));
let anoAtual = new Date();
let idade = anoAtual.getFullYear() - anoNasc;

idade >= 18
  ? console.log("Você poder comprar bebidas!")
  : console.log("Não estamos autorizados a vender álcool para menores");

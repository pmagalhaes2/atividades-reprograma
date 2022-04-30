/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements
    
    if...else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    Switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */

/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

let letraEscolhida = prompt(
  "insira uma letra qualquer do alfabeto"
).toLowerCase();
if (letraEscolhida === "a") {
  alert("É vogal");
} else if (letraEscolhida === "e") {
  alert("É vogal");
} else if (letraEscolhida === "i") {
  alert("É vogal");
} else if (letraEscolhida === "o") {
  alert("É vogal");
} else if (letraEscolhida === "u") {
  alert("É vogal");
} else {
  alert("É consoante");
}

switch (letraEscolhida) {
  case "a":
    alert("É vogal");
    break;
  case "e":
    alert("É vogal");
    break;
  case "i":
    alert("É vogal");
    break;
  case "o":
    alert("É vogal");
    break;
  case "u":
    alert("É vogal");
    break;
}

//

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/

let numeroEscolhido = prompt("Insira um numero de 1-7");
switch (numeroEscolhido) {
  case "1":
    alert("Segunda-feira");
    break;
  case "2":
    alert("Terça-feira");
    break;
  case "3":
    alert("Quarta-feira");
    break;
  case "4":
    alert("Quinta-feira");
    break;
  case "5":
    alert("Sexta-feira");
    break;
  case "6":
    alert("Sábado");
    break;
  case "7":
    alert("Domingo");
    break;
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let number1 = Number(prompt("Informe um número: "));
let number2 = Number(prompt("Informe outro número: "));

if (number1 > number2) {
  alert(`O número ${number1} é maior que o ${number2}`);
} else if (number2 > number1) {
  alert(`O número ${number2} é maior que o ${number1}`);
} else {
  alert(`Os números são iguais!`);
}

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média
     e mostre as seguintes mensagens de acordo com cada situação:
  
    Se a media for igual ou maior que 7 - Aprovado
    Se a media for maior e igual a cinco e menor que 7 - Recuperação 
    Se a media for menor que 5 - Reprovado
  
    Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
    Alunos de recuperação devem ver a mensagem: Você está de recuperação!
    Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));
let nota3 = Number(prompt("Nota 3: "));
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  alert("Parabéns, você foi aprovado, aproveite suas férias!");
} else if (media >= 5 && media <= 7) {
  alert("Você está de recuperação!");
} else {
  alert("Que pena, você foi reprovado.");
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let a = Number(prompt("Primeiro número: "));
let b = Number(prompt("Último número: "));

let soma = 0;
for (let i = a; i <= b; i++) {
  soma += i;
}

let i = a;
while (a <= b) {
  soma += 1;
  i++;
}

console.log(soma);

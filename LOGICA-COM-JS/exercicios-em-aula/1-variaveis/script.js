/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá, Mundo!";
console.log(message)


// 2. Crie uma variável que armazene seu nome
let name = "Patricia";

// 3. Crie uma variável que armazene o ano de seu nascimento
let year = 1995;

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let firstContact = false;

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(`Nome: ${name}, Ano Nascimento: ${year}, Primeiro contato: ${firstContact}`)

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(`Nome: ${typeof(nome)}`)
console.log(`Ano nascimento: ${typeof(year)}`)
console.log(`Primeiro contato: ${typeof(firstContact)}`)

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let aVariable;
console.log(`${aVariable}: ${typeof(aVariable)}`)

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let otherVariable = null;
console.log(`${otherVariable}: ${typeof(otherVariable)}`)



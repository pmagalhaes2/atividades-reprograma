/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let preco = parseFloat(prompt("Informe o preço da mercadoria: "));
let desconto = parseFloat(prompt("Informe o percentual de desconto: "))/100;
let valorAPagar = preco - (preco * desconto);
let valorDesconto = preco - valorAPagar;

alert(`O valor a ser pago após o desconto de ${desconto * 100}% é: R$${valorAPagar.toFixed(2)}\n
Visto que, a quantia economizada foi de: R$${valorDesconto.toFixed(2)}`);
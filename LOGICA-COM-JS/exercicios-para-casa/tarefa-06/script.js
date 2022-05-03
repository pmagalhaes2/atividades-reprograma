/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let pagamento = parseFloat(prompt("Quantia dada pelo cliente: "));
let total = parseFloat(prompt("Total da compra: "));
let troco = pagamento - total;

alert(`A total da conta é: R$${total.toFixed(2)} e a quantia dada em dinheiro é: R$${pagamento.toFixed(2)}\n
Sendo assim, o valor do troco é: R$${troco.toFixed(2)}`);


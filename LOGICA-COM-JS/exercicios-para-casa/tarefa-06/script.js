/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let pagamento = parseFloat(prompt("Quantia dada pelo cliente: "));
let total = parseFloat(prompt("Total da compra: "));
let troco = pagamento - total;
console.log(`Valor do troco: R$${troco}`)


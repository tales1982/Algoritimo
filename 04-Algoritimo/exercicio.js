//
//######################################Operaçoes Aritmeticas#######################################

function operacoes(){
    const VALOR1 = Number(prompt("Digite um valor."));
    const VALOR2 = Number(prompt("Digite outro valor."));
   alert(`----------RESULTADOS-----------
   \nSOMA = ${VALOR1 + VALOR2}
   \nDIFERENÇA = ${VALOR1 - VALOR2}
   \nSUBTRAÇAO = ${VALOR1 * VALOR2}
   \nDIVISAO INTEIRA = ${VALOR1 / VALOR2}
   \nRESTO DA DIVISAO = ${VALOR1 % VALOR2}`);
}
operacoes()
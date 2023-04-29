let buy = Number(prompt("Qual foi o valor total da compra"));
let reduction = (buy * 10)/100

if (buy <= 500 ){
    alert(`Voçe compro R$${buy} na nossa loja. Obrigado`)
}else if(buy >=501){
    alert(`Voçe compro R$${buy} na nossa loja. Obrigado
    ==================ATENÇAO====================

    Por fazer mais de R$500,00 em compras.
    Voçe vai reçeber R$${reduction} de desconto
    O valor a ser pago sera de R$${buy - reduction}!
    Volte sempre.`);
}else{
    alert("Obrigado")
}
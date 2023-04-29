let nota1 = Number(prompt("Digite sua primeira nota de (1 a 10)."));
let nota2 = Number(prompt("Digite sua segunda nota de (1 a 10)."));
let res = (nota1 + nota2) / 2

if(res <= 4.5){
    alert("Reprovado\nsua nota foi " + res)
}else if(res >=4.6 && res <=6 ){
    alert("Recuperaçao\nsua nota foi " + res )
}else if(res >= 6.1 && res <= 9){
    alert("parabens voçe passou\nsua nota foi " + res )
}else if(res >= 9.1 && res <=9.9){
    alert("Parabens voçe passou com otimas notas\nsua nota foi " + res);
}else if(res === 10){
    alert("Feliçitaçao voçe obteve nota maxima\nsua nota foi " + res);
}else{
    alert("Nota invalida")
}
//
//######################################Corversor de Medidas#######################################

function conversor(){
    const VALOR = prompt("Digite um valor em metros para converter em outras medidas.")
    alert(`      --------RESULTADO-----------
     A distancia de: ${VALOR} convertida é.
     ${VALOR / 1000} :KM
     ${VALOR / 100} :hectometro
     ${VALOR / 10} :decametro
     ${VALOR * 10} :decimetro
     ${VALOR * 100} :Centimetro
     ${VALOR * 1000} :Milimetro`);
}
conversor()

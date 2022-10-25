function carnaval(){
   let precos = Number(prompt("Digite o preço do produto."))
    let acresimo = (10 * precos) / 100
    let res = acresimo + precos
    return alert(`O preço do produto na epoca do carnaval custa R$${res} Reais.`)
}
function feriasEscolar() {
    let precos = Number(prompt("Digite o preço do produto."))
    let acresimo = (20 * precos) / 100
    let res = acresimo + precos
    return alert(`O preço do produto na epoca da Ferias Escolar custa R$${res} Reais.`)
}

function diasDasCriancas() {
    let precos = Number(prompt("Digite o preço do produto."))
    let acresimo = (5 * precos) / 100
    let res = acresimo + precos
    return alert(`O preço do produto na epoca do Dias Das Crianças custa R$${res} Reais.`)
}

function blackFriday() {
    let precos = Number(prompt("Digite o preço do produto."))
    let acresimo = (30 * precos) / 100
    let res = precos - acresimo 
    return alert(`O preço do produto na epoca do Black Friday custa R$${res} Reais.`)
}

function Natal() {
  let precos = Number(prompt("Digite o preço do produto."));
  let acresimo = (5 * precos) / 100;
  let res =  precos - acresimo;
  return alert(
    `O preço do produto na epoca do Natal custa R$${res} Reais.`
  );
}

function executar(){
    let opcao = ""
    do{
    opcao = prompt(`
    Escolha uma Ocasiao Abaixo.
    Reajustador De Preços.
    -------------------------------------------
    1° Carnalval                  [+ 10%].
    2° Ferias Escolar          [+ 20%].
    3° Dias Das Crianças   [+  5%].
    4° Black Friday             [- 30%].
    5° Natal                        [-  5%].
    6° Sair
    `)

switch(opcao){
    case "1":
        carnaval();
        break
    case "2":
        feriasEscolar()
        break
    case "3":
        diasDasCriancas()
        break
    case "4":
        blackFriday()
        break
    case "5":
        Natal()
        break
    case "6":
        alert("Saindo......")
        break
    default:
        alert("Opçao invalida tente novamente.")
}
}while(opcao != "6")
}
executar()

function soma(n1, n2){
    n1 = Number(prompt("Digite um numero.")); 
    n2 = Number(prompt("Digite outro numero.")); 
    let res = alert(`A soma de ${n1} + ${n2} = ${n1 + n2}`)
    return res
}

function subtracao(n1, n2){
n1 = Number(prompt("Digite um numero."));
n2 = Number(prompt("Digite outro numero."));
let res = alert(`A subtraçao de ${n1} - ${n2} = ${n1 - n2}`);
return res;
}

function divisao(){
n1 = Number(prompt("Digite um numero."));
n2 = Number(prompt("Digite outro numero."));
let res = alert(`A divisao de ${n1} / ${n2} = ${n1 / n2}`);
return res;
}

function multiplicasao(){
n1 = Number(prompt("Digite um numero."));
n2 = Number(prompt("Digite outro numero."));
let res = alert(`A multiplicasao de ${n1} * ${n2} = ${n1 * n2}`);
return res;
}

function executar(){
    let opcao=""
    do{ opcao = prompt(`
    ===========Super Tabuada=========
    Escolha uma das opçoes abaixo.
    1° Adiçao
    2° Subtraçao
    3° Multiplicaçao
    4° Divisao
    5° Sair
    `)
    switch(opcao){
        case "1":
            soma()
            break
        case "2":
            subtracao()
            break
        case "3":
            multiplicasao()
            break
        case "4":
            divisao()
            break
        case "5":
            alert("Saindo.....")
            break
        default:
            alert("Opçao invalida tente novamente.")
        break
    }
    }while(opcao !=5)
   
    
}
executar()
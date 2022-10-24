function mercurio(pesoTerra, res){
    pesoTerra = Number(prompt(`Digite seu pesso na terra`))
    res = alert(`Seu peso em Mercurio é de ${pesoTerra * 0.37} Kilos.`)
    return res
}
function venus(pesoTerra, res){
    pesoTerra = Number(prompt(`Digite seu pesso na terra`))
    res = alert(`Seu peso em Venus é de ${pesoTerra * 0.88} Kilos.`)
    return res
}

function marte(pesoTerra, res){
    pesoTerra = Number(prompt(`Digite seu pesso na terra`));
    res = alert(`Seu peso em Marte é de ${pesoTerra * 0.38} Kilos.`);
    return res;
}
function saturno(pesoTerra, res){
    pesoTerra = Number(prompt(`Digite seu pesso na terra`));
     let resultado = pesoTerra * 1.15
    res = alert(`Seu peso em Saturno é de ${resultado.toFixed(3)} Kilos.`);
   
    return res
}
function urano(pesoTerra, res){
    pesoTerra = Number(prompt(`Digite seu pesso na terra`));
    res = alert(`Seu peso em Urano é de ${pesoTerra * 1.17} Kilos.`);
    return res;
}
function executar(){
    let opcao = ""
    do{
        opcao = prompt
        ("Vamos calcular seu peso em outros planetas.\nDigite 1 para Mercurio\nDigite 2 para Venus\nDigite 3 para Marte\nDigite 4 para Saturno\nDigite 5 para Urano\nDigite 6 para sair.")

        switch(opcao){
            case "1":
                mercurio()
                break
            case "2":
                venus()
                break
            case "3":
                marte()
                break
            case "4":
                saturno()
                break
            case "5":
                urano()
                break
            case "6":
                alert("Saindo....")
                break
            default:
                alert("Digite uma opçao valida.")
        }

    }while(opcao != "6")
}
executar()
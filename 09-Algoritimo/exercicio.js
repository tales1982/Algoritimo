//De um aumento salarial para o fucionario
function fucionario(nome, salario, reajuste){
    nome = prompt("Nome do fucionario:");
    salario = Number(prompt("Digite o salario atual do fucionario: " + nome));
    reajuste = Number(prompt(`Digite a porçentagem que o fucionario ${nome} vai ter de reajuste %.`))
    let resultado = salario * reajuste / 100
    alert(`
    ${nome} ganhava ${salario}
    e depois de ganhar ${reajuste}% de aumento
    vai passar a ganhar R$ ${resultado + salario}.
    `)
}
fucionario()
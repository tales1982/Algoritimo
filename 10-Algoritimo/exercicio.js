// calcule quando tempo de vida eu perdi ate agora por fumar cigarros, sendo que 1 cigarro e reponsavel por 10 minutos de vida ao menos.

function executar(){
    let anos = Number(prompt("Ha quantos anos voçe fuma?"))//cada ano tem 365
    let cigarros = Number(prompt("Quantos cigarros voçe fuma por dia?"))//cada dia tem 1440 minutos
    let resultado =  (anos * 365) * cigarros 
    let dias = resultado * 10 /1440//esse 10 e o minutos de vida perdido.
    alert(`
    Ate agora voçe ja fumou ${resultado}
    e perdeu ${dias.toFixed(2)} de vida
    `)
}
executar()
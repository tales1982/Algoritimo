//Pintando uma parede
//Informaçao importante : um litro de tinta pinta 2m²

function parede(largura, altura){
    largura = Number(prompt("Digite a largura da parede"))
    altura = Number(prompt("Digite a altura da parede"))
    let res = largura * altura
    alert(`
    Largura da parede: ${largura}
    Altura da parede: ${altura}

    Uma parede de ${largura} x ${altura} tem uma area de ${res} m²
    Precisaremos de ${res / 2} latas de tintas.
    `)
}
parede()
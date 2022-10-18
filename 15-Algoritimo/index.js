const date = Number(prompt("Em que ano voçe naçeu"))
const currentDate = new Date();
const currentYear = currentDate.getFullYear()

const res = currentYear - date
if (res >= 65){
    alert(`
    Hoje,  em ${currentYear}, voce tem ${currentYear - date } certo?
====ATEÇAO ! DIRIJA-SE A FILA PREFERENCIAL====
    `)
}else{
    alert(`
    Hoje,  em ${currentYear}, voce tem ${currentYear - date } certo?
    Seja bem vindo(a) ao BANCO DE LUXEMBOURG!
    `);
}


let dinheiro = Number(prompt("O filme custa 15 Reais\nQuanto dinheiro voçe tem."))
let horario = new Date()
let hora = horario.getHours()


if (dinheiro >= 15 && hora < 20){
  alert(
    `Agora sao ${hora} Horas.
    Voçe consegue compra o ingresso.
    Seja bem vindo(a)!
  `)
}else{
  alert(
    `Agora sao ${hora} horas.
    Infelismente nao é possivel compra o ticker.
  `)
}

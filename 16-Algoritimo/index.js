const idade = Number(prompt("Em que ano voçe naçeu?"))
const year = new Date()
const currentDate = year.getFullYear();
const res = currentDate - idade
if (res < 17){
    alert(`Voçe tem ${res} anos, com essa idade voçe ainda nao pode se alistar. `)
}else if(res >=18 && res <=20){
    alert(`Voçe tem ${res} anos,  espero que voçe esteja fazendo o alistamento militar.`)
}else{
    alert(`Voçe tem ${res} anos, obrigado por ter servido sua patria.`)
}
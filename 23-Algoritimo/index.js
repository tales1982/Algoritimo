let idade =Number(prompt("Em que ano voçe naceu?"))
let dataAtual = new Date()
let ano = dataAtual.getFullYear()
let res = ano - idade
let idadeMaior = 18 + idade

if(res < 18){
  alert(`
  Estamos em ${ano} e voçe tem ${res} anos.
  Voçe ainda nao completou 18 anos. isso vai aconteçer em ${idadeMaior}.
  ainda folta(m) ${ idadeMaior - ano } anos(s)
  `)
}else if(res == 18 ){
  alert(`
  Estamos em ${ano} e voçe tem ${res} anos.
 Jovem! voçe completa ${res} anos este ano de ${ano}.Corra para se alistar.`);
}else{
  alert(`
  Estamos em ${ano} e voçe tem ${res} anos.
  Voçe ja deveria ter se alistado no de ${idadeMaior}.
  Voce esta atrassado ${ano - idadeMaior} anos.
  `);
}

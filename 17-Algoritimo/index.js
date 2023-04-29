
/*
function anoA(a){
    a = 1992
let res = a % 4
console.log(res)
    if( res === 0){
        alert("anoBisexto")
        //return AnoB()
    }else{
        alert("O ano não é um ano bissexto (tem 365 dias).");
    }
}

function anoB(a) {
  a = 1992;
  let res = a % 100;
  console.log(res);
  if (res === 0) {
    return AnoC();
  } else {
    alert("O ano não é um ano bissexto (tem 365 dias).");
  }
}
function anoC(a) {
  a = 1992;
  let res = a % 400;
  console.log(res);
  if (a === 0) {
    return alert("O ano é um ano bissexto (tem 366 dias).");
    alert("O ano não é um ano bissexto (tem 365 dias).");
  }
}

anoA()*/
let teste1 = Number(prompt("Digite um ano para ver se o ano e bissesto"))
let teste2 = teste1 % 4
console.log(teste2)
let teste3 = teste1 % 100
console.log(teste3);
let teste4 = teste1 % 400
console.log(teste4);
if (teste2 === 0 && teste3!== 0 ||teste4 === 0){
  alert("O ano é um ano bissexto (tem 366 dias)..");
}
else{
  alert("O ano não é um ano bissexto (tem 365 dias).");
} 
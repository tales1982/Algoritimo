

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
/*
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

*/anoA()
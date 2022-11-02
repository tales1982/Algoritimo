let contador = 1
let par = 0
let impar = 0

while(contador <=5){
  let numero = Number(prompt("digite um numero"))
  if(numero %2 == 0){
    par += numero
    
  }else{
    impar += numero
    
  }
contador ++
}

console.log("A soma dos pares deu " + par)
console.log("A soma dos impares deu " + impar);
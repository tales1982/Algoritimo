let n1 = Number(prompt("Digite o 1° numero."));
let n2 = Number(prompt("Digite o 2° numero."));
let n3 = Number(prompt("Digite o 3° numero."));

if(n1 > n2){
    if(n3 > n1){
        alert(`Maior = ${n3}\nMeio = ${n1}\nMenor = ${n2}`)
    }else if(n3 > n2){
        alert(`Maior = ${n1}\nMeio = ${n3}\nMenor = ${n2}`);
    }else{
        alert(`Maior = ${n1}\nMeio = ${n2}\nMenor = ${n3}`);
    }
}else if(n3 > n2){
    alert(`Maior = ${n3}\nMeio = ${n2}\nMenor = ${n1}`);
}else if (n3 > n2){
    alert(`Maior = ${n2}\nMeio = ${n3}\nMenor = ${n1}`);
}else{
    alert(`Maior = ${n2}\nMeio = ${n1}\nMenor = ${n3}`);
}
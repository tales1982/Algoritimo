//
//######################################Media do Aluno#######################################

function media(a , b , c , d){
a = Number(prompt("Digite sua primeira nota."));
b = Number(prompt("Digite sua segunda nota."));
c = Number(prompt("Digite sua terceira nota."));
d = Number(prompt("Digite sua Quarta nota."));


alert(`-----RESULTADO-----
Sua primeira nota foi: ${ a}
sua segunda nota foi: ${ b}
sua terçeira nota foi: ${ c}
sua quarta nota foi: ${ d}
Sua media final é de: ${(a + b + c + d) / 4}`);
}
media()



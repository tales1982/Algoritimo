const fristName = prompt("Ola qual o seu primeiro nome?");
const lastName = prompt("Qual seu sobrenome?")

alert(`Ola ${fristName +" "+ lastName}.
Seu primeiro nome é ${fristName}.
E seu primeiro nome tem ${fristName.length} letras..
Seu sobre nome tem ${lastName.replace(" ","").length} letras.
`)
console.log(lastName.replace(" ", "").length);


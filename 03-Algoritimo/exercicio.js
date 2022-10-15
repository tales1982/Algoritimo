//#####################################1° Opçao#################################################

/*const numero = Number(prompt("Me diga um numero"))
let antecessor = Number(numero - 1)
let sucessor = Number(numero + 1)
alert(`O antecessor de ${numero} é o valor ${antecessor}\nO sucessor de ${numero} é o valor ${sucessor}`);


*/
//#####################################2° Opçao#################################################
// assim o codigo fica mais limpo.
const numero = Number(prompt("Me diga um numero"));

alert(
  `O antecessor de ${numero} é o valor ${numero - 1}\nO sucessor de ${numero} é o valor ${numero + 1}`
);


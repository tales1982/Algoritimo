let n1 = Number(prompt("Digite um numero!"));
let n2 = Number(prompt("Digite outro numero!"));

if (n1 > n2) {
  alert(`Primeiro valor ${n1}.
  Segundo valor ${n2}.
  Os numeros em orde do menor para maior ficam ${n2} e  ${n1}`);
} else if (n1 < n2) {
  alert(`
  Primeiro valor ${n1}.
  Segundo valor ${n2}.
  Os numeros em orde do menor para maior ficam ${n1} e ${n2}`);
} else {
  alert(`Os numeros ${n1} e ${n2} sao identicos.`);
}

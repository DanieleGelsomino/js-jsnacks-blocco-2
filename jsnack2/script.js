// console check
console.log("JS OK!");

// consegna:
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// VERSIONE FOR

// let somma = 0;

// for (let inputNumero = 0; inputNumero < 5; inputNumero++) {
//   const inputNumero = parseInt(prompt("digita un numero"));
//   if (isNaN(inputNumero)) {
//     alert("inserisci un numero!");
//   } else {
//     somma += inputNumero;
//
//   }
// }

// console.log(`la somma dei numeri inseriti è : ${somma}`);

// VERSIONE WHILE

let somma = 0;
let inputNumero;

while (isNaN(parseInt(inputNumero))) {
  inputNumero = prompt("inserisci un numero");
}

for (let inputNumero = 0; inputNumero < 5; inputNumero++) {
  const inputNumero = parseInt(prompt("digita un numero"));
  if (isNaN(inputNumero)) {
    alert("inserisci un numero!");
  } else {
    somma += inputNumero;
  }
}

console.log(`la somma dei numeri inseriti è : ${somma}`);

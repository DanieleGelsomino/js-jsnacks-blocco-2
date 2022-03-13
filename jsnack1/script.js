// console check
console.log("JS OK!");

// consegna:
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

let somma = 0;
const numeri = [];
const n = 15;

for (let i = 0; i < n; i++) {
  numeri.push(Math.floor(Math.random() * 100));
}

console.log(numeri);

for (let i = 0; i < numeri.length; i++) {
  if (i % 2 !== 0) {
    somma += numeri[i];
  }
}

console.log(`somma numeri in posizione dispari : ${somma}`);

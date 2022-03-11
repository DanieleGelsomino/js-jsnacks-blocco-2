// console check
console.log("JS OK!");

// consegna:
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const listOne = ["ciao", 14, "Zlatan", 11, "Milan"];
const ListTwo = [9, "Giroud"];

while (ListTwo.length < listOne.length) {
  ListTwo.push(Math.floor(Math.random() * 100) + 1);
  console.log(ListTwo);
}

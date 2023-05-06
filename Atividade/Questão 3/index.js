/*3. Crie um programa que peça ao usuário para digitar uma frase e, em seguida, conte quantas vezes a letra "a" aparece na frase. Imprima o resultado no console.*/


let phrase = prompt("Digite uma frase:");
let cont = 0;

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === 'a' || phrase[i] === 'A') {
    cont++;
  }
}

console.log(`A letra 'a' aparece ${cont} vezes na frase.`);
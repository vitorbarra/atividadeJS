/*4. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula. Em seguida, converta essa lista em um array e calcule a média dos números. Imprima o resultado no console.*/


let list = prompt("Digite uma lista de números separados por vírgula: ");
let number = list.split(",");
let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += parseFloat(number[i]);
}

let med = sum / number.length;

console.log(`A média dos números é: ${med}`);
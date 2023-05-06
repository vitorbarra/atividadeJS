/*2. Crie um programa que peça ao usuário para digitar dois números e, em seguida, calcule a soma, subtração, multiplicação e divisão desses números. Imprima os resultados no console.*/

let num1 = parseInt(prompt("Digite um numero inteiro: "))
let num2 = parseInt(prompt("Digite outro número inteiro: "))

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("O resultado da soma dos dois números é: " + sum);
console.log("O resultado da subtração dos dois números é: " + sub);
console.log("O resultado da multiplicação dos dois números é: " + mul);
console.log("O resultado da divisão dos dois números é: " + div);
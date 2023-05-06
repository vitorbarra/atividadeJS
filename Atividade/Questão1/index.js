//1. Crie um programa que peça ao usuário para digitar um número inteiro e, em seguida, verifique se o número é par ou ímpar. Imprima o resultado no console.

let num = parseInt(prompt("Digite um numero inteiro: "))

if (num % 2 === 0) {
    console.log(num, "é par")
    } else {
        console.log(num, "é impar")
}
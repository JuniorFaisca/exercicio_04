# /* Exercício 3
Array de inteiros
Em um array de inteiros [0..100], implemente as seguintes funcionalidades:

- 1 -> Retorne os números pares
- 2 -> Retorne os números ímpares
- 3 -> Retorne os numeros primos
- 4 -> Retorne a soma dos números pares
- 5 -> Retorne a soma dos números ímpares
- 6 -> Retorne a soma dos números primos
*/

const items = Array.from({length: 101}, (_, i) => i);

const isPar = items.filter(isNumeroPar);
const isImpar = items.filter(isNumeroImpar);
const isPrimo = items.filter(isNumeroPrimo);


// Exemplo de uso da função isNumeroPar
// Função que verifica se um número é par
function isNumeroPar(numero) {
    return numero % 2 === 0;
}

function isNumeroPrimo(numero) {
    for (let i = 2; numero > i; i++){
        if (numero % i === 0) return false;
    }
    return numero > 1;
}

function isNumeroImpar(numero) {
    return numero % 2 !== 0;
}

function printNumerosPares() {
    console.log(isPar);
}

function printNumerosImpares() {
    console.log(isImpar);
}

function printNumerosPrimos() {
    console.log(isPrimo);
}

function somaDosPares() {
    return isPar.reduce((acumulador, numero) => acumulador + numero, 0);
}

function somaDosImpares() {
    return isImpar.reduce((acumulador, numero) => acumulador + numero, 0);
}

function somaDosPrimos() {
    return isPrimo.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(
    printNumerosPares(),
    printNumerosImpares(),
    printNumerosPrimos(),
    somaDosPares(),
    somaDosImpares(),
    somaDosPrimos()
);

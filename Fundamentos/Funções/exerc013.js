const prompt = require("prompt-sync")();

function impar(a) {
    if (a % 2 !== 0) {
        return "impar";
    } else {
        return "par";
    }
}

const numero = Number(prompt("Digite um número: "));
console.log(impar(numero));
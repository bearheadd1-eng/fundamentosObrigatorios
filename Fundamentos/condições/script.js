//Condições em JavaScript
//Condições na lógica de programação servem para tomar decisões no código. O programa verifica se algo é verdadeiro ou falso e, dependendo do resultado, executa uma ação diferente.
// “SE acontecer isso, FAÇA aquilo.”

//Estrutura de uma condição
if (condição) {
    // código a ser executado se a condição for verdadeira
} 

//Exemplo de condição
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

//idade >= 18 é a condição
// Se for verdadeira, o código dentro do bloco if será executado, imprimindo "Você é maior de idade." no console.

// if e else
// else executa quando a condição do if é falsa
let idade = 16;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// if, else if e else
// else if é usado para verificar múltiplas condições
let idade = 70;
if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 65) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}

//Operadores de comparação
// == (igual a)
// != (diferente de)
// === (estritamente igual a, compara valor e tipo)
// !== (estritamente diferente de, compara valor e tipo)
// > (maior que)
// < (menor que)
// >= (maior ou igual a)
// <= (menor ou igual a)

//Exemplo de operadores de comparação
let numero = 10;
if (numero > 5) {
    console.log("O número é maior que 5.");
}
//Operadores lógicos
// && (E), || (OU), ! (NÃO)
// exemplo de operadores lógicos
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

//exemplo de operador lógico OR
let dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
    console.log("É fim de semana!");
} else {
    console.log("É dia de semana.");
}

//exemplo de operador lógico NOT
let isRaining = false;
if (!isRaining) {
    console.log("Não está chovendo, pode sair sem guarda-chuva.");
} else {
    console.log("Está chovendo, leve um guarda-chuva.");
}

//Exemplo prático completo
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.");
}

//Dica em Javascipt
// == compara apenas o valor, enquanto === compara o valor e o tipo. É recomendado usar === para evitar erros de comparação.
5 == "5"; // true, porque os valores são iguais
5 === "5"; // false, porque os tipos são diferentes (number e string)

//Segunda dica Par ou Ímpar
let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par.");
}


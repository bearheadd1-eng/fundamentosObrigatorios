//Oque é uma Função?
//Uma Função é um bloco de código reutilizavel que executa uma tarefa especifica.
//Extrutura Básica de uma Função

/*
function nomedaFuncao() {
    //Código aqui
}
    */

//Function - Palavra reservada para criar função
//nomedaFunção - Nome da Função
//() - Parênteses onde ficam os parâmetros
//{} - Bloco de código da função

//Primeiro Exemplo
function saudacao() {
    console.log("Olá, Mundo!");
}

//Chamando (Executando) a Função
saudacao(); // Saida = Olá, Mundo!

//Exemplo Parâmetro
function saudar(nome) {
    console.log("Olá, " + nome);
}

saudar("Breno")

//Entendendo o parâmetro
//Function saudar(nome)
// nome é uma variável criada dentro da função

//Quando fazemos:
//Saudar("Breno");
//O valor "Breno" entra no parâmetro nome.

//Mútiplos parâmetros
function soma(a, b) {
    console.log(a + b);
}

soma(5, 3);
//Resultado = 8

//Diferença entre parâmetro e argumento
//function soma(a, b) 
//a e b = parâmetro

//soma(5, 3);
//5 e 3 = argumento

//Return (Retorno)
//Exemplo
function multiplicar(a, b) {
    return a * b;
}
//usando:
let resultado = multiplicar(4, 5);
console.log(resultado);
//Resultado
//20

// Oque o return faz?
// O return:
//1. Deixa um valor
//2. Encerra a função

//Exemplo
function teste() {
    return "Olá";

    console.log("Isso nunca executa");
}
//Tudo depois de return é ignorado.

//Função sem return
function mensaem() {
    console.log("Oi")
}
mensaem();
// Essa função apenas executa algo.

//Escopo de função
/*
function teste() {
    let nome = "Breno";
}

console.log(nome);
*/
//Resultado = ERROR

//Tipos de Funções
// 1. Function Declaration
//A Forma tradicional.
/*
function somar(a, b) {
    return a + b;
}

//2. Function Expression
//Funlção armazenada em váriavel.
const somar = function(a, b) {
    return a + b;
}; */

//3. Arrow Function
//Forma Morderda.
/*
const somar = (a, b) => {
    return a + b;
}; */
//Forma curta:
const somar = (a, b) => a + b;

//Comparando
//Tradicional
function dobro(n) {
    return n * 2;
}

//Arrow Funcion
const dobro = (n) => n * 2;

//Exemplo Real
//Sem Função:
let n1 = 5;
let n2 = 10;

console.log(n1 + n2);

let n3 = 20;
let n4 = 30;

console.log(n3, n4);

//Com Função:
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10));
console.log(somar(20, 30));
//Muito Melhor

//Funções podem chamar Funções
function nome() {
    return "Breno";
}

function saudacao() {
    console.log("Olá" + nome());
}

saudacao();

//Resultado: OLá Breno

//Function = Cria Função
//Parâmetro = Infromação recebida
//Argumento = Valor enviado
//Return = Retorn valor
//() = Executa função
//{} = Bloco de função

//Exemplo Completo
function calcularMedia(n1, n2) {
    let media = (n1 + n2) / 2;
    return media;
}

let resultado = calcularMedia(8, 6);

console.log(resultado);
//Resultado: 7
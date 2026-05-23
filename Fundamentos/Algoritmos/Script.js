// Oque é um algoritmo?
// Algoritmo é um conjunto de passos para resolver um problema ou realizar uma tarefa.
// Exemplo de algoritmo para fazer um café:
// "Como fazer um café?"
// 1. Pegue a água
// 2. Ferva a água
// 3. Pegue o café
// 4. Coloque o café no filtro
// 5. Passe a água fervida pelo filtro
// 6. Sirva o café

// Isso já é um algoritmo, pois é um conjunto de passos para realizar uma tarefa.

// Na Programação é a mesma coisa, um algoritmo é um conjunto de passos para resolver um problema ou realizar uma tarefa, mas em vez de ser escrito em linguagem natural, é escrito em uma linguagem de programação.
// Você cria passos lógicos para o computador seguir e resolver um problema ou realizar uma tarefa.

// Algoritmo na Programação
// Exemplo Simples:
// Plobrema: "Mostrar 'Olá' 5 vezes"

// Passos do algoritmo:
// 1. Criar contador = 0
// 2. Repetir enquanto for menor que 5
// 3. Mostrar "Olá"

// Em JavaScript, isso pode ser escrito assim:
for(let contador = 0; contador < 5; contador++) {
    console.log("Olá");
}
// Esse código é um algoritmo que mostra "Olá" 5 vezes no console. Ele cria um contador, verifica se ele é menor que 5, e se for, mostra "Olá" e incrementa o contador.

// Estrtura básica de um algoritmo:
// Quase todo algoritmo tem:
// 1. Entrada: Dados que o algoritmo recebe para processar.
// Exemplo:
let nome = "João"; // Entrada de dados

// 2. Processamento: O que o algoritmo faz com os dados de entrada para chegar a um resultado.
let saudacao = "Olá, " + nome + "!"; // Processamento dos dados

// 3. Saída: O resultado final que o algoritmo produz após o processamento.
console.log(saudacao); // Saída do resultado

// Exemplo completo:
// Problema: "Calcular a soma de dois números"
let numero1 = 5; // Entrada
let numero2 = 10; // Entrada

let soma = numero1 + numero2; // Processamento

console.log("A soma é: " + soma); // Saída

// Oque aconteceu?
//Entrada: O algoritmo recebeu os números 5 e 10 como entrada.
//Processamento: O algoritmo somou os dois números para obter o resultado.
//Saída: O algoritmo exibiu "A soma é: 15" como resultado final.

// Como pensar como um algoritmo?
// A Maior habilidade da programação é: "Quebrar problemas grandes em pequenos passos". Isso é o que chamamos de "Pensar como um algoritmo" ou "Pensamento Algorítmico".
// Para pensar como um algoritmo, você deve:
// 1. Entender o problema: Leia o problema com atenção e certifique-se de entender o que é pedido.
// 2. Dividir o problema em partes menores: Quebre o problema em etapas menores e mais gerenciáveis.
// 3. Criar um plano: Escreva os passos que você precisa seguir para resolver o problema.
// 4. Implementar o plano: Escreva o código para executar os passos do seu plano.
// 5. Testar e ajustar: Execute seu código, veja se ele funciona como esperado, e faça ajustes se necessário.

// Exemplo Prático:
// Problema: "Descobrir se um número é par ou ímpar"
// Como pensar como um algoritmo para resolver esse problema?

// 1. Receber número como entrada
// 2. Dividir o número por 2
// 3. Se o resto da divisão for 0, o número é par
// 4. Se o resto da divisão for diferente de 0, o número é ímpar

// Implementação em JavaScript:
let numero = 8; // Entrada

if (numero % 2 === 0) { // Processamento
    console.log("O número é par."); // Saída
} else {
    console.log("O número é ímpar."); // Saída
}

// Tipos comuns de algoritmos:
// 1. Algoritmo de decisão: Algoritmos que tomam decisões com base em condições (exemplo: if-else).
// Exemplo:
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 2. Algoritmo de repetição: Algoritmos que repetem um conjunto de instruções (exemplo: for, while).
// Exemplo:
for (let i = 0; i < 5; i++) {
    console.log("Repetição número: " + i);
}
// 3. Algoritmo de busca: Algoritmos que procuram por um valor específico em uma coleção de dados (exemplo: linear search, binary search).
// Exemplo de busca linear:
let array = [1, 2, 3, 4, 5];
let valorProcurado = 3;
let encontrado = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === valorProcurado) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    console.log("Valor encontrado no array.");
}

// 4. Algoritmos matemáticos: Algoritmos que realizam operações matemáticas (exemplo: cálculo de fatorial, cálculo de potência).
// Exemplo de cálculo de fatorial:
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
console.log("Fatorial de 5 é: " + fatorial(5)); // Saída: Fatorial de 5 é: 120

// 5. Algoritmo matematico mais facil: Cálculo de multiplicação
let a = 5;
let b = 10;
console.log(a * b); // Saída: 50

// Um algoritmo pode ser escrito antes do código
// Isso se chama de pseudocódigo, que é uma forma de escrever um algoritmo usando uma linguagem mais próxima da linguagem natural, sem se preocupar com a sintaxe específica de uma linguagem de programação. O pseudocódigo ajuda a planejar o algoritmo antes de implementá-lo em código real.

// Exemplo
// Inicio
// Receber número como entrada
// Se o número for par, mostrar "O número é par"
// Senão, mostrar "O número é ímpar"
// Fim

// O segredo para aprender algoritmos é praticar muito, quebrar problemas em partes menores, e sempre pensar em como resolver um problema antes de escrever o código. Com o tempo, você vai se tornar cada vez melhor em pensar como um algoritmo e resolver problemas de forma eficiente.

// Dica: Tente resolver problemas de algoritmos em sites como HackerRank, LeetCode, ou CodeSignal para praticar suas habilidades de pensamento algorítmico.

// Dica Importante: Antes de programar:
// Pergunte
// 1. Qual é o problema que estou tentando resolver?
// 2. Quais são os dados de entrada que eu tenho?
// 3. O que eu preciso fazer com esses dados para chegar a uma solução?
// 4. Quais são os passos que eu preciso seguir para resolver o problema?
// 5. Como posso testar minha solução para garantir que ela funciona corretamente?

// Exemplo de pensamento de programador:
// Problema: "Mostrar os números de 1 a 10"
// Pensamento:
// Preciso repetir
// Preciso começar do número 1
// Preciso terminar no número 10

// Implementação:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Dica Final: Lembre-se de que a prática é fundamental para aprender algoritmos. Quanto mais você praticar, mais fácil será pensar como um algoritmo e resolver problemas de forma eficiente. Não tenha medo de errar, pois os erros são parte do processo de aprendizado. Continue praticando e se desafiando com novos problemas!
// Oque é Big O?
// Big O é uma notação matemática usada para descrever a complexidade de um algoritmo em termos de tempo de execução ou espaço de memória. Ela nos ajuda a entender como o desempenho de um algoritmo muda à medida que o tamanho da entrada aumenta.

// Em JavaScript, podemos usar Big O para analisar a eficiência de nossos algoritmos e escolher a melhor abordagem para resolver um problema. Aqui estão alguns exemplos de notações Big O comuns:

// O(1) - Tempo constante: O tempo de execução do algoritmo é constante, independentemente do tamanho da entrada. Exemplo: acessar um elemento em um array por índice.

// qual código é mais rápido,
// qual consome mais processamento,
// e como o desempenho muda quando a quantidade de dados aumenta.

// Big O representa o crescimento do tempo de execução de um algoritmo.
// ou seja:
// "Se eu aummentar os dados, quanto o algoritmo vai ficar mais lento?"

// Exemplo simples
// Imagine uma lista:
const numeros = [1, 2, 3, 4, 5];

// Se você quiser encontrar o número 5:
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 5) {
        console.log("Número encontrado!");
        break;
    }
}

// O Computador pode precisar olhar:
// 1. O número 1
// 2. O número 2
// ...
// até todos os itens.

//Quanto maior a lista, mais tempo leva.

// Os principais tipos de Big O são:
// O(1) - Tempo constante: O tempo de execução do algoritmo é constante, independentemente do tamanho da entrada. Exemplo: acessar um elemento em um array por índice.

// Não importa se exitem:
// 10 elementos
// 100 elementos
// 1 Milhão de elementos

// O tempo continua proticamente igual.

//Exemplo:
const nomes = ["Ana", "Thammyres", "Matheus", "Clara"];
console.log(nomes[2]); // Saída: Matheus

//Acessar um indice do array é instantâneo, ou seja, O(1).
//Complexidade: O(1) - Tempo constante

// O(n) - Tempo linear: O tempo de execução do algoritmo cresce linearmente com o tamanho da entrada. Exemplo: percorrer um array para encontrar um elemento específico.


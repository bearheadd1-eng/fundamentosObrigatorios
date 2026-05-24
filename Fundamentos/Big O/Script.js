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

//Muito comum em algoritmos de ordenação efeicientes, como o Merge Sort e o Quick Sort, onde o tempo de execução é proporcional ao número de elementos a serem ordenados.

//Exemplo:
// Merge Sort
// Quick Sort
// É muito melhor que o Bubble Sort, que tem O(n^2).

//Tableas das complexidades:
// O(1) - Tempo constante - Velocidade Exelente
// O(log n) - Tempo logarítmico - Velocidade Muito Boa
// O(n) - Tempo linear - Velocidade Boa
// O(n log n) - Tempo linearítmico - Velocidade Razoável
// O(n^2) - Tempo quadrático - Velocidade Ruim
// O(2^n) - Tempo exponencial - Velocidade Muito Ruim

// Como calcular o Big O?

//Você observa:
// Loops
// Repetições
// Crescimento das operações

// Exemplo 1:
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
//O loop executa n vezes, onde n é o tamanho do array. Portanto, a complexidade é O(n).

// Exemplo 2:
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        console.log(numeros[i], numeros[j]);
    }
}

//Temos: n * n = n^2. Portanto, a complexidade é O(n^2).

// Exemplo 3:
console.log(array[0]);
// Apenas uma operação, independentemente do tamanho do array. Portanto, a complexidade é O(1).

//Regras Importantes do Big O:
// 1 - Ignoramos constantes:
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Isso seria: O(2n), mas ignoramos a constante 2, então é O(n).

// 2 = Pegamos o pior cenário:
function procurar(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }
    return false;
}
// O pior caso é:
// Procurar um elemento que está no final
// ou Nem existe.
// Então Big O é O(n).

// Complexidade de memória (Space Complexity):
//Também existe o consumo de memória, que é representado por Big O. Ele nos ajuda a entender quanto espaço de memória um algoritmo usa em relação ao tamanho da entrada.

// Exemplo:
const novoArray = [];

for (let i = 0; i < numeros.length; i++) {
    novoArray.push(numeros[i] * 2);
}
// O Array cresce conforme n. Portanto, a complexidade de memória é O(n).

// Métodos do Javascript e suas complexidades:
// Array push() - O(1)
// Array pop() - O(1)
// Array shift() - O(n)
// Array unshift() - O(n)
// Array indexOf() - O(n)
// Array includes() - O(n)
// Array slice() - O(n)
// Array sort() - O(n log n)

// Por que shift() e unshift() são O(n)?
// Porque ao remover o primeiro elemento (shift) ou adicionar um elemento no início (unshift), todos os outros elementos precisam ser deslocados para preencher o espaço vazio ou para abrir espaço para o novo elemento, o que leva tempo proporcional ao número de elementos no array.

[1, 2, 3, 4, 5].shift(); // O(n)
[1, 2, 3, 4, 5].unshift(0); // O(n)

// O javascript precisa reorganizar tudo:

//[1,2,3,4,5] -> shift() -> [2,3,4,5] -> unshift(0) -> [0,2,3,4,5]
//Todos os indices precisam ser atualizados, o que leva tempo proporcional ao número de elementos no array.

// Exemplo plático de otimização 
const usuraios = [1,2,3,4,5];

for (let i = 0; i < usuraios.length; i++) {
    for (let j = 0; j < usuraios.length; j++) {
        console.log(usuraios[i], usuraios[j]);
    }
}
// Complexidade: O(n^2)

// Códidigo Melhorado:
// Usando objeto/mapa:
const usuariosMap = {
    1: true,
    2: true,
    3: true
};

console.log(usuariosMap[2]); // O(1)

// Como pensar em Big O?
// 1 = Tem Loop?
// 2 - Tem loop dentro de outro loop?
// 3 - O algoritmo percorre toda a entrada?
// 4 - Ele reduz o problema pela metade a cada passo?
// 5 - Cria extruturas na memória?

//Oque são estruturas de dados?
//Estruturas de dados são formas de organizar e armazenar dados de maneira eficiente, permitindo que sejam acessados e manipulados de forma rápida e eficaz. Elas são fundamentais para a construção de algoritmos eficientes e para a resolução de problemas computacionais.

//Oque é uma Estrutura de Dados?
// Uma várivel guarda uma informação.
// Uma estrutura de dados guarda várias informações organizadas.

//Exemplo:
//Aqui temos apenas Um valor.
let nome = "Bear";

//Agora:
//Aqui temos uma estrutura de dados que guarda vários valores.
let nomes = ["Bear", "Ana", "Alice", "Breno", "Carlos"];

//Principais Estrutras de Dados em JavaScript:
//1. Arrays: São listas ordenadas de elementos, onde cada elemento tem um índice associado. Permitem armazenar múltiplos valores em uma única variável e oferecem métodos para manipulação de dados, como push, pop, shift, unshift, entre outros.
//2. Objetos: São coleções de pares chave-valor, onde cada chave é uma string e cada valor pode ser de qualquer tipo. Permitem organizar dados de forma mais complexa e são amplamente utilizados para representar entidades do mundo real, como pessoas, produtos, etc.
//3. Mapas (Maps): São estruturas de dados que armazenam pares chave-valor, onde as chaves podem ser de qualquer tipo, incluindo objetos. Oferecem métodos para adicionar, remover e acessar elementos de forma eficiente.
//4. Conjuntos (Sets): São coleções de valores únicos, onde cada valor pode aparecer apenas uma vez. Permitem realizar operações como união, interseção e diferença entre conjuntos de dados.
//5. Listas Ligadas (Linked Lists): São estruturas de dados onde cada elemento (nó) contém um valor e uma referência para o próximo nó na lista. Permitem inserções e remoções eficientes, mas não oferecem acesso direto a elementos específicos.
//6. Pilhas (Stacks): São estruturas de dados que seguem o princípio LIFO (Last In, First Out), onde o último elemento adicionado é o primeiro a ser removido. São usadas para armazenar dados temporários e para implementar algoritmos de recursão.
//7. Filas (Queues): São estruturas de dados que seguem o princípio FIFO (First In, First Out), onde o primeiro elemento adicionado é o primeiro a ser removido. São usadas para gerenciar tarefas em ordem de chegada, como em sistemas de atendimento ao cliente ou em algoritmos de busca em largura.
//8. Árvores (Tree): São estruturas de dados hierárquicas, onde cada elemento (nó) pode ter um ou mais filhos. São usadas para representar relações hierárquicas, como em sistemas de arquivos ou em algoritmos de busca.
//9. Hash Tables: São estruturas de dados que armazenam pares chave-valor, onde as chaves são transformadas em índices usando uma função de hash. Permitem acesso rápido a elementos com base em suas chaves e são amplamente utilizadas para implementar dicionários e caches.

//1. Arrays (Vetores/Listas):
//A mais usada.
//Serve para armazenar vários valores em sequência.
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

//Acessando elementos do array
console.log(frutas[0]); // Maçã
console.log(frutas[2]); // Laranja

//Adicionando um elemento ao final do array
frutas.push("Abacaxi");
console.log(frutas); // ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"]

//Removendo o último elemento do array
frutas.pop();
console.log(frutas); // ["Maçã", "Banana", "Laranja", "Uva"]

//Removendo o primeiro elemento do array
frutas.shift();
console.log(frutas); // ["Banana", "Laranja", "Uva"]

//Percorrendo arrays
//for Classico
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//for of
for (let fruta of frutas) {
    console.log(fruta);
}

//Métodos IMPORTANTES de Array:
//map(): Trnasforma elementos de um array em outro array, aplicando uma função a cada elemento.
let numeros = [1, 2, 3, 4, 5];

let dobro = numeros.map(num => num * 2);

console.log(dobro); // [2, 4, 6, 8, 10]

//filter(): Filtra elementos de um array com base em uma condição, retornando um novo array com os elementos que atendem à condição.
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

//find(): Retorna o primeiro elemento de um array que atende a uma condição especificada.
let primeiroPar = numeros.find(num => num % 2 === 0);
console.log(primeiroPar); // 2

//2. Objetos:
//Permite armazenar dados de forma mais complexa, usando pares chave-valor.
let pessoa = {
    nome: "Bear",
    idade: 25,
    profissao: "Desenvolvedor"
};
//Acessando propriedades do objeto
console.log(pessoa.nome); // Bear
console.log(pessoa.idade); // 25

//Adicionando uma nova propriedade ao objeto
pessoa.email = "bear@example.com";
console.log(pessoa); // { nome: "Bear", idade: 25, profissao: "Desenvolvedor", email: "bear@example.com" }

//Removendo uma propriedade do objeto
delete pessoa.profissao;
console.log(pessoa); // { nome: "Bear", idade: 25, email: "bear@example.com" }

//Como Funciona um Objeto?
// {
//     "chave1": "valor1",
//     "chave2": "valor2",
//     "chave3": "valor3"
//  ...}

//Notação colchetes para acessar propriedades do objeto
console.log(pessoa["nome"]); // Bear
console.log(pessoa["idade"]); // 25

//Alterando o valor de uma propriedade do objeto
pessoa["nome"] = "Urso";
console.log(pessoa.nome); // Urso

//Percorrendo as propriedades de um objeto
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

//Objetos podem ter funções como propriedades, chamadas de métodos.
let usuario = {
    nome: "Alice",

    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
};

usuario.saudacao(); // Olá, meu nome é Alice

//Loops em Objetos
//for in: Permite percorrer as propriedades de um objeto.
for (let chave in usuario) {
    console.log(chave + ": " + usuario[chave]);
}

//Mias um exemplo de objeto com métodos:
const produto = {
   nome: "Mouse",
   preco: 100,
   estoque: 5
}

//3. Mapas (Maps):
//São estruturas de dados que armazenam pares chave-valor, onde as chaves podem ser de qualquer tipo, incluindo objetos. Oferecem métodos para adicionar, remover e acessar elementos de forma eficiente.
let mapa = new Map();

//Adicionando elementos ao mapa
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");
mapa.set("chave3", "valor3");

//Acessando elementos do mapa
console.log(mapa.get("chave1")); // valor1
console.log(mapa.get("chave2")); // valor2
console.log(mapa.get("chave3")); // valor3

//Removendo um elemento do mapa
mapa.delete("chave2");
console.log(mapa.get("chave2")); // undefined

//Verificando se uma chave existe no mapa
console.log(mapa.has("chave1")); // true
console.log(mapa.has("chave2")); // false
console.log(mapa.has("chave3")); // true

//Percorrendo um mapa
for (let [chave, valor] of mapa) {
    console.log(chave + ": " + valor);
}

//4. Conjuntos (Sets):
//São coleções de valores únicos, onde cada valor pode aparecer apenas uma vez. Permitem realizar operações como união, interseção e diferença entre conjuntos de dados.
let conjunto = new Set();

//Adicionando elementos ao conjunto
conjunto.add("valor1");
conjunto.add("valor2");
conjunto.add("valor3");
conjunto.add("valor1"); // Não será adicionado, pois já existe

//Verificando se um valor existe no conjunto
console.log(conjunto.has("valor1")); // true
console.log(conjunto.has("valor4")); // false

//Removendo um elemento do conjunto
conjunto.delete("valor2");
console.log(conjunto.has("valor2")); // false

//Percorrendo um conjunto
for (let valor of conjunto) {
    console.log(valor);
}

//Operações com conjuntos
let conjuntoA = new Set([1, 2, 3, 4]);
let conjuntoB = new Set([3, 4, 5, 6]);

//União
let uniao = new Set([...conjuntoA, ...conjuntoB]);
console.log(uniao); // Set { 1, 2, 3, 4, 5, 6 }

//Interseção
let intersecao = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));
console.log(intersecao); // Set { 3, 4 }

//Diferença
let diferenca = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
console.log(diferenca); // Set { 1, 2 }

//5. Listas Ligadas (Linked Lists):
//São estruturas de dados onde cada elemento (nó) contém um valor e uma referência para o próximo nó na lista. Permitem inserções e remoções eficientes, mas não oferecem acesso direto a elementos específicos.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//6. Pilhas (Stacks):
//São estruturas de dados que seguem o princípio LIFO (Last In, First Out), onde o último elemento adicionado é o primeiro a ser removido. São usadas para armazenar dados temporários e para implementar algoritmos de recursão.
pilha.push(1);
pilha.push(2);
pilha.push(3);

pilha.pop(); // Remove o último elemento (3)
console.log(pilha); // [1, 2]

//7. Filas (Queues):
//São estruturas de dados que seguem o princípio FIFO (First In, First Out), onde o primeiro elemento adicionado é o primeiro a ser removido. São usadas para gerenciar tarefas em ordem de chegada, como em sistemas de atendimento ao cliente ou em algoritmos de busca em largura.
fila.push(1);
fila.push(2);
fila.push(3);

fila.shift(); // Remove o primeiro elemento (1)
console.log(fila); // [2, 3]

//8. Árvores (Tree):
//São estruturas de dados hierárquicas, onde cada elemento (nó) pode ter um ou mais filhos. São usadas para representar relações hierárquicas, como em sistemas de arquivos ou em algoritmos de busca.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

//9. Hash Tables:
//São estruturas de dados que armazenam pares chave-valor, onde as chaves são transformadas em índices usando uma função de hash. Permitem acesso rápido a elementos com base em suas chaves e são amplamente utilizadas para implementar dicionários e caches.
//O(1) Muito rápido, pois o acesso é direto através da chave.
//obj.nome

//O(n) Percorre todos os elementos do array para encontrar o valor.
//for(...)

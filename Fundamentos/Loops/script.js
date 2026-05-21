//Loop
//Um Loop é uma estrutura de controle que permite repetir um bloco de código várias vezes, com base em uma condição. Existem direntes tipos de Loops, como o for, while, do-while, entre outros, Eles são usados para iterar sobre arrays, objetos, ou simplesmente para executar um bloco do cógido várias vezes até que uma condição seja satisfeita.

//Exemplo sem Loop
console.log("Olá");
console.log("Olá");
console.log("Olá");
console.log("Olá");
console.log("Olá");
//Funciona mas fica repetitivo e difícil de manter, imagine se quisermos mudar a mensagem ou o número de vezes que ela é exibida, teríamos que alterar cada linha individualmente.

//Exemplo com Loop
for (let i = 1; i <= 5; i++) {
    console.log("Olá");
}
// O computador repete sozinho.

//Oque um loop faz?
//1. Inicialização: O loop começa com a inicialização de uma variável de controle (neste caso, 'i') que é usada para controlar o número de iterações do loop.
//2. Condição: O Loop verifica uma condição (neste caso, 'i <= 5') antes de cada iteração. se a condição for verdadeira, o bloco de código dentro do loop é executado, Se a condição for falsa, o Loop é encerrado e o programa consitnua com a próxima linha de código após o loop.
//3. Incremento: Após cada iteração, a variável de controle é atualizada (neste caso, 'i++' que é equivalente a 'i = 1 + 1'). Isso garante que o loop avance em direção à condição de término, e evita que o Loop se torne infinito.
//4. Executa o bloco de código: Dentro do loop, o codigo que queremos repetir é executado. Neste exemplo o console. Log("Olá") é executado 5 vezes, exibindo a mensagem "Olá" no console a cada iteração do loop.
//5. Repete até a condição ser falsa: O loop continua a repetir o processo de verificação da condição, execução do bloco de cpódigo e incremento até que a condição se torne falsa. Neste exemplo, quando 'i' se torna 6, a condição 'i <= 5' se torna falsa, e o loop é encerrado.

for (let i = 0; i < 3; i++) {
    console.log("Olá");
}
//0 0 < 3 -> true -> Olá
//1 1 < 3 -> true -> Olá
//2 2 < 3 -> true -> Olá
//3 3 < 3 -> false -> Loop termina

//Loop While
while (condição) {
    // código
}

// Exemplo de Loop While
let contador = 0;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
//1. O loop começa com a inicialização da variável 'contador' com o valor 0.
//2. O loop verifica a condição 'contador <= 5'. Se a condição for verdadeira, o bloco de código dentro do loop é executado. Neste caso, o valor atual de 'contador' é impressa no console.
//3. Após a execução do bloco de código, a variavel 'contador' é incrementado em 1 usando 'contador++'.
//4. O looop continua executando até que o 'contador' chegue ao numero 'contador <= 5'

//Cuidado com o Loop infinito do While
while (true) {
    console.log("Nunca para")
}
//Isso cria um loop infinito.

//Loop do...while
//Pareceido com while, mas executa pelo menos UMA vez.
do {
    // código
} while (condiçao);

//Exemplo
let numero = 1;
do {
    console.log(numero);
    numero++
} while (numero <= 5);

//Diferença
//While - Primeiro verifica = Depois executa.
//Do While - Primeiro executa = Depois Verifica.
//Exemplo de diferença
//Não executa nenhuma vez.
let x = 10;
while (x < 5) {
    console.log("while"); }

//Executa 1 vez.
let x = 10;
do {
    console.log("do while");
} while (x < 5);

//Loop em For..of
//Usado para percorrer elementos de arrays.
//Exemplo

const frutas = ["Maçãs", "Banana", "Uva"];
for (const fruta of fruta) {
    console.log(fruta);
}

//Saida "Maçã, Banana, Uva"
//Quando usar "for...of"
//quando quiser percorrer:
// - Arrays
// - Strings
// - Listas
// - Coleções

// For...in
//Usado para percorrer propriedades de objetos
//Exemplo
const pessoa = {
    nome: "Breno",
    idade: 25,
    cidade: "Palhoça"
};

for (const chave in pessoa) {
    console.log(chave, pessoa[cjave]);
}

//Saida
//nome Breno
//idade 25
//cidade Palhoça

//Diferença entre for...of e for...in
//for...of arrays valores
//for...in objetos chaves

//Loop em ForEach
//Muito usado em arrys.
//Exemplo
const numero = [1, 2, 3];
numero.forEach(function(numero){
    console.log(numero);
});

//Versão moderna (Arrow Funcion)
numeros.forEach(numero => { 
    console.log(numero);
});

//Break e Continue
//Break - Interrompe o Loop.
for (let i = 1; i <= 10; i++) {
    of (i === 5) {
        break;
    }
    console.log(i);
}

//Saida
//1
//2
//3
//4 (break)

//Continue - Pula uma repetição.
for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        Continue;
    }
    console.log(i);
}

//Saida
//1
//2
//4
//5

//Exemplos práticos
//Mostrar números pares
for (let i = 0; i <= 10; i++) {
    of (i % 2 === 0) {
        console.log(i);
    }
}
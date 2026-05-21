function idade(idade) {
    if (idade < 18) {
        return "Menor de Idade";
    } else {
        return "Maior de idade";
    }
}

console.log(idade(17));
console.log(idade(20));
console.log(idade(25));
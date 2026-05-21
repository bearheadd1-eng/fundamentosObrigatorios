function nota(nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota < 7) {
        console.log("Reprovado");
    }
}

console.log(nota(8));
console.log(nota(5));
function calcularIMC(peso, altura) {
    const img = peso / (altura * altura);
    if (img < 18.5) {
        return "Abaixo do peso";
    } else if (img >= 18.5 && img < 25) {
        return "Peso normal";
    } else if (img >= 25 && img < 30) {
        return "Sobrepeso";
    } else if (img >= 30 && img < 35) {
        return "Obesidade grau 1";
    } else if (img >= 35 && img < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

console.log(calcularIMC(70, 1.75));
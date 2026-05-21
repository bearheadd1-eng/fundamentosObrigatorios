let numero = 1;

const intervalo = setInterval(() => {
    console.clear();
    console.log(numero);

    numero++;

    if (numero > 10) {
        clearInterval(intervalo);
    }
}, 1000);
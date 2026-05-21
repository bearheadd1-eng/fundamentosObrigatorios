function senhaValida(senha) {
    if (senha === "123456") {
        return "Acesso permitido";
    } else {
        return "Acesso negado";
    }
}   

console.log(senhaValida("12345"));
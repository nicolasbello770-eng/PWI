// Variáveis da calculadora
let visor = document.getElementById("visor");
let expressao = "";

// Adiciona números no visor
function adicionarNumero(numero) {

    if (expressao === "0") {
        expressao = numero;
    } else {
        expressao += numero;
    }

    visor.value = expressao;
}

// Adiciona os operadores
function adicionarOperador(operador) {

    if (expressao === "") {
        return;
    }

    expressao += operador;
    visor.value = expressao;
}

// Faz o cálculo
function calcular() {

    try {
        let resultado = eval(expressao);

        visor.value = resultado;
        expressao = resultado.toString();

    } catch {
        visor.value = "Erro";
        expressao = "";
    }
}

// Limpa a calculadora
function limpar() {

    expressao = "";
    visor.value = "0";
}
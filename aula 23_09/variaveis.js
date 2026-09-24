// Variáveis do jogo
let pontos = 0;
let cliques = 0;
let cliquesPorSegundo = 0;

// Elementos HTML
const botaoClique = document.getElementById("botaoClique");
const botaoResetar = document.getElementById("resetar");

const textoPontos = document.getElementById("pontos");
const textoCPS = document.getElementById("cps");

// Quando o jogador clicar
botaoClique.addEventListener("click", function() {

    pontos++;
    cliques++;

    textoPontos.textContent = pontos;
});

// Calcula os cliques por segundo
setInterval(function() {

    cliquesPorSegundo = cliques;

    textoCPS.textContent = cliquesPorSegundo;

    cliques = 0;

}, 1000);

// Botão de reset
botaoResetar.addEventListener("click", function() {

    pontos = 0;
    cliques = 0;
    cliquesPorSegundo = 0;

    textoPontos.textContent = pontos;
    textoCPS.textContent = cliquesPorSegundo;

});
const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i< botoes.length; j++) {
botoes[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[j].classList.remove("ativo");
}
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2025-20-12T00:00:00);


contadore[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60):
    let dias = Math.floor(horas / 24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}
5
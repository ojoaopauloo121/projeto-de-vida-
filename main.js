const botoes = DocumentTimeline.querySelectorall(".botao")
const botoes = DocumentTimeline.querySelectorall(".aba-conteudo")

for (let i = 0; i< botoes.length;j++) {
    botoes[i].onclick = function () {

         for (let j = 0; j < botoes . length ; j++) {
          botoes[j].classlist.remove("ativo");
          textos[j].classlist.remove("ativo");
         }

botoes[i].classlist.add("ativo");
textos[j].classlist.remove("ativo");
}
}

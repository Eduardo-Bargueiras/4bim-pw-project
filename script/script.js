// Pega todas as "páginas" e todos os botões que têm data-destino
const paginas = document.querySelectorAll(".pagina");
const botoes = document.querySelectorAll("[data-destino]");

// Mostra só a página escolhida e esconde as outras
function mostrarPagina(id) {
    paginas.forEach(function (pagina) {
        pagina.classList.add("escondida");
    });

    document.getElementById(id).classList.remove("escondida");
    window.scrollTo(0, 0);
}

// Quando clicar em um botão, vai para a página indicada em data-destino
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        mostrarPagina(botao.dataset.destino);
    });
});

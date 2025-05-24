function mostrarSecao(id) {
    const secoes = document.querySelectorAll(".secao");
    secoes.forEach(secao=> {
        secao.computedStyleMap.display = "none";
    });
const secaoSelecionada = document.getElementById(id);
secaoSelecionada.style.display = "block";
}
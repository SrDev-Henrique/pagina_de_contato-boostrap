// todo: Seleciona os elementos para animar
const elements = document.querySelectorAll('.h4, .h1, .p, .a, .img');

// todo: Função para adicionar animação quando o elemento estiver visível
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    }
});
}, { threshold: 1 });

// todo: Observa cada elemento individualmente
elements.forEach(element => {
observer.observe(element);
});

$(document).ready(function () {

    $('.coll').click(function () {
        $('.nav-menu').slideToggle();
    })
})
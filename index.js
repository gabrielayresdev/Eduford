const botaoMenu = document.querySelector('.cabecalho__menu-lateral');
const menu = document.querySelector('.cabecalho__links');
const fechar = document.querySelector('.cabecalho__fechar');


/* cabecalho__menu-lateral--fechar */
botaoMenu.addEventListener('click', () => {
    menu.classList.add('menu-lateral--ativo');
    fechar.classList.add('cabecalho__fechar--ativo');
})

fechar.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo');
    fechar.classList.remove('cabecalho__fechar--ativo');
})
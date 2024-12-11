var tela_1 = document.getElementById('tela_1');
var tela_2 = document.getElementById('tela_2');
var btn_iniciar = document.getElementById('btn_iniciar');

btn_iniciar.addEventListener('click', () => {
    tela_1.classList.add('oculto');
    tela_2.classList.remove('oculto');
});
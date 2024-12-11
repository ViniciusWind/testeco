var link_prox_pag = 'analise';

var mask_btn_1 = document.getElementById('mask_btn_1');
var mask_btn_2 = document.getElementById('mask_btn_2');
var mask_btn_3 = document.getElementById('mask_btn_3');
var mask_btn_4 = document.getElementById('mask_btn_4');

var foto_iphone_1 = document.getElementById('foto_iphone_1');
var foto_iphone_2 = document.getElementById('foto_iphone_2');
var foto_iphone_3 = document.getElementById('foto_iphone_3');
var foto_iphone_4 = document.getElementById('foto_iphone_4');

/////////////////////////////////////

var radio_1_cll_1 = document.getElementById('radio_1_cll_1');
var radio_2_cll_1 = document.getElementById('radio_2_cll_1');

var radio_1_cll_2 = document.getElementById('radio_1_cll_2');
var radio_2_cll_2 = document.getElementById('radio_2_cll_2');

var radio_1_cll_3 = document.getElementById('radio_1_cll_3');
var radio_2_cll_3 = document.getElementById('radio_2_cll_3');

var radio_1_cll_4 = document.getElementById('radio_1_cll_4');
var radio_2_cll_4 = document.getElementById('radio_2_cll_4');

const opc_vezes_1 = "36";
const opc_vezes_2 = "72";

var vezes_iphone_1 = opc_vezes_1;
var vezes_iphone_2 = opc_vezes_1;
var vezes_iphone_3 = opc_vezes_1;
var vezes_iphone_4 = opc_vezes_1;

//////////////////////////////////////

var select_cor_1 = document.getElementsByClassName('select_cor_1');
var text_select_cor_1 = document.getElementById('text_select_cor_1');
var link_prod_1 = document.getElementById('link_prod_1');

var select_cor_2 = document.getElementsByClassName('select_cor_2');
var text_select_cor_2 = document.getElementById('text_select_cor_2');
var link_prod_2 = document.getElementById('link_prod_2');

var select_cor_3 = document.getElementsByClassName('select_cor_3');
var text_select_cor_3 = document.getElementById('text_select_cor_3');
var link_prod_3 = document.getElementById('link_prod_3');

var select_cor_4 = document.getElementsByClassName('select_cor_4');
var text_select_cor_4 = document.getElementById('text_select_cor_4');
var link_prod_4 = document.getElementById('link_prod_4');

function trocar_img(cell, cor, iphone) {
    let iphone_vez = null;
    let nome_cell = cell.toLowerCase();
    let cor_cell = cor.replace(/ /g, "-");
    cor_cell = cor_cell.toLowerCase();

    switch (iphone) {
        case 1:
            iphone_vez = foto_iphone_1;
            break;
        case 2:
            iphone_vez = foto_iphone_2;
            break;
        case 3:
            iphone_vez = foto_iphone_3;
            break;
        case 4:
            iphone_vez = foto_iphone_4;
            break;
        default:
            iphone_vez = foto_iphone_1;
            break;
    }

    let src_img = iphone_vez.getAttribute('src');
    let src_img_indice = src_img.lastIndexOf("/");
    if (src_img_indice === -1) {
        src_img = src_img;
    } else {
        src_img = src_img.slice(0, src_img_indice);
    }

    src_img = src_img + "/" + nome_cell + "-cor-" + cor_cell + ".png";

    iphone_vez.classList.add('blur');
    iphone_vez.classList.add('menor');
    setTimeout(() => {
        iphone_vez.setAttribute('src', src_img);
    }, 250);
    setTimeout(() => {
        iphone_vez.classList.remove('blur');
    }, 1000);
}

function atualizar_vezes(el_radio, el_link, n_iphone) {
    let url_btn_temp = new URL(el_link.href);
    let par_btn_temp = url_btn_temp.searchParams;

    let ctn_valor = document.getElementById('ctn_valor_' + n_iphone);
    ctn_valor.classList.remove('vezes_1');
    ctn_valor.classList.remove('vezes_2');

    if (el_radio.checked) {
        vezes_iphone_1 = opc_vezes_1;
        par_btn_temp.set('vezes', opc_vezes_1);
        ctn_valor.classList.add('vezes_1');
    } else {
        vezes_iphone_1 = opc_vezes_2;
        par_btn_temp.set('vezes', opc_vezes_2);
        ctn_valor.classList.add('vezes_2');
    }
    el_link.href = url_btn_temp.toString();
}

radio_1_cll_1.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_1, link_prod_1, 1);
});
radio_2_cll_1.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_1, link_prod_1, 1);
});

radio_1_cll_2.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_2, link_prod_2, 2);
});
radio_2_cll_2.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_2, link_prod_2, 2);
});

radio_1_cll_3.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_3, link_prod_3, 3);
});
radio_2_cll_3.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_3, link_prod_3, 3);
});

radio_1_cll_4.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_4, link_prod_4, 4);
});
radio_2_cll_4.addEventListener('change', () => {
    atualizar_vezes(radio_1_cll_4, link_prod_4, 4);
});

for (let i_cor = 0; i_cor < select_cor_1.length; i_cor++) {
    select_cor_1[i_cor].addEventListener('click', () => {
        atualizar_vezes(radio_1_cll_1, link_prod_1, 1);
        if (!select_cor_1[i_cor].classList.contains('esgotado')) {
            text_select_cor_1.innerHTML = select_cor_1[i_cor].getAttribute('nome');
            let url_get = link_prox_pag + '?prod=iPhone-15-PRO' + '&cor=' + select_cor_1[i_cor].getAttribute('nome') + '&cell=1&opc=' + select_cor_1[i_cor].getAttribute('opcCor') + '&vezes=' + vezes_iphone_1;
            link_prod_1.setAttribute('href', url_get);
            trocar_img('iPhone-15-PRO', select_cor_1[i_cor].getAttribute('opcCor'), 1);
            mask_btn_1.classList.add('oculto');
        }

        for (let i_des = 0; i_des < select_cor_1.length; i_des++) {
            select_cor_1[i_des].classList.remove('active');
        }
        select_cor_1[i_cor].classList.add('active');
    });
}

for (let i_cor = 0; i_cor < select_cor_2.length; i_cor++) {
    select_cor_2[i_cor].addEventListener('click', () => {
        atualizar_vezes(radio_1_cll_2, link_prod_2, 2);
        if (!select_cor_2[i_cor].classList.contains('esgotado')) {
            text_select_cor_2.innerHTML = select_cor_2[i_cor].getAttribute('nome');
            let url_get = link_prox_pag + '?prod=iPhone-15-PRO-MAX' + '&cor=' + select_cor_2[i_cor].getAttribute('nome') + '&cell=2&opc=' + select_cor_2[i_cor].getAttribute('opcCor');
            link_prod_2.setAttribute('href', url_get);
            trocar_img('iPhone-15-PRO-MAX', select_cor_2[i_cor].getAttribute('opcCor'), 2);
            mask_btn_2.classList.add('oculto');
        }

        for (let i_des = 0; i_des < select_cor_2.length; i_des++) {
            select_cor_2[i_des].classList.remove('active');
        }
        select_cor_2[i_cor].classList.add('active');
    });
}

for (let i_cor = 0; i_cor < select_cor_3.length; i_cor++) {
    select_cor_3[i_cor].addEventListener('click', () => {
        atualizar_vezes(radio_1_cll_3, link_prod_3, 3);
        if (!select_cor_3[i_cor].classList.contains('esgotado')) {
            text_select_cor_3.innerHTML = select_cor_3[i_cor].getAttribute('nome');
            let url_get = link_prox_pag + '?prod=iPhone-16-PRO' + '&cor=' + select_cor_3[i_cor].getAttribute('nome') + '&cell=3&opc=' + select_cor_3[i_cor].getAttribute('opcCor');
            link_prod_3.setAttribute('href', url_get);
            trocar_img('iPhone-16-PRO', select_cor_3[i_cor].getAttribute('opcCor'), 3);
            mask_btn_3.classList.add('oculto');
        }

        for (let i_des = 0; i_des < select_cor_3.length; i_des++) {
            select_cor_3[i_des].classList.remove('active');
        }
        select_cor_3[i_cor].classList.add('active');
    });
}

for (let i_cor = 0; i_cor < select_cor_4.length; i_cor++) {
    select_cor_4[i_cor].addEventListener('click', () => {
        atualizar_vezes(radio_1_cll_4, link_prod_4, 4);
        if (!select_cor_4[i_cor].classList.contains('esgotado')) {
            text_select_cor_4.innerHTML = select_cor_4[i_cor].getAttribute('nome');
            let url_get = link_prox_pag + '?prod=iPhone-16-PRO-MAX' + '&cor=' + select_cor_4[i_cor].getAttribute('nome') + '&cell=4&opc=' + select_cor_4[i_cor].getAttribute('opcCor');
            link_prod_4.setAttribute('href', url_get);
            trocar_img('iPhone-16-PRO-MAX', select_cor_4[i_cor].getAttribute('opcCor'), 4);
            mask_btn_4.classList.add('oculto');
        }

        for (let i_des = 0; i_des < select_cor_4.length; i_des++) {
            select_cor_4[i_des].classList.remove('active');
        }
        select_cor_4[i_cor].classList.add('active');
    });
}

var aviso = document.getElementById('aviso');
function mostrar_aviso() {
    aviso.classList.add('active');
    setTimeout(() => {
        aviso.classList.add('blur');
    }, 5000);
    setTimeout(() => {
        aviso.classList.remove('active');
        aviso.classList.remove('blur');
    }, 7000);
}

var mask_btn = document.getElementsByClassName('mask_btn');
for (let i_mask = 0; i_mask < mask_btn.length; i_mask++) {
    mask_btn[i_mask].addEventListener('click', () => {
        mostrar_aviso();
    });
}

link_prod_1.addEventListener('click', () => {
    mostrar_aviso();
});
link_prod_2.addEventListener('click', () => {
    mostrar_aviso();
});
link_prod_3.addEventListener('click', () => {
    mostrar_aviso();
});
link_prod_4.addEventListener('click', () => {
    mostrar_aviso();
});

var box_duvida = document.getElementsByClassName('box_duvida');
var box_pergunta = document.getElementsByClassName('box_pergunta');

for (let i_perg = 0; i_perg < box_duvida.length; i_perg++) {
    box_pergunta[i_perg].addEventListener('click', () => {
        box_duvida[i_perg].classList.toggle('active');
    });
}
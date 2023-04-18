function tocaSom(seletorAudio) {   // Criação da função toca som se referindo ao elemento ID de Audio
    const elemento = document.querySelector(seletorAudio); // Uso do elemento de Audio criado em cima para receber a função de play

    if (elemento != null && elemento.localName === 'audio') {     // O localname se refere ao button
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Variável para localizar o seletor tecla na lista de teclas


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // contador ++   --> Soma para aumentar o número de cada tecla que for clicada de acordo com sua ordem

    const tecla = listaDeTeclas[contador]; // Criado para tornar o código mais limpo
    const instrumento = tecla.classList[1];  // Const criada para gerar a lista de teclas em ordem

    // template string 
    const idAudio = `#som_${instrumento}`; // Uso de crase para concatenar strings, nesse caso a # com a ${}
    // Isso é usado para diminuir o código e o tornar mais legível!
    // Criação da const idAudio com a função ID do html concatenado com a const de instrumento 

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {     // Função evento.code para permitir somente a tecla space como true || 3 === pois é para comparar duas funcionalidades e nao uma string (se usasse somente 2 ==)
            tecla.classList.add('ativa');    // Quando a tecla clica, ativa o fundo vermelho
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');    // Quando a tecla solta, desativa o fundo vermelho
    }

}

import { conect } from './back.js';

const formulario = document.querySelector('#formulario');

const objBack = new conect(formulario, 'http://localhost/API/script.php');

$(function() {
    const url_ = getQueryParam('a');

    if (url_) { //isValidUrl(url_)   	
	    obterLink(url_);
    } else {
        console.error('URL inválida ou não fornecida.');
        // Você pode adicionar uma mensagem para o usuário aqui, se desejar
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;   
    }
}

function redirect(url) {    
	for (let index = 1; index <= 5; index++) {
        let contador = 1000 * index;         
        setTimeout(() => {
            $('.time').text(segundosSpan);

            if(index == 5){
                window.location.href = url;            
            }
        }, contador);        
        let segundosSpan = 5 - index;
    }
    
}

function obterLink(Url_){
    var resultado_ = '';
    objBack.getLink(Url_)
    .then(resultado => {      
      if(resultado == 'Link não encontrado'){
            $.notify(resultado);
      }else{
            redirect(resultado);          
      }
    })
    .catch(err => {
      console.error('Erro ao enviar dados:', err);
    });

    
}




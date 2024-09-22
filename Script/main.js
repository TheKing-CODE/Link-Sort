import { conect } from './back.js';

$(function(){    
    const buttonLimpar = $('.limpar-form');
    const buttonEnviar = $('.button-enviar');
    var formulario = document.querySelector('#formulario');
    
    //Limpar Formulário
    buttonLimpar.click(function(){
        event.preventDefault();
        formulario.reset();
    });

    //Enviar Dados
    buttonEnviar.click(function(){
        event.preventDefault();
        if(validarForm()){
            let dadosForm = getDadosForm();
            enviarDados(dadosForm);
            //formulario.reset();
            
        }else{
            $.notify("Preencher todos os dados", 'info');
        }

    });    

    $('.link-nova-url').click(function(){
        event.preventDefault();
        copiarTexto($('.link-nova-url').text());        
    })
});

const objBack = new conect(formulario, 'http://localhost/API/script.php');


function validarForm(){
    const urlOriginal = $('.url-original').val();
    const urlNova = $('.url-personalizada').val();
    
    if( (urlOriginal != '') && (urlNova != '') ){
        return true;
    }

    return false;
}

function mostrarModalSucess(){
    $('.link-modal').click();
};

function getDadosForm(){
    const dados = {
      urlOriginal: $('.url-original').val(),
      urlNovo: $('.url-personalizada').val()
    };    
    return dados;
};

function copiarTexto(texto_){
            navigator.clipboard.writeText(texto_).then(() => {
                $.notify('Copiado para área de transferência', 'success');
            }).catch(err => {
                //console.error('Erro ao copiar o texto: ', err);
            });
}

function enviarDados(dados_){    
  var result;
  objBack.enviarDados(dados_)
  .then(resultado => {
    //console.log('Resultado:', resultado); // 'error', 'success', 'unknown', ou 'failed'
    if(resultado == 'Já existe uma Url com esse link personalizado'){
        $.notify(resultado);
    }else{
        mostrarModalSucess();
        $('.link-nova-url').text('http://localhost/a.html?a=' + $('.url-personalizada').val());        
    }
  })
  .catch(err => {
    console.error('Erro ao enviar dados:', err);
  });  

  return result;  
}

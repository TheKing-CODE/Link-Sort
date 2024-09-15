$(function(){
    const buttonLimpar = $('.limpar-form');
    const formulario = document.querySelector('#formulario');

    //Limpar Formulário
    buttonLimpar.click(function(){
        event.preventDefault();
        formulario.reset();
    });
})
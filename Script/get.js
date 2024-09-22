$(function() {
    const url_ = getQueryParam('a');

    if (url_ && isValidUrl(url_)) {
    	var segundos = 0;
        

	    //redirect(url_);
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
	setTimeout(() => {
	    	alert(segundos);
	    	segundos++;
	    }, 5000);


}



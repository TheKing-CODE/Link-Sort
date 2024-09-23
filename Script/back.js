class conect {
  #formulario;
  #urlAPI;

  constructor(formulario_, urlAPI_) {
    this.#formulario = formulario_; // Supondo que você esteja usando jQuery
    this.#urlAPI = urlAPI_;
  }

  	enviarDados(Dados) {	
	  return fetch(this.#urlAPI, { // URL para enviar os dados
	    method: 'POST', // Método HTTP
	    headers: {
	      'Content-Type': 'application/json' // Indica que o corpo da requisição é JSON
	    },
	    body: JSON.stringify({ // Corpo da requisição convertido para uma string JSON
	      urlOriginal: Dados.urlOriginal,
	      urlNova: Dados.urlNovo,
	      tarefa: 'criar'
	    }) 
	  })
	    .then((res) => res.text()) // Converte a resposta para texto
	    .then((data) => {
	      if (data === 'error') {
	        return 'error'; // Retorna 'error' se a resposta for 'error'
	      } else if (data === 'success') {
	        return 'success'; // Retorna 'success' se a resposta for 'success'
	      } else {
	        return data; // Retorna 'unknown' para respostas inesperadas
	      };
	    })
	    .catch((err) => {
	      console.error(err); // Loga o erro no console
	      return 'failed'; // Retorna 'failed' se houver um erro na requisição
	    });
	}

	getLink(Url_) {	
	  return fetch(this.#urlAPI, { // URL para enviar os dados
	    method: 'POST', // Método HTTP
	    headers: {
	      'Content-Type': 'application/json' // Indica que o corpo da requisição é JSON
	    },
	    body: JSON.stringify({ // Corpo da requisição convertido para uma string JSON
	      urlNova: Url_,	      
	      tarefa: 'consultar'
	    }) 
	  })
	    .then((res) => res.text()) // Converte a resposta para texto
	    .then((data) => {
	      return data;
	    })
	    .catch((err) => {
	      console.error(err); // Loga o erro no console
	      return 'failed'; // Retorna 'failed' se houver um erro na requisição
	    });
	}  	  
}

export { conect };
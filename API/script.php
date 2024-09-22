<?php 

	include('banco_dados.php');

	// sua_api.php
	header('Content-Type: application/json');

	$bancoDB = new BancoDados('sortlink','root','');

	$data = json_decode(file_get_contents("php://input"), true);

	if ($data) {
		$tarefa = $data['tarefa'];
		$urlNova = $data['urlNova'];
	    $urlOriginal = $data['urlOriginal'];
       
        if($tarefa == 'criar'){
        	$result = criarUrl($urlNova, $urlOriginal);
        	echo $result;
        }

	} else {
	    $response = [
	        'status' => 'error',
	        'message' => 'Dados não recebidos.',
	    ];
	}	


	
	function criarUrl($urlNova, $urlOriginal){
		global $bancoDB;
		if($bancoDB->verificarUrl($urlNova) == 'true' ){
			echo $result =  $bancoDB->criarUrl($urlNova, $urlOriginal); 			
		}else{
			echo 'Já existe uma Url com esse link personalizado';
		}
	}
	

	function consultarUrl($urlNova){
		return $bancoDB->consultarUrl($urlNova);
	}

?>
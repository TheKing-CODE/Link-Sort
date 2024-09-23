<?php 
class BancoDados {
    private $pdo; 
    
    public function __construct($nomeDB, $usuario, $senha) {
        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=$nomeDB;charset=utf8mb4", $usuario, $senha, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
        } catch(PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        }
    }

    public function verificarUrl($url){
    	$sql = "SELECT * FROM links WHERE Url_nova	= :url";
    	$stmt = $this->pdo->prepare($sql);
		$stmt->execute(['url' => $url]);    	

		$row = $stmt->fetch();

		$urlTeste = $row['Url_nova'];

		try {
			if ($urlTeste == $url) {
				return 'false';
			} else {
			    return 'true';
			}
		} catch (PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        }		
    }

	public function criarUrl($urlNova, $urlOriginal){    	
		try {
	    	$sql = "INSERT INTO links (Url_original, Url_nova) VALUES (:urlOriginal, :urlNova)";
	    	$stmt = $this->pdo->prepare($sql);
			$stmt->execute(['urlOriginal' => $urlOriginal, 'urlNova' => $urlNova]);    	
			echo 'true';
		} catch (PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        }		
    }

	public function consultarUrl($urlNova) {
	    $sql = "SELECT Url_original FROM links WHERE Url_nova = :url";
	    $stmt = $this->pdo->prepare($sql);
	    $stmt->execute(['url' => $urlNova]);

	    $row = $stmt->fetch();

	    if ($row && isset($row['Url_original'])) {
	        echo $row['Url_original'];
	    } else {
	        echo 'Link não encontrado';
	    }
	}


}
?>

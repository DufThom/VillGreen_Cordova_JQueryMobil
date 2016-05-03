
<?php 
		header('Content-Type: application/json');
	
		$mot = $_GET["query"];
		$db = new PDO("mysql:host=localhost;dbname=villgreendb;charset=utf8", "root", "");
		$requete = $db->query("select * from produits where prod_nom like '%$mot%' union select * from produits where prod_libcourt like '%$mot%'");
		
		$tableau = $requete->fetchAll(PDO::FETCH_OBJ);
		//var_dump($tableau);
		echo json_encode($tableau); 
?>


<?php 
header('Content-Type: application/json');
	$db = new PDO("mysql:host=localhost;dbname=thomasd;charset=utf8", "thomasd", "bigtom19");
	$requete = $db->query("select * from produits");
	
	$tableau = $requete->fetchAll(PDO::FETCH_OBJ);
	//var_dump($tableau);
	echo json_encode($tableau);
	
?>



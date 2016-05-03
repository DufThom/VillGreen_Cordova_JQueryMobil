
 <?php 
	 header('Content-Type: application/json');
	 $rubid = $_GET["query"];
	 $db = new PDO("mysql:host=localhost;dbname=thomasd;charset=utf8", "thomasd", "");
	 $requete = $db->query("select * FROM produits JOIN sousrubriq ON produits.s_rubid = sousrubriq.s_rubid JOIN rubrique ON sousrubriq.rubid = rubrique.rubid WHERE rubrique.rubid = '$rubid'");
	
	 $tableau = $requete->fetchAll(PDO::FETCH_OBJ);
	 echo json_encode($tableau);
?> 
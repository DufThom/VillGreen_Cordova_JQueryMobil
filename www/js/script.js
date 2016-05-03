
$(document).ready(function(){

// Affichage de TOUS les PRODUITS +++++++++++++++++++++++++++++++++++++++++
 	$(document).on('vclick','#button2', function(){
		var apiURL = 'http://dl.bienvu.net/thomasd/VGAppMobile/www/vgprod.php';
 		

 		$('#listeProds').empty();
 		$.getJSON(apiURL,function(result){
 			console.log(result);
 			$.each(result, function(i, field){
 				codeHTML = '<div class="ui-block-a txtCentre">';
 				codeHTML += '<h3>&laquo; ' +field.prod_nom+ ' &raquo; &copy;</h3>';

 				codeHTML += '<p>' +field.prod_libcourt+ '</p>' ;
 				codeHTML += '<p>Prix : ' +field.prod_prix+ ' &euro;</p>';
 				codeHTML += '</div>';
 				codeHTML += '<div class="ui-block-b">';
 				codeHTML += '<img src="img' +field.prod_image+'" />';
 				codeHTML += '</div>';
 				$('#listeProds').append(codeHTML);
 			});
 		});
	});

// Affichage par RUBRIQUE ++++++++++++++++++++++++++++++++++++++++++++++
	$(document).on('vclick','#btn_guitare', function(){
		var api3URL = 'http://dl.bienvu.net/thomasd/VGAppMobile/www/vgrubriq.php?query=1';

		$('#listeProds').empty();
 		$.getJSON(api3URL,function(result){
 			console.log(result);
 			$.each(result, function(i, field){
 				codeHTML = '<div class="ui-block-a txtCentre">';
 				codeHTML += '<h3>&laquo; ' +field.prod_nom+ ' &raquo; &copy;</h3>';

 				codeHTML += '<p>' +field.prod_libcourt+ '</p>' ;
 				codeHTML += '<p>Prix : ' +field.prod_prix+ ' &euro;</p>';
 				codeHTML += '</div>';
 				codeHTML += '<div class="ui-block-b">';
 				codeHTML += '<img src="img' +field.prod_image+'" />';
 				codeHTML += '</div>';
 				$('#listeProds').append(codeHTML);
 			});
 		});
	});

	$(document).on('vclick','#btn_clavier', function(){
		var api3URL = 'http://dl.bienvu.net/thomasd/VGAppMobile/www/vgrubriq.php?query=2';

		$('#listeProds').empty();
 		$.getJSON(api3URL,function(result){
 			console.log(result);
 			$.each(result, function(i, field){
 				codeHTML = '<div class="ui-block-a txtCentre">';
 				codeHTML += '<h3>&laquo; ' +field.prod_nom+ ' &raquo; &copy;</h3>';

 				codeHTML += '<p>' +field.prod_libcourt+ '</p>' ;
 				codeHTML += '<p>Prix : ' +field.prod_prix+ ' &euro;</p>';
 				codeHTML += '</div>';
 				codeHTML += '<div class="ui-block-b">';
 				codeHTML += '<img src="img' +field.prod_image+'" />';
 				codeHTML += '</div>';
 				$('#listeProds').append(codeHTML);
 			});
 		});
	});


// Affichage par RECHERCHE +++++++++++++++++++++++++++++++++++++++++++++
	$(document).on('vclick','#button1', function(){
		var mot = encodeURI($("#textBox1").val());
		var donnees = "query=" + mot;
		var api2URL = 'http://dl.bienvu.net/thomasd/VGAppMobile/www/vgsearch.php';

		$.ajax({
			url: api2URL,
			data: donnees,
			success:function (result){
				RechResult(result);
				},
			error:function (request,error){
				alert('Erreur de saisie');
				}
		});
	});

	
});

var TousProds = null;
	function RechResult(data){
		TousProds = data;
		$('#listeProds').empty();
		for (var i=0; i<data.length; i++){

			var ligne = data[i];

			codeHTML = '<div class="ui-block-a txtCentre">';
 			codeHTML += '<h3>&laquo; ' +ligne.prod_nom+ ' &raquo; &copy;</h3>';
			codeHTML += '<p>' +ligne.prod_libcourt+ '</p>' ;
			codeHTML += '<p>Prix : ' +ligne.prod_prix+ ' &euro;</p>';
			codeHTML += '</div>';
			codeHTML += '<div class="ui-block-b">';
			codeHTML += '<img src="img' +ligne.prod_image+'" />';
			codeHTML += '</div>';
			$('#listeProds').append(codeHTML);
		};
		$('#listeProds').listview('refresh');
	}
	

// CATEGORIES : 
// 	if btn_guitare => rubid = 1,
// else if btn_clavier => rubid = 2 ... 
